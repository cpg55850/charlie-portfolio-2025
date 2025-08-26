'use client'
import Image from 'next/image'
import React, { useState, useEffect, useCallback } from 'react'
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
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)
  const [canNavigate, setCanNavigate] = useState(true)

  // Create interval function - defined once, used multiple times
  const createInterval = useCallback(() => {
    return setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
        setIsTransitioning(false)
      }, 300) // Half of transition duration
    }, 4000) // Change image every 4 seconds
  }, [images.length])

  // Auto-advance slideshow
  useEffect(() => {
    const id = createInterval()
    setIntervalId(id)

    return () => {
      if (id) clearInterval(id)
    }
  }, [createInterval])

  // Reset interval function
  const resetInterval = () => {
    if (intervalId) {
      clearInterval(intervalId)
    }
    const newId = createInterval()
    setIntervalId(newId)
  }

  // Handle manual navigation with transition and debounce
  const handleImageChange = (newIndex: number) => {
    if (isTransitioning || !canNavigate) return

    if (newIndex !== currentImageIndex) {
      // Disable navigation temporarily
      setCanNavigate(false)

      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex(newIndex)
        setIsTransitioning(false)
      }, 300)

      // Reset the interval when manually navigating
      resetInterval()

      // Re-enable navigation after debounce period
      setTimeout(() => {
        setCanNavigate(true)
      }, 500) // 500ms debounce
    }
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
        {/* Image Slideshow */}
        <div
          className='relative aspect-[3/4] overflow-hidden group'
          style={{
            width: 'clamp(4em, 13em, 30em)', // Use em for scaling with the parent
          }}
        >
          {/* Main Image with Cross-fade */}
          <div className='relative w-full h-full'>
            <Image
              src={images[currentImageIndex]}
              fill
              alt='Charlie Graham'
              className={`rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 transition-all duration-600 object-cover ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>

          {/* Slideshow Indicators */}
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white shadow-lg'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              handleImageChange(
                currentImageIndex === 0
                  ? images.length - 1
                  : currentImageIndex - 1
              )
            }
            className='absolute hover:cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100'
            aria-label='Previous image'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>

          <button
            onClick={() =>
              handleImageChange(
                currentImageIndex === images.length - 1
                  ? 0
                  : currentImageIndex + 1
              )
            }
            className='absolute hover:cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100'
            aria-label='Next image'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <IoIosArrowDown className='absolute text-4xl top-[90dvh] left-[50dvw] animate-bounce' /> */}
    </div>
  )
}

export default HeroSection
