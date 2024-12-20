import React from "react";

const FeatureItem = ({ imgSrc, altText, title, description }) => {
  return (
    <div className="w-1/3 pr-10 leading-10">
      <div className="bg-neutralWhite-100 rounded-full inline-block p-2">
        <img src={imgSrc} alt={altText} />
      </div>
      <h5 className="font-semibold">{title}</h5>
      <p className="text-neutralBlack-500 leading-6">{description}</p>
    </div>
  );
};

export default FeatureItem;