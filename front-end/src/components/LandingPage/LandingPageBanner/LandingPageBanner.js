//styling
import "./LandingPageBanner.css";

//images
import logo from "../../../images/netflix-logo-png-large.png";

const LandingPageBanner = () => {
  return (
    <div className="LandingPageBanner">
      <div className="LandingPageBanner_content">
        <div className="LandingPageBanner_content_navbar">
          <img src={logo} alt="netflix-logo" />
          <button>Sign In</button>
        </div>
        <div className="LandingPageBanner_content_text">
            <div className="LandingPageBanner_content_text_line one">Unlimited movies, TV shows, and more</div>
            <div className="LandingPageBanner_content_text_line two"> Watch anywhere. Cancel anytime.</div>
            <div className="LandingPageBanner_content_text_line three">Ready to watch? Enter your email to create or restart your membership.</div>
        </div>
        <div className="LandingPageBanner_content_input">
          <input type='text' placeholder="Email Address"></input>
          <button>Get Started {'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageBanner;
