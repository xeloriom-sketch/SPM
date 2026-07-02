"use client";
import { useRef, useEffect, useState } from "react";
import { type MotionValue, useMotionValueEvent, motionValue } from "framer-motion";

const NOOP = motionValue(0);

interface HeroVideoProps {
  src: string;
  webmSrc?: string;
  scrollYProgress?: MotionValue<number>;
}

export default function HeroVideo({ src, webmSrc, scrollYProgress }: HeroVideoProps) {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const targetRef  = useRef(0);
  const seekingRef = useRef(false);
  const timerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [ready, setReady] = useState(false);
  const scrubMode = !!scrollYProgress;

  // One seek at a time. Safety timeout releases the lock on mobile if `seeked` never fires.
  const flush = () => {
    const v = videoRef.current;
    if (!v) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    seekingRef.current = true;
    v.currentTime = targetRef.current;
    // iOS Safari sometimes never fires `seeked` — release lock after 300 ms so scrubbing doesn't freeze
    timerRef.current = setTimeout(() => {
      seekingRef.current = false;
    }, 300);
  };

  useMotionValueEvent(scrollYProgress ?? NOOP, "change", (latest) => {
    const v = videoRef.current;
    if (!v?.duration) return;
    targetRef.current = Math.max(0, Math.min(v.duration, latest * v.duration));
    if (!seekingRef.current) flush();
  });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const releaseLock = () => {
      if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
      seekingRef.current = false;
    };

    const onSeeked = () => {
      if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
      // Still behind? Seek once more to latest position
      if (Math.abs(v.currentTime - targetRef.current) > 0.016) flush();
      else seekingRef.current = false;
    };

    v.addEventListener("seeked",  onSeeked);
    v.addEventListener("stalled", releaseLock); // network stall — release so scrubbing resumes
    v.addEventListener("error",   releaseLock);

    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.preload = "auto";
    v.load();

    const onReady = () => {
      setReady(true);
      // In scrub mode: pause only (no playbackRate=0 — not supported on iOS Safari)
      if (scrubMode) v.pause();
      else v.play().catch(() => {});
    };

    if (v.readyState >= 2) {
      setReady(true);
      if (scrubMode) v.pause();
      else v.play().catch(() => {});
    } else {
      v.addEventListener("loadeddata", onReady, { once: true });
    }

    // iOS Safari requires a user-gesture play() before currentTime assignments work.
    // On first touch, play+pause immediately to "unlock" the video element for seeking.
    const unlockIOS = () => {
      if (!scrubMode) return;
      v.play().then(() => v.pause()).catch(() => {});
    };
    document.addEventListener("touchstart", unlockIOS, { once: true, passive: true });

    return () => {
      v.removeEventListener("seeked",  onSeeked);
      v.removeEventListener("stalled", releaseLock);
      v.removeEventListener("error",   releaseLock);
      v.removeEventListener("loadeddata", onReady);
      document.removeEventListener("touchstart", unlockIOS);
      if (timerRef.current) clearTimeout(timerRef.current);
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
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
