import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Box,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileText,
  MapPin,
  Menu,
  Navigation,
  PackageCheck,
  Send,
  ShieldCheck,
  Tag,
  Truck,
  UserRound,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/driver-network-hero.webp"
import heroImage2 from "@/assets/driver-network-hero-2.webp"
import heroImage3 from "@/assets/driver-network-hero-3.webp"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Coverage", href: "#coverage" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

const trustCards = [
  {
    title: "Australia-wide",
    description: "Opportunities in metro and regional areas",
    icon: MapPin,
  },
  {
    title: "24/7 online registration",
    description: "Register anytime, anywhere",
    icon: Clock3,
  },
  {
    title: "Free signup",
    description: "It's free to register and easy to get started",
    icon: Tag,
  },
]

const cities = [
  { name: "Sydney", icon: Building2 },
  { name: "Melbourne", icon: Building2 },
  { name: "Brisbane", icon: Navigation },
  { name: "Perth", icon: Building2 },
  { name: "Adelaide", icon: Truck },
  { name: "Canberra", icon: Building2 },
  { name: "Hobart", icon: MapPin },
  { name: "Darwin", icon: Navigation },
]

const driverTypes = [
  {
    title: "Parcel delivery drivers",
    description: "Deliver parcels for couriers, logistics partners and local delivery services.",
    icon: Box,
  },
  {
    title: "Owner drivers",
    description: "Use your own vehicle and register your preferred areas.",
    icon: UserRound,
  },
  {
    title: "Flexible delivery work",
    description: "Register your availability and preferred work type.",
    icon: CalendarClock,
  },
]

const steps = [
  {
    step: "Step 1",
    title: "Submit your details",
    description: "Complete the simple registration form with your basic driver information.",
    icon: FileText,
  },
  {
    step: "Step 2",
    title: "We review your profile",
    description: "We review your location and contact details when suitable opportunities are being considered.",
    icon: ClipboardCheck,
  },
  {
    step: "Step 3",
    title: "Get contacted",
    description: "If suitable opportunities become available, we may contact you with the next step.",
    icon: PackageCheck,
  },
]

const faqs = [
  {
    question: "Is registration free?",
    answer: "Yes. Drivers can submit their details for free.",
  },
  {
    question: "Do I need my own vehicle?",
    answer: "Many delivery opportunities require a suitable vehicle. If a relevant opportunity is available, we may ask for vehicle details later.",
  },
  {
    question: "Do I need an ABN?",
    answer: "Some subcontractor opportunities may require an ABN. You can still register your interest.",
  },
  {
    question: "Are jobs guaranteed?",
    answer: "No. Registration helps us consider you for suitable opportunities when available.",
  },
  {
    question: "Which areas do you cover?",
    answer: "We accept registrations from metro and regional areas across Australia.",
  },
]

const states = ["NSW", "VIC", "QLD", "WA", "SA", "ACT", "TAS", "NT"]

const heroSlides = [
  {
    src: heroImage,
    alt: "Delivery driver with van and parcels in an Australian city",
  },
  {
    src: heroImage2,
    alt: "Australia-wide logistics network with delivery trucks and route coverage",
  },
  {
    src: heroImage3,
    alt: "Australian driver network recruitment with delivery vans and national coverage",
  },
]

