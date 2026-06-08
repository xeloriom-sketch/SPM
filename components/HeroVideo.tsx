"use client";

import { useRef, useEffect } from "react";
import { useScroll, useSpring } from "framer-motion";

export default function HeroVideo({ src, scrollFactor = 1 }: { src: string; scrollFactor?: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  // Spring smoothing = silky scrubbing like Apple
  const smooth = useSpring(scrollY, { stiffness: 52, damping: 15, mass: 1 });

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;

    // Freeze at frame 0 — no autoplay
    const freeze = () => {
      v.pause();
      v.currentTime = 0;
    };
    v.addEventListener("loadedmetadata", freeze, { once: true });
    v.addEventListener("canplay", freeze, { once: true });
    // Prevent any browser-triggered autoplay
    const stopAutoplay = (e: Event) => {
      const target = e.target as HTMLVideoElement;
      if (smooth.get() === 0) target.pause();
    };
    v.addEventListener("play", stopAutoplay);

    // Scroll → video time
    const unsub = smooth.on("change", (y) => {
      if (!v.duration || v.readyState < 2) return;
      const progress = Math.max(0, Math.min(1, y / (window.innerHeight * scrollFactor)));
      v.currentTime = progress * v.duration;
    });

    return () => {
      v.removeEventListener("loadedmetadata", freeze);
      v.removeEventListener("play", stopAutoplay);
      unsub();
    };
  }, [smooth]);

  return (
    <video
      ref={ref}
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      className="h-full w-full object-cover"
      style={{ pointerEvents: "none" }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
