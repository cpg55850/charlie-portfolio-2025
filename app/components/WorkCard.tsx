import Image from 'next/image'

interface UniversityProfileCardProps {
  logo?: string
  title: string
  subtitle: string
  content: string
  image?: string
  backgroundColor?: string
  className?: string
}

export default function WorkCard({
  logo,
  title,
  subtitle,
  content,
  image,
  backgroundColor = '#d32f2f', // Default red color similar to the example
}: UniversityProfileCardProps) {
  return (
    <div className={'flex overflow-hidden rounded-3xl shadow-lg'}>
      {/* Left section with logo, title, subtitle, and content */}
      <div
        className='flex flex-col p-6 text-white w-full md:w-3/5'
        style={{ backgroundColor }}
      >
        {/* Logo */}
        <div className='relative mb-6 w-24 h-24 rounded-2xl overflow-hidden bg-white/10 p-2 shadow-md'>
          <Image
            src={logo ?? '/UCMLogo.jpg'}
            alt='University logo'
            fill
            className='w-full h-full object-contain rounded-2xl'
          />
        </div>

        {/* Title and subtitle */}
        <div className='space-y-1 mb-4'>
          <h2 className='text-3xl font-bold leading-tight'>{title}</h2>
          <h3 className='text-xl font-light'>{subtitle}</h3>
        </div>

        {/* Content */}
        <p className='text-white/90 leading-relaxed'>{content}</p>
      </div>

      {/* Right section with image */}
      <div className='hidden md:block md:w-2/5'>
        <div className='h-full w-full relative'>
          <Image
            src={image ?? '/UCMLibrary.jpg'}
            alt={`${title} campus`}
            fill
            className='object-cover rounded-r-3xl'
          />
        </div>
      </div>
    </div>
  )
}
