import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        backgroundColor: "orange",
        border: "1px solid gray",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div>
        <NavLink to={`${props.product.id}`}>{props.product.name}</NavLink>
      </div>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        {props.product.description}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div>Price: {props.product.price}</div>
        <div>Qté: {props.product.quantity}</div>
        <div>Like: {props.product.like}</div>
        <button
          style={{ marginTop: "15px", backgroundColor: "tomato" }}
          onClick={() => props.delete(props.product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
