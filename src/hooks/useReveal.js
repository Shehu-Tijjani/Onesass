import { useRef, useState, useEffect } from "react";

export default function useReveal(options = {}) {
  const {
    threshold = 0.2,
    root = null,
    rootMargin = "0px",
    once = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observerFunc = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) {
          observer.unobserve(element);
        }
      } else if (!once) {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(observerFunc, {
      threshold,
      root,
      rootMargin,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, once]);

  return { ref, isVisible };
}
