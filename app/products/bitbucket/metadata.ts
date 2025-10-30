import { Metadata } from 'next';

// Bitbucket page metadata generation function
async function getBitbucketData() {
  return {
    title: 'Bitbucket - Git Repository & CI/CD Platform | Virtual Riddle',
    description: 'Git-based code hosting and collaboration platform for professional teams. Equipped with CI/CD integration and advanced security features.',
    services: [
      'Bitbucket Consulting',
      'Git Repository Setup',
      'CI/CD Implementation',
      'Code Review Setup',
      'DevOps Integration',
      'Security Configuration',
      'AI-Powered Development Tools'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getBitbucketData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Bitbucket',
      'Git',
      'code management',
      'repository',
      'version control',
      'CI/CD',
      'pipeline',
      'DevOps',
      'code review',
      'pull request',
      'security',
      'Atlassian Bitbucket',
      'Git hosting',
      'continuous integration',
      'continuous deployment',
      'code collaboration',
      'branch management',
      'merge requests',
      'Atlassian consulting',
      'Bitbucket implementation',
      'AI-powered development'
    ],
    alternates: {
      canonical: '/products/bitbucket'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/products/bitbucket',
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

