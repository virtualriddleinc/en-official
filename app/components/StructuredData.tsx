'use client'

interface BreadcrumbItem {
  name: string
  item: string
}

interface FAQItem {
  question: string
  answer: string
}

interface ServiceOffer {
  name: string
  description: string
}

interface StructuredDataProps {
  type: 'breadcrumb' | 'faq' | 'service'
  breadcrumbItems?: BreadcrumbItem[]
  faqItems?: FAQItem[]
  serviceData?: {
    name: string
    description: string
    url: string
    offers?: ServiceOffer[]
  }
}

export default function StructuredData({ 
  type, 
  breadcrumbItems, 
  faqItems, 
  serviceData 
}: StructuredDataProps) {
  const generateBreadcrumbJsonLd = () => {
    if (!breadcrumbItems) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.item
      }))
    }
  }

  const generateFAQJsonLd = () => {
    if (!faqItems) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    }
  }

  const generateServiceJsonLd = () => {
    if (!serviceData) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: serviceData.name,
      description: serviceData.description,
      url: serviceData.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Maslak Neighborhood, AOS 55. Street, 42 Maslak B Block, Unit 4/542',
        addressLocality: 'Sarıyer',
        addressRegion: 'Istanbul',
        postalCode: '34485',
        addressCountry: 'TR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 41.1090,
        longitude: 29.0194
      },
      serviceType: 'Software Consulting',
      areaServed: {
        '@type': 'Country',
        name: 'Turkey'
      },
      ...(serviceData.offers && {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${serviceData.name} Services`,
          itemListElement: serviceData.offers.map(offer => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: offer.name,
              description: offer.description
            }
          }))
        }
      })
    }
  }

  const getJsonLd = () => {
    switch (type) {
      case 'breadcrumb':
        return generateBreadcrumbJsonLd()
      case 'faq':
        return generateFAQJsonLd()
      case 'service':
        return generateServiceJsonLd()
      default:
        return null
    }
  }

  const jsonLd = getJsonLd()
  if (!jsonLd) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 