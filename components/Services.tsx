"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SplitText from "@/components/ui/SplitText";
import { useSettings } from "@/lib/settings-context";

const stats = [
  { value: 4,    suffix: "",    label: "Services exclusifs" },
  { value: 47,   suffix: "+",   label: "Avis 5 étoiles" },
  { value: 7,    suffix: "j/7", label: "Disponibilité" },
];

function Counter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1100;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [isVisible, value]);
  return <>{display}{suffix}</>;
}

function useInViewOnce(margin = "-80px") {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: margin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [margin]);
  return [ref, visible] as const;
}

export default function Services() {
  const s = useSettings();
  const [containerRef, isVisible] = useInViewOnce("-80px");

  const services = [
    { number: "01", title: s.service1_title, desc: s.service1_desc },
    { number: "02", title: s.service2_title, desc: s.service2_desc },
    { number: "03", title: s.service3_title, desc: s.service3_desc },
    { number: "04", title: s.service4_title, desc: s.service4_desc },
  ];

  const fadeStyle = (delay: number): React.CSSProperties => ({
    animationName: isVisible ? "fadeUp" : "none",
    animationDuration: "0.6s",
    animationTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
    animationFillMode: "both",
    animationDelay: `${delay}s`,
    opacity: isVisible ? undefined : 0,
  });

  return (
    <section ref={containerRef as React.Ref<HTMLElement>} id="services" className="w-full overflow-hidden bg-[#f8f9fa] py-20 md:py-36 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6 items-center mb-16 lg:mb-32">

          {/* Left */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            <div className="mb-7">
              <h2 className="font-sans font-medium text-black tracking-tight leading-tight text-4xl sm:text-5xl lg:text-[3.4rem]">
                <SplitText text={s.services_title_line1} delay={0} />
                <br />
                <span className="text-black/30">
                  <SplitText text={s.services_title_line2} delay={0.1} />
                </span>
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-[#555] max-w-sm font-normal mb-10 sm:mb-14" style={fadeStyle(0.28)}>
              {s.services_intro}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-0 mb-10 sm:mb-14">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center" style={fadeStyle(0.32 + i * 0.1)}>
                  {i !== 0 && <div className="hidden sm:block h-12 w-px bg-black/12 mx-8 lg:mx-10" />}
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[10px] tracking-widest text-[#888] mb-1 sm:mb-1.5 font-semibold uppercase">
                      {stat.label}
                    </span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black tabular-nums">
                      <Counter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={fadeStyle(0.62)}>
              <a
                href="#contact"
                title="Demander un devis — SPM Taxi"
                className="group inline-flex items-center gap-4 rounded-full bg-black pl-6 pr-1.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white hover:scale-[1.04] hover:-translate-y-0.5 active:scale-[0.96] transition-transform duration-200"
              >
                <span>Demander un devis</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </div>
              </a>
            </div>
          </div>

          {/* Right — car */}
          <div
            className="lg:col-span-7 relative w-full overflow-hidden lg:-mr-20 xl:-mr-32"
            style={{ height: "clamp(280px, 48vw, 520px)", ...fadeStyle(0.18) }}
          >
            <Image
              src="/image/tiguan-front-quarter-sm.webp"
              alt="SPM Volkswagen Tiguan Allspace 7 places"
              fill
              unoptimized
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="object-contain object-right"
              style={{ objectPosition: "70% center", filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.18))" }}
            />
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => (
            <a
              key={svc.number}
              href="#contact"
              title={`${svc.number} — Demander un devis`}
              className="group flex flex-col justify-between rounded-[22px] border border-black/[0.06] bg-white p-7 hover:-translate-y-2.5 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] active:scale-[0.97] transition-all duration-300"
              style={fadeStyle(0.18 + i * 0.1)}
            >
              <div>
                <span className="mb-5 block text-[10px] font-bold tracking-[0.25em] text-black/22 uppercase">
                  {svc.number}
                </span>
                <h3 className="font-sans text-base font-semibold tracking-tight text-black leading-snug mb-3">
                  {svc.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#777]">{svc.desc}</p>
              </div>
              <div className="mt-7 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-black/28 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
