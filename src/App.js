import "./App.css";
import { Route, Routes } from "react-router";
import Product from "./components/Product";
import Test from "./components/Test";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
