# 🚀 VirtualRiddle Official Website

VirtualRiddle'ın resmi kurumsal web sitesi. Atlassian danışmanlığı ve modern yazılım çözümleri sunan web platformu. Modern web teknolojileri kullanılarak geliştirilmiş, performans odaklı ve kullanıcı dostu bir deneyim sunar.

## 📋 Proje Hakkında

VirtualRiddle, Atlassian ürünleri (Jira, Confluence, Bitbucket, vb.) konusunda uzmanlaşmış bir danışmanlık firmasıdır. Bu web sitesi, şirket hizmetlerini tanıtmak, müşterilerle iletişim kurmak ve iş süreçlerini dijitalleştirmek amacıyla geliştirilmiştir.

### 🎯 Ana Özellikler
- 📱 Responsive tasarım (Mobile-first yaklaşım)
- 🔍 Universal Search - Site geneli arama özelliği
- 🎨 Dark/Light tema desteği
- 📊 Kanban Board - Proje yönetimi arayüzü
- 🌍 Multi-language hazır altyapı (TR/EN)
- 📝 Blog sistemi - İçerik yönetimi
- 🗺️ Google Maps entegrasyonu
- 🍪 GDPR uyumlu Cookie Consent
- 📧 İletişim formu
- 💼 Kariyer sayfaları

## 🛠️ Tech Stack

### 📋 **Ana Framework & Runtime**
- **Next.js 15.5.3** - React tabanlı full-stack framework
- **React 18.2.0** - UI kütüphanesi
- **TypeScript 5.8.3** - Tip güvenliği
- **Node.js >=18.0.0** - Runtime environment

### 🎨 **UI/UX & Styling**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 12.18.1** - Animasyon kütüphanesi
- **Heroicons 2.2.0** - SVG ikon kütüphanesi
- **Lucide React 0.518.0** - Modern ikon seti
- **Inter Font** - Optimize edilmiş Google Font
- **Custom Design System** - Özel tasarım sistemi

### 🎯 **Interactivity & Features**
- **Fuse.js 7.1.0** - Fuzzy search kütüphanesi
- **Swiper 12.0.2** - Touch slider/carousel
- **Universal Search** - Site geneli arama
- **Kanban Board** - Proje yönetimi arayüzü
- **Google Maps API** - Harita entegrasyonu
- **Structured Data** - SEO optimizasyonu

### 🔒 **Security & Performance**
- **Content Security Policy (CSP)** - XSS koruması
- **Turbopack** - Hızlı development bundler
- **Image Optimization** - Next.js built-in optimizasyon
- **Code Splitting** - Vendor ve React ayrı chunk'lar
- **Lazy Loading** - Sayfa bazlı yükleme
- **Tree Shaking** - Kullanılmayan kod eliminasyonu
- **DNS Prefetch** - Performans optimizasyonu
- **Critical CSS** - Above-the-fold optimizasyonu

### 🚀 **Deployment**
- **AWS Amplify** - CI/CD ve hosting platformu
- **Standalone Build** - Container-ready output
- **Incremental Static Regeneration (ISR)** - Dinamik içerik yönetimi

## 🚀 Getting Started

### Gereksinimler
- Node.js >=18.0.0
- npm >=8.0.0

### Kurulum

