import React from 'react'
import CGLogo from '/public/CGLogo.svg'
import Image from 'next/image'

const FooterSection = () => {
  return (
    <div className='py-32 flex flex-col items-center justify-center'>
      <div className='flex flex-row gap-16 items-center'>
        <Image
          src={CGLogo}
          alt='Charlie Graham Logo'
          className='w-24 h-24 mx-auto mb-4'
        />
        <div>
          <h2 className='text-sm mb-2'>explore</h2>
          <ul>
            <li className='text-xl'>work</li>
            <li className='text-xl'>projects</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
