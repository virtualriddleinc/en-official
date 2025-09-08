import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: {
    template: '%s | Virtual Riddle',
    default: 'Virtual Riddle - Atlassian Danışmanlığı ve Modern Yazılım Çözümleri'
  },
  description: 'Atlassian araçları ve modern yazılım çözümleri konusunda uzman danışmanlık hizmetleri',
  keywords: [
    'Atlassian', 'Jira', 'Confluence', 'yazılım danışmanlığı', 'Türkiye',
    'Claude AI', 'MCP entegrasyonu', 'yapay zeka', 'AI asistan',
    'Atlassian danışmanlığı', 'Jira danışmanlığı', 'Confluence danışmanlığı',
    'DevOps', 'Agile', 'proje yönetimi', 'kurumsal çözümler',
    'Remote MCP Server', 'Anthropic Claude', 'AI iş akışları'
  ],
  authors: [{ name: 'Virtual Riddle' }],
  creator: 'Virtual Riddle',
  publisher: 'Virtual Riddle',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://virtualriddle.com'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/favicon.svg',
    shortcut: '/favicon.svg'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://virtualriddle.com',
    title: 'Virtual Riddle - Atlassian Danışmanlığı ve Modern Yazılım Çözümleri',
    description: 'Atlassian araçları ve modern yazılım çözümleri konusunda uzman danışmanlık hizmetleri',
    siteName: 'Virtual Riddle',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Riddle - Atlassian Danışmanlığı ve Modern Yazılım Çözümleri',
    description: 'Atlassian araçları ve modern yazılım çözümleri konusunda uzman danışmanlık hizmetleri',
  },
  other: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#004CFF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.className}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17342577259"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17342577259');
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-17342577259/XiU0CJfq-PIaEOv0ys1A',
                    'event_callback': callback
                });
                return false;
              }
            `
          }}
        />
        
        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        
        {/* Preload critical pages to reduce network dependency chain */}
        <link rel="preload" href="/contact" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/free-discovery" as="fetch" crossOrigin="anonymous" />
        
        {/* Critical CSS inline - minimal to avoid design issues */}
        <style>{`
          body { background: #fff; color: #172B4D; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; }
          h1 { font-size: 2.75rem; font-weight: bold; color: #172B4D; }
          .hero-bg { background: linear-gradient(90deg, #004BB3, #0052CC, #004BB3); }
        `}</style>
        {/* rel="me" içeren doğrulama linki */}
        <link rel="me" href="https://sosyal.teknofest.app/@virtualriddle" />
      </head>
      <body className="min-h-screen bg-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
