'use client'
import Link from 'next/link'
import React from 'react'
import HeaderText from './HeaderText'
import { motion } from 'framer-motion'

const GetInTouchSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      className='w-full flex flex-col max-w-screen-md mx-auto text-white'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className='flex flex-col gap-4 w-full p-4' variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <HeaderText className='pb-0!'>Get in touch</HeaderText>
        </motion.div>
        <motion.p
          className='text-base md:text-xl leading-relaxed'
          variants={itemVariants}
        >
          I&apos;m always open to new projects, collaborations, or a quick chat about
          tech. Drop me a message and I&apos;ll get back to you soon!
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href='mailto:contact@charliegraham.dev'
            className='text-base md:text-xl underline hover:text-blue-400 transition-colors duration-300'
          >
            contact@charliegraham.dev
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default GetInTouchSection
