import React from "react";
import Header from "../components/header/Header";
import FruitJuices from "../components/fruitJuices/FruitJuices";
import OurBeverage from "../components/ourBeverage/OurBeverage";
import BigDeals from "../components/bigDeals/BigDeals";
import Detox from "../components/detox/Detox";
import UpComing from "../components/upcoming/UpComing";
import Testimonials from "../components/testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Header />
      <FruitJuices />
      <OurBeverage />
      <BigDeals />
      <Detox />
      <UpComing />
      <Testimonials />
    </div>
  );
}

export default Home;
