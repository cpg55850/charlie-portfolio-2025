'use client'
import React, { createContext, useContext, useEffect, useRef } from 'react'

import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

const LenisContext = createContext<React.RefObject<Lenis | null> | null>(null)

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Initialize Lenis instance
    if (typeof window !== 'undefined' && !lenisRef.current) {
      lenisRef.current = new Lenis({
        autoRaf: true,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    }

    // Cleanup on unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
    }
  }, [])

  // Handle route changes - scroll to top without stopping Lenis
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
      // Simple scroll to top on route change
      window.scrollTo(0, 0)

      // Also tell Lenis about the position change
      if (lenisRef.current) {
        setTimeout(() => {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true })
          }
        }, 0)
      }
    }
  }, [pathname])

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  )
}

export function useLenis() {
  return useContext(LenisContext)
}
