import React, { useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { FaPlus, FaMinus } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";

import products from "../data/products.json";
import product1 from "../data/image-product-1.jpg";

import productData from "../data/products.json";
// Glob import all images from the assets directory
const images = import.meta.glob("/src/data/*");

const ProductDetail = () => {
  const [productCount, setProductCount] = useState(1);

  return (
    <>
      <Header />
      <main className="h-screen ">
        <Carousel>
          {products[0].imgs.map((imgPath, index) => (
            <img
              key={index}
              src={imgPath}
              alt=""
              className=""
              style={{
                scrollSnapAlign: "center",
                objectFit: "cover",
              }}
            />
          ))}
        </Carousel>
        {/* <Carousel>
          <img src={product1} alt="" className="" />
        </Carousel> */}
        <section className="p-6">
          {productData.map((product) => (
            <article key={product.id}>
              <p className="uppercase font-bold text-dark-grayish-blue mb-2">
                {product.brand}
              </p>
              <h2 className="text-3xl font-bold text-dark-blue mb-4">
                {product.title}
              </h2>
              <p className="text-dark-grayish-blue">{product.details}</p>
              <div className="flex my-4 items-center justify-between sm:justify-normal">
                <p className="flex items-center text-3xl font-bold text-dark-blue">
                  {`$ ${product.price * (product.discount / 100)}.00`}{" "}
                  <span className="rounded-md h-6 px-2 mx-4 text-base bg-dark-blue text-white font-bold">{`${product.discount}%`}</span>
                </p>
                <p className="line-through font-bold text-dark-grayish-blue">{`$ ${product.price}.00`}</p>
              </div>

              {/*** Product amount & add to cart ***/}
              <section className="sm:flex justify-between">
                <div className="flex justify-between w-full sm:w-1/3 rounded-lg bg-light-gray relative">
                  <button
                    onClick={() =>
                      setProductCount(productCount === 1 ? 1 : productCount - 1)
                    }
                    className=" px-4 text-orange"
                  >
                    <FaMinus />
                  </button>
                  {/* <input type="number" name="" id="" value={productCount} /> */}
                  <span className="text-base font-bold py-4">
                    {productCount}
                  </span>
                  <button
                    onClick={() =>
                      setProductCount(
                        productCount < product.stock
                          ? productCount + 1
                          : productCount
                      )
                    }
                    className=" px-4 text-orange"
                  >
                    <FaPlus />
                  </button>
                </div>
                <button className="flex justify-center items-center w-full sm:w-1/3 p-4 mt-4 sm:mt-0 rounded-lg text-dark-blue font-bold bg-orange">
                  <PiShoppingCart />
                  <span className="ml-2">Add to cart</span>
                </button>
              </section>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
