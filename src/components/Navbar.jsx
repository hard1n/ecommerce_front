import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const NavBtn = ({ isMobile, name, link }) => {
  const mobileStyle = `flex`;
  const desktopStyle = `flex items-center h-full mx-2 transition-all ease-in-out delay-100 hover:border-b-orange hover:border-b-4 hover:text-dark-blue`;

  return (
    <NavLink
      className="flex items-center font-bold md:font-normal md:h-full mx-2 my-2 transition-all ease-in-out delay-100 md:hover:border-b-orange md:hover:border-b-4 hover:text-dark-blue "
      to={link}
    >
      {name}
    </NavLink>
  );
};

const NavLinks = () => {
  return (
    <>
      <NavBtn name="Collections" link="/" />
      {/* <Link>Collections</Link> */}
      <NavBtn name="Men" link="/" />
      {/* <Link>Men</Link> */}
      <NavBtn name="Women" link="/" />
      <NavBtn name="About" link="/product" />
      <NavBtn name="Contact" link="/" />
    </>
  );
};

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);

  const toggleNavbar = () => {
    console.log(activeNav);
    setActiveNav(!activeNav);
  };

  return (
    <>
      <nav className="flex h-full items-center">
        <div className="md:hidden mr-3 flex">
          <button onClick={toggleNavbar} className="text-dark-grayish-blue">
            {" "}
            <IoMenu size={20} />
          </button>
        </div>
        <NavLink className="text-2xl font-bold" to="/">
          ECOMMERCE
        </NavLink>
        <div className="hidden md:flex h-full items-center text-dark-grayish-blue ml-8">
          <NavLinks />
        </div>

        {/*** Mobile Nav ***/}
        <div
          onClick={toggleNavbar}
          className={`${
            activeNav ? "block" : "hidden"
          } md:hidden absolute inset-0 bg-black/50 z-10`}
        ></div>
        <div
          className={`${
            activeNav ? "left-0" : "-left-2/3"
          } md:hidden absolute w-2/3 inset-y-0  transition-all flex flex-col xsm:w-1/2 sm:w-1/3 bg-main-bg shadow-2xl z-10`}
        >
          <div className="h-20 pl-6 mr-3 flex">
            <button onClick={toggleNavbar} className="text-dark-grayish-blue">
              {" "}
              <IoClose size={20} />
            </button>
          </div>
          <div className="m-4">
            <NavLinks />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
