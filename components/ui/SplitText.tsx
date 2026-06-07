"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: "char" | "word";
  once?: boolean;
}

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger,
  mode = "word",
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });

  const defaultStagger = mode === "char" ? 0.022 : 0.07;
  const s = stagger ?? defaultStagger;

  const items = mode === "word" ? text.split(" ") : text.split("");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: mode === "word" ? "0.28em" : 0 }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.65,
              delay: delay + i * s,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
