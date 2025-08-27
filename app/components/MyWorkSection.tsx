import React from 'react'
import WorkCard from './WorkCard'
import Link from 'next/link'
import Image from 'next/image'
import { works } from './_works'
import { projects } from './_projects'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      className='w-full flex h-[250px] rounded-lg shadow-md flex min-w-[600px] relative bg-white/20 items-center p-4'
      href={`/projects/${project.slug}`}
    >

      <div className='relative flex-shrink-0'>
        <Image
          src={project.image}
          alt={project.title}
          width={200}
          height={100}
          className='rounded-xl object-contain bg-red-300'
        />
      </div>
      <div className='flex-shrink p-4 text-white'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
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
      <div className='flex flex-col items-center justify-center gap-16' id="projects">
        <h2 className='font-bold text-4xl'>My Projects</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto max-w-screen-xl'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyWorkSection
