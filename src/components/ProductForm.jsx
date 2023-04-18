import React, { useState } from "react";
import { addProduct } from "../services/service";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: 0,
    like: 0,
    quantity: 0,
    description: "",
  });
  const { name, price, quantity, description } = productDetails;
  const onChangeProduct = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    console.log(productDetails);
  };
  const handleSubmit = async () => {
    const result = await addProduct(productDetails);
  };
  return (
    <>
      <form>
        <label id="name">Product Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => onChangeProduct(e)}
        />
        <label id="Price">Product Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => onChangeProduct(e)}
        />
        <label id="quantity">Product Quantity</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => onChangeProduct(e)}
        />
        <label id="description">Product Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => onChangeProduct(e)}
        />
        <button
          onClick={() => {
            handleSubmit();
            navigate("/");
          }}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default ProductForm;
