import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CircleCheck as CheckCircle2, Loader as Loader2, User, Calendar, FileText, Car, CircleAlert as AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card"
import { FileUpload, type UploadedFile } from "@/components/file-upload"
import { AddressAutocomplete } from "@/components/address-autocomplete"
import { PublicHeader } from "@/components/layout/public-header"
import { supabase, DAYS_OF_WEEK, CITIES, type City } from "@/lib/supabase"
import { pbCreateRecord, pbUpdateRecord, pbUploadFile } from "@/lib/supabase"
import { generateDriverPDF } from "@/lib/pdf-generator"
import type { DriverDocument, DriverRegistration } from "@/lib/supabase"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your full residential address"),
  city: z.enum(CITIES),
  available_days: z.array(z.string()).min(1, "Please select at least one available day"),
})

type FormValues = z.infer<typeof formSchema>

type FileState = {
  license: UploadedFile[]
  passport: UploadedFile[]
  vehicle: UploadedFile[]
}

type FileErrors = {
  license?: string
  passport?: string
  vehicle?: string
}

function StepIndicator({ label, icon: Icon }: { label: string; icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1683ff]/10">
        <Icon className="h-4 w-4 text-[#1683ff]" />
      </div>
      <span className="text-base font-extrabold text-[#071a2e]">{label}</span>
    </div>
  )
}

