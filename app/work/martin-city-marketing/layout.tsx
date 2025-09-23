import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Martin City Marketing | Charlie Graham',
    description: 'Martin City Marketing work experience by Charlie Graham - Full Stack Software Engineer',
}

export default function MartinCityMarketingWorkLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}