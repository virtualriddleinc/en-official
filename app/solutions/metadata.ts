import { Metadata } from 'next';

async function getSolutionsData() {
  return {
    title: 'Solutions - Atlassian Consulting & Services | Virtual Riddle',
    description: 'Comprehensive Atlassian solutions for digital transformation. Expert consulting, cloud migration, training & certification, and free discovery services.',
    services: [
      'Atlassian Consulting',
      'Cloud Migration',
      'Training & Certification',
      'Free Discovery',
      'IT Support',
      'DevOps Solutions',
      'Agile Transformation'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSolutionsData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Atlassian solutions',
      'Atlassian consulting',
      'cloud migration',
      'training certification',
      'free discovery',
      'digital transformation',
      'IT support solutions',
      'DevOps solutions',
      'agile transformation',
      'Atlassian implementation',
      'Atlassian services',
      'enterprise solutions'
    ],
    alternates: {
      canonical: '/solutions'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/solutions',
      siteName: 'Virtual Riddle',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
    },
    other: {
      'article:section': 'Solutions',
      'article:tag': data.services.join(', ')
    }
  }
}

