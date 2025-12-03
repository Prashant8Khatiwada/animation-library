'use client'

import { motion } from 'framer-motion'
import React, { useRef } from 'react'

interface DraggableSnapProps {
    children: React.ReactNode
    className?: string
    constraints?: { top?: number; left?: number; right?: number; bottom?: number }
    stiffness?: number
    damping?: number
}

export function DraggableSnap({
    children,
    className = '',
    constraints,
    stiffness = 400,
    damping = 25,
}: DraggableSnapProps) {
    const ref = useRef(null)

    return (
        <motion.div
            ref={ref}
            className={className}
            drag
            dragConstraints={constraints || { top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
            whileTap={{ cursor: 'grabbing' }}
            style={{ cursor: 'grab' }}
            transition={{ type: 'spring', stiffness, damping }}
        >
            {children}
        </motion.div>
    )
}
