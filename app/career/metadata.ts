import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Careers at Virtual Riddle – Global Open Positions',
    description:
      'Join our global team. Explore open roles and apply online. Remote-friendly positions for Atlassian experts and technology professionals.',
    keywords: [
      'career',
      'jobs',
      'open positions',
      'recruitment',
      'global',
      'remote',
      'Atlassian jobs'
    ],
    alternates: { canonical: '/career' },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://virtualriddle.com/career',
      title: 'Careers at Virtual Riddle – Global Open Positions',
      description:
        'Join our global team. Explore open roles and apply online. Remote-friendly positions for Atlassian experts and technology professionals.',
      siteName: 'Virtual Riddle'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Careers at Virtual Riddle – Global Open Positions',
      description:
        'Join our global team. Explore open roles and apply online. Remote-friendly positions for Atlassian experts and technology professionals.'
    }
  };
}


