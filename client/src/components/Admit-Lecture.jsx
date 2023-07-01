import { useState } from "react";
import { BiCopy } from "react-icons/bi";

export default function AdmitLecture({ onSuccess,setId,nid }) {
  const [level, setLevel] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState(null);

  const handleSubmission = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/app/admit-staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, level,course_instructing:course }),
    });

    const json = await response.json();

    if (response.ok) {
      console.log(json)
      setId(json._id)
      setLevel("");
      setEmail("");
      setCourse("");
      setError(null);
      onSuccess();
    }

    if (!response.ok) {
      setLevel("");
      setEmail("");
      setCourse("");
      setError(json.error);
    }
  };

 
  return (
    <div>
      <h1 className="text-center">Complete Admission</h1>
      <main>
        <form
          className="text-lg mx-3 py-2 px-1 shadow-xl"
          onSubmit={handleSubmission}
          onFocus={() => setError(null)}
        >
           <select
                className="border-2 border-yellow-400 p-1 outline-none w-40 mx-auto rounded"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option className="text-sm">Choose....</option>
                <option className="text-sm" value="Masters">
                Masters
                </option>
                <option className="text-sm" value="Phd">
                  Phd
                </option>
                <option className="text-sm" value="Doctor">
                  Doctor
                </option>
                <option className="text-sm" value="Professor">
                Professor
                </option>
                <option className="text-sm" value="Lecturerer">
                Lecturerer
                </option>
              </select>
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
              
          <label>Email:</label>
          <input
            className="border-2 border-red-900 w-full outline-none mb-3"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="flex justify-center w-full">
            <button className="border-2 border-red-900">Submit</button>
          </label>
          {error && <div className="bg-red-500 text-center m-1">{error}</div>}
        </form>
      </main>
    </div>
  );
}
