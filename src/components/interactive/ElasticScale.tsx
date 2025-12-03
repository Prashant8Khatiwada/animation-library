'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface ElasticScaleProps {
    children: React.ReactNode
    className?: string
    scale?: number
    stiffness?: number
    damping?: number
}

export function ElasticScale({
    children,
    className = '',
    scale = 1.1,
    stiffness = 400,
    damping = 10,
}: ElasticScaleProps) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale }}
            transition={{ type: 'spring', stiffness, damping }}
        >
            {children}
        </motion.div>
    )
}
