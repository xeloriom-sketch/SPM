"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      followerPos.current.x = lerp(followerPos.current.x, pos.current.x, 0.1);
      followerPos.current.y = lerp(followerPos.current.y, pos.current.y, 0.1);
      follower.style.left = `${followerPos.current.x}px`;
      follower.style.top = `${followerPos.current.y}px`;
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    const onEnterInteractive = () => {
      cursor.classList.add("cursor-expanded");
      follower.classList.add("follower-expanded");
    };
    const onLeaveInteractive = () => {
      cursor.classList.remove("cursor-expanded");
      follower.classList.remove("follower-expanded");
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor hidden lg:block" />
      <div ref={followerRef} className="cursor-follower hidden lg:block" />
    </>
  );
}
