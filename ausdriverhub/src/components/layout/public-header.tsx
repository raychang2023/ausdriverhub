import { useNavigate } from "react-router-dom"
import { Truck as TruckIcon, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PublicHeader() {
  const navigate = useNavigate()

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-lg bg-accent p-2">
            <TruckIcon className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none">AusDriverHub</h1>
            <p className="text-xs text-primary-foreground/70 mt-0.5">Driver Onboarding Portal</p>
          </div>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="gap-1.5 text-xs font-medium bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground hover:border-white/30 transition-colors"
          onClick={() => navigate("/admin/login")}
        >
          <Lock className="h-3.5 w-3.5" />
          Admin Login
        </Button>
      </div>
    </header>
  )
}
