import React, { useEffect,useState } from "react";
import Card from "./Card";
import { getallProducts } from "../services/service";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getallProducts().then((response) => {
      setProducts(response.data);
    });
  });
  return (
    <div>
      {products.map((prod) => (
        <Card key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default Product;
