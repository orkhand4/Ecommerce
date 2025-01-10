import React from "react";
import NotificationBar from "../components/notificationBar";
import Header from "../components/header";
import Hero from "../components/hero";
import Features from "../components/features";
import BestSeller from "../components/bestSeller";
import Cta from "../components/cta";
import Products from "../components/products";
import Footer from "../components/footer";

function HomePage() {
  return (
    <>
      <NotificationBar
        text="Get 25% OFF on your first order."
        btnText="Order Now"
        btnHref="ads"
      />
      <Header />
      <Hero />
      <Features />
      <BestSeller />
      <Cta />
      <Products />
      <Footer />
    </>
  );
}

export default HomePage;
