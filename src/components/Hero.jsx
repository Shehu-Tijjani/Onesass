import useReveal from "../hooks/useReveal";

import { rocket, journal } from "@/lib/images.js";
import Icon from "./Icon";
import Button from "./Button";

function Hero() {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className=" flex-1 z-1 flex justify-center items-center
    
     "
    >
      <div
        className="p-8  max-w-300 max-h-min flex flex-col items-center text-center text-white relative
       mt-30 sm:mt-20 sm:pt-40

        has-[h1:hover,p:hover,a:hover,small:hover]:[&_.img-1]:left-0
        has-[h1:hover,p:hover,a:hover,small:hover]:[&_.img-1]:sm:left-[-6.5vw]
        has-[h1:hover,p:hover,a:hover,small:hover]:[&_.img-2]:right-[-3.5vw] 
        has-[h1:hover,p:hover,a:hover,small:hover]:[&_.img-2]:sm:right-[-6.5vw]
    "
      >
        <img
          src={journal}
          alt=""
          className="img-1 h-27 absolute left-3 -bottom-3 transition-all duration-1300 
          sm:h-35 sm:left-[-5vw]  sm:bottom-[1.5vw]
          md:h-40 s
          lg:h-50 lg:bottom-[5.5vw]
          z-1
          "
        />
        <img
          src={rocket}
          alt=""
          className="img-2 h-35 absolute top-[-4.7vw] right-[-1.5vw]
          transition-all duration-1300
          sm:h-40 sm:top-[11.7vw] sm:right-[-5.5vw]
          md:h-50
          lg:h-60
          z-1
          "
        />

        <a
          href="#"
          className={`border-[.5px] text-[13px] block font-semibold px-3 py-1 pb-1.5 rounded-lg mb-2 text-[rgba(255,255,255,.5)] border-amber-50/10 duration-800 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          hover:[&_.arrow]:ml-1
          `}
        >
          Version 2.0 is here
          <span href="#" className=" ml-2.5 text-white">
            Read more
          </span>
          <span className="arrow duration-300">
            <Icon
              icon={"arrow-right2"}
              size={10}
              className={`ml-3 text-white`}
            />
          </span>
        </a>

        <h1
          className={`text-[clamp(40px,16vw,135px)] font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-hero-clip-gradient transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <span>Pathway to</span>
          <br />
          <span className="block -mt-9 sm:-mt-16">Productivity</span>
        </h1>

        <p
          className={`text-[clamp(16px,3.5vw,22px)]  max-w-[40ch] leading-[clamp(20px,3.5vw,30px)] mb-9 sm:mb-10 transition-all duration-800 delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          Reach new heights with our app: Track progress, find motivation, and
          celebrate wins.
        </p>

        <Button as="a" href="" variant="primary" size="sm" hover>
          Get for free
        </Button>
      </div>
    </div>
  );
}

export default Hero;
