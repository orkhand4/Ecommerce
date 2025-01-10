import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logomark.svg";
import chevronDown from "../assets/icons/global/Chevron Down.svg";
import searchIcon from "../assets/icons/global/Search.svg";
import userIcon from "../assets/icons/global/User1.svg";
import cartIcon from "../assets/icons/global/Cart.svg";
import menu from "../assets/icons/global/Menu.svg";

const Header = () => {
  return (
    <div className="container flex justify-between items-center py-5 border-b border-neutral-300">
      <div className="flex items-center gap-12 xl:gap-32">
        <Link to={"/"} className="flex items-center gap-x-3">
          <img src={logo} alt="logo" />
          <h1 className="font-extrabold text-xl">Ecommerce</h1>
        </Link>
        <nav className=" hidden lg:flex items-center gap-8 text-neutral-500 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link className="flex items-center gap-x-1">
            <p>Categories</p> <img src={chevronDown} alt="Chevron Down Icon" />
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="flex gap-x-6 md:gap-3">
        <div className="hidden md:flex border border-neutral-300 rounded-lg gap-x-2 p-2">
          <img className="w-6 y-6" src={searchIcon} alt="Search Icon" />
          <input
            type="text"
            placeholder="Search products"
            className="outline-none font-medium text-neutral-500 text-sm"
          />
        </div>
        <img
          className="w-7 cursor-pointer"
          src={userIcon}
          alt="User Icon"
        />
        <img
          className="w-7 cursor-pointer"
          src={cartIcon}
          alt="Cart Icon"
        />
        <img
          className="w-7 cursor-pointer lg:hidden"
          src={menu}
          alt="Menu Icon"
        />
      </div>
    </div>
  );
};

export default Header;
