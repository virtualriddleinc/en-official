/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // sadece ANALYZE=true ile çalışır
});

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self';",
      "script-src 'self' https://maps.googleapis.com 'unsafe-inline';",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://virtualriddle.com;",
      "img-src 'self' data: https://virtualriddle.com https://maps.googleapis.com;",
      "font-src 'self' https://fonts.gstatic.com data:;",
      "connect-src 'self' https://rvskttz2jh.execute-api.us-east-1.amazonaws.com;",
      "object-src 'none';",
      "frame-src https://www.google.com https://maps.google.com https://www.google.com/maps/ https://maps.gstatic.com;",
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
    unoptimized: false,
    domains: ['virtualriddle.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'lucide-react', 'react', 'react-dom'],
    optimizeServerReact: true,
    scrollRestoration: true,
    optimizeCss: true,
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
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
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
            reuseExistingChunk: true,
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'lucide',
            chunks: 'all',
            priority: 15,
            reuseExistingChunk: true,
          },
          styles: {
            name: 'styles',
            test: /\.(css|scss)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      };
      
      // Modern JavaScript optimizasyonları
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        stream: false,
        util: false,
        fs: false,
        path: false,
        os: false,
      };
      
      // Tree shaking optimizasyonu
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Bundle analizi için
      config.optimization.minimize = true;
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

module.exports = withBundleAnalyzer(nextConfig) 