export default function RegistrationForm() {
  const navigate = useNavigate()

  useEffect(() => {
    const completed = localStorage.getItem("onboardingCompleted")
    if (completed !== "true") {
      navigate("/guide", { replace: true })
    }
  }, [navigate])

  const [files, setFiles] = useState<FileState>({ license: [], passport: [], vehicle: [] })
  const [fileErrors, setFileErrors] = useState<FileErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { full_name: "", phone: "", address: "", city: undefined, available_days: [] },
  })

  function validateFiles(): boolean {
    const errors: FileErrors = {}
    if (files.license.length === 0) errors.license = "Driver license photo is required"
    if (files.passport.length === 0) errors.passport = "Passport photo is required"
    if (files.vehicle.length === 0) errors.vehicle = "At least one vehicle photo is required"
    setFileErrors(errors)
    return Object.keys(errors).length === 0
  }

  async function uploadFile(file: File, registrationId: string, type: string, index = 0): Promise<string> {
    // PocketBase mode (set VITE_USE_POCKETBASE=true when building for test)
    if (import.meta.env.VITE_USE_POCKETBASE) {
      // PocketBase: create doc record, upload file to it
      const doc = await pbCreateRecord("driverdocuments", {
        registrationid: registrationId,
        documenttype: type,
        filename: file.name,
        fileurl: "",
      })
      const docId = String((doc as any).id)
      return pbUploadFile("driverdocuments", docId, "fileupload", file)
    }
    // Supabase: upload to storage bucket
    const ext = file.name.split(".").pop() || "jpg"
    const path = `${registrationId}/${type}-${index}-${Date.now()}.${ext}`
    const { error } = await supabase.storage.from("driver-documents").upload(path, file, { upsert: true })
    if (error) throw new Error(`Upload failed: ${error.message}`)
    const { data: { publicUrl } } = supabase.storage.from("driver-documents").getPublicUrl(path)
    return publicUrl
  }

  async function uploadPocketBasePdf(pdfBlob: Blob, registrationId: string): Promise<string> {
    const pdfFile = new File([pdfBlob], `registration-${registrationId}.pdf`, { type: "application/pdf" })
    const doc = await pbCreateRecord("driverdocuments", {
      registrationid: registrationId,
      documenttype: "pdf",
      filename: pdfFile.name,
      fileurl: "",
    })
    const docId = String((doc as any).id)
    const pdfUrl = await pbUploadFile("driverdocuments", docId, "fileupload", pdfFile)
    await pbUpdateRecord("driverdocuments", docId, { fileurl: pdfUrl })
    return pdfUrl
  }

  async function onSubmit(values: FormValues) {
    if (!validateFiles()) return
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      let regId: string
      let registration: DriverRegistration

      if (import.meta.env.VITE_USE_POCKETBASE) {
        // ======== PocketBase path ========
        const result = await pbCreateRecord("driverregistrations", {
          fullname: values.full_name,
          phone: values.phone,
          address: values.address,
          city: values.city,
          availabledays: values.available_days.join(","),
          status: "pending",
        })
        regId = String((result as any).id)
        registration = {
          id: regId,
          fullname: values.full_name,
          phone: values.phone,
          address: values.address,
          city: values.city,
          availabledays: values.available_days,
          pdfurl: null,
          status: "pending",
          created_at: (result as any).created || "",
          tenant_id: null,
        }
      } else {
        // ======== Supabase path ========
        const { data: reg, error: regError } = await supabase
          .from("driverregistrations")
          .insert({
            fullname: values.full_name,
            phone: values.phone,
            address: values.address,
            city: values.city,
            availabledays: values.available_days,
          })
          .select()
          .single()

        if (regError || !reg) throw new Error(regError?.message || "Failed to save registration")
        registration = reg as DriverRegistration
        regId = registration.id
      }

      const docs: { registrationid: string; documenttype: string; fileurl: string; filename: string }[] = []

      const licenseUrl = await uploadFile(files.license[0].file, regId, "license")
      docs.push({ registrationid: regId, documenttype: "license", fileurl: licenseUrl, filename: files.license[0].file.name })

      const passportUrl = await uploadFile(files.passport[0].file, regId, "passport")
      docs.push({ registrationid: regId, documenttype: "passport", fileurl: passportUrl, filename: files.passport[0].file.name })

      for (let i = 0; i < files.vehicle.length; i++) {
        const vehicleUrl = await uploadFile(files.vehicle[i].file, regId, "vehicle", i)
        docs.push({ registrationid: regId, documenttype: "vehicle", fileurl: vehicleUrl, filename: files.vehicle[i].file.name })
      }

      let savedDocs: DriverDocument[]

      if (import.meta.env.VITE_USE_POCKETBASE) {
        // PocketBase: doc records already created in uploadFile, build savedDocs
        savedDocs = docs.map((d, idx) => ({
          id: "doc-" + idx,
          registrationid: regId,
          documenttype: d.documenttype as DriverDocument["documenttype"],
          fileurl: d.fileurl,
          filename: d.filename,
          createdat: "",
        }))
      } else {
        const { data: sd, error: docsError } = await supabase
          .from("driverdocuments")
          .insert(docs)
          .select()
        if (docsError) throw new Error(docsError.message || "Failed to save documents")
        savedDocs = sd as DriverDocument[]
      }

      const fullRegistration: DriverRegistration = { ...registration, driverdocuments: savedDocs }
      const pdfBlob = await generateDriverPDF(fullRegistration, savedDocs)

      if (import.meta.env.VITE_USE_POCKETBASE) {
        const pdfUrl = await uploadPocketBasePdf(pdfBlob, regId)
        await pbUpdateRecord("driverregistrations", regId, { pdfurl: pdfUrl })
      } else {
        const pdfPath = `${regId}/registration-${regId}.pdf`
        await supabase.storage.from("driver-documents").upload(pdfPath, pdfBlob, { contentType: "application/pdf", upsert: true })
        const { data: { publicUrl: pdfUrl } } = supabase.storage.from("driver-documents").getPublicUrl(pdfPath)

        const { error: updateError } = await supabase
          .from("driverregistrations")
          .update({ pdfurl: pdfUrl })
          .eq("id", regId)

        if (updateError) console.error("Failed to update PDF URL:", updateError)
      }

      setIsSuccess(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Submission failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#07111f] text-white">
        <PublicHeader />
        <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center sm:px-6">
          <div className="w-full rounded-lg border border-white/10 bg-white p-8 shadow-2xl shadow-slate-950/30">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#071a2e]">Registration Submitted!</h2>
            <p className="mx-auto mb-2 max-w-md text-slate-600">
              Your driver registration has been received. Our team will review your information and get in touch with you soon.
            </p>
            <p className="mx-auto max-w-md text-sm text-slate-500">
              A PDF copy of your registration has been generated and stored in our system.
            </p>
            <div className="mx-auto mt-8 flex w-full max-w-xs flex-col gap-3">
              <Button
                className="h-12 w-full rounded-lg bg-[#1683ff] font-bold text-white hover:bg-[#0f72e8]"
                onClick={() => { setIsSuccess(false); form.reset(); setFiles({ license: [], passport: [], vehicle: [] }) }}
              >
                Submit Another Registration
              </Button>
              <Button
                variant="outline"
                className="h-12 w-full rounded-lg border-slate-200 font-bold text-[#071a2e] hover:bg-slate-50"
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <PublicHeader />
      <div className="mx-auto max-w-4xl px-4 py-6 pb-12 sm:px-6 lg:py-10">
        <div className="mb-6 rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-slate-950/30 sm:p-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#58a9ff]">Final step</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Driver Registration</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Complete the form below to register as a delivery driver. All fields are required.
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <Card className="rounded-lg border-white/10 bg-white shadow-2xl shadow-slate-950/25">
            <CardHeader className="px-4 pb-3 pt-4 sm:px-6 sm:pt-5">
              <StepIndicator label="Personal Information" icon={User} />
            </CardHeader>
            <CardContent className="grid gap-4 px-4 pb-5 sm:grid-cols-2 sm:px-6">
              <div className="space-y-1.5">
                <Label htmlFor="full_name" className="font-semibold text-[#071a2e]">Full Name <span className="text-destructive">*</span></Label>
                <Input
                  id="full_name"
                  placeholder="e.g. John Smith"
                  {...form.register("full_name")}
                  aria-invalid={!!form.formState.errors.full_name}
                  className={cn("h-11 rounded-lg border-slate-200 bg-white text-[#071a2e]", form.formState.errors.full_name && "border-destructive")}
                />
                {form.formState.errors.full_name && (
                  <p className="text-xs text-destructive">{form.formState.errors.full_name.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="font-semibold text-[#071a2e]">Phone Number <span className="text-destructive">*</span></Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 0412 345 678"
                  {...form.register("phone")}
                  aria-invalid={!!form.formState.errors.phone}
                  className={cn("h-11 rounded-lg border-slate-200 bg-white text-[#071a2e]", form.formState.errors.phone && "border-destructive")}
                />
                {form.formState.errors.phone && (
                  <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="address" className="font-semibold text-[#071a2e]">Residential Address <span className="text-destructive">*</span></Label>
                <Controller
                  name="address"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <AddressAutocomplete
                      id="address"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      placeholder="e.g. 12 Main St, Sydney NSW 2000"
                      aria-invalid={!!fieldState.error}
                      className={cn("h-11 rounded-lg border-slate-200 bg-white text-[#071a2e]", fieldState.error && "border-destructive")}
                    />
                  )}
                />
                {form.formState.errors.address && (
                  <p className="text-xs text-destructive">{form.formState.errors.address.message}</p>
                )}
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="city" className="font-semibold text-[#071a2e]">City / Region <span className="text-destructive">*</span></Label>
                <Controller
                  name="city"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <div className="space-y-1.5">
                      <Select value={field.value} onValueChange={(val) => field.onChange(val as City)}>
                        <SelectTrigger
                          id="city"
                          aria-invalid={!!fieldState.error}
                          className={cn("h-11 rounded-lg border-slate-200 bg-white text-[#071a2e]", fieldState.error && "border-destructive")}
                        >
                          <SelectValue placeholder="Select a city" />
                        </SelectTrigger>
                        <SelectContent>
                          {CITIES.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.error && (
                        <p className="text-xs text-destructive">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-white/10 bg-white shadow-2xl shadow-slate-950/25">
            <CardHeader className="px-4 pb-3 pt-4 sm:px-6 sm:pt-5">
              <StepIndicator label="Availability" icon={Calendar} />
              <CardDescription className="mt-1 text-xs text-slate-500">Select all the days you are available to work</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-5 sm:px-6">
              <Controller
                name="available_days"
                control={form.control}
                render={({ field }) => (
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {DAYS_OF_WEEK.map((day) => {
                        const isChecked = field.value.includes(day)
                        return (
                          <label
                            key={day}
                            className={cn(
                              "flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-3 transition-colors",
                              isChecked
                                ? "border-[#1683ff] bg-[#1683ff]/10 text-[#1683ff]"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                            )}
                          >
                            <Checkbox
                              checked={isChecked}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...field.value, day])
                                } else {
                                  field.onChange(field.value.filter((d: string) => d !== day))
                                }
                              }}
                              className="data-[state=checked]:border-[#1683ff] data-[state=checked]:bg-[#1683ff]"
                            />
                            <span className={cn("text-sm font-semibold", isChecked ? "text-[#1683ff]" : "text-[#071a2e]")}>
                              {day.slice(0, 3)}
                            </span>
                          </label>
                        )
                      })}
                    </div>
                    {form.formState.errors.available_days && (
                      <p className="text-xs text-destructive">{form.formState.errors.available_days.message}</p>
                    )}
                  </div>
                )}
              />
            </CardContent>
          </Card>

          <Card className="rounded-lg border-white/10 bg-white shadow-2xl shadow-slate-950/25">
            <CardHeader className="px-4 pb-3 pt-4 sm:px-6 sm:pt-5">
              <StepIndicator label="Identity Documents" icon={FileText} />
              <CardDescription className="mt-1 text-xs text-slate-500">Upload clear photos of your documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-4 pb-5 sm:px-6">
              <FileUpload
                label="Driver License"
                value={files.license}
                onChange={(f) => { setFiles((prev) => ({ ...prev, license: f })); if (f.length > 0) setFileErrors((prev) => ({ ...prev, license: undefined })) }}
                required
                error={fileErrors.license}
              />
              <div className="border-t border-border pt-4">
                <FileUpload
                  label="Passport"
                  value={files.passport}
                  onChange={(f) => { setFiles((prev) => ({ ...prev, passport: f })); if (f.length > 0) setFileErrors((prev) => ({ ...prev, passport: undefined })) }}
                  required
                  error={fileErrors.passport}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-white/10 bg-white shadow-2xl shadow-slate-950/25">
            <CardHeader className="px-4 pb-3 pt-4 sm:px-6 sm:pt-5">
              <StepIndicator label="Vehicle Photos" icon={Car} />
              <CardDescription className="mt-1 text-xs text-slate-500">Upload one or more photos of your vehicle</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-5 sm:px-6">
              <FileUpload
                label="Vehicle Photos"
                multiple
                value={files.vehicle}
                onChange={(f) => { setFiles((prev) => ({ ...prev, vehicle: f })); if (f.length > 0) setFileErrors((prev) => ({ ...prev, vehicle: undefined })) }}
                required
                error={fileErrors.vehicle}
              />
            </CardContent>
          </Card>

          {submitError && (
            <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3">
              <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
              <p className="text-sm text-destructive">{submitError}</p>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="h-12 w-full rounded-lg bg-[#1683ff] text-base font-bold text-white shadow-xl shadow-blue-950/25 hover:bg-[#0f72e8]"
          >
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Submitting Registration...</>
            ) : (
              "Submit Registration"
            )}
          </Button>

          <p className="text-center text-xs text-slate-400">
            By submitting, you confirm all information provided is accurate and up-to-date.
          </p>
        </form>
      </div>
    </div>
  )
}
