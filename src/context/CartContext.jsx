import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productCount, setProductCount] = useState(1);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );

      if (productIndex === -1) {
        // Product is not in the cart, add it
        return [...prevCart, { product: product, qty: 1 }];
      } else {
        // Product is already in the cart, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          qty: updatedCart[productIndex].qty + 1,
        };
        return updatedCart;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, productCount, setProductCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
