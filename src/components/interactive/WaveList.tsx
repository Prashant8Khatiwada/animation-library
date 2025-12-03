'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface WaveListProps {
    children: React.ReactNode
    className?: string
    stagger?: number
    delay?: number
}

export function WaveList({
    children,
    className = '',
    stagger = 0.1,
    delay = 0,
}: WaveListProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24,
            },
        },
    }

    return (
        <motion.ul
            className={className}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            {React.Children.map(children, (child) => (
                <motion.li variants={item} style={{ listStyle: 'none' }}>
                    {child}
                </motion.li>
            ))}
        </motion.ul>
    )
}
