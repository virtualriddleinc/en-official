import { Metadata } from 'next';

// Pricing sayfası metadata generation function
async function getPricingData() {
  return {
    title: 'Fiyatlandırma - Virtual Riddle Atlassian Danışmanlık Hizmetleri',
    description: 'Virtual Riddle\'ın şeffaf fiyatlandırma planları. Tam Zamanlı Danışmanlık Paketi, Proje Bazlı Danışmanlık ve Eğitim Paketi ile dinamik fiyat hesaplama sistemi. Saatlik ve günlük faturalandırma seçenekleri.',
    packages: [
      'Tam Zamanlı Danışmanlık Paketi',
      'Proje Bazlı Danışmanlık',
      'Eğitim Paketi'
    ],
    features: [
      'Dinamik Fiyat Hesaplama',
      'Saatlik ve Günlük Faturalandırma',
      'Minimum 60 Günlük Sözleşme',
      'Minimum 1 Saatlik Hizmet',
      '1 Gün = 8 Saat Hesaplama',
      'Anlık Fiyat Güncelleme'
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPricingData()

  return {
    title: data.title,
    description: data.description,
    keywords: [
      'Virtual Riddle fiyatlandırma',
      'Atlassian danışmanlık fiyatları',
      'Jira danışmanlık ücretleri',
      'Confluence danışmanlık fiyatları',
      'Tam Zamanlı Danışmanlık Paketi',
      'Proje Bazlı Danışmanlık',
      'Eğitim Paketi fiyatları',
      'Dinamik fiyat hesaplama',
      'Saatlik günlük faturalandırma',
      'Minimum 60 günlük sözleşme',
      'Minimum 1 saatlik hizmet',
      '1 gün 8 saat hesaplama',
      'Anlık fiyat güncelleme',
      'DevOps danışmanlık paketleri',
      'Agile dönüşüm fiyatları',
      'dijital dönüşüm danışmanlığı',
      'teknoloji danışmanlık paketleri',
      'İstanbul teknoloji danışmanlığı'
    ],
    alternates: {
      canonical: '/pricing'
    },
    robots: {
      index: true,
      follow: true
    },
    other: {
      'article:section': 'Fiyatlandırma',
      'article:tag': data.features.join(', '),
      'pricing:packages': data.packages.join(', '),
      'pricing:features': data.features.join(', ')
    }
  }
} 