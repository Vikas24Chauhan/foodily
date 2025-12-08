import React from "react";
import Header from "../components/header/Header";
import FruitJuices from "../components/fruitJuices/FruitJuices";
import OurBeverage from "../components/ourBeverage/OurBeverage";
import BigDeals from "../components/bigDeals/BigDeals";
import Detox from "../components/detox/Detox";

function Home() {
  return (
    <div>
      <Header />
      <FruitJuices />
      <OurBeverage />
      <BigDeals />
      <Detox />
    </div>
  );
}

export default Home;
