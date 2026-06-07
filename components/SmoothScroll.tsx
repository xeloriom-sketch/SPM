"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
      infinite: false,
    });

    let rafId: number;
    function tick(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    /* Sync anchor links */
    const anchors = document.querySelectorAll<HTMLAnchorElement>("a[href^='#']");
    const handleAnchor = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const target = document.querySelector(a.getAttribute("href") as string);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.4 });
      }
    };
    anchors.forEach((a) => a.addEventListener("click", handleAnchor));

    return () => {
      cancelAnimationFrame(rafId);
      anchors.forEach((a) => a.removeEventListener("click", handleAnchor));
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
