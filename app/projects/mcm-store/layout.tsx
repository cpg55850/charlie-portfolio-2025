import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'MCM Store | Charlie Graham',
    description: 'MCM Store project by Charlie Graham - An e-commerce store application',
}

export default function McmStoreLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}