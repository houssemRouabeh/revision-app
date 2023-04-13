import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div
      style={{
        width: "200px",
        height: "500px",
        backgroundColor: "orange",
        border: "1px solid gray",
      }}
    >
      <div>
        <NavLink to={`${props.product.id}`}>{props.product.name}</NavLink>
      </div>
      <div>{props.product.description}</div>
      <div>{props.product.price}</div>
      <div>{props.product.quantity}</div>
      <div>{props.product.like}</div>
    </div>
  );
};

export default Card;
