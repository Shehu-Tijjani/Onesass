import React from "react";
import useReveal from "../hooks/useReveal";

function FeaturesCard({ list, i }) {
  const { ref, isVisible } = useReveal();
  const { img, title, descr } = list;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${i * 150}ms` }}
      className={`feature w-full flex flex-col text-center items-center justify-center max-w-120 bg-white/5 px-7 py-10 rounded-2xl border border-white/20 flex-1 transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      <img
        src={img}
        alt=""
        srcset=""
        className="h-[clamp(160px,10vw,200px)] mb-5"
      />
      <h2 className="text-[27px] mb-3 font-medium">{title}</h2>
      <p>{descr}</p>
    </div>
  );
}

function FeaturesCards({ featuresList }) {
  return featuresList.map((list, i) => {
    return <FeaturesCard key={i} list={list} i={i} />;
  });
}

export default FeaturesCards;
