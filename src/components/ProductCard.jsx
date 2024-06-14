import React from "react";
import PropTypes from "prop-types";
// import productData from "../data/products.json";

const ProductCard = ({ productData }) => {
  return (
    <>
      {productData.map((product) => (
        <article
          key={product.id}
          className="bg-light-gray border border-dark-grayish-blue rounded-lg mb-8 overflow-hidden"
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
          </figcaption>
        </article>
      ))}
    </>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.array.isRequired,
};

export default ProductCard;
