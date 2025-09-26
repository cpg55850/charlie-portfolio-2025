import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Wanna Sell Your Car | Charlie Graham',
    description: 'Wanna Sell Your Car project by Charlie Graham - A platform to help users value and sell their cars',
}

export default function WannaSellYourCarLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}