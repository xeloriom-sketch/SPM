"use client";
import { useRef, useEffect, useState } from "react";
import { type MotionValue, useMotionValueEvent, motionValue } from "framer-motion";

const NOOP = motionValue(0);

interface HeroVideoProps {
  src: string;
  webmSrc?: string;
  mobileSrc?: string;
  poster?: string;
  scrollYProgress?: MotionValue<number>;
}

export default function HeroVideo({ src, webmSrc, mobileSrc, poster, scrollYProgress }: HeroVideoProps) {
  const videoRef   = useRef<HTMLVideoElement>(null);
  const targetRef  = useRef(0);
  const seekingRef = useRef(false);
  const timerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [ready, setReady] = useState(false);
  const scrubMode = !!scrollYProgress;

  const flush = () => {
    const v = videoRef.current;
    if (!v) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    seekingRef.current = true;
    v.currentTime = targetRef.current;
    timerRef.current = setTimeout(() => { seekingRef.current = false; }, 300);
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
      if (Math.abs(v.currentTime - targetRef.current) > 0.016) flush();
      else seekingRef.current = false;
    };

    v.addEventListener("seeked",  onSeeked);
    v.addEventListener("stalled", releaseLock);
    v.addEventListener("error",   releaseLock);

    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    // Scrub mode needs full preload; autoplay mode only needs metadata
    v.preload = scrubMode ? "auto" : "none";
    v.load();

    const onReady = () => {
      setReady(true);
      if (scrubMode) v.pause();
      else v.play().catch(() => {});
    };

    if (scrubMode) {
      if (v.readyState >= 2) { setReady(true); v.pause(); }
      else v.addEventListener("loadeddata", onReady, { once: true });

      const unlockIOS = () => { v.play().then(() => v.pause()).catch(() => {}); };
      document.addEventListener("touchstart", unlockIOS, { once: true, passive: true });

      return () => {
        v.removeEventListener("seeked",  onSeeked);
        v.removeEventListener("stalled", releaseLock);
        v.removeEventListener("error",   releaseLock);
        v.removeEventListener("loadeddata", onReady);
        document.removeEventListener("touchstart", unlockIOS);
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    } else {
      // Mobile/autoplay mode: play when visible, pause when hidden
      setReady(true);
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) v.play().catch(() => {});
          else v.pause();
        },
        { threshold: 0.01 }
      );
      observer.observe(v);

      return () => {
        v.removeEventListener("seeked",  onSeeked);
        v.removeEventListener("stalled", releaseLock);
        v.removeEventListener("error",   releaseLock);
        observer.disconnect();
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [src, scrubMode]);

  return (
    <>
      <div className="absolute inset-0 bg-black" />
      <video
        ref={videoRef}
        muted
        playsInline
        preload={scrubMode ? "auto" : "none"}
        poster={poster}
        loop={!scrubMode}
        disablePictureInPicture
        className="h-full w-full object-cover absolute inset-0 transition-opacity duration-700"
        style={{ pointerEvents: "none", opacity: poster ? 1 : (ready ? 1 : 0) }}
      >
        {/* Mobile source served first on small screens */}
        {mobileSrc && (
          <source src={mobileSrc} type="video/mp4" media="(max-width: 768px)" />
        )}
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
