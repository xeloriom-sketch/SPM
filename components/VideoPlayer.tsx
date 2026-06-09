"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => {
      v.muted = true;
      v.play().catch(() => {});
    };

    tryPlay();
    v.addEventListener("canplay",      tryPlay, { once: true });
    v.addEventListener("loadeddata",   tryPlay, { once: true });
    v.addEventListener("loadedmetadata", tryPlay, { once: true });

    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) tryPlay(); },
      { threshold: 0.01 }
    );
    observer.observe(v);

    const t1 = setTimeout(tryPlay, 800);
    const t2 = setTimeout(tryPlay, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      className="h-full w-full object-cover"
      style={{ pointerEvents: "none" }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
