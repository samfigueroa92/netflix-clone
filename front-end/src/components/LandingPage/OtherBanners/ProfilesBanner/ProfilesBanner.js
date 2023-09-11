//styling
import "./ProfilesBanner.css"

//images
import profiles from "../../../../images/create_profile_for_kids_img.png";

const ProfilesBanner = () => {
    return (
        <div className="ProfilesBanner">
            <div className="ProfilesBanner_text">
            <h2>
            Create profiles for kids
            </h2>
            <p>
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
            </p>
            </div>
            <img src={ profiles } alt="profiles" />
        </div>
    );
};

export default ProfilesBanner;