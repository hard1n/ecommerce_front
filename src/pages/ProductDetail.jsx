import React from "react";
import Header from "../components/Header";

import productImg from "../data/image-product-2.jpg";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <main className="flex">
        <section className="w-1/2">
          <figure>
            <img src={productImg} alt="" />
          </figure>
        </section>
        <section className="w-1/2">
          <h1>Produc Detail</h1>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
