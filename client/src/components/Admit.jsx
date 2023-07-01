import { useState } from "react";
import { BiCopy } from "react-icons/bi";

export default function Admit({ onSuccess, id }) {
  const [admission, setAdmission] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState(null);
  const tid = id.slice(-10)

  const handleSubmission = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/app/admit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ admission_no: admission, email, course }),
    });

    const json = await response.json();

    if (response.ok) {
      setAdmission("");
      setEmail("");
      setCourse("");
      setError(null);
      onSuccess();
    }

    if (!response.ok) {
      setAdmission("");
      setEmail("");
      setCourse("");
      setError(json.error);
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      const textToCopy = tid;
      await navigator.clipboard.writeText(textToCopy);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };
  return (
    <div>
      <section className="text-lg">
        <BiCopy onClick={handleCopyToClipboard} />
        <div>Use this {id.slice(-10)}</div>
      </section>
      <h1 className="text-center">Complete Admission</h1>
      <main>
        <form
          className="text-lg mx-3 py-2 px-1 shadow-xl"
          onSubmit={handleSubmission}
          onFocus={() => setError(null)}
        >
          <label>Admission No:</label>
          <input
            className="border-2 border-red-900 w-full outline-none mb-3"
            type="text"
            value={admission}
            onChange={(e) => setAdmission(e.target.value)}
          />
          <label>Email:</label>
          <input
            className="border-2 border-red-900 w-full outline-none mb-3"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
                className="border-2 border-yellow-400 p-1 outline-none w-40 mx-auto rounded"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option className="text-sm">Choose....</option>
                <option className="text-sm" value="Computer Science">
                Computer Science
                </option>
                <option className="text-sm" value="Civil Engineering">
                  Civil Engineering
                </option>
                <option className="text-sm" value="Law">
                  Law
                </option>
                <option className="text-sm" value="Business">
                  Business
                </option>
                <option className="text-sm" value="Arts">
                  Arts
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
