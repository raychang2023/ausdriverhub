import { useNavigate } from "react-router-dom"
import { Truck, Briefcase, BookOpen, CircleCheck as CheckCircle, Lock, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
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

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 space-y-8">
        <section className="text-center pt-2 pb-2">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center rounded-2xl bg-primary/10 p-4">
              <Truck className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
            Aus Driver Hub
          </h2>
          <p className="text-base font-medium text-muted-foreground mb-3">
            Driver Registration &amp; Onboarding Portal
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Welcome to the driver onboarding portal. Please read the onboarding guide before submitting your driver details to improve review efficiency.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card className="border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer group" onClick={() => navigate("/jobs")}>
            <CardContent className="p-5 flex flex-col gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">Jobs</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  View the latest job opportunities and partnership openings
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="mt-1 w-full font-medium"
                onClick={(e) => { e.stopPropagation(); navigate("/jobs") }}
              >
                View Jobs
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer group border-primary/20" onClick={() => navigate("/guide")}>
            <CardContent className="p-5 flex flex-col gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base mb-1">Onboarding Guide</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Read the onboarding requirements and submission instructions before filling out the driver form
                </p>
              </div>
              <Button
                size="sm"
                className="mt-1 w-full font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={(e) => { e.stopPropagation(); navigate("/guide") }}
              >
                Start Guide
              </Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">How It Works</h3>
          <div className="space-y-3">
            {[
              { num: "1", label: "Read the onboarding guide" },
              { num: "2", label: "Prepare your personal and vehicle details" },
              { num: "3", label: "Submit the form and wait for review" },
            ].map((item) => (
              <div key={item.num} className="flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {item.num}
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="rounded-lg border border-border bg-muted/40 px-4 py-4 flex gap-3">
            <Info className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            <div className="space-y-1.5">
              <p className="text-sm text-foreground font-medium">Before you begin</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Please prepare your ID documents, driver licence, contact details, and vehicle information before submitting.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Please read the delivery and photo proof requirements carefully to avoid delays in review.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center">
        <p className="text-xs text-muted-foreground">AusDriverHub &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
