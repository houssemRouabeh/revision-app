import React, { useEffect, useState } from "react";
import { addProduct, editProduct, getallProducts } from "../services/service";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getaProducts();
  }, []);

  const getaProducts = async () => {
    const product = await getallProducts(params.id);
    setProductDetails(product.data);
  };
  const initialValues = {
    id: params.id,
    name: "",
    price: 0,
    like: 0,
    quantity: 0,
    description: "",
  };
  const [productDetails, setProductDetails] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const { name, price, quantity, description } = productDetails;
  const onChangeProduct = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = validate(productDetails);
    setFormErrors(res);

    if (Object.keys(formErrors).length === 0) {
      const result = await editProduct(params.id, productDetails);
      navigate("/");
    }
  };
  const validate = (values) => {
    const error = {};
    if (!values.name) {
      error.name = "Product name can not be empty !";
    }
    if (!values.price) {
      error.price = "Product price can not be empty !";
    } else if (values.price <= 0) {
      error.price = "Product price can not be < 0 !";
    }
    if (!values.quantity) {
      error.quantity = "Product quantity can not be empty !";
    } else if (values.quantity <= 0) {
      error.quantity = "Product quantity can not be <= 0 !";
    }
    if (!values.description) {
      error.description = "Product description can not be empty !";
    }
    return error;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          maxWidth: "500px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "auto",
        }}
      >
        <form
          style={{
            blockSize: "fit-content",
            width: "70%",
            border: "1px solid #dfdfdf",
            padding: "20px",
            borderRadius: "20px",
          }}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h1>Product details</h1>
          <div style={{ marginBottom: "20px", height: "50px" }}>
            <label id="name">Product Name: </label>
            <input
              style={{ borderRadius: "5px" }}
              type="text"
              name="name"
              value={name}
              onChange={(e) => onChangeProduct(e)}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.name}</p>
          <div style={{ marginBottom: "20px", height: "50px" }}>
            <label id="Price">Product Price: </label>
            <input
              style={{ borderRadius: "5px" }}
              type="number"
              name="price"
              value={price}
              onChange={(e) => onChangeProduct(e)}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.price}</p>
          <div style={{ marginBottom: "20px", height: "50px" }}>
            <label id="quantity">Product Quantity: </label>
            <input
              style={{ borderRadius: "5px" }}
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => onChangeProduct(e)}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.quantity}</p>
          <div style={{ marginBottom: "20px", height: "50px" }}>
            <label id="description">Product Description: </label>
            <input
              style={{ borderRadius: "5px" }}
              type="text"
              name="description"
              value={description}
              onChange={(e) => onChangeProduct(e)}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.description}</p>
          <button
            style={{
              backgroundColor: "#0563b4",
              color: "white",
              width: "100%",
              border: "none",
              height: "50px",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
