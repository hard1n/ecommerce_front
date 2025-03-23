import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  console.log(cart);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );

      console.log("QTY: ", quantity);

      if (productIndex === -1) {
        // Product is not in the cart, add it
        return [...prevCart, { product: product, qty: quantity }];
      } else {
        // Product is already in the cart, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          qty: updatedCart[productIndex].qty + quantity,
        };
        return updatedCart;
      }
    });
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.product.id === productId) {
          // Update quantity for the matching product
          return {
            ...item,
            qty: newQuantity,
          };
        }
        return item;
      });
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
