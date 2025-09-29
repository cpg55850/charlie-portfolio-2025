import React from 'react'

const TechStack = ({ technologies }: { technologies: string[] }) => {
    return (

        <span className='text-gray-400 text-sm'>Tech Stack: {technologies.join(', ')}</span>
    )
}

export default TechStack