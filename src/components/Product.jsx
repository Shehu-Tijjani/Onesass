import React from "react";
import { productImage } from "@/lib/images.js";
import SectionHeaders from "./SectionHeaders";
import useReveal from "../hooks/useReveal";

function Product() {
  const { ref, isVisible } = useReveal();
  return (
    <>
      <div
        className="container px-8 py-15 pt-20 m-auto max-w-300 max-h-min flex flex-col justify-center items-center border-amber-200 text-center text-white relative
    "
      >
        <SectionHeaders
          topHeader={"A more effective way"}
          bottomHeader={"to track progress"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam"
          }
        />

        <div
          ref={ref}
          className={`image transition-all duration-800 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <img
            src={productImage}
            alt=""
            className="shadow-[0_2px_15px_2px_rgba(255,255,255,.11)] rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}

export default Product;
