import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-style">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/grandpa"}>Grandpa</Link>
      </nav>
      <button>Hire Me</button>
    </div>
  );
};

export default Header;
