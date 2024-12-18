import React from "react";
import arrowRight from "../assets/icons/global/Arrow Right.svg";
import heroImg from "../assets/images/Hero Image.svg";

const Hero = () => {
  return (
    <div className="bg-neutralWhite-100 ">
      <div className="container flex items-center justify-between">
        <div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-3xl text-neutralBlack-800">
              Fresh Arrivals Online
            </h2>
            <p className="text-neutralBlack-600 mt-4 text-xs">
              Discover Our Newest Collection Today
            </p>
          </div>
          <button className="mt-12 rounded px-6 py-3 bg-neutralBlack-900 text-neutralWhite-900">
            View Collection
            <img
              src={arrowRight}
              alt="Arrow Right Icon"
              className="text-neutralWhite-900 inline-block"
            />
          </button>
        </div>
        <div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
