import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { PiShoppingCart } from "react-icons/pi";
import { TbShoppingCart } from "react-icons/tb";

/** CART CONTEXT **/
import { CartContext } from "../context/CartContext";

import avatar from "../data/image-avatar.png";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="px-6 md:px-14 top-0 sticky z-50 bg-white">
      <div className="flex justify-between items-center h-20 border-b-1 border-grayish-blue">
        <Navbar />

        {/*** Cart & Profile links ***/}
        <div className="flex items-center justify-end h-full">
          <NavLink
            to="/cart"
            className="rounded-full relative p-2 transition ease-in-out hover:cursor-pointer text-dark-grayish-blue hover:text-dark-blue hover:bg-light-grayish-blue"
          >
            <span
              className={`${
                cart.length === 0 && "hidden"
              } absolute top-1 right-1 h-3 w-4 rounded-full bg-orange text-white text-[8px] text-center`}
            >
              {cart.length}
            </span>
            <TbShoppingCart size={20} className="" />
          </NavLink>
          <div className="rounded-full h-12 w-12 border-light-grayish-blue border-2 ml-4 transition ease-in-out hover:cursor-pointer hover:border-orange">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
