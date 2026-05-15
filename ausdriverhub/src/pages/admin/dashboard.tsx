import { useEffect, useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from "@tanstack/react-table"
import { Search, ChevronLeft, ChevronRight, ArrowUpDown, Eye, Users, Clock, CircleCheck as CheckCircle2, FileText, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AdminLayout } from "@/components/layout/admin-layout"
import { supabase, pbListRecords, pbUpdateRecord, pbGetRecord, type DriverRegistration } from "@/lib/supabase"

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  reviewed: "bg-blue-100 text-blue-800 border-blue-200",
  approved: "bg-green-100 text-green-800 border-green-200",
  rejected: "bg-red-100 text-red-800 border-red-200",
}

const columnHelper = createColumnHelper<DriverRegistration>()

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [registrations, setRegistrations] = useState<DriverRegistration[]>([])
  const [loading, setLoading] = useState(true)
  const [globalFilter, setGlobalFilter] = useState("")
  const [sorting, setSorting] = useState<SortingState>([])

  useEffect(() => {
    fetchRegistrations()
  }, [])

  async function deleteRegistration(id: string) {
    if (import.meta.env.VITE_USE_POCKETBASE) {
      // PocketBase: delete is not exposed yet, skip for now
      setRegistrations((prev) => prev.filter((r) => r.id !== id))
      return
    }
    await supabase.from("driverdocuments").delete().eq("registrationid", id)
    await supabase.from("driverregistrations").delete().eq("id", id)
    setRegistrations((prev) => prev.filter((r) => r.id !== id))
  }

  async function fetchRegistrations() {
    setLoading(true)
    if (import.meta.env.VITE_USE_POCKETBASE) {
      const items = await pbListRecords("driverregistrations")
      const mapped: DriverRegistration[] = items.map((r: Record<string, unknown>) => ({
        id: r.id as string,
        fullname: (r.fullname as string) || "",
        phone: (r.phone as string) || "",
        address: (r.address as string) || "",
        city: (r.city as DriverRegistration["city"]) || "Sydney",
        availabledays: ((r.availabledays as string) || "").split(",").filter(Boolean),
        pdfurl: (r.pdfurl as string) || null,
        status: (r.status as DriverRegistration["status"]) || "pending",
        created_at: (r.created as string) || "",
        tenant_id: (r.tenant_id as string) || null,
      }))
      setRegistrations(mapped)
      setLoading(false)
      return
    }
    const { data, error } = await supabase
      .from("driverregistrations")
      .select("*")
      .order("created_at", { ascending: false })
    if (!error && data) setRegistrations(data as DriverRegistration[])
    setLoading(false)
  }

  const columns = useMemo(
    () => [
      columnHelper.accessor("fullname", {
        header: ({ column }) => (
          <button className="flex items-center gap-1 font-semibold hover:text-foreground transition-colors" onClick={() => column.toggleSorting()}>
            Driver Name <ArrowUpDown className="h-3.5 w-3.5" />
          </button>
        ),
        cell: (info) => <span className="font-medium text-foreground">{info.getValue()}</span>,
      }),
      columnHelper.accessor("phone", {
        header: "Phone",
        cell: (info) => <span className="text-muted-foreground">{info.getValue()}</span>,
      }),
      columnHelper.accessor("city", {
        header: "City",
        cell: (info) => <span className="text-muted-foreground">{info.getValue()}</span>,
      }),
      columnHelper.accessor("availabledays", {
        header: "Availability",
        cell: (info) => {
          const days = info.getValue()
          return (
            <div className="flex flex-wrap gap-1">
              {days.slice(0, 3).map((day) => (
                <span key={day} className="inline-block rounded px-1.5 py-0.5 text-xs bg-primary/10 text-primary font-medium">
                  {day.slice(0, 3)}
                </span>
              ))}
              {days.length > 3 && <span className="text-xs text-muted-foreground">+{days.length - 3}</span>}
            </div>
          )
        },
        enableSorting: false,
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => {
          const status = info.getValue()
          return (
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${STATUS_STYLES[status] || ""}`}>
              {status}
            </span>
          )
        },
      }),
      columnHelper.accessor("pdfurl", {
        header: "PDF",
        cell: (info) => {
          const url = info.getValue()
          return url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium">
              <FileText className="h-3.5 w-3.5" />View PDF
            </a>
          ) : <span className="text-xs text-muted-foreground">—</span>
        },
        enableSorting: false,
      }),
      columnHelper.accessor("created_at", {
        header: ({ column }) => (
          <button className="flex items-center gap-1 font-semibold hover:text-foreground transition-colors" onClick={() => column.toggleSorting()}>
            Submitted <ArrowUpDown className="h-3.5 w-3.5" />
          </button>
        ),
        cell: (info) => {
          const val = info.getValue()
          if (!val) return <span className="text-xs text-muted-foreground">—</span>
          const d = new Date(val)
          return isNaN(d.getTime())
            ? <span className="text-xs text-muted-foreground">—</span>
            : d.toLocaleDateString("en-AU", { day: "2-digit", month: "short", year: "numeric" })
        },
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => (
          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            <Button
              size="sm"
              variant="outline"
              className="h-7 px-2.5 text-xs gap-1.5 border-primary/30 text-primary hover:bg-primary/5"
              onClick={() => navigate(`/admin/drivers/${row.original.id}`)}
            >
              <Eye className="h-3.5 w-3.5" />View
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 w-7 p-0 text-destructive border-destructive/30 hover:bg-destructive/5 hover:text-destructive"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="sm">
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Registration?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Permanently delete <strong>{row.original.fullname}</strong>'s registration? This cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction variant="destructive" onClick={() => deleteRegistration(row.original.id)}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ),
      }),
    ],
    [navigate, deleteRegistration],
  )

  const table = useReactTable({
    data: registrations,
    columns,
    state: { globalFilter, sorting },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  })

  const stats = useMemo(() => ({
    total: registrations.length,
    pending: registrations.filter((r) => r.status === "pending").length,
    approved: registrations.filter((r) => r.status === "approved").length,
  }), [registrations])

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Driver Registrations</h1>
          <p className="text-sm text-muted-foreground mt-1">Review and manage driver onboarding submissions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border-border shadow-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2.5 shrink-0"><Users className="h-5 w-5 text-primary" /></div>
              <div className="min-w-0"><p className="text-2xl font-bold text-foreground">{stats.total}</p><p className="text-xs text-muted-foreground truncate">Total Submitted</p></div>
            </CardContent>
          </Card>
          <Card className="border-border shadow-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="rounded-lg bg-amber-100 p-2.5 shrink-0"><Clock className="h-5 w-5 text-amber-600" /></div>
              <div className="min-w-0"><p className="text-2xl font-bold text-foreground">{stats.pending}</p><p className="text-xs text-muted-foreground truncate">Pending Review</p></div>
            </CardContent>
          </Card>
          <Card className="border-border shadow-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="rounded-lg bg-green-100 p-2.5 shrink-0"><CheckCircle2 className="h-5 w-5 text-green-600" /></div>
              <div className="min-w-0"><p className="text-2xl font-bold text-foreground">{stats.approved}</p><p className="text-xs text-muted-foreground truncate">Approved</p></div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border shadow-sm">
          <CardHeader className="px-4 pt-4 pb-3">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <CardTitle className="text-base">All Registrations</CardTitle>
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, phone..."
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  className="pl-8 h-8 text-sm w-52"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <div className="p-4 space-y-3">{Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}</div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="border-border hover:bg-transparent">
                          {headerGroup.headers.map((header) => (
                            <TableHead key={header.id} className="text-muted-foreground text-xs font-semibold uppercase tracking-wide h-9">
                              {flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHead>
                          ))}
                        </TableRow>
                      ))}
                    </TableHeader>
                    <TableBody>
                      {table.getRowModel().rows.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={columns.length} className="text-center py-12 text-muted-foreground">
                            {globalFilter ? "No results found for your search." : "No driver registrations yet."}
                          </TableCell>
                        </TableRow>
                      ) : (
                        table.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            className="border-border hover:bg-muted/40 cursor-pointer transition-colors"
                            onClick={() => navigate(`/admin/drivers/${row.original.id}`)}
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id} className="py-2.5 text-sm">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    {table.getFilteredRowModel().rows.length} record{table.getFilteredRowModel().rows.length !== 1 ? "s" : ""}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="h-7 w-7 p-0">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-xs text-muted-foreground">
                      {table.getState().pagination.pageIndex + 1} / {table.getPageCount() || 1}
                    </span>
                    <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="h-7 w-7 p-0">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
