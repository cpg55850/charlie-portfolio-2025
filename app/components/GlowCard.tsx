import React from 'react'

interface GlowEffectProps {
    children: React.ReactNode
    glowColor?: string
    className?: string
    hoverGlowIntensity?: 'sm' | 'md' | 'lg' | 'xl'
    onClick?: () => void
}

const glowIntensities = {
    sm: '0 0 12px 4px',
    md: '0 0 20px 6px',
    lg: '0 0 24px 8px',
    xl: '0 0 32px 12px',
}

export default function GlowEffect({
    children,
    glowColor = '#ffffff',
    className = '',
    hoverGlowIntensity = 'lg',
    onClick,
}: GlowEffectProps) {
    return (
        <>
            <div
                className={`glow-element cursor-pointer transition-shadow duration-300 ${className}`}
                style={
                    {
                        '--glow-color': glowColor,
                        '--glow-intensity': glowIntensities[hoverGlowIntensity],
                    } as React.CSSProperties
                }
                onClick={onClick}
            >
                {children}
            </div>
            <style jsx>{`
        @media (hover: hover) {
          .glow-element:hover {
            box-shadow: var(--glow-intensity) var(--glow-color);
          }
        }
      `}</style>
        </>
    )
}
