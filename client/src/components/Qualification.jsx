import { useState } from "react";

export default function Qualify({ onSuccess,setId,setRegistered }) {
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState("");

  const handleSubmission = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/app/student/qualify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, grade }),
    });

    const json = await response.json();

    if (response.ok) {
      setId(json.id)
      setEmail("");
      setGrade("");
      setError(null);
      onSuccess();
    }

    if (!response.ok) {
      setEmail("");
      setGrade("");
      setError(json.error);
    }
  };
  return (
    <div>
        <h1 className="text-center">Check Qualification</h1>
        <button onClick={() => setRegistered(false)}>Go Back</button>
      <main>
        <form
          className="text-lg mx-3 py-2 px-1 shadow-xl"
          onSubmit={handleSubmission}
          onFocus={() => setError(null)}
        >
          <label>Email:</label>
          <input
            className="border-2 border-red-900 w-full outline-none mb-3"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mx-auto mt-3">Choose currency:</label>
              <select
                className="border-2 border-yellow-400 p-1 outline-none w-40 mx-auto rounded"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              >
                <option className="text-sm">Choose....</option>
                <option className="text-sm" value="A">
                  A
                </option>
                <option className="text-sm" value="B">
                  B
                </option>
                <option className="text-sm" value="C">
                  C
                </option>
                <option className="text-sm" value="D">
                  D
                </option>
                <option className="text-sm" value="F">
                  F
                </option>
              </select>
          <label className="flex justify-center w-full">
            <button className="border-2 border-red-900">Submit</button>
          </label>
          {error && <div className="bg-red-500 text-center m-1">{error}</div>}
        </form>
      </main>
    </div>
  );
}
