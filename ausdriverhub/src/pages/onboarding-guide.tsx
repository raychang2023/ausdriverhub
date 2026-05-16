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
    <div className="min-h-screen bg-[#07111f] text-white">
      <header className="border-b border-white/10 bg-[#03101f]/95 shadow-xl shadow-black/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button className="flex items-center gap-3 text-left" onClick={() => navigate("/")} type="button">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1683ff] text-white shadow-lg shadow-blue-950/30">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold leading-none tracking-tight">
                AusDriver<span className="text-[#1683ff]">Hub</span>
              </h1>
              <p className="mt-1 text-xs font-medium text-slate-300">Driver Onboarding Portal</p>
            </div>
          </button>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="h-10 gap-1.5 rounded-lg border-white/15 bg-white/5 px-3 text-xs font-bold text-white hover:bg-white/12 hover:text-white"
              onClick={() => navigate("/")}
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-10 gap-1.5 rounded-lg border-white/15 bg-white/5 px-3 text-xs font-bold text-white hover:bg-white/12 hover:text-white"
              onClick={() => navigate("/admin/login")}
            >
              <Lock className="h-3.5 w-3.5" />
              Admin
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[340px_1fr] lg:px-8 lg:py-10">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#58a9ff]">Start Guide</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight">Driver delivery guide</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Review each onboarding step before continuing to the existing registration form.
            </p>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                <span>Step {currentIndex + 1} of {total}</span>
                <span className="text-[#58a9ff]">{Math.round(((currentIndex + 1) / total) * 100)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-[#1683ff] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-6 gap-2 lg:grid-cols-4">
              {guideSteps.map((guideStep, index) => (
                <div
                  className={`flex h-9 items-center justify-center rounded-lg border text-xs font-extrabold transition-colors ${
                    index === currentIndex
                      ? "border-[#1683ff] bg-[#1683ff] text-white"
                      : index < currentIndex
                        ? "border-[#1683ff]/40 bg-[#1683ff]/15 text-[#9fd0ff]"
                        : "border-white/10 bg-white/5 text-slate-400"
                  }`}
                  key={guideStep.step}
                >
                  {guideStep.step}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="flex min-w-0 flex-col gap-5">
          <div className="rounded-lg border border-white/10 bg-white p-3 shadow-2xl shadow-slate-950/30 sm:p-4">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
              {imgError ? (
                <div className="flex flex-col items-center justify-center gap-2 px-6 py-14 text-center text-slate-500">
                  <ImageOff className="h-10 w-10" />
                  <p className="text-sm font-semibold">Image not available</p>
                  <p className="text-xs">
                    Place the image file at <span className="rounded bg-slate-100 px-1 font-mono text-xs">{step.image}</span>
                  </p>
                </div>
              ) : (
                <div className="relative bg-white">
                  <img
                    key={step.image}
                    src={step.image}
                    alt={step.title}
                    onError={() => setImgError(true)}
                    onClick={() => setLightboxOpen(true)}
                    className="h-auto w-full cursor-zoom-in"
                  />
                  <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-[#07111f]/80 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    <ZoomIn className="h-3 w-3" />
                    Tap to enlarge
                  </div>
                </div>
              )}
            </div>

            <div className="px-1 py-5 sm:px-2">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-[#1683ff]">Guide step {currentIndex + 1}</p>
                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-[#071a2e] sm:text-2xl">{step.title}</h3>
                </div>
              </div>
              {step.tip && (
                <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
                  <p className="text-sm leading-6 text-slate-700">{step.tip}</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-3 pb-6 sm:grid-cols-2">
            <Button
              variant="outline"
              className="h-12 gap-2 rounded-lg border-white/15 bg-white/[0.08] text-base font-bold text-white hover:bg-white/15 hover:text-white disabled:border-white/10 disabled:bg-white/5 disabled:text-slate-500"
              disabled={currentIndex === 0}
              onClick={handlePrev}
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              className="h-12 gap-2 rounded-lg bg-[#1683ff] text-base font-bold text-white shadow-xl shadow-blue-950/25 hover:bg-[#0f72e8]"
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
        </section>
      </main>

      {lightboxOpen && !imgError && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={step.image}
            alt={step.title}
            className="max-h-full max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
