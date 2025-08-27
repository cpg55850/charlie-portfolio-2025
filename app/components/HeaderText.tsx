import React from 'react'

interface HeaderTextProps {
    children: React.ReactNode
    className?: string
}

const HeaderText = ({ children, className = '' }: HeaderTextProps) => {
    return (
        <h2 className={`font-bold text-2xl sm:text-3xl md:text-4xl text-white ${className}`}>
            {children}
        </h2>
    )
}

export default HeaderText
