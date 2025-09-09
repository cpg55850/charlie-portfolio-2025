'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './HeroSection.module.scss'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { IoIosDocument } from 'react-icons/io'
import GlowEffect from './GlowCard'
import AnimatedText from './AnimatedText'

// Static image imports for Next.js optimization
import meImg from '/public/me.jpg'
import graduationImg from '/public/graduation.webp'
import internphotoImg from '/public/internphoto_crop.jpg'
import mcmTrioImg from '/public/mcm_trio.jpeg'
import mcmShowcharactersImg from '/public/mcm_showcharacters.webp'
import dotonburiImg from '/public/dotonburi.webp'
import gardenImg from '/public/garden.webp'
import mountainImg from '/public/mountain.webp'
import speechImg from '/public/speech.webp'

function HeroSection() {
  // Slideshow images - using static imports for Next.js optimization
  const images = [
    meImg,
    graduationImg,
    internphotoImg,
    mcmTrioImg,
    mcmShowcharactersImg,
    dotonburiImg,
    gardenImg,
    mountainImg,
    speechImg,
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-advance slideshow every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [currentImageIndex, images.length]) // Reset timer when currentImageIndex changes

  // Handle clicking on image to go to next
  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Handle smooth scroll to My Work section
  const scrollToMyWork = () => {
    const myWorkSection = document.getElementById('my-work')
    if (myWorkSection) {
      myWorkSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className='flex flex-col justify-center items-center md:h-[100dvh] p-4'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <motion.div
        className='flex flex-col-reverse md:flex-row items-center'
        style={{
          fontSize: 'clamp(2rem, 2vw, 2vw)', // Control the overall scaling here
          gap: 'clamp(0.75em, 3vw, 6vw)', // Smaller gap on mobile, scales with font size
        }}
        variants={itemVariants}
      >
        <div className='flex gap-4 flex-col-reverse md:flex-col'>
          <div className='flex flex-row gap-4 justify-end md:justify-start'>
            <a
              href='https://www.linkedin.com/in/charlespgraham/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-3xl text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer' />
            </a>
            <a
              href='https://github.com/cpg55850'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='text-3xl text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer' />
            </a>
            <div className='relative flex items-center'>
              <a
                href='https://drive.google.com/file/d/1ZKXAZIRAES1yBg3MBKTMqClb0koVZGnO/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='relative z-10 peer'
              >
                <IoIosDocument className='text-3xl text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer' />
              </a>
              <span className='hidden md:block absolute left-10 whitespace-nowrap text-white peer-hover:text-cyan-400 text-sm font-bold transform translate-x-2 opacity-0 peer-hover:translate-x-0 peer-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none'>
                View resume
              </span>
            </div>
          </div>
          <div>
            {/* Name and Title */}
            <div className='flex flex-col items-center md:items-start mb-4'>
              <p className='text-[1.5em] md:text-[2.5em] uppercase font-bold text-center md:text-left leading-none whitespace-nowrap'>
                <AnimatedText
                  text='Charlie'
                  className='tracking-[0.04em] block text-white'
                  delay={0}
                />
                <AnimatedText
                  text='Graham'
                  className={`${styles.fancyGradient} block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-300 hover:to-red-300 transition-colors duration-300 cursor-pointer`}
                  onClick={scrollToMyWork}
                  delay={0.3}
                />
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
              className='text-center md:text-left text-gray-400 leading-relaxed max-w-[400px] mx-auto md:mx-0'
            >
              I’m a full-stack software engineer with a focus on building
              scalable web and mobile applications using TypeScript, Next.js,
              and React Native.
            </p>
          </div>
        </div>
        {/* Image Slideshow with CSS Transitions */}
        <GlowEffect glowColor='#662d91' className='rounded-xl'>
          <div
            className={`relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer ${styles['slideshow-container']}`}
            onClick={goToNextImage}
          >
            {/* Only load in the current image, prev image and next image into the dom at 1 time */}
            {[
              (currentImageIndex - 1) % images.length,
              currentImageIndex,
              (currentImageIndex + 1) % images.length,
            ].map((index) => (
              <Image
                key={index}
                src={images[index]}
                fill
                alt='Charlie Graham'
                className={`transition-opacity duration-700 ease-in-out rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 object-cover absolute inset-0 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ imageOrientation: 'from-image' }}
                priority={index === 0}
                sizes='(max-width: 480px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 350px, 400px'
                quality={75}
              />
            ))}
          </div>
        </GlowEffect>
      </motion.div>
      {/* <IoIosArrowDown className='absolute text-4xl top-[90dvh] left-[50dvw] animate-bounce' /> */}
    </motion.div>
  )
}

export default HeroSection
