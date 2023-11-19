import { useNavigate } from "react-router-dom";

//styling
import "./LandingPageBanner.css";

//images
import logo from "../../../images/flixnet_logo.png"

//components
import EmailForm from "../EmailForm/EmailForm";


const LandingPageBanner = ({ setRegistrationEmail, registrationEmail }) => {

  const navigate = useNavigate();


  return (
    <div className="LandingPageBanner">
      <div className="LandingPageBanner_content">
        <div className="LandingPageBanner_content_navbar">
          <img src={logo} alt="flixnet-logo" />
          <button type="submit" onClick={() => navigate('/sign-in')}>Sign In</button>
        </div>
        <div className="LandingPageBanner_content_text">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p> Watch anywhere. Cancel anytime.</p>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <EmailForm setRegistrationEmail={setRegistrationEmail} registrationEmail={registrationEmail} />
        </div>
      </div>
    </div>
  );
};

export default LandingPageBanner;
