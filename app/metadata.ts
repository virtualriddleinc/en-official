import { Metadata } from 'next';

// Home metadata generation function
async function getHomeData() {
  return {
    title: 'Virtual Riddle - Atlassian Consulting and Modern Software Solutions',
    description: 'Enterprise consulting services for all Atlassian products, especially Jira and Confluence. Professional consulting, modern software solutions and dynamic pricing system.',
    services: [
      'Jira Consulting', 
      'Confluence Consulting', 
      'Bitbucket Consulting', 
      'Atlassian Consulting',
      'Dynamic Pricing',
      'Project-Based Consulting',
      'Time-Based Consulting',
      'Training Packages'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomeData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Atlassian consulting',
      'Jira consulting',
      'Confluence consulting',
      'Bitbucket consulting',
      'Atlassian Turkey',
      'software consulting',
      'enterprise solutions',
      'project management',
      'agile transformation',
      'devops consulting',
      'dynamic pricing',
      'project-based consulting',
      'time-based consulting',
      'training packages',
      'hourly daily billing',
      'minimum contract periods',
      '1 day 8 hours calculation',
      'real-time price updates'
    ],
    alternates: {
      canonical: '/'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'Home',
      'article:tag': data.services.join(', ')
    }
  }
} 