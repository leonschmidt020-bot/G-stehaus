"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    const words = children.split(" ");

    return (
        <span ref={ref} className={`inline-block ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] -mb-[0.2em] pb-[0.2em]">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{
                            duration: 0.8,
                            delay: delay + i * 0.05,
                            ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
