import useReveal from "@/hooks/useReveal";

function SectionHeaders({ topHeader, bottomHeader, desc, marginB = 16 }) {
  const { ref, isVisible } = useReveal();

  return (
    <div ref={ref}>
      <h2
        className={`text-[clamp(20px,7.5vw,60px)] font-bold mb-[${marginB}px] bg-clip-text text-transparent bg-clip-gradient text-center transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      >
        {topHeader}
        {bottomHeader && (
          <>
            <br /> <span className="block -mt-4 md:-mt-6 ">{bottomHeader}</span>
          </>
        )}
      </h2>

      {desc && (
        <p
          className={`text-[clamp(16px,3.5vw,22px)] m-auto  max-w-[45ch] leading-[clamp(20px,3.5vw,30px)] mb-20 transition-all duration-800 delay-150 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

export default SectionHeaders;
