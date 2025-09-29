import Image from 'next/image'
import React from 'react'
// import ScrollToTopLink from './ScrollToTopLink'
import GlowEffect from './GlowEffect'
import Link from 'next/link'

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <GlowEffect className='rounded-lg h-full'>
            <Link
                className='w-full h-full md:gap-2 md:max-w-[450px] rounded-lg shadow-md flex relative bg-white/20 hover:bg-white/30 items-center p-4 transition-all duration-300'
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
                    <h2 className='font-bold md:text-2xl'>{project.title}</h2>
                    <p>{project.description}</p>
                    <p className='text-sm text-slate-400 mt-1'>{project.technologies.slice(0, 3).join(', ')}...</p>
                </div>
            </Link>
        </GlowEffect>
    )
}

export default ProjectCard