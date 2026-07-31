import React from "react";
import useReveal from "../hooks/useReveal";
import Button from "./Button";

function ProductPlanCard({ list, i }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 150}ms` }}
      className={`w-full  max-w-120 bg-white/3 p-8 rounded-2xl border-2 border-white/20 flex-1 transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      <small className="block mb-3">{list.type}</small>

      <h1 className="text-6xl mb-6 font-bold">
        ${list.amount} <small className="text-sm font-normal">/month</small>
      </h1>

      <ul className="leading-10">
        {list.list.map((item, i) => {
          return (
            <li key={i}>
              <span className=" mr-2">✓ </span>
              {item}
            </li>
          );
        })}
      </ul>

      <Button
        as="a"
        href="#"
        variant="primary"
        size="md"
        className="block mt-9 text-center"
        hover
      >
        Get Started For Free
      </Button>
    </div>
  );
}

function ProductPlanCards({ productPlanList }) {
  return productPlanList.map((list, i) => (
    <ProductPlanCard key={i} list={list} i={i} />
  ));
}

export default ProductPlanCards;
