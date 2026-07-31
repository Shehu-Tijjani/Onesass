import React from "react";
import { settings, pie } from "@/lib/images.js";
import useReveal from "../hooks/useReveal";
import Button from "./Button";

function Newsletter() {
  const { ref, isVisible } = useReveal();

  return (
    <div className="flex overflow-hidden">
      <div
        className="p-[80px_32px_80px_32px] m-auto mt-20 mb-20 max-w-300 max-h-min text-center text-white 
        relative basis-165 flex flex-col items-center

         
         has-[h2:hover,p:hover,form:hover]:[&_.img-1]:left-[-6vw]
         has-[h2:hover,p:hover,form:hover]:[&_.img-2]:right-[-7.5vw]
         "
      >
        <img
          src={pie}
          alt=""
          srcset=""
          className="img-1 h-27 absolute left-[-5vw] bottom-[13vw] transition-all duration-1300 
          sm:h-35
          md:h-40 s
          lg:h-50
          "
        />
        <img
          src={settings}
          alt=""
          srcset=""
          className="img-2 h-35 absolute top-[7.7vw] right-[-6.5vw] 
          transition-all duration-1300
          sm:h-40
          md:h-50
          lg:h-60
          "
        />

        <h2
          ref={ref}
          className={`text-[clamp(20px,7vw,60px)] font-bold mb-4 bg-clip-text text-transparent bg-clip-gradient z-1 transition-all duration-800 delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          Get instant access
        </h2>

        <p
          ref={ref}
          className={`text-[clamp(16px,3.5vw,22px)] leading-[clamp(20px,3.5vw,30px)] mb-10 z-1 transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veni
        </p>

        <form
          ref={ref}
          action=""
          className={`w-full flex gap-4 flex-wrap relative z-1 transition-all duration-800 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <input
            type="email"
            placeholder="name@gmail.com"
            className="border-0 px-6 py-5 font-medium rounded-xl bg-white/10 flex-700 basis-75 outline-0 focus:outline-[.5px] focus:outline-white/30"
          />

          <Button
            variant="primary"
            size="lg"
            className="rounded-xl grow shrink-0  basis-max"
          >
            Get access
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
