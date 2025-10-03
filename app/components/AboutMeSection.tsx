'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutMeSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.section
            className="pt-20 md:pt-0 px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    {/* Text Content */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.h2
                            className="text-4xl font-bold text-white mb-8"
                            variants={headerVariants}
                        >
                            About Me
                        </motion.h2>
                        <motion.div
                            className="space-y-4 text-gray-300 leading-relaxed"
                            variants={itemVariants}
                        >
                            <p>
                                I&apos;m Charlie Graham, a full-stack software engineer and online Master&apos;s student in Computer Science at Georgia Tech (OMSCS) starting Spring 2026. I specialize in building scalable web and mobile applications with TypeScript, Next.js, and React Native, with experience spanning software architecture, component development, and deployment.
                            </p>
                            <p>
                                My background includes professional work as a software engineer at Martin City Marketing, an internship in Osaka with SMBC Nikko Securities, and tutoring in computer science at the University of Central Missouri. Beyond the technical side, I enjoy bridging creativity with functionality—whether it&apos;s designing robust systems, crafting user-friendly interfaces, or exploring new technologies to solve real problems.
                            </p>
                            <p>
                                I&apos;m always excited to collaborate on innovative projects and continue growing as both a developer and problem-solver.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Logo */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative w-80 h-20 lg:w-96 lg:h-96">
                            <Image
                                src="/Georgia_Tech_logo_2021.svg"
                                alt="Georgia Tech Logo"
                                fill
                                className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
