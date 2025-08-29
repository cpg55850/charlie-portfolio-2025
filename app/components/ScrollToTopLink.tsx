'use client'
import { useRouter } from 'next/navigation'

import { useLenis } from './LenisWrapper'
import Link from 'next/link'

type ScrollToTopLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  animated?: boolean
}

export function createUrl(pathname: string, query?: Record<string, any>) { // eslint-disable-line @typescript-eslint/no-explicit-any
  const params = new URLSearchParams()
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined) params.set(key, String(value))
    })
  }
  const queryString = params.toString()
  return queryString ? `${pathname}?${queryString}` : pathname
}

export default function ScrollToTopLink({
  href,
  children,
  className,
  animated = false,
}: ScrollToTopLinkProps) {
  const router = useRouter()
  const lenisRef = useLenis()

  const animatedHandleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Stop any ongoing scroll first
    if (lenisRef?.current) {
      lenisRef.current.stop()
    }

    router.push(href)

    // Wait a bit longer for navigation to complete and then scroll to top
    setTimeout(() => {
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0, { immediate: true })
      }
    }, 100) // Increased delay to ensure navigation completes
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={animated ? animatedHandleClick : undefined}
    >
      {children}
    </Link>
  )
}
