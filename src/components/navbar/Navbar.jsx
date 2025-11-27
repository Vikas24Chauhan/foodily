import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/images/logo.png";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  };

  return (
    <header className="nav-container">
      <div className="nav-logo">
        <img src={Logo} alt="website logo" />
      </div>

      <nav className={showNav ? "mobile-nav" : "web-nav"}>
        <NavLink to="/" onClick={handleCloseNav}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={handleCloseNav}>
          About
        </NavLink>
        <NavLink to="/menu" onClick={handleCloseNav}>
          Menu
        </NavLink>
        <NavLink to="/gallery" onClick={handleCloseNav}>
          Gallery
        </NavLink>
        <NavLink to="/blog" onClick={handleCloseNav}>
          Blog
        </NavLink>
        <NavLink to="/contact" onClick={handleCloseNav}>
          Contact
        </NavLink>
      </nav>

      <div className="hamburger">
        <button onClick={handleButtonToggle}>
          <RxHamburgerMenu />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
