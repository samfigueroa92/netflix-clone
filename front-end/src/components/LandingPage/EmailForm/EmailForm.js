//styling
import "./EmailForm.css";

import { useNavigate } from "react-router-dom";

const EmailInput = ({ setRegistrationEmail, registrationEmail }) => {
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setRegistrationEmail(e.target.value);
  }

  return (
    <div className="EmailForm">
      <form type="submit">
        <input type="text" value={registrationEmail} placeholder="Email address" onChange={handleTextChange} ></input>
        <button onClick={() => navigate('/registration')} >Get Started {">"}</button>
      </form>
    </div>
  );
};

export default EmailInput;
