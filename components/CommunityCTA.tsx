"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CommunityCTA() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section ref={containerRef} id="community" className="w-full bg-white py-16 font-sans">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

                {/* ── CONTENEUR BANNIÈRE IMMERSIVE (Inspiré de l'image_49beac.jpg) ── */}
                <motion.div
                    className="relative w-full aspect-[21/9] min-h-[400px] rounded-[32px] overflow-hidden bg-[#1a1a1a] flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Image d'arrière-plan sombre en basse luminosité */}
                    <img
                        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1800&q=85"
                        alt="Nio Community Background"
                        className="absolute inset-0 w-full h-full object-cover brightness-[0.25] contrast-[1.05] transition-transform duration-10000 ease-out scale-105 group-hover:scale-100"
                    />

                    {/* Overlay dégradé subtil pour recentrer l'attention au milieu */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

                    {/* ── BLOC DE CONTENU CENTRAL VRAI EN BLANC ── */}
                    <div className="relative z-10 max-w-2xl flex flex-col items-center">

                        {/* Titre Principal */}
                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-4"
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Be Part of the Nio Community
                        </motion.h2>

                        {/* Description fine et aérée */}
                        <motion.p
                            className="text-[11px] sm:text-xs text-white/70 leading-relaxed font-normal max-w-xl mb-8 tracking-wide px-4"
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Join a community that's redefining what it means to drive. As a member of the Nio family,
                            you gain access to exclusive events, insights, and a network of like-minded individuals who
                            share a passion for innovation and sustainability.
                        </motion.p>

                        {/* Bouton Capsule Blanc Signature */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-5 rounded-full bg-white pl-6 pr-1.5 py-1.5 text-[11px] font-medium tracking-wider text-black transition-all duration-300 hover:bg-white/95 hover:shadow-lg"
                            >
                                <span>Join Our Community</span>
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-0.5">
                                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                                </div>
                            </a>
                        </motion.div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}