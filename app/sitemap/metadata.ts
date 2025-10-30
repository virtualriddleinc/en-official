import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sitemap – Virtual Riddle',
    description: 'Browse the complete sitemap of Virtual Riddle to quickly access products, solutions, and resources.',
    alternates: { canonical: '/sitemap' },
    robots: { index: false, follow: true },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://virtualriddle.com/sitemap',
      title: 'Sitemap – Virtual Riddle',
      description: 'Browse the complete sitemap of Virtual Riddle to quickly access products, solutions, and resources.',
      siteName: 'Virtual Riddle'
    },
    twitter: {
      card: 'summary',
      title: 'Sitemap – Virtual Riddle',
      description: 'Browse the complete sitemap of Virtual Riddle to quickly access products, solutions, and resources.'
    }
  };
}


