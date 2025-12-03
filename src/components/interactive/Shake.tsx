'use client'

import { motion, useAnimation } from 'framer-motion'
import React from 'react'

interface ShakeProps {
    children: React.ReactNode
    className?: string
    intensity?: number
    duration?: number
    trigger?: any // Optional external trigger
}

export function Shake({
    children,
    className = '',
    intensity = 10,
    duration = 0.4,
    trigger,
}: ShakeProps) {
    const controls = useAnimation()

    const shake = async () => {
        await controls.start({
            x: [0, -intensity, intensity, -intensity, intensity, 0],
            transition: { duration },
        })
    }

    // Shake when trigger changes (if provided)
    React.useEffect(() => {
        if (trigger !== undefined) {
            shake()
        }
    }, [trigger])

    return (
        <motion.div
            className={className}
            animate={controls}
            onClick={shake}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.div>
    )
}
