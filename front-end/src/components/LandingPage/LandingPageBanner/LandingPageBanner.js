//styling
import "./LandingPageBanner.css";

//images
import logo from "../../../images/netflix-logo-png-large.png";

//components
import EmailForm from "../EmailForm/EmailForm";


const LandingPageBanner = () => {


  return (
    <div className="LandingPageBanner">
      <div className="LandingPageBanner_content">
        <div className="LandingPageBanner_content_navbar">
          <img src={logo} alt="netflix-logo" />
          <button>Sign In</button>
        </div>
        <div className="LandingPageBanner_content_text">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p> Watch anywhere. Cancel anytime.</p>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default LandingPageBanner;
