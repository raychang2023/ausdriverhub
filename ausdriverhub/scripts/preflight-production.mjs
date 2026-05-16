#!/usr/bin/env node

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, ...value] = arg.split("=")
    return [key.replace(/^--/, ""), value.join("=") || "true"]
  }),
)

const mode = args.get("mode")
const pbDir = args.get("pb-dir") || ""
const viteUsePocketBase = process.env.VITE_USE_POCKETBASE
const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

const errors = []
const warnings = []

if (!mode || !["supabase", "pocketbase"].includes(mode)) {
  errors.push("Pass --mode=supabase or --mode=pocketbase.")
}

if (mode === "supabase") {
  if (viteUsePocketBase) {
    errors.push("Supabase production mode must not set VITE_USE_POCKETBASE.")
  }
  if (!supabaseUrl || !supabaseAnonKey) {
    errors.push("Supabase production mode requires VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.")
  }
  if (pbDir) {
    warnings.push("Ignoring --pb-dir because --mode=supabase was selected.")
  }
}

if (mode === "pocketbase") {
  if (viteUsePocketBase !== "true") {
    errors.push("PocketBase production mode requires VITE_USE_POCKETBASE=true.")
  }
  if (!pbDir) {
    errors.push("PocketBase production mode requires --pb-dir=/var/www/pb-prod/pb_data.")
  }
  if (pbDir.includes("/pb-test/") || pbDir.endsWith("/pb-test/pb_data")) {
    errors.push("Production must not use the test PocketBase data directory: /var/www/pb-test/pb_data.")
  }
  if (!pbDir.includes("/pb-prod/")) {
    warnings.push("Recommended production PocketBase data directory is /var/www/pb-prod/pb_data.")
  }
  if (supabaseUrl || supabaseAnonKey) {
    warnings.push("Supabase env values are ignored by runtime PocketBase branches.")
  }
}

if (warnings.length > 0) {
  console.warn("Production preflight warnings:")
  for (const warning of warnings) console.warn(`- ${warning}`)
}

if (errors.length > 0) {
  console.error("Production preflight failed:")
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log("Production preflight passed.")
