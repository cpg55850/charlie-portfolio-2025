import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Charles Bakery | Charlie Graham',
    description: 'Charles Bakery project by Charlie Graham - A bakery management application',
}

export default function CharlesBakeryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}