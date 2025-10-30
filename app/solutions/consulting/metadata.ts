import { Metadata } from 'next';

// Metadata generation function
async function getConsultingData() {
  return {
    title: 'Atlassian Consulting Services',
    description: 'With our expert consulting services for Atlassian tools, optimize your corporate processes and increase your efficiency by up to 40%',
    services: ['Jira', 'Confluence', 'Bitbucket', 'Agile Transformation']
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getConsultingData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Atlassian consulting',
      'Jira consulting',
      'Confluence consulting',
      'Agile transformation',
      'Scrum consulting',
      'Atlassian Turkey',
      'software process consulting',
      'corporate efficiency',
      'project management consulting'
    ],
    alternates: {
      canonical: '/solutions/consulting'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'Consulting',
      'article:tag': data.services.join(', ')
    }
  }
} 