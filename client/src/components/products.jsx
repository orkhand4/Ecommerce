import React from "react";
import ProductsItem from "./productsItem";
import elegant from "../assets/images/elegant.svg";
import sleekCozy from "../assets/images/sleekcozy.svg";
import rawBlack from "../assets/images/rawblack.svg";
import mockupBlack from "../assets/images/mockupblack.svg";

const Products = () => {
  return (
    <div className="container mb-20">
      <div className="flex justify-center items-center gap-5">
        <span className="border border-neutralBlack-200 rounded-full py-1 px-3 text-xs font-medium">
          Featured
        </span>
        <p className="text-neutralBlack-500 text-sm">Latest</p>
      </div>

      <div className="flex justify-between mt-14">
        <ProductsItem
          imgSrc={elegant}
          title="Elegant Ebony Sweatshirts"
          price="$35.00"
        />
        <ProductsItem
          imgSrc={sleekCozy}
          title="Sleek and Cozy Black"
          price="$57.00"
        />
        <ProductsItem
          imgSrc={rawBlack}
          title="Raw Black Tees"
          price="$19.00"
        />
        <ProductsItem
          imgSrc={mockupBlack}
          title="MOCKUP Black"
          price="$30.00"
        />
      </div>
    </div>
  );
};

export default Products;
