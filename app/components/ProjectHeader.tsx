'use client'
import Image from 'next/image'

interface ProjectHeaderProps {
  title: string
  subtitle: string
  image: string
}

export default function ProjectHeader({
  title,
  subtitle,
  image,
}: ProjectHeaderProps) {
  return (
    <div className='w-full flex items-center justify-between max-w-screen-xl mx-auto gap-4'>
      {/* Left content */}
      <div className='flex-1'>
        <h1 className='text-6xl md:text-6xl font-bold mb-8 tracking-wider'>
          {title}
        </h1>
        <p className='text-lg md:text-xl leading-relaxed w-full'>
          {subtitle}
        </p>
      </div>

      {/* Right image */}
      {/* <div className='hidden md:flex items-center justify-center flex-shrink-0'>
        <div className='bg-white rounded-3xl p-8 shadow-lg'>
          <div className='relative w-full h-[200px] aspect-square'>
            <Image src={image} alt={title} fill className='object-contain' />
          </div>
        </div>
      </div> */}
    </div>
  )
}
