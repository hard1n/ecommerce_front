import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { RiDeleteBin6Line } from "react-icons/ri";

/** Cart Context **/
import { CartContext } from "../context/CartContext";
import { ProductCounter } from "./ProductDetail";

const Cart = () => {
  const { cart, removeFromCart, productCount, setProductCount } =
    useContext(CartContext);
  // const [productCount, setProductCount] = useState(0);

  // cart.map((item) => console.log("Detalle: ", item.product.brand));

  return (
    <>
      <Header />
      <main className="p-6 md:flex w-full md:py-14 md:px-20">
        {cart.length === 0 ? (
          <>
            <h2>Your cart is empty</h2>
          </>
        ) : (
          <>
            {/*** Cart section ***/}
            <section className="md:w-2/3">
              <h1 className="text-3xl mb-4 text-dark-grayish-blue">
                Your cart
              </h1>
              {cart.map((item) => (
                <article
                  key={item.product.id}
                  className="flex h-40 w-auto rounded-md md:m-6"
                >
                  <figure className="w-2/5 md:w-1/4 rounded-lg overflow-hidden">
                    <img
                      src={item.product.imgs[0]}
                      alt=""
                      className="w-auto object-contain"
                    />
                  </figure>
                  <div className="relative ml-4">
                    <Link to={"/product-details"}>
                      <h2 className="text-xl md:text-3xl text-dark-grayish-blue">
                        {item.product.brand}
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

                    <div className="flex justify-between items-center md:absolute inset-x-0 bottom-0">
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
            <section>
              <h2>Subtotal</h2>
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default Cart;
