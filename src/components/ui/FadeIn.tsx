"use client";

import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    fullWidth?: boolean;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className = "",
    fullWidth = false
}: FadeInProps) {

    const directionOffset = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directionOffset[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 1,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className={`${fullWidth ? "w-full" : ""} ${className}`}
        >
            {children}
        </motion.div>
    );
}