```bash
# Projeyi clone edin
git clone https://github.com/virtualriddleinc/official.git
cd official

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

```bash
npm run dev      # Development server (Turbopack ile)
npm run build    # Production build
npm run start    # Production server
npm run lint     # Kod kalitesi kontrolü
```

### Proje Yapısı

```
official-website/
├── app/                    # Next.js 15 App Router
│   ├── about/             # Hakkımızda sayfaları
│   ├── blog/              # Blog yazıları ve kategorileri
│   ├── components/        # Reaktif bileşenler
│   │   ├── Button.tsx
│   │   ├── Navbar.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── UniversalSearchBox.tsx
│   │   ├── KanbanBoard.tsx
│   │   └── ...
│   ├── products/          # Ürün sayfaları
│   │   ├── jira-software/
│   │   ├── confluence/
│   │   ├── bitbucket/
│   │   └── ...
│   ├── solutions/         # Çözüm sayfaları
│   ├── contact/           # İletişim sayfası
│   ├── career/            # Kariyer sayfası
│   ├── lib/               # Utility fonksiyonlar
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Ana sayfa
├── public/                # Statik dosyalar
│   ├── images/           # Görseller
│   └── icons/            # İkonlar
└── tailwind.config.ts     # Tailwind konfigürasyonu
```

## 🎨 Design System

Proje, özel tasarım sistemi ile geliştirilmiştir:

- **Custom Color Palette** - Blue, Gray, Dark tema
- **Custom Animations** - Gradient, blob, float, ping efektleri
- **Responsive Design** - Mobile-first yaklaşım
- **Platform Detection** - macOS/Windows özel stilleri

## 🔧 Key Features

### 📄 Sayfalar
- ✅ **Ana Sayfa** - Hero section, hizmetler ve referanslar
- ✅ **Hakkımızda** - Şirket profili ve ekip bilgileri
- ✅ **Ürünler** - Jira, Confluence, Bitbucket ve diğer Atlassian ürünleri
- ✅ **Çözümler** - Agile, DevOps, Cloud, Training çözümleri
- ✅ **Blog** - 10+ teknik blog yazısı
- ✅ **İletişim** - Google Maps entegrasyonlu iletişim formu
- ✅ **Kariyer** - Açık pozisyonlar ve iş başvuru formu
- ✅ **Ücretsiz Keşif** - Danışmanlık talep formu

### 🎯 Özellikler
- ✅ **Universal Search** - Fuse.js ile fuzzy search
- ✅ **Kanban Board** - Drag & drop proje yönetimi
- ✅ **Google Maps Integration** - Harita ve konum gösterimi
- ✅ **Cookie Consent** - GDPR uyumluluğu
- ✅ **Theme Toggle** - Dark/Light tema desteği
- ✅ **Job Application Modal** - Form entegrasyonu
- ✅ **Office Photo Slider** - Swiper.js ile galeri
- ✅ **Responsive Navigation** - Mobile-first menü sistemi
- ✅ **SEO Optimized** - Meta tags ve structured data

## 📱 Performance Optimizations

- **Image Optimization** - WebP/AVIF format desteği
- **Code Splitting** - Vendor ve React ayrı chunk'lar
- **Lazy Loading** - Sayfa bazlı yükleme
- **Source Maps** - Development debugging
- **Console Removal** - Production'da console.log temizleme

## 🔒 Security Features

- **Content Security Policy (CSP)** - XSS koruması
- **Strict Transport Security** - HTTPS zorunluluğu
- **Cross-Origin Opener Policy** - Güvenlik politikası
- **X-Frame-Options** - Clickjacking koruması

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🚀 Deploy

Proje AWS Amplify üzerinde deploy edilmektedir. Manuel deploy için:

```bash
# Production build
npm run build

# Build çıktısını test et
npm run start

# Deploy (AWS CLI gerekli)
aws amplify create-branch --app-id <app-id> --branch-name production
```

### Deployment Platformları

- **AWS Amplify** - Ana hosting platformu (Mevcut)
- **Vercel** - Alternatif hosting seçeneği
- **Docker** - Standalone build için Docker desteği

---

## 📊 Blog Yazıları

Proje içinde 10+ teknik blog yazısı bulunmaktadır:

- 🎯 Jira danışmanlığı avantajları
- 🏆 ROVO devrimi
- 🌐 Cloud native performans
- 🔄 DevOps trendleri 2024
- 🤖 Claude & Atlassian MCP entegrasyonu
- 📝 Confluence wiki aracı
- 💼 Başarılı dijital dönüşüm stratejileri
- ☁️ Multi-cloud stratejileri
- 📚 Jira Software nedir?

## 🛠️ Geliştirme Notları

### Önemli Dosyalar
- `app/layout.tsx` - Root layout ve metadata
- `app/components/Navbar.tsx` - Ana navigasyon
- `app/lib/searchData.ts` - Universal search data
- `tailwind.config.ts` - Tailwind konfigürasyonu
- `next.config.ts` - Next.js konfigürasyonu

### Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje özel bir projedir. Tüm hakları VirtualRiddle'a aittir.

## 📧 İletişim

VirtualRiddle - [info@virtualriddle.com](mailto:info@virtualriddle.com)

Proje Linki: [https://virtualriddle.com](https://virtualriddle.com)

---

**VirtualRiddle** - Atlassian gücüyle iş akışlarınızı optimize edin ve dijital dönüşümünüzü hızlandırın.
