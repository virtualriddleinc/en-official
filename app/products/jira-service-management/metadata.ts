import { Metadata } from 'next';

// Jira Service Management page metadata generation function
async function getJiraServiceManagementData() {
  return {
    title: 'Jira Service Management - ITSM Solution | Virtual Riddle',
    description: 'High-speed IT service management (ITSM) solution. Bring development and operations teams together to deliver exceptional service experiences with AI-powered service management.',
    services: [
      'Jira Service Management Consulting',
      'ITSM Implementation',
      'Service Desk Setup',
      'Incident Management',
      'ITIL Compliance',
      'Customer Service Management',
      'AI-Powered Automation'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getJiraServiceManagementData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Jira Service Management',
      'ITSM',
      'IT service management',
      'service desk',
      'help desk',
      'IT support',
      'incident management',
      'problem management',
      'change management',
      'asset management',
      'SLA',
      'service level agreement',
      'ITIL',
      'customer service',
      'ticket management',
      'AI-powered ITSM',
      'IT operations',
      'service automation',
      'Atlassian consulting',
      'Jira Service Management implementation'
    ],
    alternates: {
      canonical: '/products/jira-service-management'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/products/jira-service-management',
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

