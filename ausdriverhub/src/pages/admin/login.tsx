import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Truck as TruckIcon, Loader as Loader2, CircleAlert as AlertCircle, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { supabase } from "@/lib/supabase"
import { cn } from "@/lib/utils"

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 加载保存的账号
  useEffect(() => {
    const savedEmail = localStorage.getItem("admin_email")
    const savedPassword = localStorage.getItem("admin_password")
    if (savedEmail) {
      setEmail(savedEmail)
      setRememberMe(true)
    }
    if (savedPassword) {
      setPassword(savedPassword)
    }
  }, [])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email || !password) { setError("Please enter your email and password."); return }
    setLoading(true)
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (authError) {
      setError(authError.message.toLowerCase().includes("invalid") ? "Incorrect email or password. Please try again." : authError.message)
    } else {
      // 保存或清除记住的账号密码
      if (rememberMe) {
        localStorage.setItem("admin_email", email)
        localStorage.setItem("admin_password", password)
      } else {
        localStorage.removeItem("admin_email")
        localStorage.removeItem("admin_password")
      }
      navigate("/admin/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-primary h-1.5 w-full" />
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm space-y-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-md">
                <TruckIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-foreground leading-none">AusDriverHub</p>
                <p className="text-xs text-muted-foreground mt-0.5">Administration Portal</p>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Admin Sign In</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Authorised personnel only</p>
            </div>
          </div>

          <Card className="border-border shadow-sm">
            <CardHeader className="pb-0 pt-5 px-5">
              <div className="h-1 w-8 rounded-full bg-accent" />
            </CardHeader>
            <CardContent className="px-5 pb-5 pt-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className={cn(error && "border-destructive/50")}
                    disabled={loading}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      className={cn("pr-10", error && "border-destructive/50")}
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                {error && (
                  <div className="flex items-start gap-2.5 rounded-lg bg-destructive/8 border border-destructive/20 px-3 py-2.5">
                    <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10"
                  disabled={loading}
                >
                  {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Signing in...</> : "Sign In"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground">
            AusDriverHub &copy; {new Date().getFullYear()} — Confidential System
          </p>
        </div>
      </div>
    </div>
  )
}
