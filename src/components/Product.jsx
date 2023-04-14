import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getallProducts } from "../services/service";
import { deleteProduct } from "../services/service";

const Product = () => {
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
    <div style={{ display: "flex", gap: "50px", margin: "50px" }}>
      {products}
    </div>
  );
};

export default Product;
