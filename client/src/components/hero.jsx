import React from "react";
import arrowRight from "../assets/icons/global/Arrow Right.svg";
import heroImg from "../assets/images/Hero Image.svg";
import burst from "../assets/images/Burst-pucker.svg";
import ellipse from "../assets/images/Ellipse.svg";

const Hero = () => {
  return (
    <div className="bg-neutralWhite-100">
      <div className="container flex items-center justify-between relative">
        <div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-4xl text-neutralBlack-800">
              Fresh Arrivals Online
            </h2>
            <p className="text-neutralBlack-600 mt-4 text-base">
              Discover Our Newest Collection Today.
            </p>
          </div>
          <button className="mt-12 rounded px-6 py-3 bg-neutralBlack-900 text-neutralWhite-900">
            View Collection
            <img
              src={arrowRight}
              alt="Arrow Right Icon"
              className="pl-1 inline-block"
            />
          </button>
        </div>
        <div className="z-10">
          <img src={heroImg} alt="Hero Image" />
        </div>
        <img src={burst} alt="burst-pucker" className="absolute top-8 left-2/3 z-0" />
        <img src={ellipse} alt="ellipse" className="absolute left-2/3 bottom-0 z-0" />
      </div>
    </div>
  );
};

export default Hero;
