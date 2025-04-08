import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductCounter from "../components/ProductCounter";
import { TbShoppingCart } from "react-icons/tb";

import productData from "../data/products.json";

/** CART CONTEXT **/
import { CartContext } from "../context/CartContext";

/** PRODUCT CONTEXT **/
import { CurrentProductContext } from "../context/CurrentProduct";

const ProductDetail = () => {
  const { cart, addToCart, quantity, setQuantity } = useContext(CartContext);
  const [counter, setCounter] = useState(1);
  const { selectedProduct: currProduct } = useContext(CurrentProductContext);
  // const productIndex = cart.indexOf(currProduct);

  // console.log("Finding product QTY: ", cart[productIndex]);

  // if (counter + quantity > currProduct.stock) {
  //   setQuantity(parseInt(currProduct.stock));
  // } else {
  //   setQuantity(counter);
  // }
  // const handleAddProduct = () => {
  //   if (counter + quantity > currProduct.stock) {
  //     setQuantity(parseInt(currProduct.stock));
  //   } else {
  //     setQuantity(counter);
  //   }
  // };

  useEffect(() => {
    if (counter >= currProduct.stock) {
      setQuantity(parseInt(currProduct.stock));
    } else {
      setQuantity(counter);
    }
    // setQuantity(counter);
  }, [counter, setQuantity]);

  // console.log(currProduct); // Current product
  console.log("Cart: ", cart);
  // let currProduct = productData[0];
  return (
    <>
      <Header />
      <main className="h-screen md:h-auto md:flex md:py-14 md:px-16 lg:px-">
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
        <section className="p-6 md:pl-8 lg:pl-24">
          <article key={currProduct.id}>
            <p className="uppercase font-bold text-dark-grayish-blue mb-2">
              {currProduct.brand}
            </p>
            <h2 className="text-3xl md:text-3xl font-bold text-dark-blue mb-4">
              {currProduct.title}
            </h2>
            <p className="text-dark-grayish-blue">{currProduct.details}</p>

            {/*** Price section ***/}
            <div className="flex md:block my-4 items-center justify-between sm:justify-normal">
              {parseInt(currProduct.discount) === 0 ? (
                <p className="flex items-center text-2xl font-bold text-dark-blue">
                  {`$ ${parseFloat(currProduct.price).toFixed(2)}`}
                </p>
              ) : (
                <>
                  {/* Apply discount */}
                  <p className="flex items-center text-2xl font-bold text-dark-blue">
                    {`$ ${(
                      parseFloat(currProduct.price) *
                      (1 - parseFloat(currProduct.discount) / 100)
                    ).toFixed(2)}`}
                    <span className="rounded-md h-6 px-2 mx-4 text-base bg-dark-blue text-white font-bold">
                      {`${parseFloat(currProduct.discount)}%`}
                    </span>
                  </p>

                  <p className="line-through font-bold text-dark-grayish-blue lg:my-2">{`$ ${parseFloat(
                    currProduct.price
                  ).toFixed(2)}`}</p>
                </>
              )}
            </div>

            {/*** Product amount & add to cart ***/}
            <section className="sm:flex md:block justify-between">
              {/* Product counter */}
              <div
                className={`flex justify-between w-full sm:w-1/3 md:w-full rounded-lg bg-light-gray relative border ${
                  counter === currProduct.stock && "border-orange"
                }`}
              >
                <button
                  onClick={() => setCounter(counter === 1 ? 1 : counter - 1)}
                  className=" px-4 text-orange"
                >
                  <FaMinus />
                </button>
                <span
                  className={`ext-base font-bold py-4 ${
                    counter === currProduct.stock && "text-orange"
                  }`}
                >
                  {counter}
                </span>
                <button
                  onClick={() =>
                    setCounter(
                      counter < currProduct.stock ? counter + 1 : counter
                    )
                  }
                  className="px-4 text-orange"
                >
                  <FaPlus />
                </button>
              </div>

              {/*** Add to cart btn ***/}
              <button
                className="flex sm:grow mt-4 md:mt-4 sm:mt-0 sm:ml-4 md:ml-0 justify-center items-center w-full sm:w-1/3 md:w-full p-4 rounded-lg text-dark-blue font-bold bg-orange"
                onClick={() => addToCart(currProduct)}
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
