import { useNavigate } from "react-router-dom"
import { Truck, Briefcase, Lock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Jobs() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <div className="flex items-center justify-center rounded-lg bg-primary-foreground/10 p-2">
              <Truck className="h-5 w-5 text-primary-foreground" />
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
            Admin
          </Button>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10 flex flex-col items-center justify-center text-center gap-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
          <Briefcase className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Jobs</h2>
          <p className="text-muted-foreground text-base">Coming Soon</p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
            Job listings and partnership openings will be available here soon. Check back later.
          </p>
        </div>
        <Button
          variant="outline"
          className="gap-2 mt-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </main>

      <footer className="py-6 text-center">
        <p className="text-xs text-muted-foreground">AusDriverHub &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
