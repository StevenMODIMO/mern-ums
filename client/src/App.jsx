import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Enroll from "./pages/Enrollment";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EnrollLecture from "./pages/Enroll-Lecture";
import LoginStaff from "./pages/LoginStaff";
import StudentView from "./pages/StudentView"

function App() {
  const { user } = useAuth();
  return (
    <div className="text-black-400 font-mono text-2xl">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={!user ? <Landing /> : <Navigate to="/" />} />
          <Route path="/enroll" element={!user ? <Enroll /> : <Navigate to="/" />} />
          <Route path="/enroll-staff" element={!user ? <EnrollLecture /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/login-staff" element={!user ? <LoginStaff /> : <Navigate to="/" />} />
          <Route path="/role" element={user && <Dashboard /> } />
          <Route path="/view/:id" element={user && <StudentView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
