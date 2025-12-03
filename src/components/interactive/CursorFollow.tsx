'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect } from 'react'

interface CursorFollowProps {
    children?: React.ReactNode
    className?: string
    stiffness?: number
    damping?: number
    mass?: number
}

export function CursorFollow({
    children,
    className = '',
    stiffness = 200,
    damping = 20,
    mass = 0.5,
}: CursorFollowProps) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springX = useSpring(mouseX, { stiffness, damping, mass })
    const springY = useSpring(mouseY, { stiffness, damping, mass })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <motion.div
            className={`fixed top-0 left-0 pointer-events-none z-50 ${className}`}
            style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            {children || <div className="w-4 h-4 bg-blue-500 rounded-full opacity-50" />}
        </motion.div>
    )
}
