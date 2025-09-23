import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'SMBC Nikko Securities | Charlie Graham',
    description: 'SMBC Nikko Securities internship experience by Charlie Graham - Software Engineer Intern in Osaka, Japan',
}

export default function SMBCWorkLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}