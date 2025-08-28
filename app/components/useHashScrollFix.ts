'use client'
import { useEffect } from 'react'

export const useHashScrollFix = () => {
    useEffect(() => {
        // Function to handle smooth scrolling to hash targets
        const scrollToHash = (hash: string) => {
            const targetId = hash.substring(1) // Remove the # symbol
            const element = document.getElementById(targetId)

            if (element) {
                // Small delay to ensure DOM is ready and animations have started
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                }, 100)
            }
        }

        // Handle initial page load with hash
        if (window.location.hash) {
            // Longer delay for initial page load to account for component mounting
            setTimeout(() => {
                scrollToHash(window.location.hash)
            }, 800) // Wait for animations to complete
        }

        // Handle hash changes during navigation
        const handleHashChange = () => {
            scrollToHash(window.location.hash)
        }

        window.addEventListener('hashchange', handleHashChange)

        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])
}
