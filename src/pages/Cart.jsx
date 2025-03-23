import React, { createElement, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartProductItem from "../components/CartProductItem";
import { TbShoppingCartCopy } from "react-icons/tb";
import ProductCounter from "../components/ProductCounter";

/** CART CONTEXT **/
import { CartContext } from "../context/CartContext";
/** PRODUCT CONTEXT **/
import { CurrentProductContext } from "../context/CurrentProduct";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

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
            {/* Mobile: Subtotal on top (visible only on mobile) */}
            <section className="mb-6 pb-4 md:hidden border-b-1 border-grayish-blue">
              <h2 className="text-3xl">Subtotal</h2>
              {/* Checkout btn*/}
              <button
                className="flex grow justify-center items-center w-full sm:w-1/3 p-4 mt-4 sm:mt-0 rounded-lg text-dark-blue font-bold  bg-orange"
                onClick={() => console.log("Proceed to checkout")}
              >
                <TbShoppingCartCopy />
                <span className="ml-2">Proceed to checkout</span>
              </button>
            </section>

            {/* Desktop: Flex container for cart and subtotal */}
            <div className="md:flex md:w-full">
              {/* Cart section */}
              <section className="md:w-3/5 md:p-4 md:border-r-1 border-grayish-blue">
                <h1 className="text-3xl mb-4 text-dark-grayish-blue">
                  Your Cart
                </h1>
                {/* Cart products */}
                {cart.map((item) => (
                  <CartProductItem key={item.product.id} item={item} />
                ))}
              </section>

              {/* Desktop: Subtotal section (visible only on desktop) */}
              <section className="hidden md:block md:w-2/5 p-4">
                <h2 className="text-3xl mb-4">Subtotal</h2>
                {/* subtotal content here */}
                {/* Checkout btn*/}
                <button
                  className="flex grow justify-center items-center w-full p-4 mt-4 sm:mt-0 rounded-lg text-dark-blue font-bold  bg-orange"
                  onClick={() => console.log("Proceed to checkout")}
                >
                  <TbShoppingCartCopy />
                  <span className="ml-2">Proceed to checkout</span>
                </button>
              </section>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Cart;
