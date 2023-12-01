import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import './globals.css'
import MainLayout from '@/page-components/main-layout';
import { CookiesProvider, getCookies } from 'next-client-cookies/server';
import { MY_DATA } from '@/db/data';

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '300', '500', '600', '700'] })

export const metadata: Metadata = {
  title: {
    template: `%s | ${MY_DATA.name}`,
    default: `${MY_DATA.name} | Full Stack Web Developer`,
  },
  description: MY_DATA.about.about_me,
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
