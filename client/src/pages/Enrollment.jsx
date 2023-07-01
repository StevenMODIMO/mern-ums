import { useState } from "react";
import Registration from "../components/Registration";
import Thankyou from "../components/Thankyou";
import Admit from "../components/Admit";
import Qualify from "../components/Qualification";

export default function Enroll() {
  const [registered, setRegistered] = useState(false);
  const [qualified, setQualified] = useState(false);
  const [admit, setAdmit] = useState(false);
  const [id,setId] = useState("")
  const handleRegistrationSuccess = () => {
    setRegistered(true);
  };
  const handleAdmissionSuccess = () => {
    setAdmit(true);
  };

  const handleQualificationSuccess = () => {
    setQualified(true);
  };
  return (
    <div>
      {!registered && !admit && !qualified && (
        <Registration onSuccess={handleRegistrationSuccess} setRegistered={setRegistered} />
      )}

      {registered && !admit && !qualified && (
        <Qualify onSuccess={handleQualificationSuccess} setId={setId} setRegistered={setRegistered} />
      )}

      {registered && qualified && !admit && (
        <Admit onSuccess={handleAdmissionSuccess} id={id} />
      )}

      {registered && admit && qualified && <Thankyou />}
    </div>
  );
}
