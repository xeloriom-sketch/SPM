"use client";

import { useRef, useEffect } from "react";
import { useScroll, useSpring } from "framer-motion";

export default function HeroVideo({ src, scrollFactor = 1 }: { src: string; scrollFactor?: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const smooth = useSpring(scrollY, { stiffness: 52, damping: 15, mass: 1 });

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;

    // iOS Safari ignores preload="auto" — force a brief play/pause to trigger buffering
    const forceBuffer = () => {
      v.muted = true;
      v.play()
        .then(() => {
          // Let iOS buffer ~100ms then freeze at frame 0
          setTimeout(() => {
            v.pause();
            if (smooth.get() < 1) v.currentTime = 0;
          }, 100);
        })
        .catch(() => {});
    };

    v.addEventListener("loadedmetadata", forceBuffer, { once: true });

    // Prevent any subsequent browser-triggered autoplay (after the forced buffer)
    const stopAutoplay = (e: Event) => {
      const target = e.target as HTMLVideoElement;
      // Only stop if not triggered by our own forceBuffer (give it 300ms grace)
      setTimeout(() => { if (smooth.get() < 1) target.pause(); }, 300);
    };
    v.addEventListener("play", stopAutoplay);

    // Scroll → video currentTime
    const unsub = smooth.on("change", (y) => {
      if (!v.duration || v.readyState < 1) return;
      const progress = Math.max(0, Math.min(1, y / (window.innerHeight * scrollFactor)));
      v.currentTime = progress * v.duration;
    });

    return () => {
      v.removeEventListener("loadedmetadata", forceBuffer);
      v.removeEventListener("play", stopAutoplay);
      unsub();
    };
  }, [smooth, scrollFactor]);

  return (
    <video
      ref={ref}
      muted
      playsInline
      preload="metadata"
      poster="/image/tiguan-hero.jpeg"
      disablePictureInPicture
      className="h-full w-full object-cover"
      style={{ pointerEvents: "none" }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
