import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar-style.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>Hello</h1>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-items">
            <div className="nav-link">Home</div>
          </li>
          <li className="nav-items">
            <div className="nav-link">Pricing</div>
          </li>
          <li className="nav-items">
            <div className="nav-link">FAQ</div>
          </li>
          <li className="nav-items">
            <div className="nav-link">Contact</div>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#ffffff" }}></FaBars>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
