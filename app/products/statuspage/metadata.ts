import { Metadata } from 'next';

// Statuspage page metadata generation function
async function getStatuspageData() {
  return {
    title: 'Statuspage - Status Page & Incident Communication | Virtual Riddle',
    description: 'Build trust in every incident with Statuspage. Provide your users with real-time status updates. Professional status page solution used by companies like DigitalOcean and Dropbox.',
    services: [
      'Statuspage Consulting',
      'Status Page Setup',
      'Incident Communication',
      'Uptime Monitoring',
      'Status Page Customization',
      'Third-Party Integrations',
      'Automated Notifications'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getStatuspageData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Statuspage',
      'status page',
      'incident communication',
      'status updates',
      'uptime monitoring',
      'service status',
      'incident management',
      'status transparency',
      'service reliability',
      'uptime showcase',
      'incident notifications',
      'status page solution',
      'real-time status',
      'service availability',
      'incident reporting',
      'status page management',
      'Atlassian Statuspage',
      'Statuspage consulting',
      'Statuspage implementation',
      'status page customization'
    ],
    alternates: {
      canonical: '/products/statuspage'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/products/statuspage',
      siteName: 'Virtual Riddle',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
    },
    other: {
      'article:section': 'Products',
      'article:tag': data.services.join(', ')
    }
  }
}

