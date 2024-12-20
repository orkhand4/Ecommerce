import React from "react";

const ProductsItem = ({ imgSrc, title, price }) => {
  return (
    <div className="leading-10">
      <img src={imgSrc} alt="" className="bg-neutralBlack-100" />
      <div className="mt-5">
        <h4 className="text-sm">{title}</h4>
        <span className="border border-neutralBlack-200 rounded-full py-1 px-3 text-xs font-medium">
          IN STOCK
        </span>
        <p className="inline-block text-neutralBlack-600 text-sm ml-4">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductsItem;
