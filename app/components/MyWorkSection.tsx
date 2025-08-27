import React from 'react'
import WorkCard from './WorkCard'
import Link from 'next/link'
import Image from 'next/image'
import HeaderText from './HeaderText'
import { works } from './_works'
import { projects } from './_projects'

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
  return (
    <div className='w-full flex flex-col items-center justify-center py-16 gap-32'>
      <div className='flex flex-col items-center justify-center' style={{
        gap: 'clamp(1.5em, 3vw, 3rem)', // Smaller gap on mobile, scales with font size
      }} id='my-work'>
        <HeaderText>My Work</HeaderText>
        <div className='flex flex-col gap-8 mx-auto max-w-[900px]'>
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
      <div
        className='flex flex-col items-center justify-center'
        style={{
          gap: 'clamp(1.5em, 3vw, 3rem)', // Smaller gap on mobile, scales with font size
        }}
        id='projects'
      >
        <HeaderText>My Projects</HeaderText>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto max-w-screen-xl'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyWorkSection
