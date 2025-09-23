import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'WUPHF | Charlie Graham',
    description: 'WUPHF project by Charlie Graham - A social media platform with animal avatars',
}

export default function WuphfLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}