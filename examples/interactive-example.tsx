'use client'

import {
    Magnetic,
    Tilt3D,
    ElasticScale,
    DraggableSnap,
    Shake,
    HoverGlow,
    ScrollReveal,
    Orbit,
    WaveList,
} from '../src/components'
import { useRef } from 'react'

export default function InteractiveExample() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>Interactive Animations</h1>
            <p style={{ marginBottom: '3rem', color: '#666' }}>
                Physics-based, interactive components for React/Next.js
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* Magnetic */}
                <section>
                    <h2>Magnetic</h2>
                    <Magnetic>
                        <div style={boxStyle}>Hover Me</div>
                    </Magnetic>
                </section>

                {/* Tilt 3D */}
                <section>
                    <h2>Tilt 3D</h2>
                    <Tilt3D>
                        <div style={{ ...boxStyle, background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)' }}>
                            3D Tilt Effect
                        </div>
                    </Tilt3D>
                </section>

                {/* Elastic Scale */}
                <section>
                    <h2>Elastic Scale</h2>
                    <ElasticScale>
                        <div style={{ ...boxStyle, background: '#FFE66D', color: '#333' }}>
                            Hover to Scale
                        </div>
                    </ElasticScale>
                </section>

                {/* Draggable Snap */}
                <section>
                    <h2>Draggable Snap</h2>
                    <DraggableSnap>
                        <div style={{ ...boxStyle, background: '#1A535C', cursor: 'grab' }}>
                            Drag & Snap
                        </div>
                    </DraggableSnap>
                </section>

                {/* Shake */}
                <section>
                    <h2>Shake on Click</h2>
                    <Shake>
                        <div style={{ ...boxStyle, background: '#FF6B6B' }}>
                            Click to Shake
                        </div>
                    </Shake>
                </section>

                {/* Hover Glow */}
                <section>
                    <h2>Hover Glow</h2>
                    <HoverGlow>
                        <div style={{ ...boxStyle, background: '#2C3E50' }}>
                            Hover for Glow
                        </div>
                    </HoverGlow>
                </section>

                {/* Scroll Reveal */}
                <section>
                    <h2>Scroll Reveal</h2>
                    <ScrollReveal direction="up">
                        <div style={{ ...boxStyle, background: '#95E1D3', color: '#333' }}>
                            Revealed on Scroll
                        </div>
                    </ScrollReveal>
                </section>

                {/* Orbit */}
                <section>
                    <h2>Orbit</h2>
                    <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Orbit radius={60} duration={5}>
                            <div style={{ width: '20px', height: '20px', background: '#FF6B6B', borderRadius: '50%' }} />
                        </Orbit>
                        <div style={{ width: '40px', height: '40px', background: '#4ECDC4', borderRadius: '50%' }} />
                    </div>
                </section>

                {/* Wave List */}
                <section style={{ gridColumn: '1 / -1' }}>
                    <h2>Wave List</h2>
                    <WaveList className="grid grid-cols-4 gap-4" stagger={0.1}>
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} style={{ ...boxStyle, margin: '0.5rem 0' }}>
                                List Item {i}
                            </div>
                        ))}
                    </WaveList>
                </section>

            </div>
        </div>
    )
}

const boxStyle: React.CSSProperties = {
    padding: '2rem',
    background: '#667eea',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '120px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}
