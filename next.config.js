/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // sadece ANALYZE=true ile çalışır
});

// CSP header'ı artık middleware.ts'de dinamik olarak nonce ile oluşturuluyor
// Not: CSP, Strict-Transport-Security, Cross-Origin-Opener-Policy ve X-Frame-Options
// middleware.ts'de dinamik olarak set ediliyor

const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'virtualriddle.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'lucide-react', 'react', 'react-dom'],
    optimizeServerReact: true,
    scrollRestoration: true,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
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
  }
  // Headers artık middleware.ts'de set ediliyor
  // async headers() {
  //   return [];
  // },
}

module.exports = withBundleAnalyzer(nextConfig) 