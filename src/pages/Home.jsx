import React from "react";
import Header from "../components/header/Header";
import FruitJuices from "../components/fruitJuices/FruitJuices";
import OurBeverage from "../components/ourBeverage/OurBeverage";
import BigDeals from "../components/bigDeals/BigDeals";

function Home() {
  return (
    <div>
      <Header />
      <FruitJuices />
      <OurBeverage />
      <BigDeals />
    </div>
  );
}

export default Home;
