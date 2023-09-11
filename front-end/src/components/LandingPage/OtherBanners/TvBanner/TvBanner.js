//styling
import "./TvBanner.css"

//images
import tv from "../../../../images/enjoy_on_your_tv_img.png";

const TvBanner = () => {
    return (
        <div className="TvBanner">
            <div className="TvBanner_text">
            <h2>
            Enjoy on your TV
            </h2>
            <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
            </div>
            <img src={ tv } alt="smart-tv-icon" />
        </div>
    );
};

export default TvBanner;