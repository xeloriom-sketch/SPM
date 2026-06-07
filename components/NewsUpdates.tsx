"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

const articles = [
    {
        author: "Max William",
        title: "Nio Unveils the All-New ET7 with Extended Range and Enhanced Autonomy",
        description: "Nio's commitment to convenience and sustainability grows with our expanding network of battery swap stations across Europe, enabling drivers to charge on the go with ease and efficiency. Join us in revolutionizing electric mobility.",
        date: "14 March 2024",
        href: "#"
    },
    {
        author: "Sophie Chang",
        title: "NIO Unveils New Solar Roof Technology to Enhance Efficiency",
        description: "NIO is pushing the boundaries of renewable energy with its latest solar roof technology, designed to blend seamlessly with modern architecture while maximizing energy capture. Discover how this innovation could change your home.",
        date: "20 March 2024",
        href: "#"
    },
    {
        author: "Liam Rodriguez",
        title: "NIO Launches Innovative Hybrid Model for Urban Commuters",
        description: "NIO introduces its new hybrid vehicle, engineered specifically for city driving. This model combines electric efficiency with the reliability of traditional fuel, ensuring a smooth ride while reducing your carbon footprint.",
        date: "25 March 2024",
        href: "#"
    }
];

export default function NewsUpdates() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} id="news" className="w-full bg-white py-20 font-sans">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

                {/* ── EN-TÊTE ASYMÉTRIQUE (Inspiré de l'image_49c20f.jpg) ── */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-16">
                    <div className="md:col-span-6">
                        <motion.h2
                            className="text-2xl sm:text-3xl font-medium tracking-tight text-black leading-tight max-w-md"
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            Stay Connected with Nio's<br />Latest News and Updates
                        </motion.h2>
                    </div>
                    <div className="md:col-span-6 md:justify-self-end">
                        <motion.p
                            className="text-[11px] text-[#555555] leading-relaxed max-w-md font-normal"
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            Stay up-to-date with the latest from Nio. From groundbreaking technology
                            advancements to exclusive community events and sustainability initiatives,
                            explore how Nio is driving the future of electric mobility.
                        </motion.p>
                    </div>
                </div>

                {/* ── GRILLE DE CARTES (Style Premium Dark Card) ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {articles.map((article, index) => (
                        <motion.a
                            key={index}
                            href={article.href}
                            className="relative bg-[#0d0d0d] text-white rounded-[32px] p-8 lg:p-10 min-h-[460px] flex flex-col justify-between group transition-transform duration-300 hover:-translate-y-1"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                        >
                            {/* Contenu supérieur */}
                            <div>
                <span className="text-[11px] text-white/40 block mb-6 font-normal tracking-wide">
                  {article.author}
                </span>
                                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white leading-snug mb-4 group-hover:text-white/90 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                                    {article.description}
                                </p>
                            </div>

                            {/* Contenu inférieur */}
                            <div className="flex items-center justify-between mt-8">
                <span className="text-[11px] text-white/40 font-normal tracking-wide">
                  {article.date}
                </span>

                                {/* Bouton flèche circulaire signature */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:scale-105 group-hover:bg-white/90">
                                    <ChevronRight className="h-5 w-5 stroke-[2]" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
}