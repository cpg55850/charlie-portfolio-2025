import Image from 'next/image'
import me from '/public/me.jpg'
import { IoIosArrowDown } from 'react-icons/io'
import WorkCard from './components/WorkCard'
import Link from 'next/link'

// export const metadata = {
//   title: `Home | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
//   description:
//     'Charlie Graham is a software engineer based in the US. He specializes in building high-performance web applications using React, Next.js, and TypeScript.',
// }

export default function Home() {
  return (
    <div className='relative px-4'>
      <IoIosArrowDown className='absolute text-4xl top-[90dvh] left-[50dvw] animate-bounce' />
      <div className='flex flex-col justify-center items-center h-[100dvh]'>
        <div
          className='flex flex-col-reverse md:flex-row items-center'
          style={{
            fontSize: 'clamp(2rem, 2vw, 2vw)', // Control the overall scaling here
            gap: 'clamp(4rem, 4vw, 8vw)', // Control the gap between elements
          }}
        >
          <div className=''>
            {/* Name and Title */}
            <div className='flex flex-col items-center md:items-start'>
              <p className='text-[1.5em] md:text-[2.5em] uppercase font-bold text-center leading-none'>
                <span className='tracking-[0.04em] block'>Charlie</span>
                <span className='block'>Graham</span>
              </p>
              <p className='text-[.7em] md:text-[1em] font-light'>
                Software Engineer
              </p>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '0.5em', // Scales relative to the parent font-size
                width: 'clamp(20rem, 30dvw, 30dvw)',
              }}
            >
              I’m a full-stack software engineer with a focus on building
              scalable web and mobile applications using TypeScript, Next.js,
              and React Native.
            </p>
          </div>
          {/* Image */}
          <div
            className='bg-red-300 relative aspect-[3/4] hover:cursor-pointer rounded-xl md:shadow-[16px_16px_0_8px_white] shadow-[8px_8px_0_8px_white] hover:shadow-[0_0_0_12px_white] transition-shadow duration-300 ease-in-out'
            style={{
              width: 'clamp(4em, 11em, 30em)', // Use em for scaling with the parent
            }}
          >
            <Image
              src={me}
              fill
              alt='Charlie Graham'
              className='rounded-xl shadow-[0_0_0_8px_white]'
            />
          </div>
        </div>
      </div>
      {/* from-[#ea33a3] */}
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

      <div className='w-4 h-4 bg-white rounded-full mx-auto my-24'></div>

      <div className='w-full bg-black flex flex-col max-w-screen-lg mx-auto py-16 gap-32'>
        <div className='flex flex-col gap-4 items-start'>
          <h2 className='font-bold text-4xl'>Get in touch</h2>
          <p className='max-w-[60%] text-xl leading-relaxed'>
            I’m always open to new projects, collaborations, or a quick chat
            about tech. Drop me a message and I’ll get back to you soon!
          </p>
          <Link
            href='mailto:contact@charliegraham.dev'
            className='text-xl underline'
          >
            contact@charliegraham.dev
          </Link>
        </div>
      </div>
    </div>
  )
}
