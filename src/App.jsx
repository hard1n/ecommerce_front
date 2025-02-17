import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <h1 className="text-3xl font-bold underline">Ecommerce</h1>
        <div className="flex relative dark:bg-main-dark-bg"></div> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product-details" element={<ProductDetail />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
