import React from "react";
import {
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
} from "@/lib/icons.jsx";

const Icons = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6];

function Brands() {
  return (
    // <div className="">
    <div className="container mx-auto px-8 overflow-hidden">
      <div className="marquee-wrapper flex items-center justify-center ">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="marquee-group flex items-center gap-8 py-8"
          >
            {Icons.map((Icon, index) => (
              <div key={`${copy}-${index}`}>
                <Icon />
              </div>
            ))}
            {Icons.map((Icon, index) => (
              <div key={`${copy}-${index}`}>
                <Icon />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}

export default Brands;
