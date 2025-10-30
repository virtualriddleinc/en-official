import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Search – Virtual Riddle',
    description: 'Search the site for products, solutions, blogs and corporate pages.',
    alternates: { canonical: '/search' },
    robots: { index: false, follow: true },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://virtualriddle.com/search',
      title: 'Search – Virtual Riddle',
      description: 'Search the site for products, solutions, blogs and corporate pages.',
      siteName: 'Virtual Riddle'
    },
    twitter: {
      card: 'summary',
      title: 'Search – Virtual Riddle',
      description: 'Search the site for products, solutions, blogs and corporate pages.'
    }
  };
}


