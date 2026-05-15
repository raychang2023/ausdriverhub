/**
 * AusDriverHub - Database Client
 *
 * PRODUCTION (ausdriverhub.com):     Supabase
 * TEST/DEV (test.ausdriverhub.com):  PocketBase (v0.26+)
 *
 * Components only import from this file — never directly from supabase-js.
 */

// =============================================================================
// Environment detection (runtime)
// =============================================================================
// NOTE: Don't use IIFE or const booleans for environment flags - Vite
// will tree-shake them away at build time. Use window.location directly
// in components instead.

// =============================================================================
// Supabase client (always loaded for type checking, used only in production)
// =============================================================================
import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Please check your .env file."
  )
}

const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// =============================================================================
// PocketBase init (test environment only)
// =============================================================================
type PB = import("pocketbase").default
let pbClient: PB | null = null
;(async () => {
  if (isPB()) {
    try {
      const mod = await import("pocketbase")
      pbClient = new mod.default(window.location.origin)
      console.log("PocketBase: connected (test environment)")
    } catch (e) {
      console.warn("PocketBase: init failed, falling back to Supabase", e)
    }
  }
})()

// =============================================================================
// Exported Supabase client (used in production, some admin pages)
// =============================================================================
export const supabase = supabaseClient

// =============================================================================
// Runtime helpers to talk to PocketBase (used when in PocketBase env)
// =============================================================================

/** Wait for pbClient to be ready (lazy init on demand) */
async function getPb(): Promise<PB> {
  if (pbClient) return pbClient!
  const mod = await import("pocketbase")
  pbClient = new mod.default(window.location.origin)
  console.log("PocketBase: lazy init complete")
  return pbClient!
}

/** Helper: generic fetch wrapper for PocketBase when we don't have the SDK ready */
async function pbFetch<T = unknown>(
  method: string,
  path: string,
  body?: unknown,
): Promise<T> {
  const opts: RequestInit = {
    method,
    headers: { "Content-Type": "application/json" },
  }
  if (body) opts.body = JSON.stringify(body)
  const res = await fetch(`${window.location.origin}/api${path}`, opts)
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(`PocketBase API error ${res.status}: ${txt}`)
  }
  return res.json()
}

// =============================================================================
// REST-ful helpers for known collections
// =============================================================================

export async function pbCreateRecord(
  collection: string,
  data: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  return pbFetch("POST", `/collections/${collection}/records`, data)
}

export async function pbGetRecord(
  collection: string,
  id: string,
): Promise<Record<string, unknown> | null> {
  try {
    return await pbFetch("GET", `/collections/${collection}/records/${id}`)
  } catch {
    return null
  }
}

export async function pbListRecords(
  collection: string,
  filter?: string,
): Promise<Record<string, unknown>[]> {
  const params = new URLSearchParams()
  if (filter) params.set("filter", filter)
  params.set("perPage", "200")
  const res = (await pbFetch(
    "GET",
    `/collections/${collection}/records?${params.toString()}`,
  )) as { items: Record<string, unknown>[] }
  return res?.items || []
}

export async function pbUpdateRecord(
  collection: string,
  id: string,
  data: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  return pbFetch("PATCH", `/collections/${collection}/records/${id}`, data)
}

/** Upload file to PocketBase via FormData (uses raw fetch, no SDK dependency) */
export async function pbUploadFile(
  collection: string,
  recordId: string,
  fieldName: string,
  file: File,
): Promise<string> {
  const formData = new FormData()
  formData.append(fieldName, file)

  const res = await fetch(
    `${window.location.origin}/api/collections/${collection}/records/${recordId}`,
    {
      method: "PATCH",
      body: formData,
    },
  )
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(`PB upload failed (${res.status}): ${txt}`)
  }
  const record = await res.json() as Record<string, unknown>

  // Build file URL: PocketBase serves uploaded files at /api/files/{collection}/{recordId}/{filename}
  const filename = record[fieldName] as string
  return `${window.location.origin}/api/files/${collection}/${recordId}/${filename}`
}

/** Auth: sign in to PocketBase users collection */
export async function pbAuth(
  email: string,
  password: string,
): Promise<{ token: string; user: { id: string; email: string; name: string } }> {
  const pb = await getPb()
  const authData = await pb.collection("users").authWithPassword(email, password)
  return {
    token: authData.token,
    user: {
      id: authData.record.id,
      email: authData.record.email,
      name: ((authData.record as Record<string, unknown>).name as string) || "",
    },
  }
}

/** Auth: sign out */
export async function pbSignOut(): Promise<void> {
  const pb = await getPb()
  pb.authStore.clear()
}

/** Check PocketBase auth token */
export function getPBAuthToken(): string | null {
  // pbClient may not be ready yet, but authStore is available synchronously
  // through the fetch token approach
  return localStorage.getItem("pocketbase_auth")
    ? JSON.parse(localStorage.getItem("pocketbase_auth") || "{}")?.token || null
    : null
}

// =============================================================================
// Shared types & constants
// =============================================================================

export const CITIES = ["Sydney", "Brisbane", "Melbourne"] as const
export type City = (typeof CITIES)[number]

export type DriverRegistration = {
  id: string
  fullname: string
  phone: string
  address: string
  city: City
  availabledays: string[]
  pdfurl: string | null
  status: "pending" | "reviewed" | "approved" | "rejected"
  created_at: string
  tenant_id: string | null
  driverdocuments?: DriverDocument[]
}

export type DriverDocument = {
  id: string
  registrationid: string
  documenttype: "license" | "passport" | "vehicle"
  fileurl: string
  filename: string
  createdat: string
}

export const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

export const DOCUMENT_TYPE_LABELS: Record<string, string> = {
  license: "Driver License",
  passport: "Passport",
  vehicle: "Vehicle Photo",
}
