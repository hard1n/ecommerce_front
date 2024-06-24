import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ProductCounter } from "./ProductDetail";

/** CART CONTEXT **/
import { CartContext } from "../context/CartContext";

/** PRODUCT CONTEXT **/
import { CurrentProductContext } from "../context/CurrentProduct";

const Cart = () => {
  const [counter, setCounter] = useState(1);
  const { cart, removeFromCart, productCount, setProductCount } =
    useContext(CartContext);

  const { handleProductClick } = useContext(CurrentProductContext);
  // const [productCount, setProductCount] = useState(0);

  // cart.map((item) => console.log("Detalle: ", item.product.brand));

  return (
    <>
      <Header />
      <main className="p-6 md:flex w-full md:py-14 md:px-20 text-dark-grayish-blue">
        {cart.length === 0 ? (
          <>
            <div className="flex items-center justify-center rounded-xl w-full h-[50vh] bg-light-grayish-blue">
              <h2 className="text-3xl">Your cart is empty</h2>
            </div>
          </>
        ) : (
          <>
            {/*** Cart section ***/}
            <section className="md:w-2/3 rounded-lg md:p-4 border-1 border-dark-grayish-blue">
              <h1 className="text-3xl mb-4 text-dark-grayish-blue">
                Your cart
              </h1>
              {cart.map((item) => (
                <article
                  key={item.product.id}
                  className="flex h-40 w-auto mx- my-4 md:m-6 bg-light-gray border border-dark-grayish-blue rounded-lg"
                >
                  <figure className="flex w-4/5 md:w-1/4 rounded-lg overflow-hidden">
                    <img
                      src={item.product.imgs[0]}
                      alt=""
                      className="w-auto object-cover"
                    />
                  </figure>

                  <div className="flex flex-col justify-between relative md:ml-4 p-4">
                    {/** Article Title **/}
                    <Link
                      to={"/product-details"}
                      onClick={() => handleProductClick(item.product)}
                    >
                      <h2 className="text-xl md:text-3xl text-dark-grayish-blue">
                        {item.product.title}
                      </h2>
                    </Link>

                    {/* Price section */}
                    {parseFloat(item.product.discount) === 0 ? (
                      <p className="mt-2 font-bold text-dark-blue">{`US $${parseFloat(
                        item.product.price
                      ).toFixed(2)}`}</p>
                    ) : (
                      <>
                        <p className="mt-2 font-bold text-dark-blue">
                          {`US $${(
                            parseFloat(item.product.price) *
                            (1 - parseFloat(item.product.discount) / 100)
                          ).toFixed(2)}`}
                        </p>
                      </>
                    )}

                    <div className="flex justify-between items-center inset-x-0 bottom-0">
                      {/* <ProductCounter /> */}

                      <button
                        className=""
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <RiDeleteBin6Line size={20} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {/*** Subtotal section ***/}
            </section>
            <section className="grow p-4">
              <h2 className="text-3xl">Subtotal</h2>
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default Cart;
