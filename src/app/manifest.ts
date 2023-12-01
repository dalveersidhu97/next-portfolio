import { COLOR_PRIMARY } from '@/constants/ui-constants';
import { MY_DATA } from '@/db/data'
import { MetadataRoute } from 'next'
import { getCookies } from 'next-client-cookies/server';
 
export default function manifest(): MetadataRoute.Manifest {

  const cookies = getCookies();
  const theme = cookies.get('theme');

  return {
    name: MY_DATA.name + ' Portfolio Website',
    short_name: MY_DATA.name + ' Portfolio',
    description: MY_DATA.about.about_me,
    start_url: '/',
    display: 'standalone',
    background_color: theme === 'dark' ? '#000': '#fff',
    theme_color: COLOR_PRIMARY,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}