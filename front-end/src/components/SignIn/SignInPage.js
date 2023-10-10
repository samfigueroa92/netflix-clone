//styling
import "./SignInPage.css";

//images
import logo from "../../images/flixnet_logo.png";

//components
import { Link } from "react-router-dom";

const SignInPage = () => {
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
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          <div className="SignInPage_content-box_text">
            New to Flixnet? <a href="/">Sign Up now.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
