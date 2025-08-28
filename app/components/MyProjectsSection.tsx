'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeaderText from './HeaderText'
import { projects } from './_projects'
import ProjectCard from './ProjectCard'

const MyProjectsSection = () => {
    const [visibleProjects, setVisibleProjects] = useState(4)

    const loadMoreProjects = () => {
        console.log('Load more clicked! Current visible:', visibleProjects, 'Total projects:', projects.length)
        setVisibleProjects(prev => {
            const newValue = Math.min(prev + 2, projects.length)
            console.log('New visible projects:', newValue)
            return newValue
        })
    }

    const hasMoreProjects = visibleProjects < projects.length
    console.log('Has more projects:', hasMoreProjects, 'Visible:', visibleProjects, 'Total:', projects.length)

    return (
        <div
            className='flex flex-col items-center justify-center'
            id='my-projects'
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <HeaderText>My Projects</HeaderText>
            </motion.div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto max-w-screen-xl'>
                {/* Initial 4 projects with individual animations */}
                {projects.slice(0, Math.min(4, visibleProjects)).map((project, index) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            delay: index * 0.2,
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        className='h-full'
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}

                {/* Additional projects with individual animations */}
                <AnimatePresence>
                    {projects.slice(4, visibleProjects).map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.6,
                                ease: "easeOut" as const
                            }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {hasMoreProjects && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        onClick={loadMoreProjects}
                        className='mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:cursor-pointer'
                    >
                        Load More Projects
                    </button>
                </motion.div>
            )}
        </div>
    )
}

export default MyProjectsSection