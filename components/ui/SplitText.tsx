"use client";

import { useRef, useEffect, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: "char" | "word";
}

export default function SplitText({ text, className, delay = 0, stagger, mode = "word" }: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const defaultStagger = mode === "char" ? 0.018 : 0.065;
  const s = stagger ?? defaultStagger;
  const items = mode === "word" ? text.split(" ") : text.split("");

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: "-40px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: mode === "word" ? "0.28em" : 0 }}
        >
          <span
            className="inline-block"
            style={mounted ? {
              animationName: visible ? "slideUp" : "none",
              animationDuration: "0.55s",
              animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              animationFillMode: "both",
              animationDelay: `${delay + i * s}s`,
              transform: visible ? undefined : "translateY(115%)",
              opacity: visible ? undefined : 0,
            } : undefined}
          >
            {item}
          </span>
        </span>
      ))}
    </span>
  );
}
