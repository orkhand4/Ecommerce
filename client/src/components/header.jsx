import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Logomark.svg";
import chevronDown from "../assets/icons/global/Chevron Down.svg";
import searchIcon from "../assets/icons/global/Search.svg";
import cartIcon from "../assets/icons/global/Cart.svg";
import userIcon from "../assets/icons/global/User1.svg";

const Header = () => {
  return (
    <div>
      <div className="container flex justify-between items-center py-5">
        <div className="flex items-center gap-x-3">
          <img src={logo} alt="logo" />
          <h1 className="font-bold text-xl">Ecommerce</h1>
        </div>
        <nav>
          <ul className="flex gap-x-10 text-neutral-500 text-base">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="flex gap-2">
              Categories <img src={chevronDown} alt="Chevron Down Icon" />
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-6">
          <div className="flex border border-neutral-300 rounded-lg gap-x-2 p-2">
            <img src={searchIcon} alt="Search Icon"/>
            <input type="text" placeholder="Search products" className="outline-none" />
          </div>
          <button>
            <img src={cartIcon} alt="Cart Icon" />
          </button>
          <button>
            <img src={userIcon} alt="User Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
