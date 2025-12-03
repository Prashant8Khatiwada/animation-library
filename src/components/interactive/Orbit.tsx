'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface OrbitProps {
    children: React.ReactNode
    className?: string
    radius?: number
    duration?: number
    direction?: 'clockwise' | 'counter-clockwise'
}

export function Orbit({
    children,
    className = '',
    radius = 50,
    duration = 10,
    direction = 'clockwise',
}: OrbitProps) {
    const rotateValue = direction === 'clockwise' ? 360 : -360

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <motion.div
                className="absolute"
                animate={{ rotate: rotateValue }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                style={{ width: radius * 2, height: radius * 2 }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                        animate={{ rotate: -rotateValue }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    >
                        {children}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
