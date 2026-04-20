import { useState } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { Truck as TruckIcon, LayoutDashboard, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { cn } from "@/lib/utils"

type AdminLayoutProps = {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate("/admin/login")
  }

  const navLinks = [
    { href: "/admin/dashboard", label: "Registrations", icon: LayoutDashboard },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-sidebar border-b border-sidebar-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg bg-sidebar-primary p-1.5">
              <TruckIcon className="h-4 w-4 text-sidebar-primary-foreground" />
            </div>
            <div>
              <span className="text-sm font-bold text-sidebar-foreground">AusDriverHub</span>
              <span className="ml-2 text-xs text-sidebar-foreground/50 hidden sm:inline">Admin</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="hidden md:flex text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 gap-1.5"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-sidebar-foreground"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-sidebar-border bg-sidebar">
            <div className="max-w-7xl mx-auto px-4 py-2 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = location.pathname === link.href
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-foreground"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                )
              })}
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        {children}
      </main>
    </div>
  )
}
