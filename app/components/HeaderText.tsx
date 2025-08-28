import React from 'react'

interface HeaderTextProps {
    children: React.ReactNode
    className?: string
}

const HeaderText = ({ children, className = '' }: HeaderTextProps) => {
    return (
        <h2 className={`font-bold text-2xl sm:text-3xl md:text-4xl text-white ${className}`} style={{
            paddingTop: 'clamp(1.5em, 3vw, 3rem)', // More padding on top
            paddingBottom: 'clamp(0.75em, 1.5vw, 1.5rem)', // Less padding on bottom
        }}>
            {children}
        </h2>
    )
}

export default HeaderText
