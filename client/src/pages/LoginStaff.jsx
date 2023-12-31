import { useState } from "react";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export default function LoginStaff() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { user, dispatch } = useAuth()
  const navigate = useNavigate()

  const handleSubmission = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/app/lecture/login-staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, password }),
    });

    const json = await response.json();

    if (response.ok) {
        setId("");
      setPassword("");
      setError(null);
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      navigate("/role")
    }

    if (!response.ok) {
        setId("");
      setPassword("");
      setError(json.error);
    }
  };
  return (
    <main>
      <div>
        <form onSubmit={handleSubmission} onFocus={() => setError(null)}>
          <label>Staff Id:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border-2 border-red-900"
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-red-900"
          />
          <label className="w-full flex justify-center">
          <button className="border-2 border-red-900">Login</button>
          </label>
          {error && <div className="bg-red-500 text-center">{error}</div>}
        </form>
      </div>
    </main>
  );
}
