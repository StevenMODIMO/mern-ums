import { useState } from "react";;

export default function Registration({onSuccess,setRegistered}) {
  const [first, setFirst] = useState("");
  const [middle, setMiddle] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmission = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/app/student/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      onSuccess()
    }

    if (!response.ok) {
      setFirst("");
      setMiddle("");
      setLast("");
      setEmail("");
      setPassword("");
      setError(json.error);
    }
  };
  return (
    <div>
      <h1 className="text-center">Register</h1>
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
          {error && <div className="bg-red-500 text-center m-1">{error}</div>}
        </form>
      </main>

      <section>
        <h1>Or? <span className="underline" onClick={() => setRegistered(true)}>Countinue</span> if you have an account</h1>
      </section>
    </div>
  );
}
