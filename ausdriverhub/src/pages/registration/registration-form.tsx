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
import { generateDriverPDF } from "@/lib/pdf-generator"
import type { DriverDocument, DriverRegistration } from "@/lib/supabase"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your full residential address"),
  city: z.enum(["Sydney", "Brisbane", "Melbourne"]),
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
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-3.5 w-3.5 text-primary" />
      </div>
      <span className="text-sm font-medium text-foreground">{label}</span>
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
    const ext = file.name.split(".").pop() || "jpg"
    const path = `${registrationId}/${type}-${index}-${Date.now()}.${ext}`
    const { error } = await supabase.storage.from("driver-documents").upload(path, file, { upsert: true })
    if (error) throw new Error(`Upload failed: ${error.message}`)
    const { data: { publicUrl } } = supabase.storage.from("driver-documents").getPublicUrl(path)
    return publicUrl
  }

  async function onSubmit(values: FormValues) {
    if (!validateFiles()) return
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // 使用 Supabase 客户端直接插入
      const { data: registration, error: regError } = await supabase
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

      if (regError || !registration) {
        throw new Error(regError?.message || "Failed to save registration")
      }

      const docs: { registrationid: string; documenttype: string; fileurl: string; filename: string }[] = []

      const licenseUrl = await uploadFile(files.license[0].file, registration.id, "license")
      docs.push({ registrationid: registration.id, documenttype: "license", fileurl: licenseUrl, filename: files.license[0].file.name })

      const passportUrl = await uploadFile(files.passport[0].file, registration.id, "passport")
      docs.push({ registrationid: registration.id, documenttype: "passport", fileurl: passportUrl, filename: files.passport[0].file.name })

      for (let i = 0; i < files.vehicle.length; i++) {
        const vehicleUrl = await uploadFile(files.vehicle[i].file, registration.id, "vehicle", i)
        docs.push({ registrationid: registration.id, documenttype: "vehicle", fileurl: vehicleUrl, filename: files.vehicle[i].file.name })
      }

      const { data: savedDocs, error: docsError } = await supabase
        .from("driverdocuments")
        .insert(docs)
        .select()

      if (docsError) {
        throw new Error(docsError.message || "Failed to save documents")
      }

      const fullRegistration: DriverRegistration = { ...registration, driverdocuments: savedDocs as DriverDocument[] }
      const pdfBlob = await generateDriverPDF(fullRegistration, savedDocs as DriverDocument[])
      const pdfPath = `${registration.id}/registration-${registration.id}.pdf`
      await supabase.storage.from("driver-documents").upload(pdfPath, pdfBlob, { contentType: "application/pdf", upsert: true })
      const { data: { publicUrl: pdfUrl } } = supabase.storage.from("driver-documents").getPublicUrl(pdfPath)

      // 更新 PDF URL
      const { error: updateError } = await supabase
        .from("driverregistrations")
        .update({ pdfurl: pdfUrl })
        .eq("id", registration.id)

      if (updateError) {
        console.error("Failed to update PDF URL:", updateError)
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
      <div className="min-h-screen bg-background">
        <PublicHeader />
        <div className="max-w-2xl mx-auto px-4 py-16 flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Registration Submitted!</h2>
          <p className="text-muted-foreground mb-2 max-w-md">
            Your driver registration has been received. Our team will review your information and get in touch with you soon.
          </p>
          <p className="text-sm text-muted-foreground max-w-md">
            A PDF copy of your registration has been generated and stored in our system.
          </p>
          <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
            <Button
              className="bg-primary text-primary-foreground w-full"
              onClick={() => { setIsSuccess(false); form.reset(); setFiles({ license: [], passport: [], vehicle: [] }) }}
            >
              Submit Another Registration
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      <div className="max-w-2xl mx-auto px-4 py-6 pb-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">Driver Registration</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Complete the form below to register as a delivery driver. All fields are required.
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <Card className="border-border shadow-sm">
            <CardHeader className="pb-3 pt-4 px-4">
              <StepIndicator label="Personal Information" icon={User} />
            </CardHeader>
            <CardContent className="space-y-4 px-4 pb-4">
              <div className="space-y-1.5">
                <Label htmlFor="full_name">Full Name <span className="text-destructive">*</span></Label>
                <Input
                  id="full_name"
                  placeholder="e.g. John Smith"
                  {...form.register("full_name")}
                  aria-invalid={!!form.formState.errors.full_name}
                  className={cn(form.formState.errors.full_name && "border-destructive")}
                />
                {form.formState.errors.full_name && (
                  <p className="text-xs text-destructive">{form.formState.errors.full_name.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 0412 345 678"
                  {...form.register("phone")}
                  aria-invalid={!!form.formState.errors.phone}
                  className={cn(form.formState.errors.phone && "border-destructive")}
                />
                {form.formState.errors.phone && (
                  <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="address">Residential Address <span className="text-destructive">*</span></Label>
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
                      className={cn(fieldState.error && "border-destructive")}
                    />
                  )}
                />
                {form.formState.errors.address && (
                  <p className="text-xs text-destructive">{form.formState.errors.address.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="city">City / Region <span className="text-destructive">*</span></Label>
                <Controller
                  name="city"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <div className="space-y-1.5">
                      <Select value={field.value} onValueChange={(val) => field.onChange(val as City)}>
                        <SelectTrigger
                          id="city"
                          aria-invalid={!!fieldState.error}
                          className={cn(fieldState.error && "border-destructive")}
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

          <Card className="border-border shadow-sm">
            <CardHeader className="pb-3 pt-4 px-4">
              <StepIndicator label="Availability" icon={Calendar} />
              <CardDescription className="text-xs mt-1">Select all the days you are available to work</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-4">
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
                              "flex items-center gap-2.5 rounded-lg border px-3 py-2.5 cursor-pointer transition-colors",
                              isChecked
                                ? "border-primary bg-primary/8 text-primary"
                                : "border-border bg-background hover:bg-muted/50",
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
                              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                            />
                            <span className={cn("text-sm font-medium", isChecked ? "text-primary" : "text-foreground")}>
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

          <Card className="border-border shadow-sm">
            <CardHeader className="pb-3 pt-4 px-4">
              <StepIndicator label="Identity Documents" icon={FileText} />
              <CardDescription className="text-xs mt-1">Upload clear photos of your documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-4 pb-4">
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

          <Card className="border-border shadow-sm">
            <CardHeader className="pb-3 pt-4 px-4">
              <StepIndicator label="Vehicle Photos" icon={Car} />
              <CardDescription className="text-xs mt-1">Upload one or more photos of your vehicle</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-4">
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
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 text-base shadow-md"
          >
            {isSubmitting ? (
              <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Submitting Registration...</>
            ) : (
              "Submit Registration"
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By submitting, you confirm all information provided is accurate and up-to-date.
          </p>
        </form>
      </div>
    </div>
  )
}
