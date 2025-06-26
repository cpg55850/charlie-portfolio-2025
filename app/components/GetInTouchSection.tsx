import Link from 'next/link'
import React from 'react'

const GetInTouchSection = () => {
  return (
    <div className='w-full bg-black flex flex-col max-w-screen-lg mx-auto py-16 gap-32'>
      <div className='flex flex-col gap-4 items-start'>
        <h2 className='font-bold text-4xl'>Get in touch</h2>
        <p className='max-w-[60%] text-xl leading-relaxed'>
          I’m always open to new projects, collaborations, or a quick chat about
          tech. Drop me a message and I’ll get back to you soon!
        </p>
        <Link
          href='mailto:contact@charliegraham.dev'
          className='text-xl underline'
        >
          contact@charliegraham.dev
        </Link>
      </div>
    </div>
  )
}

export default GetInTouchSection
