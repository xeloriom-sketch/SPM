"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Force muted (React ne sérialise pas l'attribut muted en SSR → navigateur bloque)
    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => {
      v.muted = true;
      v.play().catch(() => {});
    };

    // Tentative immédiate
    tryPlay();

    // Tentative dès que les données vidéo sont prêtes
    v.addEventListener("canplay",    tryPlay, { once: true });
    v.addEventListener("loadeddata", tryPlay, { once: true });

    // Tentative après la fin du loader (~3.4s) — timing critique pour iOS Safari
    const t1 = setTimeout(tryPlay, 2500);
    const t2 = setTimeout(tryPlay, 3600);

    // Fallback : premier geste utilisateur (scroll, tap, clic)
    const onInteract = () => tryPlay();
    window.addEventListener("scroll",     onInteract, { once: true, passive: true });
    window.addEventListener("touchstart", onInteract, { once: true, passive: true });
    window.addEventListener("click",      onInteract, { once: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll",     onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("click",      onInteract);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
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
