import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
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
  manifest: '/manifest.json',
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
        
        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts with optimized loading */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" /></noscript>
        
        {/* Load non-critical CSS asynchronously */}
        <link rel="preload" href="/app/globals.css" as="style" />
        <noscript><link rel="stylesheet" href="/app/globals.css" /></noscript>
        
        {/* Preload critical resources to reduce network dependency chain */}
        <link rel="preload" href="/contact" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/free-discovery" as="fetch" crossOrigin="anonymous" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/vr-showcase/solutions-1.svg" as="image" type="image/svg+xml" />
        
        {/* Preload critical CSS */}
        <link rel="preload" href="/app/globals.css" as="style" />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLvoW5hJNmnEiuXDsMlGDkNCcPbmJQ31fygqt0.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Critical CSS inline - Above the fold styles */}
        <style>{`
          /* Critical above-the-fold styles */
          * { box-sizing: border-box; }
          html { scroll-behavior: smooth; font-display: swap; }
          body { 
            background: #fff; 
            color: #172B4D; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
          }
          
          /* Hero section critical styles */
          .hero-section { 
            background: linear-gradient(90deg, #004BB3, #0052CC, #004BB3);
            min-height: 100vh;
            position: relative;
            overflow: hidden;
          }
          
          /* Critical typography */
          h1 { 
            font-size: 2.75rem; 
            font-weight: bold; 
            color: #172B4D; 
            margin: 0;
            line-height: 1.1;
          }
          
          h2 { 
            font-size: 2rem; 
            font-weight: 600; 
            color: #172B4D; 
            margin: 0;
            line-height: 1.25;
          }
          
          /* Critical layout */
          .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 0 1rem; 
          }
          
          /* Critical button styles */
          .btn-primary {
            background: #0052CC;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            display: inline-block;
            font-weight: 600;
            transition: background-color 0.2s;
          }
          
          .btn-primary:hover {
            background: #004BB3;
          }
          
          /* Loading states */
          .loading-skeleton { 
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); 
            background-size: 200% 100%; 
            animation: loading 1.5s infinite; 
          }
          
          @keyframes loading { 
            0% { background-position: 200% 0; } 
            100% { background-position: -200% 0; } 
          }
          
          /* Critical responsive */
          @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            .container { padding: 0 0.5rem; }
          }
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
