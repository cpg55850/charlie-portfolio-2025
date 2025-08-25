'use client'

import { useScroll } from './LenisWrapper'

// Example navigation component showing how to use the scroll functionality
export default function NavigationExample() {
  const { scrollToSection } = useScroll()

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection('work')
  }

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection('projects')
  }

  return (
    <nav className="flex gap-4">
      <button 
        onClick={handleWorkClick}
        className="px-4 py-2 text-white hover:text-gray-300 transition-colors"
      >
        Work
      </button>
      <button 
        onClick={handleProjectsClick}
        className="px-4 py-2 text-white hover:text-gray-300 transition-colors"
      >
        Projects
      </button>
    </nav>
  )
}

// Alternative with Link components if you prefer
export function NavigationWithLinks() {
  const { scrollToSection } = useScroll()

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection('work')
  }

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection('projects')
  }

  return (
    <nav className="flex gap-4">
      <a 
        href="#work" 
        onClick={handleWorkClick}
        className="px-4 py-2 text-white hover:text-gray-300 transition-colors"
      >
        Work
      </a>
      <a 
        href="#projects" 
        onClick={handleProjectsClick}
        className="px-4 py-2 text-white hover:text-gray-300 transition-colors"
      >
        Projects
      </a>
    </nav>
  )
}
