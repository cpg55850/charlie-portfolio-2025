import Image from 'next/image'
import React from 'react'
import ScrollToTopLink from './ScrollToTopLink'

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <ScrollToTopLink
            className='w-full flex md:gap-2 md:max-w-[450px] items-center rounded-lg shadow-md flex relative bg-white/20 items-center p-4'
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
                <h1 className='font-bold md:text-2xl'>{project.title}</h1>
                <p>{project.description}</p>
            </div>
        </ScrollToTopLink>
    )
}

export default ProjectCard