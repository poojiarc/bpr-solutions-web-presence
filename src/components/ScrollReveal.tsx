import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ children, direction = "up", delay = 0, className = "" }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.15);

  const animClass =
    direction === "left"
      ? "animate-reveal-left"
      : direction === "right"
      ? "animate-reveal-right"
      : "animate-reveal-up";

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
