import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Please check your .env file for VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
