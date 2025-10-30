import { Metadata } from 'next';

// Jira Software page metadata generation function
async function getJiraSoftwareData() {
  return {
    title: 'Jira Software - Agile Project Management Tool | Virtual Riddle',
    description: 'The #1 agile project management tool for software teams. Plan, track, and release your projects with Scrum, Kanban, or hybrid methodologies. AI-powered project management with Jira Software.',
    services: [
      'Jira Software Consulting',
      'Agile Project Management',
      'Scrum Implementation',
      'Kanban Workflows',
      'Sprint Planning',
      'CI/CD Integration',
      'AI-Powered Automation'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getJiraSoftwareData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Jira Software',
      'agile project management',
      'Scrum',
      'Kanban',
      'software development',
      'issue tracking',
      'project management tool',
      'Atlassian Jira',
      'sprint planning',
      'backlog management',
      'CI/CD integration',
      'AI-powered project management',
      'team collaboration',
      'software project tracking',
      'agile methodology',
      'scrum master tools',
      'kanban board',
      'development workflow',
      'Atlassian consulting',
      'Jira implementation'
    ],
    alternates: {
      canonical: '/products/jira-software'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/products/jira-software',
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

