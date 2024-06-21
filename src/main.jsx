import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "../src/context/CartContext.jsx";
import { CurrentProductProvider } from "../src/context/CurrentProduct.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CurrentProductProvider>
  </React.StrictMode>
);
