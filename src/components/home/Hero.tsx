"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/ui/TextReveal";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-soft-white flex items-center justify-center">
      {/* Soft Background Elements (Animated) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-sage/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.0] mb-8 tracking-tight">
            <TextReveal delay={0.1}>Ruhe finden.</TextReveal> <br />
            <span className="text-accent italic font-light block mt-2">
              <TextReveal delay={0.3}>Wege verkürzen.</TextReveal>
            </span>
          </h1>

          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-neutral-600 font-light mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Ob Messe in Basel oder Erholung im Markgräflerland – im Gästehaus Eimeldingen beginnt Ihr Tag entspannt.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button className="px-8 py-4 bg-accent text-white rounded-soft shadow-soft-ui hover:shadow-floating hover:bg-opacity-90 transition-all duration-300 font-medium tracking-wide transform hover:-translate-y-1">
                Jetzt Buchen
              </button>
              <button className="px-8 py-4 bg-white text-primary border border-white rounded-soft shadow-inner-soft hover:shadow-soft-ui transition-all duration-300 font-medium transform hover:-translate-y-1">
                Zimmer ansehen
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Visual Content (Parallax Image) */}
        <motion.div style={{ y, opacity }} className="flex-1 relative w-full max-w-[600px] aspect-square hidden md:block">
          {/* Main Image with Organic Shape Mask */}
          <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 overflow-hidden p-3 transform rotate-3 hover:rotate-1 transition-transform duration-700 ease-out-expo">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image
                src="/images/exterior.jpg"
                alt="Gästehaus Eimeldingen"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-[1.5s] ease-in-out"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Floating Element 1 - Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[1.5rem] shadow-floating flex items-center gap-4 animate-bounce-slow"
          >
            <div className="w-14 h-14 bg-sage/10 rounded-full flex items-center justify-center text-primary">
              <span className="text-2xl font-serif">4.9</span>
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Bewertung</p>
              <div className="flex text-accent text-sm">★★★★★</div>
            </div>
          </motion.div>

          {/* Floating Element 2 - Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-10 -right-8 bg-white/90 backdrop-blur px-6 py-4 rounded-full shadow-soft-ui flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-primary">10 Min &gt; Basel</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
