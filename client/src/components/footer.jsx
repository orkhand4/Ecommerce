import React from "react";
import Newsletter from "./newsletter";
import githubLogo from "../assets/icons/social/Github.svg";
import instagramLogo from "../assets/icons/social/Instagram.svg";
import youtubeLogo from "../assets/icons/social/Youtube.svg";
import mastercardLogo from "../assets/icons/colored/Mastercard.svg";
import amexLogo from "../assets/icons/colored/Amex.svg";
import visaLogo from "../assets/icons/colored/Visa.svg";

const Footer = () => {
  return (
    <div>
      <Newsletter />
      <div className="container flex justify-between items-start py-14">
        <div className="w-1/3 flex flex-col gap-y-4 py-4">
          <div className="flex items-center gap-x-3">
            <div className="border border-neutral-300 p-1 rounded-lg">
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="40" height="40" rx="20" fill="white" />
                <path
                  d="M24.4769 11.8485L18.204 8.05509C17.6119 7.69292 16.9388 7.5015 16.2532 7.50031C14.2094 7.50031 12.3348 9.21225 12.3348 11.605V25.8073L24.4769 18.4669C26.9083 16.9947 26.9083 13.32 24.4769 11.8485ZM15.8484 18.948V11.3679L22.1163 15.1567L15.8484 18.948Z"
                  fill="#0E1422"
                />
                <path
                  d="M27.8489 33.4844C27.8489 33.5273 15.9908 33.466 15.9908 33.466L14.9434 33.3425C13.2467 33.144 11.9443 31.6233 12.002 29.8346C12.002 29.7917 12.0057 29.7519 12.0081 29.7103C12.0547 28.9365 12.3261 28.1961 12.7858 27.5885C12.9725 27.3461 13.2009 27.1425 13.4592 26.9882L22.4782 21.5725C24.3414 20.4535 25.8931 20.062 26.6999 18.0341C26.9974 17.2757 27.126 16.4562 27.0757 15.6379L27.0446 15.0865L27.9651 20.4204C28.083 21.3264 27.9013 22.2537 27.4211 23.0169C27.1326 23.4785 26.7475 23.8653 26.2951 24.1479L15.8295 29.3943C15.8191 29.4006 15.809 29.4074 15.7993 29.4149C15.5127 29.6293 15.6896 30.1069 16.0403 30.0867L24.7515 30.1403C26.4433 30.0417 27.8526 31.7112 27.8489 33.4844Z"
                  fill="#0E1422"
                />
              </svg>
            </div>
            <h1 className="font-extrabold text-xl">Ecommerce</h1>
          </div>
          <p className="text-neutralBlack-500 text-sm">
            DevCut is a YouTube channel for practical project-based learning.
          </p>
          <div className="flex gap-x-4">
            <a href="#">
              <img src={githubLogo} alt="Github Logo" />
            </a>
            <a href="#">
              <img src={instagramLogo} alt="Instagram Logo" />
            </a>
            <a href="#">
              <img src={youtubeLogo} alt="Youtube Logo" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-neutralBlack-300 text-sm">SUPPORT</p>
          <ul className="flex flex-col gap-y-2 leading-8 mt-4 text-neutralBlack-500">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-neutralBlack-300 text-sm">COMPANY</p>
          <ul className="flex flex-col gap-y-2 leading-8 mt-4 text-neutralBlack-500">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-neutralBlack-300 text-sm">SHOP</p>
          <ul className="flex flex-col gap-y-2 leading-8 mt-4 text-neutralBlack-500">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Checkout</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-neutralBlack-300 text-sm">ACCEPTED PAYMENTS</p>
          <div className="flex gap-x-4 mt-4">
            <img src={mastercardLogo} alt="Mastercard Logo" />
            <img src={amexLogo} alt="Amex Logo" />
            <img src={visaLogo} alt="Visa Logo" />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p className="text-center text-neutralBlack-500 text-sm py-4">
          &copy; 2024 DevCut. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
