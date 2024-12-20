import React from "react";
import FeatureItem from "./featureItem";
import delivery from "../assets/icons/global/Delivery.svg";
import shield from "../assets/icons/global/Shield Check.svg";
import starBadge from "../assets/icons/global/Star Badge.svg";

const Features = () => {
  return (
    <div className="container flex justify-between items-center mt-20 gap-20">
      <FeatureItem
        imgSrc={delivery}
        altText="Delivery Icon"
        title="Free Shipping"
        description="Upgrade your style today and get FREE shipping on all orders! Don't miss out."
      />
      <FeatureItem
        imgSrc={starBadge}
        altText="Star Badge Icon"
        title="Satisfaction Guarantee"
        description="Shop confidently with our Satisfaction Guarantee: Love it or get a refund."
      />
      <FeatureItem
        imgSrc={shield}
        altText="Shield Check Icon"
        title="Secure Payment"
        description="Your payment information is processed securely. We do not store credit card details."
      />
    </div>
  );
};

export default Features;
