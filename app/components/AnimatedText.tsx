'use client'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
    text: string
    className?: string
    onClick?: () => void
    delay?: number
}

const AnimatedText = ({ text, className = '', onClick, delay = 0 }: AnimatedTextProps) => {
    const letters = text.split('')

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay
            }
        }
    }

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200
            }
        }
    }

    return (
        <motion.span
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onClick={onClick}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    variants={letterVariants}
                    style={{
                        transformOrigin: '50% 50% 25px'
                    }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.span>
    )
}

export default AnimatedText
