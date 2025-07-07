import React from 'react'
import WorkCard from './WorkCard'
import Link from 'next/link'

const ProjectCard = ({ title }: { title: string }) => {
  return (
    <Link
      className='w-full h-64 bg-slate-800 rounded-lg shadow-md flex items-center justify-center min-w-[300px]'
      href={`/projects/${title}`}
    >
      <span className='text-white'>{title}</span>
    </Link>
  )
}

const projects = [
  { title: 'mcm-store' },
  { title: 'martin-city-marketing' },
  { title: 'wuphf' },
  { title: 'commerce-bank' },
]

const works = [
  {
    title: 'Martin City Marketing',
    subtitle: 'Software Engineer',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundColor: '#0076BB', // Default red color similar to the example
    logo: '/MCMLogo.png',
    image: '/mcm_trio.jpeg',
    slug: 'martin-city-marketing',
  },
  {
    title: 'Sumitomo Mitsui Banking Corporation',
    subtitle: 'Intern',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundColor: '#006A30', // Default red color similar to the example
    logo: '/SMBCLogo.png',
    image: '/internphoto.jpg',
    slug: 'smbc',
  },
  {
    title: 'University of Central Missouri',
    subtitle: 'Computer Science Tutor',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    backgroundColor: '#d32f2f', // Default red color similar to the example
    slug: 'ucm',
  },
]

const MyWorkSection = () => {
  return (
    <div className='w-full bg-gradient-to-b to-[#000] flex flex-col items-center justify-center py-16 gap-32'>
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
            <ProjectCard key={index} title={project.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyWorkSection
