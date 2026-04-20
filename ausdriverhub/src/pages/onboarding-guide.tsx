import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Truck, ArrowLeft, ArrowRight, Hop as Home, ImageOff, Lock, ZoomIn, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { guideSteps } from "@/data/guide-steps"

const STORAGE_KEY_COMPLETED = "onboardingCompleted"
const STORAGE_KEY_STEP = "onboardingStep"

export default function OnboardingGuide() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_STEP)
    if (saved !== null) {
      const n = parseInt(saved, 10)
      if (!isNaN(n) && n >= 0 && n < guideSteps.length) return n
    }
    return 0
  })
  const [imgError, setImgError] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const total = guideSteps.length
  const step = guideSteps[currentIndex]
  const isLast = currentIndex === total - 1

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_STEP, String(currentIndex))
    setImgError(false)
    setLightboxOpen(false)
  }, [currentIndex])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false)
    }
    if (lightboxOpen) document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [lightboxOpen])

  function handleNext() {
    if (isLast) {
      localStorage.setItem(STORAGE_KEY_COMPLETED, "true")
      navigate("/register")
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

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

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground">Onboarding Guide</h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Step {currentIndex + 1} of {total}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-muted-foreground"
            onClick={() => navigate("/")}
          >
            <Home className="h-4 w-4" />
            Home
          </Button>
        </div>

        <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-primary h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>

        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="w-full bg-white">
            {imgError ? (
              <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground py-12 px-6 text-center">
                <ImageOff className="h-10 w-10" />
                <p className="text-sm font-medium">Image not available</p>
                <p className="text-xs">
                  Place the image file at <span className="font-mono text-xs bg-muted px-1 rounded">{step.image}</span>
                </p>
              </div>
            ) : (
              <div className="relative">
                <img
                  key={step.image}
                  src={step.image}
                  alt={step.title}
                  onError={() => setImgError(true)}
                  onClick={() => setLightboxOpen(true)}
                  className="w-full h-auto cursor-zoom-in"
                />
                <div className="absolute top-2 right-2 bg-black/50 text-white rounded-md px-2 py-1 flex items-center gap-1 text-xs pointer-events-none">
                  <ZoomIn className="h-3 w-3" />
                  Tap to enlarge
                </div>
              </div>
            )}
          </div>

          <div className="px-4 py-4 space-y-3">
            <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
            {step.tip && (
              <div className="rounded-lg bg-muted/60 border border-border px-3 py-2.5">
                <p className="text-sm text-muted-foreground leading-relaxed">{step.tip}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3 pb-4">
          <Button
            variant="outline"
            className="flex-1 gap-2"
            disabled={currentIndex === 0}
            onClick={handlePrev}
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={handleNext}
          >
            {isLast ? (
              "I Have Finished Reading, Go to Registration Form"
            ) : (
              <>
                Understood, Next
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </main>

      {lightboxOpen && !imgError && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={step.image}
            alt={step.title}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
