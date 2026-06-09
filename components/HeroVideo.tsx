"use client";
import { useRef, useEffect, useState } from "react";
import { type MotionValue, useMotionValueEvent, motionValue } from "framer-motion";

const NOOP = motionValue(0); // static value used when no scroll scrubbing

interface HeroVideoProps {
  src: string;
  scrollYProgress?: MotionValue<number>;
}

export default function HeroVideo({ src, scrollYProgress }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const scrubMode = !!scrollYProgress;

  // Framer Motion fires on every animation frame when scroll changes.
  // Handles desktop, iOS momentum scrolling, and reverse scroll with zero glitches.
  useMotionValueEvent(scrollYProgress ?? NOOP, "change", (latest) => {
    const v = videoRef.current;
    if (!v?.duration) return;
    const t = Math.max(0, Math.min(v.duration, latest * v.duration));
    const el = v as HTMLVideoElement & { fastSeek?: (t: number) => void };
    if (typeof el.fastSeek === "function") el.fastSeek(t);
    else el.currentTime = t;
  });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.preload = "auto";
    if (scrubMode) { v.pause(); v.playbackRate = 0; }
    v.load();

    const onReady = () => {
      setReady(true);
      if (scrubMode) { v.pause(); v.playbackRate = 0; }
      else v.play().catch(() => {});
    };
    if (v.readyState >= 2) { setReady(true); if (scrubMode) { v.pause(); v.playbackRate = 0; } else v.play().catch(() => {}); }
    else v.addEventListener("loadeddata", onReady, { once: true });

    // iOS: trigger buffering on first touch interaction
    const onTouch = () => v.load();
    document.addEventListener("touchstart", onTouch, { once: true, passive: true });

    return () => {
      v.removeEventListener("loadeddata", onReady);
      document.removeEventListener("touchstart", onTouch);
    };
  }, [src, scrubMode]);

  return (
    <>
      <div className="absolute inset-0 bg-black" />
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        loop={!scrubMode}
        disablePictureInPicture
        className="h-full w-full object-cover absolute inset-0 transition-opacity duration-700"
        style={{ pointerEvents: "none", opacity: ready ? 1 : 0 }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