export default function Home() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentHeroSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  function scrollToSection(href: string) {
    setIsMenuOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#061322] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061322]/95 text-white shadow-lg shadow-slate-950/20 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            className="text-left text-2xl font-bold tracking-tight"
            onClick={() => scrollToSection("#home")}
            type="button"
          >
            AusDriver<span className="text-[#1683ff]">Hub</span>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                className="text-white/78 transition hover:text-white"
                onClick={() => scrollToSection(item.href)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              className="hidden h-11 rounded-lg bg-[#1683ff] px-5 font-semibold text-white shadow-lg shadow-blue-950/25 hover:bg-[#0f72e8] sm:inline-flex"
              onClick={() => scrollToSection("#register")}
              type="button"
            >
              <UserRound className="h-4 w-4" />
              Register
            </Button>
            <button
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-[#061322] px-4 pb-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-white/80 hover:bg-white/8 hover:text-white"
                  onClick={() => scrollToSection(item.href)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="mt-2 h-12 w-full rounded-lg bg-[#1683ff] font-semibold text-white hover:bg-[#0f72e8]"
                onClick={() => scrollToSection("#register")}
                type="button"
              >
                Register as a Driver
              </Button>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-[#061322] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(22,131,255,0.28),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_55%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-16 lg:pt-14">
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-blue-100">
                <ShieldCheck className="h-4 w-4 text-[#36a3ff]" />
                Australia-wide driver registration
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[0.95] tracking-tight min-[420px]:text-5xl sm:text-6xl lg:text-7xl">
                Join Australia's Driver Network
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-xl">
                Register your details with AusDriverHub and be considered for delivery driver opportunities across metro and regional Australia.
              </p>
              <div className="mt-8 grid gap-3 sm:flex">
                <Button
                  className="h-13 w-full rounded-lg bg-[#1683ff] px-7 text-base font-bold text-white shadow-xl shadow-blue-950/25 hover:bg-[#0f72e8] sm:w-auto"
                  onClick={() => scrollToSection("#register")}
                  type="button"
                >
                  <UserRound className="h-5 w-5" />
                  Register as a Driver
                </Button>
                <Button
                  className="h-13 w-full rounded-lg border border-white/25 bg-white/5 px-7 text-base font-bold text-white hover:bg-white/12 sm:w-auto"
                  onClick={() => navigate("/guide")}
                  type="button"
                  variant="outline"
                >
                  Start Guide
                  <FileText className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="group relative min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl shadow-slate-950/35 lg:min-h-[530px]">
              {heroSlides.map((slide, index) => (
                <img
                  alt={slide.alt}
                  className={`absolute inset-0 h-full min-h-[320px] w-full object-cover transition-opacity duration-700 lg:min-h-[530px] ${
                    index === currentHeroSlide ? "opacity-100" : "opacity-0"
                  }`}
                  key={slide.alt}
                  src={slide.src}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-[#061322]/80 via-[#061322]/20 to-transparent lg:from-[#061322]/45" />
              <button
                aria-label="Previous hero image"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#061322]/55 text-white opacity-100 backdrop-blur transition hover:bg-[#1683ff] sm:opacity-0 sm:group-hover:opacity-100"
                onClick={() => setCurrentHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
                type="button"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next hero image"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#061322]/55 text-white opacity-100 backdrop-blur transition hover:bg-[#1683ff] sm:opacity-0 sm:group-hover:opacity-100"
                onClick={() => setCurrentHeroSlide((current) => (current + 1) % heroSlides.length)}
                type="button"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/15 bg-[#061322]/55 px-3 py-2 backdrop-blur">
                {heroSlides.map((slide, index) => (
                  <button
                    aria-label={`Show hero image ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentHeroSlide ? "w-7 bg-[#1683ff]" : "w-2.5 bg-white/55 hover:bg-white"
                    }`}
                    key={slide.alt}
                    onClick={() => setCurrentHeroSlide(index)}
                    type="button"
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-3 rounded-lg border border-white/10 bg-white/8 p-3 backdrop-blur sm:grid-cols-3 lg:col-span-2 lg:max-w-4xl">
              {trustCards.map((card) => {
                const Icon = card.icon
                return (
                    <div key={card.title} className="flex min-w-0 items-center gap-4 rounded-lg border border-white/10 bg-[#071a2e]/70 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1683ff]">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    <div className="min-w-0">
                      <h2 className="text-base font-bold text-white">{card.title}</h2>
                      <p className="mt-1 text-sm leading-5 text-slate-300">{card.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-4 py-12 sm:px-6 lg:px-8" id="coverage">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-[#071a2e] sm:text-3xl">
                    Driver Opportunities Across Australia
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                    We are building a national driver database for future delivery opportunities in major cities and regional areas.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {cities.map((city) => {
                      const Icon = city.icon
                      return (
                        <div key={city.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center shadow-sm">
                          <Icon className="mx-auto h-9 w-9 text-[#1683ff]" />
                          <p className="mt-3 text-sm font-bold text-[#071a2e]">{city.name}</p>
                        </div>
                      )
                    })}
                  </div>
                  <p className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-slate-600">
                    <MapPin className="h-4 w-4 text-[#1683ff]" />
                    Regional areas across Australia are welcome.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-[#071a2e] sm:text-3xl">Who We Work With</h2>
                  <div className="mt-6 grid gap-3">
                    {driverTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <div key={type.title} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1683ff]">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-[#071a2e]">{type.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{type.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-4 pb-12 sm:px-6 lg:px-8" id="how-it-works">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#071a2e] sm:text-3xl">How It Works</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {steps.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1683ff] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <Icon className="h-10 w-10 text-[#1683ff]" />
                    </div>
                    <p className="mt-5 text-sm font-bold uppercase tracking-wide text-[#1683ff]">{item.step}</p>
                    <h3 className="mt-2 text-lg font-extrabold text-[#071a2e]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-4 pb-12 sm:px-6 lg:px-8" id="register">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.55fr]">
            <div className="rounded-lg bg-white p-5 shadow-xl shadow-slate-200/80 sm:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-extrabold tracking-tight text-[#071a2e] sm:text-3xl">Register as a Driver</h2>
                <p className="mt-2 text-base text-slate-600">
                  Submit your details to join the AusDriverHub driver database.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#1683ff]" />
                  <h3 className="mt-4 text-xl font-extrabold text-[#071a2e]">Registration received</h3>
                  <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
                    Thanks for submitting your details. This homepage form is ready for the driver database flow and does not change the existing onboarding form.
                  </p>
                  <Button
                    className="mt-5 rounded-lg bg-[#1683ff] text-white hover:bg-[#0f72e8]"
                    onClick={() => setSubmitted(false)}
                    type="button"
                  >
                    Submit another registration
                  </Button>
                </div>
              ) : (
                <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                  <Field label="Full name" name="fullName" placeholder="Enter your full name" required />
                  <Field label="Mobile number" name="mobile" placeholder="04XX XXX XXX" required type="tel" />
                  <Field label="Email" name="email" placeholder="you@example.com" required type="email" />
                  <SelectField label="State" name="state" options={states} placeholder="Select your state" required />
                  <Field label="City / Suburb" name="suburb" placeholder="Enter your suburb" required />
                  <Field label="Postcode" name="postcode" placeholder="Enter postcode" inputMode="numeric" required />
                  <div className="md:col-span-2">
                    <Button className="h-12 w-full rounded-lg bg-[#1683ff] text-base font-bold text-white hover:bg-[#0f72e8]" type="submit">
                      Submit Driver Registration
                      <Send className="h-5 w-5" />
                    </Button>
                    <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                      By submitting this form, you agree to be contacted about suitable driver opportunities. Registration does not guarantee work.
                    </p>
                    <button
                      className="mt-3 w-full text-center text-sm font-semibold text-[#1683ff] hover:text-[#0f72e8]"
                      onClick={() => navigate("/guide")}
                      type="button"
                    >
                      Already onboarded? Continue to guide
                    </button>
                  </div>
                </form>
              )}
            </div>

            <aside className="rounded-lg border border-blue-900/30 bg-[#061322] p-6 text-white shadow-xl shadow-slate-200/80">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1683ff]/40 bg-[#1683ff]/15">
                <ClipboardCheck className="h-7 w-7 text-[#36a3ff]" />
              </div>
              <h2 className="mt-8 text-3xl font-extrabold leading-tight">Job Board Coming Soon</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                We are preparing a driver opportunity board for different Australian cities and regions. Register now to be included in our driver database.
              </p>
              <Button
                className="mt-7 h-12 w-full rounded-lg bg-[#1683ff] font-bold text-white hover:bg-[#0f72e8]"
                onClick={() => scrollToSection("#register")}
                type="button"
              >
                Register First
              </Button>
            </aside>
          </div>
        </section>

        <section className="bg-slate-100 px-4 pb-14 sm:px-6 lg:px-8" id="faq">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.55fr_1fr]">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-[#071a2e] sm:text-3xl">Frequently Asked Questions</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Clear answers for drivers registering interest with AusDriverHub.
                </p>
              </div>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[#071a2e]">
                      {faq.question}
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#1683ff] transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#061322] px-4 py-10 text-white sm:px-6 lg:px-8" id="contact">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold">AusDriver<span className="text-[#1683ff]">Hub</span></h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
              Connecting Australia's drivers with future delivery opportunities.
            </p>
            <p className="mt-4 text-sm font-semibold text-blue-100">Australia-wide driver registration platform.</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">Footer links</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <button key={item.href} className="text-left hover:text-white" onClick={() => scrollToSection(item.href)} type="button">
                  {item.label}
                </button>
              ))}
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">For drivers</h3>
            <button className="mt-4 text-left text-sm font-semibold text-[#36a3ff] hover:text-white" onClick={() => scrollToSection("#register")} type="button">
              Register your details
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
  inputMode,
}: {
  label: string
  name: string
  placeholder: string
  required?: boolean
  type?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]
}) {
  return (
    <div>
      <label className="text-sm font-bold text-[#071a2e]" htmlFor={name}>
        {label}
        {required && <span className="text-[#1683ff]"> *</span>}
      </label>
      <input
        className="mt-1 h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#1683ff] focus:ring-4 focus:ring-blue-100"
        id={name}
        inputMode={inputMode}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  )
}

function SelectField({
  label,
  name,
  options,
  placeholder,
  required,
}: {
  label: string
  name: string
  options: string[]
  placeholder: string
  required?: boolean
}) {
  return (
    <div>
      <label className="text-sm font-bold text-[#071a2e]" htmlFor={name}>
        {label}
        {required && <span className="text-[#1683ff]"> *</span>}
      </label>
      <select
        className="mt-1 h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-[#1683ff] focus:ring-4 focus:ring-blue-100"
        defaultValue=""
        id={name}
        name={name}
        required={required}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
