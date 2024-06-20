import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { TbShoppingCartPlus, TbShoppingCartCheck } from "react-icons/tb";

/** PRODUCT CONTEXT **/
import { CurrentProductContext } from "../context/CurrentProduct";
/** CART CONTEXT **/
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { setSelectedProduct } = useContext(CurrentProductContext);
  const { cart, addToCart } = useContext(CartContext);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  return (
    <>
      <Link to={"/product-details"}>
        <article
          className="min-w-64 bg-light-gray border border-dark-grayish-blue rounded-lg mb-8 overflow-hidden"
          onClick={() => handleProductClick(product)}
        >
          <figure>
            <img src={product.imgs[0]} alt="" />
          </figure>

          {/*** Details section ***/}
          <figcaption className="p-4">
            <p className="uppercase font-bold text-dark-grayish-blue mb-2">
              {product.brand}
            </p>
            <h2 className="text-xl text-dark-blue mb-4">{product.title}</h2>
            <footer className="flex items-end justify-between">
              {parseInt(product.discount) === 0 ? (
                <p className="flex items-center text-3xl font-bold text-dark-blue">
                  {`$ ${product.price}.00`}
                </p>
              ) : (
                <p className="flex items-end text-3xl font-bold text-dark-blue">
                  {`$ ${(product.price * (1 - product.discount / 100)).toFixed(
                    2
                  )}`}
                  <span className="ml-4 line-through text-2xl font-normal text-dark-grayish-blue">{`$ ${product.price}.00`}</span>
                </p>
              )}
              <button
                className={`hover:text-orange ${
                  cart.findIndex((item) => item.product.id === product.id) !==
                    -1 && "text-orange"
                }`}
                onClick={handleButtonClick}
              >
                {cart.findIndex((item) => item.product.id === product.id) ===
                -1 ? (
                  <TbShoppingCartPlus size={25} />
                ) : (
                  <TbShoppingCartCheck size={25} />
                )}
              </button>
            </footer>
          </figcaption>
        </article>
      </Link>
    </>
  );
};

// ProductCard.propTypes = {
//   productData: PropTypes.array.isRequired,
// };

export default ProductCard;
