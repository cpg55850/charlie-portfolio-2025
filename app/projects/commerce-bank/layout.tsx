import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Commerce Bank | Charlie Graham',
    description: 'Commerce Bank project by Charlie Graham - A banking application interface',
}

export default function CommerceBankLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}