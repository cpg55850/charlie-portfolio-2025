import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pizza You | Charlie Graham',
    description: 'Pizza You project by Charlie Graham - A LAMP stack pizza ordering application',
}

export default function PizzaYouLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}