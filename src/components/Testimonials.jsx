import React from "react";
import SectionHeaders from "./SectionHeaders";
import TestimonialsCards from "./TestimonialsCards";

function Testimonials() {
  return (
    <div className="bg-testimonials-gradient">
      <div
        className="container px-8 py-15 m-auto max-w-300 max-h-min flex flex-col justify-center items- text-white 
      "
      >
        <SectionHeaders topHeader={"What our users say"} marginBottom={15} />

        <div className="flex flex-col md:flex-row gap-4 leading-5 ">
          <TestimonialsCards />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
