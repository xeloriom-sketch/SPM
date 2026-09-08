"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt?: string;
}

export default function HeroImage({ src, alt = "" }: HeroImageProps) {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    // Touch/mobile devices have no mouse — skip rAF loop entirely to save CPU
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const el = imgWrapRef.current;
    if (el) el.style.willChange = "transform";

    const onMove = (e: MouseEvent) => {
      const { innerWidth: W, innerHeight: H } = window;
      mouse.current = {
        x: (e.clientX / W - 0.5) * 2,
        y: (e.clientY / H - 0.5) * 2,
      };
    };

    const tick = () => {
      const LERP = 0.055;
      const MAX = 20;
      current.current.x += (mouse.current.x * MAX - current.current.x) * LERP;
      current.current.y += (mouse.current.y * MAX - current.current.y) * LERP;

      if (imgWrapRef.current) {
        imgWrapRef.current.style.transform =
          `scale(1.1) translate(${current.current.x}px, ${current.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
      if (el) el.style.willChange = "auto";
    };
  }, [src]);

  return (
    <>
      <div className="absolute inset-0 bg-black" />
      <div
        ref={imgWrapRef}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </>
  );
}
