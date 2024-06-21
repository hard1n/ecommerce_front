import React, { useState, useContext } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { FaPlus, FaMinus } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { TbShoppingCart } from "react-icons/tb";

import productData from "../data/products.json";

/** CART CONTEXT **/
import { CartContext } from "../context/CartContext";

/** PRODUCT CONTEXT **/
import { CurrentProductContext } from "../context/CurrentProduct";

export const ProductCounter = () => {
  // const [productCount, setProductCount] = useState(amt);
  const { selectedProduct: currProduct } = useContext(CurrentProductContext);

  console.log("Selected: ", currProduct);

  const { cart, setCart, productCount, setProductCount } =
    useContext(CartContext);
  console.log(cart);
  cart.map((item) => console.log("ID:", item.product.id));
  // let currProduct = productData[0];

  return (
    <div
      className={`flex justify-between w-full sm:w-1/3 rounded-lg bg-light-gray relative border ${
        productCount === currProduct.stock && "border-orange"
      }`}
    >
      <button
        onClick={() =>
          setProductCount(productCount === 1 ? 1 : productCount - 1)
        }
        className=" px-4 text-orange"
      >
        <FaMinus />
      </button>
      <span
        className={`ext-base font-bold py-4 ${
          productCount === currProduct.stock && "text-orange"
        }`}
      >
        {productCount}
      </span>
      <button
        onClick={() =>
          setProductCount(
            productCount < currProduct.stock ? productCount + 1 : productCount
          )
        }
        className="px-4 text-orange"
      >
        <FaPlus />
      </button>
    </div>
  );
};

const ProductDetail = () => {
  const { cart, addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const { selectedProduct: currProduct } = useContext(CurrentProductContext);

  console.log(currProduct); // Current product
  console.log(cart);
  // let currProduct = productData[0];
  return (
    <>
      <Header />
      <main className="h-screen md:h-auto md:flex md:py-14 md:px-40">
        <Carousel>
          {currProduct.imgs.map((imgPath, index) => (
            <img
              key={index}
              id={index}
              src={imgPath}
              alt=""
              className=""
              style={{
                // scrollSnapAlign: "center",
                display: "block",
                objectFit: "cover",
                // backgroundImage: `url(${imgPath})`,
                // backgroundPosition: "center",
                // backgroundSize: "contain",
                // height: "100%",
              }}
            />
          ))}
        </Carousel>

        {/*** Product Details ***/}
        <section className="p-6 md:pl-24">
          <article key={currProduct.id}>
            <p className="uppercase font-bold text-dark-grayish-blue mb-2">
              {currProduct.brand}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
              {currProduct.title}
            </h2>
            <p className="text-dark-grayish-blue">{currProduct.details}</p>

            {/*** Price section ***/}
            <div className="flex md:grid my-4 items-center justify-between sm:justify-normal">
              {parseInt(currProduct.discount) === 0 ? (
                <p className="flex items-center text-3xl font-bold text-dark-blue">
                  {`$ ${parseFloat(currProduct.price).toFixed(2)}`}
                </p>
              ) : (
                <>
                  {/* Apply discount */}
                  <p className="flex items-center text-3xl font-bold text-dark-blue">
                    {`$ ${(
                      parseFloat(currProduct.price) *
                      (1 - parseFloat(currProduct.discount) / 100)
                    ).toFixed(2)}`}
                    <span className="rounded-md h-6 px-2 mx-4 text-base bg-dark-blue text-white font-bold">
                      {`${parseFloat(currProduct.discount)}%`}
                    </span>
                  </p>

                  <p className="line-through font-bold text-dark-grayish-blue md:my-4">{`$ ${parseFloat(
                    currProduct.price
                  ).toFixed(2)}`}</p>
                </>
              )}
            </div>

            {/*** Product amount & add to cart ***/}
            <section className="sm:flex justify-between">
              <ProductCounter
                // amt={1}
                // productCount={productCount}
                // setProductCount={setProductCount}
                qty={quantity}
              />
              {/*** Add to cart btn ***/}
              <button
                className="flex sm:grow sm:ml-4 justify-center items-center w-full sm:w-1/3 p-4 mt-4 sm:mt-0 rounded-lg text-dark-blue font-bold bg-orange"
                onClick={() =>
                  addToCart(
                    // {
                    // id: currProduct.id,
                    // img: currProduct.imgs[0],
                    // name: currProduct.title,
                    // price: currProduct.price,
                    // discount: currProduct.discount,
                    // amt: productCount,
                    // }
                    currProduct
                  )
                }
              >
                <TbShoppingCart />
                <span className="ml-2">Add to cart</span>
              </button>
            </section>
          </article>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
