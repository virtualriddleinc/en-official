import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'
import ThemeToggle from './components/ThemeToggle'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Virtual Riddle',
  description: 'Atlassian Çözüm Ortağınız',
  keywords: 'Jira Software, Confluence, Atlassian, proje yönetimi, yazılım geliştirme, takım iş birliği',
  authors: [{ name: 'Virtual Riddle Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://virtualriddle.com',
    title: 'Virtual Riddle - Modern Yazılım Çözümleri',
    description: 'Yazılım geliştirme süreçlerinizi modernleştirin. Jira Software, Confluence ve daha fazlası ile ekip çalışmasını güçlendirin.',
    siteName: 'Virtual Riddle',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Riddle - Modern Yazılım Çözümleri',
    description: 'Yazılım geliştirme süreçlerinizi modernleştirin. Jira Software, Confluence ve daha fazlası ile ekip çalışmasını güçlendirin.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.className}>
      <body className="min-h-screen bg-white">
        <ThemeToggle />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
