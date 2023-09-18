//components
import LandingPageBanner from "./LandingPageBanner/LandingPageBanner";
import PricesBanner from "./OtherBanners/PricesBanner/PricesBanner";
import TvBanner from "./OtherBanners/TvBanner/TvBanner";
import BannerContainer from "./BannerContainer/BannerContainer";
import StreamBanner from "./OtherBanners/StreamBanner/StreamBanner";
import ProfilesBanner from "./OtherBanners/ProfilesBanner/ProfilesBanner";
import DownloadsBanner from "./OtherBanners/DownloadsBanner/DownloadsBanner";

//styling
import "./LandingPage.css";
import Faq from "./Faq/Faq";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <LandingPageBanner />
      <PricesBanner />
      <BannerContainer>
        <TvBanner />
      </BannerContainer>
      <BannerContainer>
        <StreamBanner />
      </BannerContainer>
      <BannerContainer>
        <ProfilesBanner />
      </BannerContainer>
      <BannerContainer>
        <DownloadsBanner />
      </BannerContainer>
      <Faq />
    </div>
  );
};

export default LandingPage;
