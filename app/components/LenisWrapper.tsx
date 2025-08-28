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

  // Initialize Lenis instance if not already created
  if (!lenisRef.current && typeof window !== 'undefined') {
    lenisRef.current = new Lenis({ autoRaf: true })
  }

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  )
}

export function useLenis() {
  return useContext(LenisContext)
}
