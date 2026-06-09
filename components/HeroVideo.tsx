"use client";

import { useRef, useEffect, useState } from "react";

export default function HeroVideo({ src }: { src: string; scrollFactor?: number }) {
  const ref   = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.preload = "auto";

    // Find the sticky section ancestor, then its outer scroll container
    let sticky: HTMLElement | null = v.parentElement;
    while (sticky && getComputedStyle(sticky).position !== "sticky") {
      sticky = sticky.parentElement;
    }
    const outer = sticky?.parentElement ?? null;

    const scrub = () => {
      if (!outer || !v.duration) return;
      const docTop = outer.getBoundingClientRect().top + window.scrollY;
      const range  = outer.offsetHeight - window.innerHeight;
      if (range <= 0) return;
      const progress = Math.max(0, Math.min(1, (window.scrollY - docTop) / range));
      v.currentTime = progress * v.duration;
    };

    const onReady = () => {
      setReady(true);
      scrub();
    };

    if (v.readyState >= 2) {
      setReady(true);
      scrub();
    } else {
      v.addEventListener("loadeddata", onReady, { once: true });
    }

    window.addEventListener("scroll", scrub, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrub);
      v.removeEventListener("loadeddata", onReady);
    };
  }, [src]);

  return (
    <>
      <div className="absolute inset-0 bg-black" />
      <video
        ref={ref}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className="h-full w-full object-cover absolute inset-0 transition-opacity duration-700"
        style={{ pointerEvents: "none", opacity: ready ? 1 : 0 }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
