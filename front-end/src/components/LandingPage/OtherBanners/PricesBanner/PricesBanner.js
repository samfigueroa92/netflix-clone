//styling
import "./PricesBanner.css";

//images
import popcorn from "../../../../images/popcorn_icon.png";

const PricesBanner = () => {
  return (
    <div className="PricesBanner">
      <img src={popcorn} alt="popcorn" />
      <div className="PricesBanner_text">
        <div className="PricesBanner_text_header">The Flixnet you love for just $6.99.</div>
        <div className="PricesBanner_text_subheader">Get the Standard with ads plan.</div>
        <div className="PricesBanner_text_link"><a href="/learn-more">Learn More {">"}</a></div>
      </div>
    </div>
  );
};

export default PricesBanner;