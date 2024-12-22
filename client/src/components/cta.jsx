import React from "react";
import arrowRight from "../assets/icons/global/Arrow Right.svg";
import cta from "../assets/images/cta.svg";

const Cta = () => {
  return (
    <div className="bg-neutralWhite-100 mb-20">
      <div className="container flex justify-between">
        <div className="pt-8 pb-16">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl text-neutralBlack-800 py-4">
              Browse Our Fashion Paradise!
            </h2>
            <p className="text-neutralBlack-500 mt-2 text-sm max-w-md leading-7">
              Step into a world of style and explore our diverse collection of
              clothing categories.
            </p>
          </div>
          <button className="mt-8 rounded px-6 py-3 bg-neutralBlack-900 text-neutralWhite-900">
            Start Browsing
            <img
              src={arrowRight}
              alt="Arrow Right Icon"
              className="pl-1 inline-block"
            />
          </button>
        </div>
        <div>
          <img src={cta} alt="Category Image" />
        </div>
      </div>
    </div>
  );
};

export default Cta;
