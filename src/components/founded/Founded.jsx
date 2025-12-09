import React from "react";
import "./Founded.css";
import Divider from "../../assets/images/home/divider_img.png";
import Image1 from "../../assets/images/about/founded-image-1.jpg";
import Image2 from "../../assets/images/about/founded-image-2.png";

function Founded() {
  return (
    <div className="founded-container">
      <div className="founded-image">
        <img className="founded-image-1" src={Image1} alt="" />
        <img className="founded-image-2" src={Image2} alt="" />
      </div>
      <div className="founded-content">
        <h5>Our Vision and History</h5>
        <h1>
          Founded in 1970 by <span>Chairman Jay Martin</span>
        </h1>
        <img src={Divider} alt="" />
        <p>
          The Juice Plus+ Company has grown from a small, direct-sales company
          into a highly successful, privately held health and wellness company
          operatinLorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>Cras at mi luctus, tincidunt urna eu, posuere enim</li>
          <li>Vivamus elementum lorem vitae quam tincidunt</li>
          <li>Suspendisse accumsan eros eu erat condimentum</li>
        </ul>
      </div>
    </div>
  );
}

export default Founded;
