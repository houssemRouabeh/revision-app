import React from "react";
import { NavLink } from "react-router-dom";

const listStyle = {
  color: "white",
  listStyleType: "none",
  fontSize: "24px",
};
const NavBar = () => {
  return (
    <ul
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "blueviolet",
        display: "flex",
        gap: "50px",
        alignItems: "center",
      }}
    >
      <NavLink to="/">
        <li style={listStyle}> Product </li>
      </NavLink>

      <NavLink to="test">
        <li style={listStyle}>Test</li>
      </NavLink>
    </ul>
  );
};

export default NavBar;
