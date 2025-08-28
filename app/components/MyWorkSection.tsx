'use client'
import React from 'react'
import WorkCard from './WorkCard'
import HeaderText from './HeaderText'
import { works } from './_works'
import { motion } from 'framer-motion'

const MyWorkSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='w-full flex flex-col items-center justify-center py-16 gap-32'>
      {/* My Work Section */}
      <motion.div
        className='flex flex-col items-center justify-center'
        id='my-work'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={headerVariants}>
          <HeaderText>My Work</HeaderText>
        </motion.div>

        <motion.div
          className='flex flex-col gap-8 mx-auto max-w-[900px]'
          variants={containerVariants}
        >
          {works.map((work, index) => (
            <motion.div key={index} variants={itemVariants}>
              <WorkCard
                slug={`/work/${work.slug}`}
                title={work.title}
                subtitle={work.subtitle}
                content={work.content}
                backgroundColor={work.backgroundColor}
                logo={work.logo}
                image={work.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MyWorkSection
