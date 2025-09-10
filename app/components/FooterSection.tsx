'use client'
import React from 'react'
import CGLogo from '/public/CGLogo.svg'
import Image from 'next/image'
import { useLenis } from './LenisWrapper'
import { motion } from 'framer-motion'
import GlowEffect from './GlowCard'

const FooterSection = () => {
  const lenisRef = useLenis()

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element && lenisRef?.current) {
      lenisRef.current.scrollTo(element)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      className='py-16 md:py-32 flex flex-col items-center justify-center text-white'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className='flex flex-row gap-16 items-center'
        variants={itemVariants}
      >
        <motion.div variants={itemVariants}>
          <GlowEffect className='rounded-full aspect-square w-24 h-24'>
            <Image
              src={CGLogo}
              alt='Charlie Graham Logo'
              className='w-24 h-24 mx-auto mb-4'
            />
          </GlowEffect>
        </motion.div>

        <motion.div variants={itemVariants}>
          {/* <h2 className='text-sm mb-2'>explore</h2> */}
          <ul>
            <li className='text-xl'>
              <button
                onClick={() => handleSmoothScroll('my-work')}
                className='hover:text-blue-400 transition-colors duration-300 hover:cursor-pointer'
              >
                work
              </button>
            </li>
            <li className='text-xl'>
              <button
                onClick={() => handleSmoothScroll('my-projects')}
                className='hover:text-blue-400 transition-colors duration-300 hover:cursor-pointer'
              >
                projects
              </button>
            </li>
            <li className='text-xl'>
              <a
                href="https://drive.google.com/file/d/1MJXRrZHm3Ka5fii-WSzcKziVpupEnge3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-blue-400 transition-colors duration-300'
              >
                resume
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default FooterSection
