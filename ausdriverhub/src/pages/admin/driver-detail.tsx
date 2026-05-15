import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, FileText, Download, Loader as Loader2, User, Phone, MapPin, Calendar, Car, CircleCheck as CheckCircle2, Circle as XCircle, Clock, Eye, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AdminLayout } from "@/components/layout/admin-layout"
import { supabase, pbGetRecord, pbListRecords, pbUpdateRecord, DAYS_OF_WEEK, DOCUMENT_TYPE_LABELS, type DriverDocument, type DriverRegistration } from "@/lib/supabase"
import { cn } from "@/lib/utils"

const STATUS_CONFIG: Record<string, { label: string; icon: React.ElementType; classes: string }> = {
  pending: { label: "Pending Review", icon: Clock, classes: "bg-amber-100 text-amber-800 border-amber-200" },
  reviewed: { label: "Reviewed", icon: Eye, classes: "bg-blue-100 text-blue-800 border-blue-200" },
  approved: { label: "Approved", icon: CheckCircle2, classes: "bg-green-100 text-green-800 border-green-200" },
  rejected: { label: "Rejected", icon: XCircle, classes: "bg-red-100 text-red-800 border-red-200" },
}

function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex-shrink-0">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10">
          <Icon className="h-3.5 w-3.5 text-primary" />
        </div>
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{label}</p>
        <p className="text-sm text-foreground mt-0.5 break-words">{value || "—"}</p>
      </div>
    </div>
  )
}

