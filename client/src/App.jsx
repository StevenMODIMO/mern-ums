import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import Navbar from "./components/Navbar"
import Enroll from "./pages/Enrollment"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import StudentDashboard from "./pages/StudentDashboard"
import LectureDashboard from "./pages/LectureDashboard"
import EnrollLecture from "./pages/Enroll-Lecture"
import LoginStaff from "./pages/LoginStaff"

function App() {
  const { user } = useAuth()
  return (
    <div className="text-black-400 font-mono text-2xl">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/enroll-staff" element={<EnrollLecture />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-staff" element={<LoginStaff />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/lecture" element={<LectureDashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App