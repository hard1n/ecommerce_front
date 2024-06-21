import React, { createContext, useState } from "react";

export const CurrentProductContext = createContext();

export const CurrentProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const value = {
    selectedProduct,
    setSelectedProduct,
    handleProductClick,
  };

  return (
    <CurrentProductContext.Provider value={value}>
      {children}
    </CurrentProductContext.Provider>
  );
};
