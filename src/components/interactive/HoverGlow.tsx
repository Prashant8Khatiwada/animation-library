'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import React from 'react'

interface HoverGlowProps {
    children: React.ReactNode
    className?: string
    glowColor?: string
    glowSize?: number
}

export function HoverGlow({
    children,
    className = '',
    glowColor = 'rgba(255, 255, 255, 0.5)',
    glowSize = 200,
}: HoverGlowProps) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - left)
        mouseY.set(e.clientY - top)
    }

    return (
        <motion.div
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              ${glowSize}px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative">{children}</div>
        </motion.div>
    )
}
