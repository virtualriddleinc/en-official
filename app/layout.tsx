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
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        
        {/* Critical CSS inline for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            *{box-sizing:border-box;margin:0;padding:0}
            html{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:1.5;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
            body{background-color:#fff;color:#172B4D;font-size:0.875rem;line-height:1.4285}
            .container{max-width:1200px;margin:0 auto;padding:0 1rem}
            .text-center{text-align:center}
            .font-bold{font-weight:700}
            .text-white{color:#fff}
            .bg-blue-600{background-color:#2563eb}
            .min-h-screen{min-height:100vh}
            .relative{position:relative}
            .absolute{position:absolute}
            .inset-0{top:0;right:0;bottom:0;left:0}
            .flex{display:flex}
            .items-center{align-items:center}
            .justify-center{justify-content:center}
            .grid{display:grid}
            .hidden{display:none}
            .overflow-hidden{overflow:hidden}
            .rounded-lg{border-radius:0.5rem}
            .shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}
            .transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
            .hover\\:shadow-xl:hover{box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)}
            .mb-4{margin-bottom:1rem}
            .mb-6{margin-bottom:1.5rem}
            .mb-8{margin-bottom:2rem}
            .mb-12{margin-bottom:3rem}
            .text-4xl{font-size:2.25rem;line-height:2.5rem}
            .text-5xl{font-size:3rem;line-height:1}
            .text-lg{font-size:1.125rem;line-height:1.75rem}
            .text-xl{font-size:1.25rem;line-height:1.75rem}
            .max-w-2xl{max-width:42rem}
            .max-w-3xl{max-width:48rem}
            .mx-auto{margin-left:auto;margin-right:auto}
            .px-4{padding-left:1rem;padding-right:1rem}
            .py-20{padding-top:5rem;padding-bottom:5rem}
            .w-full{width:100%}
            .h-48{height:12rem}
            .object-contain{object-fit:contain}
            .p-4{padding:1rem}
            .p-6{padding:1.5rem}
            .bg-white{background-color:#fff}
            .text-\\[\\#253858\\]{color:#253858}
            .text-\\[\\#42526E\\]{color:#42526E}
            .text-\\[\\#0052CC\\]{color:#0052CC}
            .font-semibold{font-weight:600}
            .font-medium{font-weight:500}
            .hover\\:underline:hover{text-decoration:underline}
            .inline-flex{display:inline-flex}
            .items-center{align-items:center}
            .gap-8{gap:2rem}
            .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}
            .lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}
            .rounded-xl{border-radius:0.75rem}
            .overflow-hidden{overflow:hidden}
            .shadow-sm{box-shadow:0 1px 2px 0 rgba(0,0,0,0.05)}
            .hover\\:shadow-lg:hover{box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}
            .w-5\\/6{width:83.333333%}
            .lg\\:w-full{width:100%}
            .h-64{height:16rem}
            .animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}
            @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
            .bg-gray-200{background-color:#e5e7eb}
            @media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:w-full{width:100%}}
          `
        }} />
        
        {/* Load non-critical CSS asynchronously */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        <link rel="preload" href="/app/globals.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
          <link rel="stylesheet" href="/app/globals.css" />
        </noscript>
        
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
