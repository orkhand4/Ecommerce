import React from "react";
import NotificationBar from "../components/notificationBar";
import Header from "../components/header";
import Footer from "../components/footer";
import prImage from "../assets/images/Product-image.svg";
import shareIcon from "../assets/icons/global/share.svg";
import starIcon from "../assets/icons/global/star.svg";
import heartIcon from "../assets/icons/global/heart.svg";

const Product = () => {
  return (
    <div>
      <NotificationBar />
      <Header />
      <div className="container flex mt-20">
        <div className="bg-neutral-100 px-36 pb-28">
          <img src={prImage} alt="Product Image" />
        </div>
        <div className="py-4 pl-28">
          <div className="flex justify-between gpa-10 items-end">
            <h3 className="font-bold text-2xl">Raw Black T-Shirt Lineup</h3>
            <img src={shareIcon} alt="Share Icon" />
          </div>
          <div className="flex justify-between items-center gap-5 mt-4">
            <div className="flex items-center text-neutralBlack-500 text-xs bg-neutralWhite-100 rounded-full px-3 py-1">
              <img src={starIcon} alt="Star Icon" />
              <p>4.2 — 54 Reviews </p>
            </div>
            <div>
              <p className="text-neutralBlack-500 text-xs border rounded-full px-3 py-1">IN STOCK</p>
            </div>
          </div>
          <h4 className="text-lg font-semibold mt-4">$75.00</h4>
          <div>
            <p className="text-neutralBlack-500 text-xs mt-4">AVAILABLE COLORS</p>
            <div className="flex gap-3 mt-2">
              <div className="bg-blue-400 w-8 h-8 rounded-full"></div>
              <div className="bg-yellow-400 w-8 h-8 rounded-full"></div>
              <div className="bg-green-400 w-8 h-8 rounded-full"></div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-neutralBlack-500 text-xs">SELECT SIZE</p>
            <div className="flex gap-3 mt-2">
              <span className="border border-neutralBlack-200 border-500 px-2 py-1 rounded text-neutralBlack-500 text-xs">
                S
              </span>
              <span className="border border-neutralBlack-200 border-500 px-2 py-1 rounded text-neutralBlack-500 text-xs">
                M
              </span>
              <span className="border border-neutralBlack-200 border-500 px-2 py-1 rounded text-neutralBlack-500 text-xs">
                L
              </span>
              <span className="border border-neutralBlack-200 border-500 px-2 py-1 rounded text-neutralBlack-500 text-xs">
                XL
              </span>
              <span className="border border-neutralBlack-200 border-500 px-2 py-1 rounded text-neutralBlack-500 text-xs">
                XXL
              </span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-neutralBlack-500 text-xs">QUANTITY</p>
            <div className="max-w-32 flex justify-between items-center gap-3 border border-neutralBlack-200 border-500 px-2 rounded mt-2">
              <button className="text-neutralBlack-500 text-sm">—</button>
              <span className="text-neutralBlack-800 text-sm">1</span>
              <button className="text-neutralBlack-500 text-xl">+</button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 gap-3">
            <button className="bg-neutralBlack-900 text-sm text-neutralWhite-900 w-full py-2 rounded">
              Add to Cart
            </button>
            <button className="border border-neutralBlack-200 border-500 px-3 py-2 rounded">
              <img src={heartIcon} alt="Heart Icon" />
            </button>
          </div>
          <p className="text-neutralBlack-500 text-xs mt-4">— FREE SHIPPING ON ORDERS $100+</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
