import React from "react";
import arrowRight from "../assets/icons/global/Arrow Right.svg";
import cta from "../assets/images/cta.svg";
import burst from "../assets/images/Burst-pucker.svg";
import ellipse from "../assets/images/Ellipse.svg";

const Cta = () => {
  return (
    <div className="bg-neutralWhite-100 mb-20">
      <div className="container flex items-center justify-between">
        <div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-4xl text-neutralBlack-800">
              Browse Our Fashion Paradise!
            </h2>
            <p className="text-neutralBlack-600 mt-4 text-base">
              Step into a world of style and explore our diverse collection of
              clothing categories.
            </p>
          </div>
          <button className="mt-12 rounded px-6 py-3 bg-neutralBlack-900 text-neutralWhite-900">
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
