import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import './globals.css'
import MainLayout from '@/page-components/main-layout';
import { CookiesProvider, getCookies } from 'next-client-cookies/server';
import { MY_DATA } from '@/db/data';
import { BASE_URL } from '@/constants/general-contants';

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '300', '500', '600', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: `%s | ${MY_DATA.name}`,
    default: `${MY_DATA.name} | Full Stack Web Developer`,
  },
  description: MY_DATA.about.about_me,
  keywords: [`${MY_DATA.name}`, `${MY_DATA.name} Lohakhera`, `${MY_DATA.name} Sidhu`, 'Laddi Sidhu', 'Laddi Sidhu Lohakhera', `Lohakera`, 'Sangrur', 'Punjab'],
  authors: [{ name: `${MY_DATA.name}` }],
  creator: `${MY_DATA.name}`,
  publisher: `${MY_DATA.name}`,
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
