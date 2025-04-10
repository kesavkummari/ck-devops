import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CK - Personal Portfolio',
  description: 'Professional portfolio website showcasing my work and experience',
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