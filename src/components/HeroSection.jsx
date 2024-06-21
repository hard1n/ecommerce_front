import React from "react";
import productData from "../data/products.json";

const HeroSection = () => {
  const currProduct = productData[0];

  console.log(currProduct.imgs[0]);

  return (
    <section
      className="flex h-1/3 p-4 bg-gradient-to-r from-light-grayish-blue orange-pale to-orange"
      style={{
        backgroundImage: `url(${currProduct.imgs[0]})`,
        backgroundSize: "cover",
      }}
    >
      <div className="my-4 items-center justify-between sm:justify-normal">
        <h2 className="">{currProduct.title}</h2>
        <p className="flex items-center text-3xl font-bold text-dark-blue">
          {`${currProduct.discount}% OFF`}
        </p>
        <span className="text-3xl text-orange-pale drop-shadow-custom">
          {currProduct.brand}
        </span>

        <button className="hidden flex justify-center items-center w-full sm:w-1/3 p-4 mt-4 sm:mt-0 rounded-full text-dark-blue font-bold bg-main-bg">
          <span className="ml-2">Buy Now</span>
        </button>
      </div>
      <div>{/* <img src={currProduct.imgs[0]} alt="" /> */}</div>
    </section>
  );
};

export default HeroSection;
