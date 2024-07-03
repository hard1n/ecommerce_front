import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import ProductCounter from "../components/ProductCounter";
/** CART CONTEXT **/
import { CartContext } from "../context/CartContext";
/** PRODUCT CONTEXT **/
import { CurrentProductContext } from "../context/CurrentProduct";

const CartProductItem = ({ item }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { handleProductClick } = useContext(CurrentProductContext);
  const [counter, setCounter] = useState(item.qty);

  console.log(item.product.title, item.qty);

  return (
    <article className="flex h-40 w-auto mx- my-4 md:m-6 bg-light-gray border border-dark-grayish-blue rounded-lg">
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
          <ProductCounter
            item={item}
            counter={counter}
            setCounter={setCounter}
          />

          <button className="" onClick={() => removeFromCart(item.product.id)}>
            <RiDeleteBin6Line size={20} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartProductItem;
