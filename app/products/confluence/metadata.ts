import { Metadata } from 'next';

// Confluence page metadata generation function
async function getConfluenceData() {
  return {
    title: 'Confluence - Team Collaboration & Knowledge Base | Virtual Riddle',
    description: 'Central collaboration space where teams create, organize, and share knowledge. Ideal for knowledge base, documentation, and meeting notes. AI-powered knowledge management solution.',
    services: [
      'Confluence Consulting',
      'Knowledge Base Implementation',
      'Documentation Management',
      'Team Collaboration Setup',
      'Wiki Development',
      'Content Strategy',
      'AI-Powered Documentation'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getConfluenceData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Confluence',
      'knowledge management',
      'documentation',
      'wiki',
      'collaboration',
      'knowledge base',
      'team collaboration',
      'document management',
      'project planning',
      'meeting notes',
      'whiteboard',
      'technical documentation',
      'content management',
      'team workspace',
      'documentation tool',
      'knowledge sharing',
      'AI-powered documentation',
      'Atlassian Confluence',
      'Confluence consulting',
      'Confluence implementation'
    ],
    alternates: {
      canonical: '/products/confluence'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/products/confluence',
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

