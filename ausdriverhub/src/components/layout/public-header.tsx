import { useNavigate } from "react-router-dom"
import { Truck as TruckIcon, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PublicHeader() {
  const navigate = useNavigate()

  return (
    <header className="border-b border-white/10 bg-[#03101f]/95 text-white shadow-xl shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button className="flex items-center gap-3 text-left" onClick={() => navigate("/")} type="button">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1683ff] text-white shadow-lg shadow-blue-950/30">
            <TruckIcon className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold leading-none tracking-tight">
              AusDriver<span className="text-[#1683ff]">Hub</span>
            </h1>
            <p className="mt-1 text-xs font-medium text-slate-300">Driver Onboarding Portal</p>
          </div>
        </button>
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
    </header>
  )
}
