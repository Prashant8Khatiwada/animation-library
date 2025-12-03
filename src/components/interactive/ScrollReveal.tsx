'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    direction?: 'up' | 'down' | 'left' | 'right'
    distance?: number
    delay?: number
    duration?: number
    threshold?: number
    once?: boolean
}

export function ScrollReveal({
    children,
    className = '',
    direction = 'up',
    distance = 50,
    delay = 0,
    duration = 0.5,
    threshold = 0.2,
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: threshold, once })

    const getInitial = () => {
        switch (direction) {
            case 'up': return { y: distance, opacity: 0 }
            case 'down': return { y: -distance, opacity: 0 }
            case 'left': return { x: distance, opacity: 0 }
            case 'right': return { x: -distance, opacity: 0 }
        }
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={getInitial()}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : getInitial()}
            transition={{
                duration,
                delay,
                type: 'spring',
                stiffness: 100,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    )
}
