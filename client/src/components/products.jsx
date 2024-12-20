import React from 'react'
import classicMono from "../assets/images/classicmono.svg";
import monochromatic from "../assets/images/monochromatic.svg";
import essentialNeutrals from "../assets/images/essential.svg";
import utraanetBlack from "../assets/images/utraanetblack.svg";
import ProductsItem from './productsItem';

const Products = () => {
  return (
    <div className="container mb-20">
      <p className="font-bold text-center text-2xl">Featured</p>
      <p>Latest</p>
      <div className="flex justify-between mt-14">
        <ProductsItem
          imgSrc={classicMono}
          title="Classic Monochrome Tees"
          price="$35.00"
        />
        <ProductsItem
          imgSrc={monochromatic}
          title="Monochromatic Wardrobe"
          price="$27.00"
        />
        <ProductsItem
          imgSrc={essentialNeutrals}
          title="Essential Neutrals"
          price="$30.00"
        />
        <ProductsItem
          imgSrc={utraanetBlack}
          title="Ultra Anet Black"
          price="$40.00"
        />
      </div>
    </div>
  )
}

export default Products
