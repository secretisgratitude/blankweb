import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'blankweb',
  description: 'Next.js baseline',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='min-h-screen bg-gray-50 text-gray-900'>{children}</body>
      </html>
    </ClerkProvider>
  )
}
