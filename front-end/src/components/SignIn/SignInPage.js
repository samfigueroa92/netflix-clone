//styling
import "./SignInPage.css";

//images
import logo from "../../images/flixnet_logo.png";

//dependencies
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle, sendPasswordReset } from "../../Services/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="SignInPage">
      <div className="SignInPage_logo">
        <Link to="/">
          <img src={logo} alt="flixnet-logo" />
        </Link>
      </div>
      <div className="SignInPage_container">
        <div className="SignInPage_content-box">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => logInWithEmailAndPassword(email, password)}>Sign In</button>
          <div className="SignInPage_content-box_link">
          <a onClick={sendPasswordReset}>Forgot Password</a>
          </div>
          <button onClick={() => signInWithGoogle(email, password)}>Sign In With Google <i class="fa-brands fa-google"></i></button>
          <div className="SignInPage_content-box_text">
            New to Flixnet? <a href="/">Sign Up now.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
