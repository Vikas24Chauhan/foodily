import React from "react";
import Header from "../components/header/Header";
import FruitJuices from "../components/fruitJuices/FruitJuices";
import OurBeverage from "../components/ourBeverage/OurBeverage";

function Home() {
  return (
    <div>
      <Header />
      <FruitJuices />
      <OurBeverage />
    </div>
  );
}

export default Home;
