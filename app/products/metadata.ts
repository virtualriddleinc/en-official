import { Metadata } from 'next';

async function getProductsData() {
  return {
    title: 'Atlassian Products - Complete Product Suite | Virtual Riddle',
    description: 'Comprehensive Atlassian product solutions for software development, project management, collaboration and more. Discover Jira Software, Confluence, Bitbucket and more.',
    services: [
      'Jira Software Consulting',
      'Jira Service Management Consulting',
      'Jira Work Management Consulting',
      'Confluence Consulting',
      'Bitbucket Consulting',
      'Trello Consulting',
      'Opsgenie Consulting',
      'Statuspage Consulting'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getProductsData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Atlassian products',
      'Jira Software',
      'Jira Service Management',
      'Jira Work Management',
      'Confluence',
      'Bitbucket',
      'Trello',
      'Opsgenie',
      'Statuspage',
      'project management',
      'ITSM',
      'software development',
      'team collaboration',
      'knowledge management',
      'Atlassian consulting',
      'Atlassian implementation'
    ],
    alternates: {
      canonical: '/products'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/products',
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

