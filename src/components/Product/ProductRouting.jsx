import React from "react";
import { Routes, Route } from "react-router";
import ProductForm from "./ProductForm";
import ProductDetails from "./ProductDetails";
import Update from "./Update";
import Product from "./Product";

const ProductRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/add" element={<ProductForm />} />
      <Route path="detail" element={<ProductDetails />} />
      <Route path="update/:id" element={<Update />} />
    </Routes>
  );
};

export default ProductRouting;
