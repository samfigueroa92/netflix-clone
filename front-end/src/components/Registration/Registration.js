//styling
import "./Registration.css";
import logo from "../../images/flixnet_logo.png";

//dependencies
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../Services/Firebase";

const Registration = ({ registrationEmail }) => {
  const [email, setEmail] = useState(registrationEmail);
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if(user) navigate('/dashboard');
  }, [user, loading]);

  const handleRegister = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(email, password);
  }

  return (
    <div className="Registration">
      <div className="Registration-logo">
        <Link to="/">
          <img src={logo} alt="flixnet-logo" />
        </Link>
      </div>
      <div className="Registration-container">
        <div className="Registration-content">
          <div className="Registration-content-text">
            <h1>Create a password to start your membership</h1>
          </div>
          <div className="Registration-content-form">
            <form type="submit" onSubmit={handleRegister}>
              <input
                type="email"
                value={email}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                value={password}
                placeholder="Add a password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>
            <div>
              Already a member? <a href="/sign-in">Sign in here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
