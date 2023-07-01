import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext"
import Navbar from "./components/Navbar"
import Enroll from "./pages/Enrollment"
import Landing from "./pages/Landing"

function App() {
  const { user } = useAuth()
  return (
    <div className="text-black-400 font-mono text-2xl">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App