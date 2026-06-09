"use client";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ variant = "dark", size = "md", className = "" }: LogoProps) {
  const mark = {
    sm: { w: "w-[22px]", h: "h-[11px]", b: "border-[1.5px]" },
    md: { w: "w-[28px]", h: "h-[14px]", b: "border-2" },
    lg: { w: "w-[36px]", h: "h-[18px]", b: "border-[2.5px]" },
  }[size];

  const textSize = { sm: "text-[7px]", md: "text-[8.5px]", lg: "text-[10px]" }[size];
  const color    = variant === "dark" ? "border-white/75" : "border-black/70";
  const textCol  = variant === "dark" ? "text-white/55"   : "text-black/55";

  return (
    <div className={`flex flex-col items-center gap-[3px] ${className}`}>
      <div className={`${mark.w} ${mark.h} rounded-t-full border-t ${mark.b} border-b-0 ${color}`} />
      <div className={`${mark.w} ${mark.h} rounded-b-full border-b ${mark.b} border-t-0 ${color}`} />
      <span className={`font-black tracking-[0.35em] uppercase ${textSize} ${textCol}`}>SPM</span>
    </div>
  );
}
