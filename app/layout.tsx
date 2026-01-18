import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'
import { headers, cookies } from 'next/headers'

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
    default: 'Virtual Riddle - Atlassian Consulting and Modern Software Solutions'
  },
  description: 'Expert consulting services for Atlassian tools and modern software solutions',
  keywords: [
    'Atlassian', 'Jira', 'Confluence', 'software consulting', 'Turkey',
    'Claude AI', 'MCP integration', 'artificial intelligence', 'AI assistant',
    'Atlassian consulting', 'Jira consulting', 'Confluence consulting',
    'DevOps', 'Agile', 'project management', 'enterprise solutions',
    'Remote MCP Server', 'Anthropic Claude', 'AI workflows'
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
    locale: 'en_US',
    url: 'https://virtualriddle.com',
    title: 'Virtual Riddle - Atlassian Consulting and Modern Software Solutions',
    description: 'Expert consulting services for Atlassian tools and modern software solutions',
    siteName: 'Virtual Riddle',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Riddle - Atlassian Consulting and Modern Software Solutions',
    description: 'Expert consulting services for Atlassian tools and modern software solutions',
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Middleware'den nonce'u request header'dan al (öncelikli)
  // Eğer header'da yoksa cookie'den al (fallback)
  // Bu sayede server-side render ve client-side hydration aynı nonce'u kullanır
  const headersList = await headers();
  const cookieStore = await cookies();
  const nonce = headersList.get('x-nonce') || cookieStore.get('x-nonce')?.value || '';
  
  return (
    <html lang="en" className={inter.className} data-scroll-behavior="smooth">
      <head>
        {/* Google Ads Consent Manager - suppressHydrationWarning ile hydration mismatch'i önle */}
        {nonce && (
          <>
            <script
              id="google-ads-consent-manager"
              nonce={nonce}
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: `
                  (function () {
                    if (typeof window === 'undefined') return;
                    const dataLayer = window.dataLayer = window.dataLayer || [];
                    function gtag(){ dataLayer.push(arguments); }
                    window.gtag = window.gtag || gtag;
                    
                    // Prefer beacon transport to avoid no-cors fetch opaque errors
                    window.gtag('set', 'transport_type', 'beacon');

                    const applyConsent = (analyticsAllowed, marketingAllowed) => {
                      gtag('consent', 'update', {
                        analytics_storage: analyticsAllowed ? 'granted' : 'denied',
                        ad_storage: marketingAllowed ? 'granted' : 'denied',
                        ad_user_data: marketingAllowed ? 'granted' : 'denied',
                        ad_personalization: marketingAllowed ? 'granted' : 'denied'
                      });
                    };

                    const readStoredConsent = () => {
                      try {
                        const consent = localStorage.getItem('cookie-consent');
                        const analytics = localStorage.getItem('cookie-analytics');
                        const marketing = localStorage.getItem('cookie-marketing');

                        const analyticsAllowed = consent === 'all' || (consent === 'custom' && analytics === 'true');
                        const marketingAllowed = consent === 'all' || (consent === 'custom' && marketing === 'true');

                        return { analyticsAllowed, marketingAllowed };
                      } catch (error) {
                        return { analyticsAllowed: false, marketingAllowed: false };
                      }
                    };

                    gtag('consent', 'default', {
                      analytics_storage: 'denied',
                      ad_storage: 'denied',
                      ad_user_data: 'denied',
                      ad_personalization: 'denied',
                      wait_for_update: 500
                    });
                    gtag('set', 'ads_data_redaction', true);

                    const storedConsent = readStoredConsent();
                    if (storedConsent.analyticsAllowed || storedConsent.marketingAllowed) {
                      applyConsent(storedConsent.analyticsAllowed, storedConsent.marketingAllowed);
                    }

                    window.addEventListener('cookie-consent-updated', function (event) {
                      const detail = event.detail || {};
                      applyConsent(!!detail.analytics, !!detail.marketing);
                    });
                  })();
                `,
              }}
            />
            <script
              id="gtm-base"
              nonce={nonce}
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;var n=d.querySelector('[nonce]');
                  n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PTXL5HBN');
                `,
              }}
            />
            <script
              id="google-ads-script"
              nonce={nonce}
              suppressHydrationWarning
              src="https://www.googletagmanager.com/gtag/js?id=AW-17724325290"
              async
            />
            <script
              id="google-ads-config"
              nonce={nonce}
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: `
                  gtag('js', new Date());
                  gtag('config', 'AW-17724325290');
                `,
              }}
            />
          </>
        )}
        
        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Fonts are loaded by Next.js font optimization */}
        
        {/* CSS is automatically loaded by Next.js */}
        
        {/* Preload critical resources - KALDIRILDI: Gereksiz preload'lar performansı düşürüyor */}
        {/* Next.js otomatik olarak kritik kaynakları optimize ediyor */}
        
        {/* Critical CSS inline - Above the fold styles */}
        <style>{`
          /* Critical above-the-fold styles - Optimized for LCP */
          * { 
            box-sizing: border-box; 
          }
          
          html { 
            scroll-behavior: smooth; 
            font-display: swap; 
          }
          
          body { 
            background: #fff; 
            color: #172B4D; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            text-rendering: optimizeSpeed;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Critical header styles */
          header {
            position: fixed;
            width: 100%;
            background: #fff;
            z-index: 50;
            border-bottom: 1px solid #f3f4f6;
          }
          
          nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          
          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 5rem;
          }
          
          /* Critical logo styles */
          .logo {
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          
          .logo img {
            width: auto;
            height: 3rem;
          }
          
          /* Critical hero section styles */
          .hero-section { 
            background: linear-gradient(90deg, #004BB3, #0052CC, #004BB3);
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .hero-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            text-align: center;
            position: relative;
            z-index: 2;
          }
          
          /* Critical typography */
          h1 { 
            font-size: 2.75rem; 
            font-weight: bold; 
            color: white; 
            margin: 0 0 1.5rem 0;
            line-height: 1.1;
            letter-spacing: -0.025em;
          }
          
          h2 { 
            font-size: 2rem; 
            font-weight: 600; 
            color: #172B4D; 
            margin: 0;
            line-height: 1.25;
            letter-spacing: -0.02em;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2rem;
            line-height: 1.5;
          }
          
          /* Critical button styles */
          .btn-primary {
            background: white;
            color: #004BB3;
            padding: 0.875rem 2rem;
            border-radius: 0.5rem;
            text-decoration: none;
            display: inline-block;
            font-weight: 600;
            transition: background-color 0.2s;
            margin: 0.5rem;
          }
          
          .btn-primary:hover {
            background: #f8fafc;
            color: #003d99;
          }
          
          .btn-secondary {
            background: transparent;
            color: white;
            padding: 0.875rem 2rem;
            border: 2px solid white;
            border-radius: 0.5rem;
            text-decoration: none;
            display: inline-block;
            font-weight: 600;
            transition: all 0.2s;
            margin: 0.5rem;
          }
          
          .btn-secondary:hover {
            background: white;
            color: #004BB3;
          }
          
          /* Critical layout utilities */
          .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 0 1rem; 
          }
          
          .text-center {
            text-align: center;
          }
          
          .flex {
            display: flex;
          }
          
          .items-center {
            align-items: center;
          }
          
          .justify-center {
            justify-content: center;
          }
          
          .space-x-4 > * + * {
            margin-left: 1rem;
          }
          
          /* Critical responsive */
          @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            .hero-subtitle { font-size: 1.125rem; }
            .container { padding: 0 0.5rem; }
            .btn-primary, .btn-secondary {
              display: block;
              width: 100%;
              margin: 0.5rem 0;
            }
          }
          
          /* Critical loading states */
          .loading-skeleton { 
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); 
            background-size: 200% 100%; 
            animation: loading 1.5s infinite; 
          }
          
          @keyframes loading { 
            0% { background-position: 200% 0; } 
            100% { background-position: -200% 0; } 
          }
          
          /* Critical image optimization */
          img {
            max-width: 100%;
            height: auto;
            loading: lazy;
          }
          
          /* Critical performance optimizations */
          .gpu-accelerated {
            will-change: transform;
            transform: translateZ(0);
            backface-visibility: hidden;
          }
        `}</style>
        {/* rel="me" içeren doğrulama linki */}
        <link rel="me" href="https://sosyal.teknofest.app/@virtualriddle" />
        
        {/* CSS will be loaded automatically by Next.js */}
      </head>
      <body className="min-h-screen bg-white">
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTXL5HBN" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
