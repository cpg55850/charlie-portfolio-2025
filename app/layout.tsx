import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LenisWrapper from './components/LenisWrapper'
import './globals.css'
import Background from './components/Background'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Include all weights
})

export const metadata: Metadata = {
  title: 'Charlie Graham | Full Stack Software Engineer',
  description: 'Portfolio of Charlie Graham - Full Stack Software Engineer and Computer Science Master\'s student at Georgia Tech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon/favicon.ico' />
      </head>
      <LenisWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Background />
          {children}
        </body>
      </LenisWrapper>
    </html>
  )
}
