import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Abicus - Scientific Calculator Online',
    short_name: 'Abicus',
    description: 'Free online scientific calculator based on the Finnish Abicus calculator',
    start_url: '/en',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    // Note: Icons should be added when proper favicon files are created
    // icons: [],
  }
}