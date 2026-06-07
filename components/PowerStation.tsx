"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";

export default function PowerStation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section ref={containerRef} id="power" className="w-full bg-white py-20 font-sans">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

                {/* ── CADRE MÉDIA / VIDÉO (Inspiré fidèlement de l'image_4a1809.jpg) ── */}
                <motion.div
                    className="relative w-full aspect-[21/10] bg-[#e5e5e5] rounded-[32px] overflow-hidden shadow-sm mb-12 flex items-center justify-center group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {/* Image de fond simulant la station de l'image_4a1809.jpg */}
                    <img
                        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1800&q=85"
                        alt="Présentation du service premium"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    {/* Overlay d'ambiance de studio doux */}
                    <div className="absolute inset-0 bg-black/5 transition-opacity group-hover:bg-black/10" />

                    {/* Bouton Play Central Iconique */}
                    <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white text-black pl-1">
                        {isPlaying ? (
                            <Pause className="w-8 h-8 mr-1 stroke-[1.5]" />
                        ) : (
                            <Play className="w-8 h-8 stroke-[1.5]" />
                        )}
                    </div>
                </motion.div>

                {/* ── FOOTER TRIPARTITE EN 3 COLONNES ── */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-start">

                    {/* Colonne Gauche : Titre & Sous-titre */}
                    <div className="md:col-span-4">
                        <motion.h3
                            className="text-2xl sm:text-3xl font-medium tracking-tight text-black mb-1"
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            NIO Power Swap
                        </motion.h3>
                        <motion.p
                            className="text-xs text-black/40 font-normal"
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            A fully automatic battery swap in 3 minutes
                        </motion.p>
                    </div>

                    {/* Colonne Centrale : Description Technique */}
                    <div className="md:col-span-5">
                        <motion.p
                            className="text-xs text-[#555555] leading-relaxed font-normal md:max-w-md"
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Recharging beyond refueling. A 3-minute swap for a fully charged battery without
                            getting out of the car. A health check on the battery and electric drive system
                            during every swap, ensuring the optimal status of the vehicle.
                        </motion.p>
                    </div>

                    {/* Colonne Droite : Bouton Capsule noir */}
                    <div className="md:col-span-3 md:justify-self-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-4 rounded-full bg-black pl-5 pr-1.5 py-1.5 text-[11px] font-medium tracking-wider text-white transition-all hover:bg-[#111111]"
                            >
                                <span>Learn More</span>
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                                </div>
                            </a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}