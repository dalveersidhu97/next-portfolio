import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Fredoka } from 'next/font/google'
import './globals.css'
import MainLayout from '@/page-components/main-layout';
import { CookiesProvider, getCookies } from 'next-client-cookies/server';

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

  const cookies = getCookies();
  const theme = cookies.get('theme');

  return (
    <CookiesProvider>
      <html lang="en">
        <body className={`${fredoka.className}${theme === 'dark' ? ' dark' : ''}`}>
          <MainLayout>
            <main>
              {children}
            </main>
          </MainLayout>
        </body>
      </html>
    </CookiesProvider>
  )
}
