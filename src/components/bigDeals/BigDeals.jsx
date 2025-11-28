import React from "react";
import "./BigDeals.css";
import Shape1 from "../../assets/images/home/bottom_pattern_1.png";
import Shape2 from "../../assets/images/home/bottom_pattern_2.png";

function BigDeals() {
  return (
    <div className="bigDeals-container">
      <img className="bigDeals-image-1" src={Shape1} alt="" />
      <div className="bigDeals-content">
        <h5>30% Off For juice</h5>
        <h1>Big Deals of the Week</h1>
        <p>
          Us percipit urbanitas referrentur ea. Mei at numquam molestiae
          intellegam. Ansed dictas accumsan.
        </p>
        <h4>To Get New Of Our Deals</h4>
        {/* <form method="post">
          <input type="email" placeholder="type your email" name="email" />
          <button type="submit" class="submit-btn">
            <span class="icon flaticon-send"></span>
          </button>
        </form> */}
      </div>
      <img className="bigDeals-image-2" src={Shape2} alt="" />
    </div>
  );
}

export default BigDeals;
