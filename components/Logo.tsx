"use client";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

export default function Logo({ variant = "dark", size = "md", showWordmark = true, className = "" }: LogoProps) {
  const dim = { sm: 28, md: 36, lg: 48 }[size];
  const textSize = { sm: "text-[8px]", md: "text-[10px]", lg: "text-[13px]" }[size];
  const subSize = { sm: "text-[6px]", md: "text-[7px]", lg: "text-[9px]" }[size];
  const gap = { sm: "gap-2", md: "gap-2.5", lg: "gap-3" }[size];

  const isDark = variant === "dark";

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {/* SVG mark */}
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background circle */}
        <circle cx="24" cy="24" r="24" fill={isDark ? "#0d0d0d" : "#ffffff"} />

        {/* Taxi roof light */}
        <rect x="16" y="8" width="16" height="7" rx="2.5" fill="#b6f000" />
        <text
          x="24"
          y="14.5"
          textAnchor="middle"
          fontFamily="Arial Black, sans-serif"
          fontSize="5"
          fontWeight="900"
          fill="#0d0d0d"
        >
          TAXI
        </text>

        {/* Car cabin */}
        <path
          d="M13 22 Q14.5 15 20.5 15 L27.5 15 Q33.5 15 35 22 Z"
          fill={isDark ? "white" : "#0d0d0d"}
        />

        {/* Car body */}
        <rect x="9" y="22" width="30" height="12" rx="3" fill={isDark ? "white" : "#0d0d0d"} />

        {/* Window divider */}
        <line
          x1="24" y1="22" x2="24" y2="15"
          stroke={isDark ? "#0d0d0d" : "white"}
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Wheels */}
        <circle cx="16" cy="34" r="5" fill={isDark ? "#0d0d0d" : "#444"} />
        <circle cx="16" cy="34" r="2.5" fill={isDark ? "#555" : "#bbb"} />
        <circle cx="32" cy="34" r="5" fill={isDark ? "#0d0d0d" : "#444"} />
        <circle cx="32" cy="34" r="2.5" fill={isDark ? "#555" : "#bbb"} />

        {/* Lime stripe on body */}
        <rect x="9" y="27" width="30" height="3" fill="#b6f000" opacity="0.18" />
      </svg>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black tracking-[0.25em] uppercase ${textSize} ${isDark ? "text-white" : "text-black"}`}
          >
            SPM
          </span>
          <span
            className={`font-semibold tracking-[0.2em] uppercase ${subSize} ${isDark ? "text-white/50" : "text-black/45"}`}
          >
            Taxi · CPAM
          </span>
        </div>
      )}
    </div>
  );
}
