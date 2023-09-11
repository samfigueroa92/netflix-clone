//styling
import "./AdvertisementBanner.css";

//images
import popcorn from "../../../images/popcorn_icon.png";

const AdvertisementBanner = () => {
  return (
    <div className="AdvertisementBanner">
      <img src={popcorn} alt="popcorn" />
      <div className="AdvertisementBanner_text">
        <div className="AdvertisementBanner_text_header">The Netflix you love for just $6.99.</div>
        <div className="AdvertisementBanner_text_subheader">Get the Standard with ads plan.</div>
        <div className="AdvertisementBanner_text_link"><span>Learn More</span> {">"}</div>
      </div>
    </div>
  );
};

export default AdvertisementBanner;
