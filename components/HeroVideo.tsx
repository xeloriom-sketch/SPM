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

    const show = () => { setReady(true); };

    // Already buffered (cached page, fast connection)
    if (v.readyState >= 3) {
      setReady(true);
    }

    v.addEventListener("canplay",    show, { once: true });
    v.addEventListener("loadeddata", show, { once: true });
    v.addEventListener("playing",    show, { once: true });

    v.play().catch(() => {});

    const onTouch = () => { v.play().catch(() => {}); };
    document.addEventListener("touchstart", onTouch, { once: true, passive: true });

    return () => {
      v.removeEventListener("canplay",    show);
      v.removeEventListener("loadeddata", show);
      v.removeEventListener("playing",    show);
      document.removeEventListener("touchstart", onTouch);
    };
  }, [src]);

  return (
    <>
      {/* Fond noir solide pendant le chargement — pas de poster, pas de flash */}
      <div className="absolute inset-0 bg-black" />
      <video
        ref={ref}
        autoPlay
        muted
        loop
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
