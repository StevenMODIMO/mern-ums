import { NavLink } from "react-router-dom"

export default function Landing() {
    return (
        <main>
            <h1>Landing Page</h1>
            <NavLink to="/login">Login Now</NavLink>
            <NavLink to="/login-staff">Staff Login</NavLink>
        </main>
    )
}