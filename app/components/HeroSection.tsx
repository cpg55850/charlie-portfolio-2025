import Image from 'next/image'
import React from 'react'
import me from '/public/me.jpg'
import { IoIosArrowDown } from 'react-icons/io'

function HeroSection() {
  return (
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
            I’m a full-stack software engineer with a focus on building scalable
            web and mobile applications using TypeScript, Next.js, and React
            Native.
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
      <IoIosArrowDown className='absolute text-4xl top-[90dvh] left-[50dvw] animate-bounce' />
    </div>
  )
}

export default HeroSection
