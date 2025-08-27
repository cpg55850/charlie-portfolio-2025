'use client'
import Image from 'next/image'
import Link from 'next/link'

interface UniversityProfileCardProps {
  logo?: string
  title: string
  subtitle: string
  content: string
  image?: string
  slug: string
  backgroundColor?: string
  className?: string
}

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function WorkCard({
  logo,
  title,
  subtitle,
  content,
  image,
  slug,
  backgroundColor = '#d32f2f', // Default red color similar to the example
}: UniversityProfileCardProps) {
  return (
    <>
      <Link href={slug}>
        <div
          className={
            'flex overflow-hidden rounded-3xl shadow-lg glow-on-hover cursor-pointer'
          }
          style={
            {
              '--glow-color': backgroundColor,
              '--bg-color': hexToRgba(backgroundColor, 0.3),
              '--bg-color-hover': hexToRgba(backgroundColor, 0.7),
            } as React.CSSProperties
          }
        >
          {/* Left section with logo, title, subtitle, and content */}
          <div
            className='flex flex-col p-6 text-white w-full '
            style={{
              backgroundColor: 'var(--bg-color)',
            }}
          >
            <div className='flex flex-row gap-4'>
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
                <h2 className='text-xl md:text-3xl font-bold leading-tight'>{title}</h2>
                <h3 className='text-xl font-light'>{subtitle}</h3>
              </div>
            </div>

            {/* Content */}
            <p className='text-white/90 leading-relaxed'>{content}</p>
          </div>

          {/* Right section with image */}
          <div className='hidden md:block md:w-[500px]'>
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
      </Link>
      <style jsx>{`
        .glow-on-hover {
          transition: box-shadow 0.3s ease;
        }
        
        /* Desktop hover effects */
        @media (hover: hover) and (pointer: fine) {
          .glow-on-hover:hover {
            box-shadow: 0 0 24px 2px var(--glow-color, #fff);
          }
          .glow-on-hover:hover > div:first-child {
            background-color: var(--bg-color-hover) !important;
          }
        }
        
        /* Mobile touch effects */
        @media (hover: none) and (pointer: coarse) {
          .glow-on-hover:active {
            box-shadow: 0 0 24px 2px var(--glow-color, #fff);
          }
          .glow-on-hover:active > div:first-child {
            background-color: var(--bg-color-hover) !important;
          }
        }
        
        .glow-on-hover > div:first-child {
          transition: background-color 0.3s ease;
        }
      `}</style>
    </>
  )
}
