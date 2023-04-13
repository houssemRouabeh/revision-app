import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div
      style={{ width: "100%", height: "50px", backgroundColor: "blueviolet" }}
    >
      <NavLink to="/">
        <button> Product </button>
      </NavLink>

      <NavLink to="test">
        <button>Test</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
