'use client'
import React, { useState } from 'react'
import WorkCard from './WorkCard'
import Link from 'next/link'
import Image from 'next/image'
import HeaderText from './HeaderText'
import { works } from './_works'
import { projects } from './_projects'
import { motion } from 'framer-motion'

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link
            className='w-full flex md:flex-col md:gap-2 md:max-w-[350px] justify-center items-center rounded-lg shadow-md flex relative bg-white/20 items-center p-4'
            href={`/projects/${project.slug}`}
        >
            <div className='relative flex-shrink-0 w-24 md:w-32'>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={100}
                    className='rounded-xl object-contain'
                />
            </div>
            <div className='flex-shrink p-4 text-white'>
                <h1 className='font-bold md:text-2xl md:text-center'>{project.title}</h1>
                <p>{project.description}</p>
            </div>
        </Link>
    )
}

const MyWorkSection = () => {
    const [visibleProjects, setVisibleProjects] = useState(4)

    const loadMoreProjects = () => {
        setVisibleProjects(prev => Math.min(prev + 2, projects.length))
    }

    const hasMoreProjects = visibleProjects < projects.length

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
        <div className='w-full flex flex-col items-center justify-center py-16 gap-32'>
            {/* My Work Section */}
            <motion.div
                className='flex flex-col items-center justify-center'
                style={{
                    gap: 'clamp(1.5em, 3vw, 3rem)',
                }}
                id='my-work'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.div variants={headerVariants}>
                    <HeaderText>My Work</HeaderText>
                </motion.div>

                <motion.div
                    className='flex flex-col gap-8 mx-auto max-w-[900px]'
                    variants={containerVariants}
                >
                    {works.map((work, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <WorkCard
                                slug={`/work/${work.slug}`}
                                title={work.title}
                                subtitle={work.subtitle}
                                content={work.content}
                                backgroundColor={work.backgroundColor}
                                logo={work.logo}
                                image={work.image}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* My Projects Section */}
            <motion.div
                className='flex flex-col items-center justify-center'
                style={{
                    gap: 'clamp(1.5em, 3vw, 3rem)',
                }}
                id='projects'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.div variants={headerVariants}>
                    <HeaderText>My Projects</HeaderText>
                </motion.div>

                <motion.div
                    className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto max-w-screen-xl'
                    variants={containerVariants}
                >
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>

                {hasMoreProjects && (
                    <motion.div variants={itemVariants}>
                        <button
                            onClick={loadMoreProjects}
                            className='mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
                        >
                            Load More Projects
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default MyWorkSection
