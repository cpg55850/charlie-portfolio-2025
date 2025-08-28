'use client'
import React, { useState } from 'react'
import HeaderText from './HeaderText'
import { projects } from './_projects'
import ProjectCard from './ProjectCard'

const MyProjectsSection = () => {
    const [visibleProjects, setVisibleProjects] = useState(4)

    const loadMoreProjects = () => {
        setVisibleProjects(prev => Math.min(prev + 2, projects.length))
    }

    const hasMoreProjects = visibleProjects < projects.length

    return (
        <div
            className='flex flex-col items-center justify-center'
            id='projects'
        >
            <HeaderText>My Projects</HeaderText>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto max-w-screen-xl'>
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            {hasMoreProjects && (
                <button
                    onClick={loadMoreProjects}
                    className='mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:cursor-pointer'
                >
                    Load More Projects
                </button>
            )}
        </div>
    )
}

export default MyProjectsSection