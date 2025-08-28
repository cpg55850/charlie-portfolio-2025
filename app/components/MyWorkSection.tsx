'use client'
import React from 'react'
import WorkCard from './WorkCard'
import HeaderText from './HeaderText'
import { works } from './_works'


const MyWorkSection = () => {
  return (

    <div className='flex flex-col items-center justify-center' id='work'>
      <HeaderText>My Work</HeaderText>
      <div className='flex flex-col gap-8 mx-auto max-w-[900px]'>
        {works.map((work, index) => (
          <WorkCard
            key={index}
            slug={`/work/${work.slug}`}
            title={work.title}
            subtitle={work.subtitle}
            content={work.content}
            backgroundColor={work.backgroundColor}
            logo={work.logo}
            image={work.image}
          />
        ))}
      </div>
    </div>
  )
}

export default MyWorkSection
