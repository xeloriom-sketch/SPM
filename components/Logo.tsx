"use client";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

export default function Logo({ variant = "dark", size = "md", showWordmark = true, className = "" }: LogoProps) {
  const mark = {
    sm: { w: "w-[20px]", h: "h-[10px]", b: "border-[1.5px]" },
    md: { w: "w-[26px]", h: "h-[13px]", b: "border-2" },
    lg: { w: "w-[34px]", h: "h-[17px]", b: "border-[2.5px]" },
  }[size];

  const textSize = { sm: "text-[7px]",  md: "text-[9px]",  lg: "text-[11px]" }[size];
  const subSize  = { sm: "text-[5.5px]",md: "text-[7px]",  lg: "text-[8.5px]"}[size];
  const gap      = { sm: "gap-2",        md: "gap-2.5",     lg: "gap-3" }[size];

  const color = variant === "dark" ? "border-white/75" : "border-black/70";
  const textCol = variant === "dark" ? "text-white" : "text-black";
  const subCol  = variant === "dark" ? "text-white/50" : "text-black/45";

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {/* Oval mark — two CSS half-arcs */}
      <div className="flex flex-col items-center gap-[2px]" aria-hidden="true">
        <div className={`${mark.w} ${mark.h} rounded-t-full border-t ${mark.b} border-b-0 ${color}`} />
        <div className={`${mark.w} ${mark.h} rounded-b-full border-b ${mark.b} border-t-0 ${color}`} />
      </div>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={`font-black tracking-[0.25em] uppercase ${textSize} ${textCol}`}>SPM</span>
          <span className={`font-semibold tracking-[0.2em] uppercase ${subSize} ${subCol}`}>Taxi · CPAM</span>
        </div>
      )}
    </div>
  );
}
