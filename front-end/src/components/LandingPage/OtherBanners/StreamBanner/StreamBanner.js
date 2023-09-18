//styling
import "./StreamBanner.css"

//images
import stream from "../../../../images/watch_everywhere_banner_img.png"

const StreamBanner = () => {
    return (
        <div className="StreamBanner">
            <img src={ stream } alt="streaming" />
            <div className="StreamBanner_text">
            <h2>
            Watch everywhere
            </h2>
            <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
            </div>
        </div>
    );
};

export default StreamBanner;