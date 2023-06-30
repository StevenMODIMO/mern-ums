import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Enroll() {
  const [first, setFirst] = useState("");
  const [middle, setMiddle] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const handleSubmission = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.roken}`,
      },
      body: JSON.stringify({
        first_name: first,
        middle_name: middle,
        last_name: last,
        email,
        password,
      }),
    });

    const json = await response.json();

    if (response.ok) {
      setFirst("");
      setMiddle("");
      setLast("");
      setEmail("");
      setPassword("");
      setError(null);
    }

    if (!response.ok) {
      setFirst("");
      setMiddle("");
      setLast("");
      setEmail("");
      setPassword("");
      setError(true);
    }
  };
  return (
    <div>
      <header>Enroll Now</header>
      <main>
        <form className="text-lg mx-3 py-2 px-1 shadow-xl" onSubmit={handleSubmission} onFocus={() => setError(null)}>
          <label>First Name:</label>
          <input
            type="text"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            className="border-2 border-red-900 w-full outline-none mb-3"
          />
          <label>Middle Name:</label>
          <input
            type="text"
            value={middle}
            onChange={(e) => setMiddle(e.target.value)}
            className="border-2 border-red-900 w-full outline-none mb-3"
          />
          <label>Last Name:</label>
          <input
            type="text"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            className="border-2 border-red-900 w-full outline-none mb-3"
          />
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-red-900 w-full outline-none mb-3"
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-red-900 w-full outline-none mb-3"
          />
          <label className="flex justify-center w-full">
            <button className="border-2 border-red-900">Submit</button>
          </label>
          {error && <div>{error}</div>}
        </form>
      </main>
    </div>
  );
}
