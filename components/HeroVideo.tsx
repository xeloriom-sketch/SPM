"use client";
import { useRef, useEffect, useState } from "react";

export default function HeroVideo({ src }: { src: string; scrollFactor?: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.preload = "auto";
    v.load(); // force iOS to start buffering

    // Find outer scroll container: first ancestor taller than viewport
    let outer: HTMLElement | null = v.parentElement;
    while (outer) {
      if (outer.offsetHeight > window.innerHeight * 1.05) break;
      outer = outer.parentElement;
    }

    const scrub = () => {
      if (!outer || !v.duration) return;
      const rect = outer.getBoundingClientRect();
      const range = outer.offsetHeight - window.innerHeight;
      if (range <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / range));
      if (isFinite(progress)) v.currentTime = progress * v.duration;
    };

    const onMeta = () => scrub();
    const onData = () => { setReady(true); scrub(); };

    if (v.readyState >= 2) { setReady(true); scrub(); }
    else if (v.readyState >= 1) { onMeta(); }

    v.addEventListener("loadedmetadata", onMeta, { once: true });
    v.addEventListener("loadeddata", onData, { once: true });
    window.addEventListener("scroll", scrub, { passive: true });

    // iOS: reveal video on first touch even without full buffer
    const onTouch = () => { if (!ready) { v.load(); } };
    document.addEventListener("touchstart", onTouch, { once: true, passive: true });

    return () => {
      window.removeEventListener("scroll", scrub);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("loadeddata", onData);
      document.removeEventListener("touchstart", onTouch);
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
