import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import { FetchProduct } from "../../firebase";
import { PiShoppingCart } from "react-icons/pi";

import productsData from "../data/products.json";

const Home = () => {
  /**  TESTING FIREBASE ***/
  const [productData, setProductData] = useState();
  useEffect(() => {
    const unsuscribe = FetchProduct(setProductData);
    return () => unsuscribe();
  }, []);

  return (
    <>
      <Header />
      <main className="h-screen">
        <HeroSection />
        <section className="p-4 md:columns-3">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
