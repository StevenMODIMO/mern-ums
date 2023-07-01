import { useState } from "react";
import RegisterLecture from "../components/Register-Lecture";
import Thankyou from "../components/Thankyou";
import AdmitLecture from "../components/Admit-Lecture";

export default function EnrollLecture() {
  const [registered, setRegistered] = useState(false);
  const [admit, setAdmit] = useState(false);
  const [id, setId] = useState("");
  const handleRegistrationSuccess = () => {
    setRegistered(true);
  };
  const handleAdmissionSuccess = () => {
    setAdmit(true);
  };

  
  return (
    <div>
      {!registered && !admit  && (
        <RegisterLecture
          onSuccess={handleRegistrationSuccess}
          setRegistered={setRegistered}
        />
      )}

      {registered  && !admit && (
        <AdmitLecture onSuccess={handleAdmissionSuccess} setId={setId} />
      )}

      {registered && admit  && <Thankyou id={id} />}
    </div>
  );
}
