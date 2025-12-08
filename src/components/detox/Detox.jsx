import React from "react";
import "./Detox.css";
import Divider from "../../assets/images/home/divider_img.png";
import DetoxRecipe from "../../assets/images/home/detox_recipe.png";
import DetoxRecipe1 from "../../assets/images/home/detox_recipe-1.png";
import DetoxRecipe2 from "../../assets/images/home/detox_recipe-2.png";
import DetoxRecipe3 from "../../assets/images/home/detox_recipe-3.png";
import DetoxRecipe4 from "../../assets/images/home/detox_recipe-4.png";
import DetoxIcon1 from "../../assets/images/home/detox_icon-1.png";
// import DetoxIcon2 from "../../assets/images/home/detox_icon-2.png";

function Detox() {
  const detoxData1 = [
    {
      image: DetoxRecipe1,
      name: "Cucumber",
      desc: "Us percipit urbanitas referrentur ea. Mei at numquam molestiae",
    },
    {
      image: DetoxRecipe2,
      name: "Apple",
      desc: "Us percipit urbanitas referrentur ea. Mei at numquam molestiae",
    },
  ];

  const detoxData2 = [
    {
      image: DetoxRecipe3,
      name: "Lemon",
      desc: "Us percipit urbanitas referrentur ea. Mei at numquam molestiae",
    },
    {
      image: DetoxRecipe4,
      name: "Fresh Water",
      desc: "Us percipit urbanitas referrentur ea. Mei at numquam molestiae",
    },
  ];

  return (
    <div className="detox-container">
      <div className="detox-header-contant">
        <h5>Best for You</h5>
        <h1>
          Detox Smoothie <span>Recipe</span>
        </h1>
        <img src={Divider} alt="" />
      </div>

      <section className="detox-main-section">
        <div className="detox-section-1">
          {detoxData1.map((data, index) => (
            <div className="detox-card-1" key={index}>
              <div className="detox-card-1-content">
                <h4>{data.name}</h4>
                <p>{data.desc}</p>
              </div>
              <div className="detox-card-1-image">
                <img src={data.image} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className="detox-section-2">
          <img src={DetoxRecipe} alt="" />
        </div>

        <div className="detox-section-3">
          {detoxData2.map((data, index) => (
            <div className="detox-card-3" key={index}>
              <div className="detox-card-3-content">
                <h4>{data.name}</h4>
                <p>{data.desc}</p>
              </div>
              <div className="detox-card-3-image">
                <img src={data.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Detox;
