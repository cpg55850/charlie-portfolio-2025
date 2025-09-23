import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'University of Central Missouri | Charlie Graham',
    description: 'University of Central Missouri tutoring experience by Charlie Graham - Computer Science Tutor',
}

export default function UCMWorkLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}