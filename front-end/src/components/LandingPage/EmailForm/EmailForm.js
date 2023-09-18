//styling
import "./EmailForm.css";

const EmailInput = () => {
  return (
    <div className="EmailForm">
      <form type="submit">
        <input type="text" placeholder="Email address"></input>
        <button>Get Started {">"}</button>
      </form>
    </div>
  );
};

export default EmailInput;
