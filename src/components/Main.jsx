import React from "react";
import Product from "./Product";
import Brands from "./Brands";
import ProductPlan from "./ProductPlan";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";

function Main() {
  return (
    <div>
      <Brands />
      <Product />
      <ProductPlan />
      <Features />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default Main;
