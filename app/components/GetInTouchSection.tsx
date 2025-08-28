import Link from 'next/link'
import React from 'react'
import HeaderText from './HeaderText'

const GetInTouchSection = () => {
  return (
    <div className='w-full flex flex-col max-w-screen-md mx-auto text-white'>
      <div className='flex flex-col gap-4 w-full p-4'>
        <HeaderText className='pb-0!'>Get in touch</HeaderText>
        <p className='text-base md:text-xl leading-relaxed'>
          I’m always open to new projects, collaborations, or a quick chat about
          tech. Drop me a message and I’ll get back to you soon!
        </p>
        <Link
          href='mailto:contact@charliegraham.dev'
          className='text-base md:text-xl underline'
        >
          contact@charliegraham.dev
        </Link>
      </div>
    </div>
  )
}

export default GetInTouchSection
