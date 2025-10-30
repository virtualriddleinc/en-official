import { Metadata } from 'next';

// Rovo page metadata generation function
async function getRovoData() {
  return {
    title: 'Atlassian Rovo - AI Teammates for Teamwork | Virtual Riddle',
    description: 'Transform teamwork with AI teammates. AI-powered search, chat, studio, and agents powered by your team\'s information. Over 1 million users leverage the power of AI in Atlassian applications.',
    services: [
      'Atlassian Rovo Consulting',
      'AI Implementation',
      'AI-Powered Search Setup',
      'Rovo Chat Configuration',
      'AI Agents Development',
      'Teamwork Graph Integration',
      'AI Workflow Optimization'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getRovoData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Atlassian Rovo',
      'Rovo',
      'AI teammates',
      'AI-powered search',
      'AI chat',
      'Rovo Studio',
      'AI agents',
      'Teamwork Graph',
      'artificial intelligence',
      'AI automation',
      'Atlassian AI',
      'enterprise AI',
      'AI collaboration',
      'AI insights',
      'personalized search',
      'smart agents',
      'real-time insights',
      'Atlassian consulting',
      'Rovo implementation',
      'AI workflow'
    ],
    alternates: {
      canonical: '/products/rovo'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/products/rovo',
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

