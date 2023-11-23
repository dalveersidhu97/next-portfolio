import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import './globals.css'
import MainLayout from '@/page-components/main-layout'

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '300', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Dalveer Singh',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <MainLayout>
          <main>
            {children}
          </main>
        </MainLayout>
      </body>
    </html>
  )
}
