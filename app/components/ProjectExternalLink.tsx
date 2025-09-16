import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ProjectExternalLink = ({
  href
}: {
  href: string
}) => {
  return (
    <Link href={href} className="flex gap-2 items-center mb-4 group text-white hover:underline">
      <FaExternalLinkAlt className='text-lg text-white group-hover:cursor-pointer' />
      View Live Site
    </Link>
  )
}

export default ProjectExternalLink