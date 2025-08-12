import React from 'react'
import WorkCard from './WorkCard'
import Link from 'next/link'
import Image from 'next/image'
import { works } from './_works'
import { projects } from './_projects'

const ProjectCard = ({ title, image }: Project) => {
  return (
    <Link
      className='w-full h-[250px] rounded-lg shadow-md flex items-center justify-center min-w-[300px] relative bg-white'
      href={`/projects/${title}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className='rounded-lg object-contain'
      />
    </Link>
  )
}

const MyWorkSection = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-16 gap-32'>
      <div className='flex flex-col items-center justify-center gap-16'>
        <h2 className='font-bold text-4xl'>My Work</h2>
        <div className='flex flex-col gap-8 mx-auto max-w-screen-lg'>
          {works.map((work, index) => (
            <WorkCard
              key={index}
              slug={`/work/${work.slug}`}
              title={work.title}
              subtitle={work.subtitle}
              content={work.content}
              backgroundColor={work.backgroundColor}
              logo={work.logo}
              image={work.image}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-16'>
        <h2 className='font-bold text-4xl'>My Projects</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto max-w-screen-lg'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyWorkSection
