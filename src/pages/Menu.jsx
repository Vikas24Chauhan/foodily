import React from "react";
import MenuHeader from "../components/menuHeader/MenuHeader";
import MenuIntro from "../components/menuIntro/MenuIntro";
import MenuVideo from "../components/menuVideo/MenuVideo";
import MenuList from "../components/menuList/MenuList";

function Menu() {
  return (
    <div>
      <MenuHeader />
      <MenuIntro />
      <MenuVideo />
      <MenuList />
    </div>
  );
}

export default Menu;
