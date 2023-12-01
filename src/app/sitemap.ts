import { BASE_URL } from '@/constants/general-contants';
import { MY_DATA } from '@/db/data';
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

    const projectPaths = MY_DATA.experience.projects.list.map(project => ({ path: `/experience/${project.slug}`, priority: 0.7 }));
    const paths = [
        { path: '', priority: 1 },
        { path: '/skills', priority: 0.8 },
        { path: '/experience', priority: 0.9 },
        { path: '/qualification', priority: 0.8 },
        ...projectPaths
    ];

    return paths.map(path => ({
        url: `${BASE_URL}${path.path}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: path.priority,
    }))
}