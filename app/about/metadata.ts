import { Metadata } from 'next';

// About page metadata generation function
async function getAboutData() {
  return {
    title: 'About Us - Virtual Riddle',
    description: 'Virtual Riddle Technology Inc. provides Atlassian consulting services to leading Turkish companies with our experienced team of Atlassian-certified experts.',
    company: 'Virtual Riddle Technology Inc.',
    location: 'Maslak 42, Istanbul'
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Virtual Riddle',
      'Atlassian consulting',
      'Jira consulting',
      'Confluence consulting',
      'software consulting',
      'Turkey technology company',
      'Maslak technology',
      'digital transformation',
      'Atlassian Turkey',
      'enterprise solutions'
    ],
    alternates: {
      canonical: '/about'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'Corporate',
      'article:tag': 'Virtual Riddle, Atlassian, Consulting'
    }
  }
} 