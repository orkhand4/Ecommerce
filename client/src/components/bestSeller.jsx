import React from "react";
import BestSellerItem from "./bestSellerItem";
import classicMono from "../assets/images/classicmono.svg";
import monochromatic from "../assets/images/monochromatic.svg";
import essentialNeutrals from "../assets/images/essential.svg";
import utraanetBlack from "../assets/images/utraanetblack.svg";

const BestSeller = () => {
  return (
    <div className="container mb-20">
      <h3 className="font-bold text-center text-2xl">Best Selling</h3>
      <div className="flex justify-between mt-14">
        <BestSellerItem
          imgSrc={classicMono}
          title="Classic Monochrome Tees"
          price="$35.00"
        />
        <BestSellerItem
          imgSrc={monochromatic}
          title="Monochromatic Wardrobe"
          price="$27.00"
        />
        <BestSellerItem
          imgSrc={essentialNeutrals}
          title="Essential Neutrals"
          price="$30.00"
        />
        <BestSellerItem
          imgSrc={utraanetBlack}
          title="Ultra Anet Black"
          price="$40.00"
        />
      </div>
    </div>
  );
};

export default BestSeller;
