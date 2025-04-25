import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import Header from '@/components/Header'

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Load DM Sans font
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Financials & Targets Dashboard',
  description: 'A dashboard for tracking financial metrics and targets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} font-sans`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 ml-[248px] bg-white">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
