import React from "react";
import Navbar from "./Navbar";
// import { FiShoppingCart } from "react-icons/fi";
import { PiShoppingCart } from "react-icons/pi";

import avatar from "../data/image-avatar.png";

const Header = () => {
  return (
    <div className=" px-6 md:px-14">
      <div className="flex justify-between items-center h-20 border-b-1 border-grayish-blue">
        <Navbar />
        {/* <span className="absolute inline-flex rounded-full" /> */}
        <div className="flex items-center justify-end h-full">
          <div className="rounded-full relative p-2 transition ease-in-out hover:cursor-pointer text-dark-grayish-blue hover:text-dark-blue hover:bg-light-grayish-blue">
            <span className="hidden absolute top-1 right-1 h-3 w-4 rounded-full bg-orange text-white text-[8px] text-center">
              2
            </span>
            <PiShoppingCart size={20} className="" />
          </div>
          <div className="rounded-full h-12 w-12 border-light-grayish-blue border-2 ml-4 transition ease-in-out hover:cursor-pointer hover:border-orange">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
