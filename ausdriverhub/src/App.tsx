import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import { ProtectedRoute } from "@/components/protected-route"
import Home from "@/pages/home"
import Jobs from "@/pages/jobs"
import OnboardingGuide from "@/pages/onboarding-guide"
import RegistrationForm from "@/pages/registration/registration-form"
import AdminLogin from "@/pages/admin/login"
import AdminDashboard from "@/pages/admin/dashboard"
import DriverDetail from "@/pages/admin/driver-detail"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/guide" element={<OnboardingGuide />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/drivers/:id"
          element={
            <ProtectedRoute>
              <DriverDetail />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
