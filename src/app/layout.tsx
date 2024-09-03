import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bellroy Robot Simulator',
  description: 'A robot simulator using Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}