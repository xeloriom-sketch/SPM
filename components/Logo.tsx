"use client";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ variant = "dark", size = "md", className = "" }: LogoProps) {
  const dim   = { sm: 22, md: 28, lg: 38 }[size];
  const name  = { sm: "text-[11px]", md: "text-[13px]", lg: "text-[17px]" }[size];
  const sub   = { sm: "text-[7px]",  md: "text-[8px]",  lg: "text-[10px]" }[size];
  const gap   = { sm: "gap-2",       md: "gap-2.5",      lg: "gap-3" }[size];
  const fg    = variant === "dark" ? "#fff" : "#0d0d0d";

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {/* Minimal car mark — no background */}
      <svg width={dim} height={dim} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Lime top bar */}
        <rect x="8" y="2" width="12" height="4" rx="2" fill="#b6f000" />
        {/* Roof */}
        <path d="M4 14 Q5.5 8 10 8 L18 8 Q22.5 8 24 14 Z" fill={fg} />
        {/* Body */}
        <rect x="2" y="14" width="24" height="9" rx="2.5" fill={fg} />
        {/* Wheels */}
        <circle cx="8"  cy="23" r="4" fill={variant === "dark" ? "#0d0d0d" : "#e0e0e0"} />
        <circle cx="8"  cy="23" r="2" fill={variant === "dark" ? "#333"    : "#bbb"}    />
        <circle cx="20" cy="23" r="4" fill={variant === "dark" ? "#0d0d0d" : "#e0e0e0"} />
        <circle cx="20" cy="23" r="2" fill={variant === "dark" ? "#333"    : "#bbb"}    />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-black tracking-[0.22em] uppercase ${name}`} style={{ color: fg }}>
          SPM
        </span>
        <span className={`font-medium tracking-[0.18em] uppercase ${sub}`} style={{ color: variant === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>
          Taxi · CPAM
        </span>
      </div>
    </div>
  );
}