export default function DriverDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [registration, setRegistration] = useState<DriverRegistration | null>(null)
  const [documents, setDocuments] = useState<DriverDocument[]>([])
  const [loading, setLoading] = useState(true)
  const [updatingStatus, setUpdatingStatus] = useState(false)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (id) fetchDriver(id)
  }, [id])

  async function fetchDriver(driverId: string) {
    setLoading(true)
    if (import.meta.env.VITE_USE_POCKETBASE) {
      try {
        const reg = await pbGetRecord("driverregistrations", driverId)
        const docs = await pbListRecords("driverdocuments", `registrationid = "${driverId}"`)
        if (reg) setRegistration({
          id: reg.id as string,
          fullname: (reg.fullname as string) || "",
          phone: (reg.phone as string) || "",
          address: (reg.address as string) || "",
          city: (reg.city as DriverRegistration["city"]) || "Sydney",
          availabledays: ((reg.availabledays as string) || "").split(",").filter(Boolean),
          pdfurl: (reg.pdfurl as string) || null,
          status: (reg.status as DriverRegistration["status"]) || "pending",
          created_at: (reg.created as string) || "",
          tenant_id: (reg.tenant_id as string) || null,
        } as DriverRegistration)
        if (docs) setDocuments(docs.map((d) => {
          const fu = (d.fileupload as string) || ""
          const url = (d.fileurl as string) || (fu ? `${window.location.origin}/api/files/driverdocuments/${d.id}/${fu}` : "")
          return {
            id: d.id as string,
            registrationid: d.registrationid as string,
            documenttype: d.documenttype as DriverDocument["documenttype"],
            fileurl: url,
            filename: d.filename as string || "",
            createdat: (d.created as string) || "",
          } as DriverDocument
        }))
      } catch (e) {
        console.error("PB fetch error", e)
      }
      setLoading(false)
      return
    }
    const [{ data: reg }, { data: docs }] = await Promise.all([
      supabase.from("driverregistrations").select("*").eq("id", driverId).maybeSingle(),
      supabase.from("driverdocuments").select("*").eq("registrationid", driverId).order("documenttype"),
    ])
    if (reg) setRegistration(reg as DriverRegistration)
    if (docs) setDocuments(docs as DriverDocument[])
    setLoading(false)
  }

  async function deleteRegistration() {
    if (!registration) return
    setDeleting(true)
    if (import.meta.env.VITE_USE_POCKETBASE) {
      navigate("/admin/dashboard")
      return
    }
    await supabase.from("driverdocuments").delete().eq("registrationid", registration.id)
    await supabase.from("driverregistrations").delete().eq("id", registration.id)
    navigate("/admin/dashboard")
  }

  async function updateStatus(newStatus: string) {
    if (!registration) return
    setUpdatingStatus(true)
    if (import.meta.env.VITE_USE_POCKETBASE) {
      await pbUpdateRecord("driverregistrations", registration.id, { status: newStatus })
      setRegistration((prev) => prev ? { ...prev, status: newStatus as DriverRegistration["status"] } : prev)
      setUpdatingStatus(false)
      return
    }
    const { error } = await supabase.from("driverregistrations").update({ status: newStatus }).eq("id", registration.id)
    if (!error) setRegistration((prev) => prev ? { ...prev, status: newStatus as DriverRegistration["status"] } : prev)
    setUpdatingStatus(false)
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="space-y-4 max-w-3xl">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </AdminLayout>
    )
  }

  if (!registration) {
    return (
      <AdminLayout>
        <div className="text-center py-16">
          <p className="text-muted-foreground">Registration not found.</p>
          <Button className="mt-4" onClick={() => navigate("/admin/dashboard")}>Back to Dashboard</Button>
        </div>
      </AdminLayout>
    )
  }

  const license = documents.find((d) => d.documenttype === "license")
  const passport = documents.find((d) => d.documenttype === "passport")
  const vehicles = documents.filter((d) => d.documenttype === "vehicle")
  const statusConfig = STATUS_CONFIG[registration.status] || STATUS_CONFIG.pending
  const StatusIcon = statusConfig.icon

  return (
    <AdminLayout>
      <div className="max-w-3xl space-y-5">
        <div className="flex items-center gap-3 flex-wrap">
          <Button variant="ghost" size="sm" onClick={() => navigate("/admin/dashboard")} className="gap-1.5 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />Back
          </Button>
          <div className="h-4 w-px bg-border" />
          <h1 className="text-lg font-bold text-foreground">{registration.fullname}</h1>
          <span className={cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium", statusConfig.classes)}>
            <StatusIcon className="h-3 w-3" />{statusConfig.label}
          </span>
          <div className="ml-auto">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/5 hover:text-destructive">
                  <Trash2 className="h-3.5 w-3.5" />Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="sm">
                <AlertDialogHeader>
                  <AlertDialogMedia>
                    <Trash2 />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Delete Registration?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete <strong>{registration.fullname}</strong>'s registration and all associated documents. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction variant="destructive" onClick={deleteRegistration} disabled={deleting}>
                    {deleting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <Card className="border-border shadow-sm">
          <CardHeader className="px-4 pt-4 pb-3">
            <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Driver Information</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoRow icon={User} label="Full Name" value={registration.fullname} />
            <InfoRow icon={Phone} label="Phone Number" value={registration.phone} />
            <InfoRow icon={MapPin} label="City / Region" value={registration.city} />
            <div className="sm:col-span-2"><InfoRow icon={MapPin} label="Residential Address" value={registration.address} /></div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="px-4 pt-4 pb-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Availability</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="flex flex-wrap gap-2">
              {DAYS_OF_WEEK.map((day) => {
                const available = registration.availabledays.includes(day)
                return (
                  <div key={day} className={cn("rounded-lg px-3 py-1.5 text-sm font-medium border", available ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-muted-foreground border-border")}>
                    {day}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border shadow-sm">
          <CardHeader className="px-4 pt-4 pb-3">
            <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Identity Documents</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[license, passport].map((doc) =>
              doc ? (
                <div key={doc.id} className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{DOCUMENT_TYPE_LABELS[doc.documenttype]}</p>
                  <a href={doc.fileurl} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden border border-border hover:opacity-90 transition-opacity">
                    <img src={doc.fileurl} alt={DOCUMENT_TYPE_LABELS[doc.documenttype]} className="w-full object-cover aspect-[4/3] bg-muted" onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }} />
                  </a>
                  <a href={doc.fileurl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    <Eye className="h-3 w-3" />View full size
                  </a>
                </div>
              ) : null,
            )}
          </CardContent>
        </Card>

        {vehicles.length > 0 && (
          <Card className="border-border shadow-sm">
            <CardHeader className="px-4 pt-4 pb-3">
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-muted-foreground" />
                <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Vehicle Photos ({vehicles.length})</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {vehicles.map((doc, i) => (
                  <a key={doc.id} href={doc.fileurl} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden border border-border hover:opacity-90 transition-opacity">
                    <img src={doc.fileurl} alt={`Vehicle Photo ${i + 1}`} className="w-full object-cover aspect-[4/3] bg-muted" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-border shadow-sm">
          <CardHeader className="px-4 pt-4 pb-3">
            <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Actions</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 space-y-4">
            {registration.pdfurl && (
              <div className="flex flex-wrap gap-2">
                <a href={registration.pdfurl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-1.5 border-primary/30 text-primary hover:bg-primary/5">
                    <FileText className="h-4 w-4" />View PDF
                  </Button>
                </a>
                <a href={registration.pdfurl} download>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Download className="h-4 w-4" />Download PDF
                  </Button>
                </a>
              </div>
            )}
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Update Status</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(STATUS_CONFIG).map(([status, config]) => {
                  const Icon = config.icon
                  const isActive = registration.status === status
                  return (
                    <Button
                      key={status}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      disabled={updatingStatus || isActive}
                      onClick={() => updateStatus(status)}
                      className={cn("gap-1.5 capitalize", isActive && "bg-primary text-primary-foreground")}
                    >
                      {updatingStatus && isActive ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Icon className="h-3.5 w-3.5" />}
                      {config.label}
                    </Button>
                  )
                })}
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Submitted: {new Date(registration.created_at).toLocaleString("en-AU", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
