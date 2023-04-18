import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getallProducts } from "../services/service";
import { deleteProduct } from "../services/service";
import { useNavigate } from "react-router";

const Product = () => {
  const navigat = useNavigate();
  const [products, setProducts] = useState([]);
  const deleteProd = async (idProduct) => {
    const result = await deleteProduct(idProduct);
  };
  useEffect(() => {
    getallProducts().then((response) => {
      setProducts(
        response.data.map((prod) => (
          <Card key={prod.id} product={prod} delete={deleteProd} />
        ))
      );
    });
  });
  return (
    <>
      <button onClick={() => navigat("/add")}>Add Product</button>
      <div style={{ display: "flex", gap: "50px", margin: "50px" }}>
        {products}
      </div>
    </>
  );
};

export default Product;
