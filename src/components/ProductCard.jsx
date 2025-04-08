import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { TbShoppingCartPlus, TbShoppingCartCheck } from "react-icons/tb";

/** PRODUCT CONTEXT **/
import { CurrentProductContext } from "../context/CurrentProduct";
/** CART CONTEXT **/
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { handleProductClick } = useContext(CurrentProductContext);
  const { cart, addToCart } = useContext(CartContext);

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  return (
    <>
      <Link to={"/product-details"}>
        <article
          className="bg-light-gray border border-grayish-blue rounded-lg mb-4 overflow-hidden"
          onClick={() => handleProductClick(product)}
        >
          <figure>
            <img src={product.imgs[0]} alt="" />
          </figure>

          {/*** Details section ***/}
          <figcaption className="p-2 md:p-4">
            <h2 className="text-base md:text-xl text-dark-blue leading-tight">
              {product.title}
            </h2>
            <p className="uppercase font-bold text-xs md:text-base text-dark-grayish-blue mb-2">
              {product.brand}
            </p>
            <footer className="flex items-center justify-between">
              {parseInt(product.discount) === 0 ? (
                <p className="text-xs md:text-xl font-bold text-dark-blue">
                  {`$ ${product.price}.00`}
                </p>
              ) : (
                <p className="text-xs md:text-xl font-bold text-dark-blue">
                  {`$ ${(product.price * (1 - product.discount / 100)).toFixed(
                    2
                  )}`}
                  <span className="ml-2 line-through text-xs md:text-xl font-normal text-dark-grayish-blue">{`$ ${product.price}.00`}</span>
                </p>
              )}
              <button
                className={`flex justify-center hover:text-orange hover:border-orange md:text-2xl border-1 rounded-full px-2 ${
                  cart.findIndex((item) => item.product.id === product.id) !==
                  -1
                    ? "text-orange border-orange"
                    : "text-dark-blue border-dark-blue"
                }`}
                onClick={handleButtonClick}
              >
                {cart.findIndex((item) => item.product.id === product.id) ===
                -1 ? (
                  <TbShoppingCartPlus />
                ) : (
                  <TbShoppingCartCheck />
                )}
              </button>
            </footer>
          </figcaption>
        </article>
      </Link>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
