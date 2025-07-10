import { Metadata } from 'next';
import StructuredData from '../../components/StructuredData';
import ConsultingForm from './ConsultingForm';

// Metadata generation function
async function getConsultingData() {
  return {
    title: 'Atlassian Danışmanlığı',
    description: 'Atlassian araçları hakkında uzman danışmanlık hizmetimizle, kurumsal süreçlerinizi optimize edin ve verimliliğinizi %40\'a kadar artırın',
    services: ['Jira', 'Confluence', 'Bitbucket', 'Agile Dönüşüm']
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getConsultingData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Atlassian danışmanlığı',
      'Jira danışmanlığı',
      'Confluence danışmanlığı',
      'Agile dönüşüm',
      'Scrum danışmanlığı',
      'Atlassian Türkiye',
      'yazılım süreç danışmanlığı',
      'kurumsal verimlilik',
      'proje yönetimi danışmanlığı'
    ],
    alternates: {
      canonical: '/solutions/consulting'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'Danışmanlık',
      'article:tag': data.services.join(', ')
    }
  }
}

export default function ConsultingPage() {
  return (
    <main>
      <ConsultingForm />

      {/* Structured Data */}
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Ana Sayfa', item: 'https://virtualriddle.com' },
          { name: 'Çözümler', item: 'https://virtualriddle.com/solutions' },
          { name: 'Danışmanlık', item: 'https://virtualriddle.com/solutions/consulting' }
        ]}
      />
      
      <StructuredData
        type="faq"
        faqItems={[
          {
            question: 'Atlassian danışmanlığı nedir?',
            answer: 'Atlassian araçları ile kurumsal süreçlerinizi optimize etme danışmanlığıdır.'
          },
          {
            question: 'Hangi hizmetleri sunuyorsunuz?',
            answer: 'Jira, Confluence, Bitbucket danışmanlığı, Agile dönüşüm, DevOps danışmanlığı ve özel çözümler sunuyoruz.'
          },
          {
            question: 'Danışmanlık süreci nasıl işler?',
            answer: 'İlk görüşme, ihtiyaç analizi, çözüm önerisi, uygulama ve takip aşamalarından oluşur.'
          }
        ]}
      />
      
      <StructuredData
        type="service"
        serviceData={{
          name: 'Virtual Riddle Atlassian Danışmanlığı',
          description: 'Atlassian araçları hakkında uzman danışmanlık hizmetimizle, kurumsal süreçlerinizi optimize edin',
          url: 'https://virtualriddle.com/solutions/consulting',
          offers: [
            {
              name: 'Jira Danışmanlığı',
              description: 'Jira kurulumu, yapılandırması ve optimizasyonu'
            },
            {
              name: 'Confluence Danışmanlığı',
              description: 'Confluence kurulumu ve içerik yönetimi'
            },
            {
              name: 'Agile Dönüşüm',
              description: 'Çevik metodolojilere geçiş danışmanlığı'
            }
          ]
        }}
      />
    </main>
  );
} 