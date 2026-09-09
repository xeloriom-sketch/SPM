"use client";
import { useRef, useEffect } from "react";

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
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const el = imgWrapRef.current;
    let rafId: number | null = null;
    let timerId: ReturnType<typeof setTimeout>;

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
      rafId = requestAnimationFrame(tick);
      raf.current = rafId;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    timerId = setTimeout(() => {
      if (el) el.style.willChange = "transform";
      rafId = requestAnimationFrame(tick);
      raf.current = rafId;
    }, 2500);

    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(timerId);
      if (raf.current) cancelAnimationFrame(raf.current);
      if (el) el.style.willChange = "auto";
    };
  }, [src]);

  return (
    <>
      <div className="absolute inset-0 bg-black" />
      <div ref={imgWrapRef} className="absolute inset-0">
        {/* Plain img (pas Next/Image) — Next/Image avec hydration React bloque LCP sur Chrome 131 */}
        <img
          src={src}
          alt={alt}
          width={1344}
          height={768}
          fetchPriority="high"
          decoding="async"
          className="object-cover absolute inset-0 w-full h-full"
          style={{ color: "transparent" }}
        />
      </div>
    </>
  );
}
