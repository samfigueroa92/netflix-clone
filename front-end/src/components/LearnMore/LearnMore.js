//styling
import "./LearnMore.css";
import logo from "../../images/flixnet_logo.png";

import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="LearnMore">
      <div className="LearnMore-navbar">
        <Link to="/">
          <img src={logo} alt="flixnet-logo" />
        </Link>
        <button type="submit">Sign In</button>
      </div>
      <div className="LearnMore-container">
      <div className="LearnMore-content">
        <h1>Choose the plan that's right for you</h1>
        <ul>
          <li>
            <span>
              <i class="fa-solid fa-check"></i>{" "}
            </span>
            Watch all you want.
          </li>
          <li>
            <span>
              <i class="fa-solid fa-check"></i>{" "}
            </span>
            Recommendations just for you.
          </li>
          <li>
            <span>
              <i class="fa-solid fa-check"></i>{" "}
            </span>
            Change or cancel your plan anytime.
          </li>
        </ul>
      </div>
      <div className="LearnMore-bubbles">
        <p className="bubble">Standard with ads</p>
        <p className="bubble">Standard</p>
        <p className="bubble">Premium</p>
      </div>
      <div className="LearnMore-table">
        <table>
          <tr>
            <td>Monthly price</td>
            <td><span>$6.99</span></td>
            <td><span>$15.49</span></td>
            <td><span>$22.99</span></td>
          </tr>
          <tr>
            <td>Video quality</td>
            <td><span>Great</span></td>
            <td><span>Great</span></td>
            <td><span>Best</span></td>
          </tr>
          <tr>
            <td>Resolution</td>
            <td><span>1080p</span></td>
            <td><span>1080p</span></td>
            <td><span>4K+HDR</span></td>
          </tr>
          <tr>
            <td>Watch on your TV, computer, mobile phone and tablet</td>
            <td>
              <span><i class="fa-solid fa-check"></i></span>
            </td>
            <td>
            <span><i class="fa-solid fa-check"></i></span>
            </td>
            <td>
            <span><i class="fa-solid fa-check"></i></span>
            </td>
          </tr>
          <tr>
            <td>Number of devices for downloads</td>
            <td><span>2</span></td>
            <td><span>2</span></td>
            <td><span>6</span></td>
          </tr>
        </table>
      </div>
      </div>
    </div>
  );
};

export default LearnMore;
