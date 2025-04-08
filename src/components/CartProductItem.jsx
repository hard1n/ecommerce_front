import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa";
/** CART CONTEXT **/
import { CartContext } from "../context/CartContext";
/** PRODUCT CONTEXT **/
import { CurrentProductContext } from "../context/CurrentProduct";

const CartProductItem = ({ item }) => {
  const { updateCartItemQuantity, removeFromCart } = useContext(CartContext);
  const { handleProductClick } = useContext(CurrentProductContext);
  const [counter, setCounter] = useState(item.qty || 1);

  // Sync local state with cart item quantity
  useEffect(() => {
    setCounter(item.qty);
  }, [item.qty]);

  const handleIncrement = () => {
    if (counter < item.product.stock) {
      const newQuantity = counter + 1;
      setCounter(newQuantity);
      // check correct product ID
      updateCartItemQuantity(item.product.id, newQuantity);
    }
  };

  const handleDecrement = () => {
    if (counter > 1) {
      const newQuantity = counter - 1;
      setCounter(newQuantity);
      // check correct product ID
      updateCartItemQuantity(item.product.id, newQuantity);
    }
  };

  return (
    <article className="flex h-40 lg:h-64 w-full md:max-w-2/3 mb-4 md:my-6 bg-light-gray border border-grayish-blue rounded-lg">
      <figure className="flex w-1/2 md:min-w-1/4 md:max-w-1/4 rounded-lg overflow-hidden">
        <img
          src={item.product.imgs[0]}
          alt=""
          className="w-full object-cover"
        />
      </figure>

      <div className="flex flex-col w-1/2 relative md:ml-4 p-2 md:p-4">
        {/** Article Title **/}
        <Link
          to={"/product-details"}
          onClick={() => handleProductClick(item.product)}
        >
          <h2 className="text-base sm:text-xl lg:text-2xl md:line-clamp-1 text-dark-blue leading-tight">
            {item.product.title}
          </h2>
        </Link>
        <p className="uppercase font-bold text-xs lg:text-xl md:mt-1 flex justify-between items-center text-dark-grayish-blue">
          {item.product.brand}
        </p>
        {/** Price section **/}
        {parseFloat(item.product.discount) === 0 ? (
          <p className="mt-2 lg:text-xl font-bold text-dark-blue">{`US $${parseFloat(
            item.product.price
          ).toFixed(2)}`}</p>
        ) : (
          <>
            <p className="mt-2 lg:mt-4 lg:text-xl font-bold text-dark-blue">
              {`US $${(
                parseFloat(item.product.price) *
                (1 - parseFloat(item.product.discount) / 100)
              ).toFixed(2)}`}
            </p>
          </>
        )}

        <footer className="flex absolute inset-x-0 bottom-0 m-2 mr-4 md:m-4 justify-between items-center">
          {/** Product Counter **/}
          <div
            className={`flex w-auto md:w-2/3 h-8 justify-between items-center rounded-lg bg-orange-pale relative border ${
              counter === item.stock && "border-1 border-orange"
            }`}
          >
            <button
              onClick={handleDecrement}
              className=" px-4 text-orange text-xs"
              aria-label="Decrease quantity"
            >
              <FaMinus />
            </button>
            <span
              className={`text-base font-bold text-dark-blue ${
                counter === item.product.stock && "text-orange"
              }`}
            >
              {counter}
            </span>
            <button
              onClick={handleIncrement}
              className="px-4 text-orange text-xs"
              aria-label="Increase quantity"
            >
              <FaPlus />
            </button>
          </div>

          {/** Remove item from cart **/}
          <button
            onClick={() => removeFromCart(item.product.id)}
            className="ml-6 text-dark-grayish-blue hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <RiDeleteBin6Line size={20} />
          </button>
        </footer>
      </div>
    </article>
  );
};

export default CartProductItem;
