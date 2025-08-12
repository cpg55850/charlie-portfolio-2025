import Image from 'next/image'
import React from 'react'
import me from '/public/me.jpg'
import { IoIosArrowDown } from 'react-icons/io'
import styles from './HeroSection.module.scss'

function HeroSection() {
  return (
    <div className='flex flex-col justify-center items-center md:h-[100dvh] p-4'>
      <div
        className='flex flex-col-reverse md:flex-row items-center'
        style={{
          fontSize: 'clamp(2rem, 2vw, 2vw)', // Control the overall scaling here
          gap: 'clamp(4rem, 6vw, 12vw)', // Control the gap between elements
        }}
      >
        <div className='max-w-[500px]'>
          {/* Name and Title */}
          <div className='flex flex-col items-center md:items-start mb-4'>
            <p className='text-[1.5em] md:text-[2.5em] uppercase font-bold text-center leading-none'>
              <span className='tracking-[0.04em] block'>Charlie</span>
              <span
                className={`${styles.fancyGradient} block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-300 hover:to-red-300 transition-colors duration-300 cursor-pointer`}
              >
                Graham
              </span>
            </p>
            {/* <p className='text-[.5em] md:text-[.75em] font-light mb-4 flex items-center'>
              Software Engineer
            </p> */}
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.5em', // Scales relative to the parent font-size
              width: 'clamp(20rem, 30dvw, 30dvw)',
            }}
            className='text-center md:text-left text-gray-400 leading-relaxed'
          >
            I’m a full-stack software engineer with a focus on building scalable
            web and mobile applications using TypeScript, Next.js, and React
            Native.
          </p>
        </div>
        {/* Image */}
        <div
          className='relative aspect-[3/4]'
          style={{
            width: 'clamp(4em, 11em, 30em)', // Use em for scaling with the parent
          }}
        >
          <Image
            src={me}
            fill
            alt='Charlie Graham'
            className='rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 transition-shadow duration-300 hover:cursor-pointer'
          />
        </div>
      </div>
      {/* <IoIosArrowDown className='absolute text-4xl top-[90dvh] left-[50dvw] animate-bounce' /> */}
    </div>
  )
}

export default HeroSection
