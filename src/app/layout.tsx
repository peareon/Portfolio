import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Looking for a developer?',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&family=Hedvig+Letters+Serif:opsz@12..24&display=swap" rel="stylesheet"></link>
          <link rel="icon" href="/images/logo.png"></link>        
        </head>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
