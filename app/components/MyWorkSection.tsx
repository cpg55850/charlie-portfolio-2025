import React from 'react'
import WorkCard from './WorkCard'

const MyWorkSection = () => {
  return (
    <div className='w-full bg-gradient-to-b to-[#000] flex flex-col items-center justify-center py-16 gap-32'>
      <div className='flex flex-col items-center justify-center gap-16'>
        <h2 className='font-bold text-4xl'>My Work</h2>
        <div className='flex flex-col gap-4 mx-auto max-w-screen-lg'>
          <WorkCard
            title='Martin City Marketing'
            subtitle='Software Engineer'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            backgroundColor='#0076BB' // Default red color similar to the example
            logo='/MCMLogo.png'
            image='/mcm_trio.jpeg'
          />
          <WorkCard
            title='Sumitomo Mitsui Banking Corporation'
            subtitle='Intern'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            backgroundColor='#006A30' // Default red color similar to the example
            logo='/SMBCLogo.png'
            image='/internphoto.jpg'
          />
          <WorkCard
            title='University of Central Missouri'
            subtitle='Computer Science Tutor'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            backgroundColor='#d32f2f' // Default red color similar to the example
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-16'>
        <h2 className='font-bold text-4xl'>My Projects</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto max-w-screen-lg'>
          <div className='w-full h-64 bg-slate-800 rounded-lg shadow-md flex items-center justify-center min-w-[300px]'>
            <p className='text-white'>Project 1</p>
          </div>
          <div className='w-full h-64 bg-slate-800 rounded-lg shadow-md flex items-center justify-center min-w-[300px]'>
            <p className='text-white'>Project 2</p>
          </div>
          <div className='w-full h-64 bg-slate-800 rounded-lg shadow-md flex items-center justify-center min-w-[300px]'>
            <p className='text-white'>Project 3</p>
          </div>
          <div className='w-full h-64 bg-slate-800 rounded-lg shadow-md flex items-center justify-center min-w-[300px]'>
            <p className='text-white'>Project 4</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWorkSection
