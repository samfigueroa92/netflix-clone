//styling
import "./PricesBanner.css";

//images
import popcorn from "../../../../images/popcorn_icon.png";

const PricesBanner = () => {
  return (
    <div className="PricesBanner">
      <img src={popcorn} alt="popcorn" />
      <div className="PricesBanner_text">
        <div className="PricesBanner_text_header">The Netflix you love for just $6.99.</div>
        <div className="PricesBanner_text_subheader">Get the Standard with ads plan.</div>
        <div className="PricesBanner_text_link"><span>Learn More</span> {">"}</div>
      </div>
    </div>
  );
};

export default PricesBanner;