import { Metadata } from 'next';

// Jira Work Management page metadata generation function
async function getJiraWorkManagementData() {
  return {
    title: 'Jira Work Management - Work Management Platform | Virtual Riddle',
    description: 'Project management tool designed for all business teams like marketing, HR, and finance. Enhance collaboration and efficiency with customizable work management solutions.',
    services: [
      'Jira Work Management Consulting',
      'Work Management Implementation',
      'Project Management Setup',
      'Team Collaboration',
      'Workflow Automation',
      'Cross-Department Coordination',
      'AI-Powered Workflow Optimization'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getJiraWorkManagementData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Jira Work Management',
      'work management',
      'project management',
      'task management',
      'calendar',
      'timeline',
      'kanban',
      'marketing teams',
      'human resources',
      'HR',
      'finance',
      'operations',
      'business teams',
      'cross-department collaboration',
      'workflow automation',
      'team collaboration',
      'business process management',
      'work management platform',
      'Atlassian consulting',
      'Jira Work Management implementation'
    ],
    alternates: {
      canonical: '/products/jira-work-management'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/products/jira-work-management',
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

