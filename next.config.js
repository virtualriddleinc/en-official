/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self';",
      "script-src 'self' https://maps.googleapis.com https://www.googletagmanager.com 'unsafe-inline';",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
      "img-src 'self' data: https://virtualriddle.com https://maps.googleapis.com;",
      "font-src 'self' https://fonts.gstatic.com data:;",
      "connect-src 'self' https://rvskttz2jh.execute-api.us-east-1.amazonaws.com;",
      "object-src 'none';",
      "frame-ancestors 'none';",
      "base-uri 'self';",
      "form-action 'self';",
      "report-uri /api/csp-violation;"
    ].join(' ')
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  }
];

const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['virtualriddle.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  productionBrowserSourceMaps: false, // Production'da source map dosyalarını istemciye sunma
  webpack: (config, { dev, isServer }) => {
    // Source map üretimini etkinleştir
    if (dev) {
      config.devtool = 'source-map';
    }
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
}

module.exports = nextConfig 