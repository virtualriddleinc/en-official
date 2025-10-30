import { Metadata } from 'next';

// Trello page metadata generation function
async function getTrelloData() {
  return {
    title: 'Trello - Visual Project Management & Kanban Boards | Virtual Riddle',
    description: 'Organize, visualize, and succeed with Trello. Visualize your team workflows, organize projects, and increase productivity with Kanban boards.',
    services: [
      'Trello Consulting',
      'Kanban Board Setup',
      'Project Management',
      'Workflow Automation',
      'Team Collaboration',
      'Power-Ups Integration',
      'AI-Powered Organization'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTrelloData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Trello',
      'Kanban',
      'project management',
      'visual boards',
      'task management',
      'workflow management',
      'team collaboration',
      'Butler automation',
      'Power-Ups',
      'drag and drop',
      'visual project management',
      'board management',
      'team productivity',
      'remote teams',
      'Atlassian Trello',
      'Trello consulting',
      'Trello implementation',
      'AI-powered organization',
      'visual workflow'
    ],
    alternates: {
      canonical: '/products/trello'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/products/trello',
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

