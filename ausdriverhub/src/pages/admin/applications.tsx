import { useEffect, useMemo, useState } from "react"
import { Download, Mail, MapPin, Phone, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AdminLayout } from "@/components/layout/admin-layout"
import { pbListRecords, supabase, type DriverApplication } from "@/lib/supabase"

function escapeCsvValue(value: unknown): string {
  const text = value == null ? "" : String(value)
  return `"${text.replace(/"/g, '""')}"`
}

function formatDate(value: string): string {
  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleString("en-AU", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
}

function mapPocketBaseApplication(record: Record<string, unknown>): DriverApplication {
  return {
    id: String(record.id || ""),
    fullname: String(record.fullname || ""),
    mobile: String(record.mobile || ""),
    email: String(record.email || ""),
    state: String(record.state || ""),
    suburb: String(record.suburb || ""),
    postcode: String(record.postcode || ""),
    status: (record.status as DriverApplication["status"]) || "new",
    created_at: String(record.created || record.created_at || ""),
  }
}

export default function AdminApplications() {
  const [applications, setApplications] = useState<DriverApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchApplications()
  }, [])

  async function fetchApplications() {
    setLoading(true)
    try {
      if (import.meta.env.VITE_USE_POCKETBASE) {
        const records = await pbListRecords("driverapplications")
        setApplications(records.map(mapPocketBaseApplication))
      } else {
        const { data, error } = await supabase
          .from("driverapplications")
          .select("*")
          .order("created_at", { ascending: false })
        if (error) throw error
        setApplications((data || []) as DriverApplication[])
      }
    } catch (error) {
      console.error("Failed to load driver applications", error)
      setApplications([])
    } finally {
      setLoading(false)
    }
  }

  const filteredApplications = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return applications
    return applications.filter((application) =>
      [
        application.fullname,
        application.mobile,
        application.email,
        application.state,
        application.suburb,
        application.postcode,
        application.status,
      ].some((value) => value.toLowerCase().includes(term)),
    )
  }, [applications, search])

  function exportCsv() {
    const headers = ["Full Name", "Mobile", "Email", "State", "City / Suburb", "Postcode", "Status", "Submitted At"]
    const lines = [
      headers.map(escapeCsvValue).join(","),
      ...filteredApplications.map((application) => [
        application.fullname,
        application.mobile,
        application.email,
        application.state,
        application.suburb,
        application.postcode,
        application.status,
        application.created_at,
      ].map(escapeCsvValue).join(",")),
    ]
    const blob = new Blob([`\uFEFF${lines.join("\r\n")}`], { type: "text/csv;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `ausdriverhub-driver-applications-${new Date().toISOString().slice(0, 10)}.csv`
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Driver Applications</h1>
          <p className="mt-1 text-sm text-muted-foreground">View and export short-form driver applications from the homepage.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-border shadow-sm">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="rounded-lg bg-primary/10 p-2.5"><Users className="h-5 w-5 text-primary" /></div>
              <div><p className="text-2xl font-bold">{applications.length}</p><p className="text-xs text-muted-foreground">Total Applications</p></div>
            </CardContent>
          </Card>
          <Card className="border-border shadow-sm">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="rounded-lg bg-blue-100 p-2.5"><Phone className="h-5 w-5 text-blue-600" /></div>
              <div><p className="text-2xl font-bold">{applications.filter((a) => a.mobile).length}</p><p className="text-xs text-muted-foreground">With Mobile</p></div>
            </CardContent>
          </Card>
          <Card className="border-border shadow-sm">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="rounded-lg bg-green-100 p-2.5"><Mail className="h-5 w-5 text-green-600" /></div>
              <div><p className="text-2xl font-bold">{applications.filter((a) => a.email).length}</p><p className="text-xs text-muted-foreground">With Email</p></div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border shadow-sm">
          <CardHeader className="px-4 pb-3 pt-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CardTitle className="text-base">Homepage Driver Applications</CardTitle>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  className="h-8 gap-1.5 border-primary/30 text-primary hover:bg-primary/5"
                  disabled={loading || filteredApplications.length === 0}
                  onClick={exportCsv}
                  size="sm"
                  variant="outline"
                >
                  <Download className="h-3.5 w-3.5" />
                  Export CSV
                </Button>
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    className="h-8 w-60 pl-8 text-sm"
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search applications..."
                    value={search}
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <div className="space-y-3 p-4">{Array.from({ length: 5 }).map((_, index) => <Skeleton className="h-10 w-full" key={index} />)}</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Mobile</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.length === 0 ? (
                      <TableRow>
                        <TableCell className="py-12 text-center text-muted-foreground" colSpan={6}>
                          {search ? "No applications match your search." : "No homepage driver applications yet."}
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredApplications.map((application) => (
                        <TableRow key={application.id}>
                          <TableCell className="font-medium">{application.fullname}</TableCell>
                          <TableCell>{application.mobile}</TableCell>
                          <TableCell>{application.email}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                              <MapPin className="h-3.5 w-3.5" />
                              {[application.suburb, application.state, application.postcode].filter(Boolean).join(", ")}
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-medium capitalize text-blue-700">
                              {application.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{formatDate(application.created_at) || "-"}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
