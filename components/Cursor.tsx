"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef    = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const labelRef  = useRef<HTMLDivElement>(null);

  const mouse   = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const raf     = useRef<number>(0);
  const hovered = useRef(false);
  const magnetic = useRef<{ el: Element; rect: DOMRect } | null>(null);

  const [label, setLabel] = useState("");

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot   = dotRef.current;
    const ringEl = ringRef.current;
    const lbl   = labelRef.current;
    if (!dot || !ringEl || !lbl) return;

    // Hide native cursor globally
    document.documentElement.classList.add("no-cursor");

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Magnetic logic: find nearest magnetic element
      let found = false;
      document.querySelectorAll("[data-magnetic]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cx   = rect.left + rect.width  / 2;
        const cy   = rect.top  + rect.height / 2;
        const dx   = e.clientX - cx;
        const dy   = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const threshold = Math.max(rect.width, rect.height) * 0.85;

        if (dist < threshold) {
          magnetic.current = { el, rect };
          found = true;
          // Move the button toward cursor
          const strength = (1 - dist / threshold) * 0.4;
          (el as HTMLElement).style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
        } else if (magnetic.current?.el === el) {
          (el as HTMLElement).style.transform = "";
        }
      });
      if (!found) magnetic.current = null;
    };

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1);

      dot.style.transform   = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;

      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    const onEnter = (e: Event) => {
      hovered.current = true;
      const el = e.currentTarget as HTMLElement;
      const lbl2 = el.dataset.cursorLabel ?? "";
      setLabel(lbl2);
      dot.classList.add("cursor-dot--hover");
      ringEl.classList.add("cursor-ring--hover");
    };
    const onLeave = () => {
      hovered.current = false;
      setLabel("");
      dot.classList.remove("cursor-dot--hover");
      ringEl.classList.remove("cursor-ring--hover");
      // Reset any magnetic offset
      document.querySelectorAll("[data-magnetic]").forEach((el) => {
        (el as HTMLElement).style.transform = "";
      });
    };

    const onDown  = () => { dot.classList.add("cursor-dot--press");  ringEl.classList.add("cursor-ring--press"); };
    const onUp    = () => { dot.classList.remove("cursor-dot--press"); ringEl.classList.remove("cursor-ring--press"); };

    document.addEventListener("mousemove",  onMove);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // MutationObserver for dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("no-cursor");
      cancelAnimationFrame(raf.current);
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Point — suit la souris instantanément, mix-blend-mode inverse les couleurs */}
      <div ref={dotRef} className="cursor-dot hidden lg:flex items-center justify-center" aria-hidden>
        {label && (
          <span ref={labelRef} className="cursor-label">{label}</span>
        )}
      </div>
      {/* Anneau — suit avec lag (lerp 0.1) */}
      <div ref={ringRef} className="cursor-ring hidden lg:block" aria-hidden />
    </>
  );
}
