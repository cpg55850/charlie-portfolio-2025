'use client'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'

interface BreadcrumbItem {
  label: string
  href?: string
  scrollTo?: string // Add option to scroll to a section instead of navigate
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className='flex items-center space-x-2 text-sm text-gray-400 mb-8'
      aria-label='Breadcrumb'
    >
      <Link
        href='/'
        className='flex items-center hover:text-white transition-colors duration-200'
        aria-label='Home'
      >
        <HomeIcon className='w-5 h-5' />
      </Link>

      {items.map((item, index) => (
        <div key={index} className='flex items-center space-x-2'>
          <ChevronRightIcon className='w-4 h-4 text-gray-500' />
          {item.href ? (
            <Link
              href={item.href}
              className='hover:text-white transition-colors duration-200'
            >
              {item.label}
            </Link>
          ) : (
            <span className='text-gray-300'>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
