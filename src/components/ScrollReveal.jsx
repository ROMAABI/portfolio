import { useEffect, useRef } from "react";

const variants = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  fade: "reveal-fade",
};

export default function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const variantClass = variants[variant] || "reveal-up";
    el.classList.add(variantClass);
    if (delay) el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
