//components
import LandingPageBanner from "./LandingPageBanner/LandingPageBanner";
import AdvertisementBanner from "./OtherBanners/AdvertisementBanner";

//styling
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <LandingPageBanner />
            <AdvertisementBanner />
        </div>
    );
};

export default LandingPage;