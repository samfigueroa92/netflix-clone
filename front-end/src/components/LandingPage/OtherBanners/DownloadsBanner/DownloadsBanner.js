//styling
import "./DownloadsBanner.css"

//images
import downloads from "../../../../images/download_shows_img.png";

const DownloadsBanner = () => {
    return (
        <div className="DownloadsBanner">
            <img src={ downloads } alt="Downloadsing" />
            <div className="DownloadsBanner_text">
            <h2>
            Watch everywhere
            </h2>
            <p>
            Downloads unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
            </div>
        </div>
    );
};

export default DownloadsBanner;