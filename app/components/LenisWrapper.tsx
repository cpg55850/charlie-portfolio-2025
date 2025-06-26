'use client'
import Lenis from 'lenis'
import React, { useEffect } from 'react'

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    })

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
