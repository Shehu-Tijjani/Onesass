import useReveal from "../hooks/useReveal";

function TestimonialsCard({ list, i }) {
  const { ref, isVisible } = useReveal();
  const { name, username, testimony } = list;

  return (
    <figure
      ref={ref}
      key={i}
      style={{ transitionDelay: `${i * 150}ms` }}
      className={`bg-white/5  p-7 rounded-2xl border-1 border-white/20 
        max-h-max transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      <div className="user flex items-center gap-4 mb-6">
        <img src="" alt="" className="h-13 w-13 rounded-full bg-white" />
        <div className="">
          <h3 className="font-medium text-lg">{name}</h3>
          <small>{username}</small>
        </div>
      </div>

      <p>{testimony}</p>
    </figure>
  );
}

function TestimonialsCards({ testimonialList }) {
  return testimonialList.map((list, i) => {
    return (
      <div
        key={i}
        className="flex-1 flex w-full max-w-120 ml-auto mr-auto flex-col gap-4 text-white"
      >
        {list.map((list, i) => (
          <TestimonialsCard key={i} list={list} i={i} />
        ))}
      </div>
    );
  });
}

export default TestimonialsCards;
