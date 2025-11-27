import React from "react";
import "./OurBeverage.css";
import Beverage1 from "../../assets/images/home/beverage-1.jpg";
import Beverage2 from "../../assets/images/home/beverage-2.jpg";
import Beverage3 from "../../assets/images/home/beverage-3.jpg";
import Beverage4 from "../../assets/images/home/beverage-4.jpg";
import Beverage5 from "../../assets/images/home/beverage-5.jpg";
import Beverage6 from "../../assets/images/home/beverage-6.jpg";
import Beverage7 from "../../assets/images/home/beverage-7.jpg";
import Beverage8 from "../../assets/images/home/beverage-8.jpg";
import Divider from "../../assets/images/home/divider_img.png";

function OurBeverage() {
  const beverageData = [
    { image: Beverage1, name: "Milkshake", count: "3 products" },
    { image: Beverage2, name: "Frappe", count: "3 products" },
    { image: Beverage3, name: "Boba Drinks", count: "3 products" },
    { image: Beverage4, name: "Mojito", count: "3 products" },
    { image: Beverage5, name: "Slushy", count: "3 products" },
    { image: Beverage6, name: "Hot Chocolate", count: "3 products" },
    { image: Beverage7, name: "smoothie", count: "3 products" },
    { image: Beverage8, name: "coffee", count: "3 products" },
  ];

  return (
    <div className="beverage-container">
      <h5>Best for You</h5>
      <h1>
        Our <span>Beverage</span>
      </h1>
      <img src={Divider} alt="" />

      <div className="beverage-cards">
        {beverageData.map((data, index) => (
          <div className="beverage-card" key={index}>
            <div className="beverage-card-image-wrapper">
              <img src={data.image} alt={data.name} />
            </div>
            <h4>{data.name}</h4>
            <h6>{data.count}</h6>
          </div>
        ))}
      </div>

      <button>View All Products</button>
    </div>
  );
}

export default OurBeverage;
