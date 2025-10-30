import { Metadata } from 'next';

// Contact page metadata generation function
async function getContactData() {
  return {
    title: 'Contact - Virtual Riddle Technology Inc.',
    description: 'Contact Virtual Riddle. Reach out to us for Atlassian consulting, digital transformation, and technology solutions.',
    contact: {
      email: 'info@virtualriddle.com',
      address: 'Maslak Neighborhood, AOS 55. Street, 42 Maslak B Block, Unit 4/542, Sarıyer, Istanbul'
    }
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Virtual Riddle contact',
      'Atlassian consulting contact',
      'digital transformation contact',
      'technology consulting',
      'Jira consulting',
      'Confluence consulting',
      'Istanbul technology company',
      'Maslak technology consulting'
    ],
    alternates: {
      canonical: '/contact'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'Contact',
      'article:tag': 'Contact, Virtual Riddle, Atlassian Consulting'
    }
  }
} 