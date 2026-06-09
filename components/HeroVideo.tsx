"use client";
import { useRef, useEffect, useState } from "react";
import { type MotionValue, useMotionValueEvent, motionValue } from "framer-motion";

const NOOP = motionValue(0);

interface HeroVideoProps {
  src: string;
  scrollYProgress?: MotionValue<number>;
}

export default function HeroVideo({ src, scrollYProgress }: HeroVideoProps) {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const targetRef  = useRef(0);      // latest desired time, always up-to-date
  const seekingRef = useRef(false);  // true while a browser seek is in flight
  const [ready, setReady] = useState(false);
  const scrubMode = !!scrollYProgress;

  // Flush: send one seek to the browser. Only called when browser is free.
  const flush = () => {
    const v = videoRef.current;
    if (!v) return;
    seekingRef.current = true;
    v.currentTime = targetRef.current; // precise seeking (no fastSeek — keyframe-snapping is visually choppy)
  };

  // Called every Framer Motion animation frame while scrollYProgress changes.
  // Stores desired time then flushes only when the browser is not already seeking.
  useMotionValueEvent(scrollYProgress ?? NOOP, "change", (latest) => {
    const v = videoRef.current;
    if (!v?.duration) return;
    targetRef.current = Math.max(0, Math.min(v.duration, latest * v.duration));
    if (!seekingRef.current) flush();
  });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // When a seek completes, check if we still need to catch up to targetRef.
    // This drains any backlog without ever queuing multiple seeks.
    const onSeeked = () => {
      if (Math.abs(v.currentTime - targetRef.current) > 0.016) {
        flush(); // still behind the scroll position — seek once more
      } else {
        seekingRef.current = false; // in sync, idle
      }
    };
    v.addEventListener("seeked", onSeeked);

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

    if (v.readyState >= 2) {
      setReady(true);
      if (scrubMode) { v.pause(); v.playbackRate = 0; }
      else v.play().catch(() => {});
    } else {
      v.addEventListener("loadeddata", onReady, { once: true });
    }

    const onTouch = () => v.load();
    document.addEventListener("touchstart", onTouch, { once: true, passive: true });

    return () => {
      v.removeEventListener("seeked", onSeeked);
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
