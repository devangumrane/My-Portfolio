import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorGlow() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the movement
    const springConfig = { damping: 25, stiffness: 200 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [mouseX, mouseY, isVisible]);

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block"
            style={{
                opacity: isVisible ? 1 : 0,
            }}
        >
            {/* Primary Glow */}
            <motion.div
                className="absolute w-64 h-64 rounded-full blur-[80px]"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, color-mix(in srgb, var(--color-primary), transparent 85%) 0%, transparent 70%)",
                }}
            />

            {/* Small Sharp Core */}
            <motion.div
                className="absolute w-4 h-4 rounded-full"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                    backgroundColor: "var(--color-primary)",
                    opacity: 0.3,
                    boxShadow: "0 0 15px var(--color-primary)",
                }}
            />
        </motion.div>
    );
}
