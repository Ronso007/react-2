import "./Nav.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to={"/"}>The shoe store</NavLink>
      <NavLink to={"/cart"}>My cart</NavLink>
    </nav>
  );
}

export default Nav;
