//styling
import "./BannerContainer.css"

const BannerContainer = ({ children }) => {
    return (
        <div className="BannerContainer">
            { children }
        </div>
    );
};

export default BannerContainer;