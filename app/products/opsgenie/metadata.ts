import { Metadata } from 'next';

// Opsgenie page metadata generation function
async function getOpsgenieData() {
  return {
    title: 'Opsgenie - Alert & On-Call Management | Virtual Riddle',
    description: 'Optimize your IT operations with Opsgenie. Automate and accelerate alert management, on-call rotations, and incident response processes.',
    services: [
      'Opsgenie Consulting',
      'Alert Management Setup',
      'On-Call Rotation Configuration',
      'Incident Response Automation',
      'IT Operations Optimization',
      'Migration Services',
      'Atlassian Integration'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getOpsgenieData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Opsgenie',
      'alert management',
      'on-call management',
      'incident response',
      'IT operations',
      'on-call rotations',
      'alert routing',
      'incident management',
      'DevOps',
      'SRE',
      'Site Reliability Engineering',
      'ITSM',
      'enterprise security',
      'monitoring',
      'alerting',
      'on-call scheduling',
      'critical system management',
      'Atlassian Opsgenie',
      'Opsgenie consulting',
      'Opsgenie implementation'
    ],
    alternates: {
      canonical: '/products/opsgenie'
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      url: '/products/opsgenie',
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

