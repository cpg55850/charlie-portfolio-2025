import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Martin City Marketing | Charlie Graham',
    description: 'Martin City Marketing project by Charlie Graham - A marketing agency website',
}

export default function MartinCityMarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}