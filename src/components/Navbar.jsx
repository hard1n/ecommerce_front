import React from "react";
import { NavLink } from "react-router-dom";

const NavBtn = ({ name, link }) => {
  return (
    <NavLink
      className={
        "flex items-center h-full mx-2 transition-all ease-in-out delay-100 hover:border-b-orange hover:border-b-4 hover:text-dark-blue"
      }
      to={link}
    >
      {name}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="flex h-full items-center">
        <NavLink className="text-2xl font-bold" to="/">
          ECOMMERCE
        </NavLink>
        <div className="flex h-full items-center text-dark-grayish-blue ml-8">
          <NavBtn name="Collections" link="/" />
          {/* <Link>Collections</Link> */}
          <NavBtn name="Men" link="/" />
          {/* <Link>Men</Link> */}
          <NavBtn name="Women" link="/" />
          <NavBtn name="About" link="/product" />
          <NavBtn name="Contact" link="/" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
