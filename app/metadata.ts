import { Metadata } from 'next';

// Ana sayfa metadata generation function
async function getHomeData() {
  return {
    title: 'Virtual Riddle - Atlassian Danışmanlığı ve Modern Yazılım Çözümleri',
    description: 'Jira ve Confluence başta olmak üzere tüm Atlassian ürünleri için kurumsal danışmanlık hizmetleri. Profesyonel danışmanlık, modern yazılım çözümleri ve dinamik fiyatlandırma sistemi.',
    services: [
      'Jira Danışmanlığı', 
      'Confluence Danışmanlığı', 
      'Bitbucket Danışmanlığı', 
      'Atlassian Danışmanlığı',
      'Dinamik Fiyatlandırma',
      'Proje Bazlı Danışmanlık',
      'Tam Zamanlı Danışmanlık',
      'Eğitim Paketleri'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomeData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Atlassian danışmanlığı',
      'Jira danışmanlığı',
      'Confluence danışmanlığı',
      'Bitbucket danışmanlığı',
      'Atlassian Türkiye',
      'yazılım danışmanlığı',
      'kurumsal çözümler',
      'proje yönetimi',
      'agile dönüşüm',
      'devops danışmanlığı',
      'dinamik fiyatlandırma',
      'proje bazlı danışmanlık',
      'tam zamanlı danışmanlık',
      'eğitim paketleri',
      'saatlik günlük faturalandırma',
      'minimum sözleşme süreleri',
      '1 gün 8 saat hesaplama',
      'anlık fiyat güncelleme'
    ],
    alternates: {
      canonical: '/'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'Ana Sayfa',
      'article:tag': data.services.join(', ')
    }
  }
} 