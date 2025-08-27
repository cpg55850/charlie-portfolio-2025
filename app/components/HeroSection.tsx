'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from './HeroSection.module.scss'

function HeroSection() {
  // Slideshow images
  const images = [
    '/me.jpg',
    '/graduation.JPG',
    '/internphoto.jpg',
    '/mcm_trio.jpeg',
    '/mcm_showcharacters.jpeg',
    '/dotonburi.jpeg',
    '/garden.jpeg',
    '/mountain.jpeg',
    '/speech.jpeg',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [currentImageIndex, images.length]) // Reset timer when currentImageIndex changes

  // Handle clicking on image to go to next
  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className='flex flex-col justify-center items-center md:h-[100dvh] p-4'>
      <div
        className='flex flex-col-reverse md:flex-row items-center'
        style={{
          fontSize: 'clamp(2rem, 2vw, 2vw)', // Control the overall scaling here
          gap: 'clamp(1.5em, 3vw, 6vw)', // Gap scales with font size
        }}
      >
        <div className='flex-1'>
          {/* Name and Title */}
          <div className='flex flex-col items-center md:items-start mb-4'>
            <p className='text-[1.5em] md:text-[2.5em] uppercase font-bold text-center md:text-left leading-none'>
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
            }}
            className='text-center md:text-left text-gray-400 leading-relaxed max-w-[400px] md:max-w-[28dvw] mx-auto md:mx-0'
          >
            I’m a full-stack software engineer with a focus on building scalable
            web and mobile applications using TypeScript, Next.js, and React
            Native.
          </p>
        </div>
        {/* Image Slideshow with CSS Transitions */}
        <div
          className='relative aspect-[3/4] overflow-hidden cursor-pointer'
          style={{
            width: 'clamp(4em, 13em, 30em)', // Use em for scaling with the parent
          }}
          onClick={goToNextImage}
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              fill
              alt='Charlie Graham'
              className={`transition-opacity duration-700 ease-in-out rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 object-cover absolute inset-0 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              style={{ imageOrientation: 'from-image' }}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 30vw"
              unoptimized
            />
          ))}
        </div>
      </div>
      {/* <IoIosArrowDown className='absolute text-4xl top-[90dvh] left-[50dvw] animate-bounce' /> */}
    </div>
  )
}

export default HeroSection
