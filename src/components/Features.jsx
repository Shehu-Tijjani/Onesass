import React from "react";
import { integration, ecosystem, journal } from "@/lib/images.js";
import FeaturesCards from "./FeaturesCard";
import SectionHeaders from "./SectionHeaders";

function Features() {
  const featuresList = [
    {
      img: ecosystem,
      title: "Ecosystem",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis ex, aspernatur officiis itaque ipsam porro maiores voluptatum.",
    },
    {
      img: journal,
      title: "Goal tracking",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis ex, aspernatur officiis itaque ipsam porro maiores voluptatum.",
    },
    {
      img: integration,
      title: "Ecosystem",
      descr:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis ex, aspernatur officiis itaque ipsam porro maiores voluptatum.",
    },
  ];

  return (
    <div className="bg-features-gradient" id="features">
      <div
        className="container px-8 py-15 m-auto max-w-300 max-h-min flex flex-col justify-center items-center text-center text-white 
      "
      >
        <SectionHeaders
          topHeader={"Streamlined for easy"}
          bottomHeader={"management"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          }
        />

        <div className="features ans flex flex-col items-center justify-center text-left gap-6 self-stretch lg:flex-row lg:items-start  ">
          <FeaturesCards featuresList={featuresList} />
        </div>
      </div>
    </div>
  );
}

export default Features;
