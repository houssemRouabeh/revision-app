import "./App.css";
import { Route, Routes } from "react-router";
import Product from "./components/Product";
import Test from "./components/Test";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="test" element={<Test />} />
        <Route path=":id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
