import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getallProducts } from "../services/service";
import Card from "./Card";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState();
  const { id } = useParams();
  const getProduct = async (idProduct) => {
    const result = await getallProducts(idProduct);
    setProductDetail(result.data);
  };
  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div>
      {productDetail === undefined ? (
        <h1>error product not found</h1>
      ) : (
        <Card key={productDetail.id} product={productDetail} />
      )}
    </div>
  );
};

export default ProductDetails;
