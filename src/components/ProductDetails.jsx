import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getallProducts } from "../services/service";
import Card from "./Card";
import { deleteProduct } from "../services/service";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState();
  const deleteProd = async (idProduct) => {
    const result = await deleteProduct(idProduct);
  };
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
        <Card
          key={productDetail.id}
          product={productDetail}
          delete={deleteProd}
        />
      )}
    </div>
  );
};

export default ProductDetails;
