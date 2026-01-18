import { NextRequest, NextResponse } from 'next/server';

// Edge Runtime için Web Crypto API kullanarak nonce oluştur
function generateNonce(): string {
  // Web Crypto API kullanarak 16 byte random değer oluştur
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  
  // Base64 encoding (Edge Runtime uyumlu - manuel implementasyon)
  const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let result = '';
  let i = 0;
  
  while (i < array.length) {
    const a = array[i++];
    const b = i < array.length ? array[i++] : 0;
    const c = i < array.length ? array[i++] : 0;
    
    const bitmap = (a << 16) | (b << 8) | c;
    
    result += base64Chars.charAt((bitmap >> 18) & 63);
    result += base64Chars.charAt((bitmap >> 12) & 63);
    result += i - 2 < array.length ? base64Chars.charAt((bitmap >> 6) & 63) : '=';
    result += i - 1 < array.length ? base64Chars.charAt(bitmap & 63) : '=';
  }
  
  return result;
}

export function middleware(request: NextRequest) {
  // Her istek için benzersiz nonce oluştur (Edge Runtime uyumlu)
  const nonce = generateNonce();
  
  // Response oluştur
  const response = NextResponse.next();
  
  // Nonce'u request header'a ekle (layout.tsx'te headers() ile okunabilir)
  // Bu sayede server-side render ve client-side hydration aynı nonce'u kullanır
  request.headers.set('x-nonce', nonce);
  
  // Nonce'u response header'a da ekle (aynı request için)
  response.headers.set('x-nonce', nonce);
  
  // Nonce'u cookie'ye de kaydet (fallback için)
  response.cookies.set('x-nonce', nonce, {
    httpOnly: false, // Client-side'da da okunabilir olmalı (hydration için)
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60, // 60 saniye (nonce'lar kısa ömürlü olmalı)
  });
  
  // CSP header'ını oluştur (nonce ile)
  const cspHeader = [
    "default-src 'self';",
    // Nonce kullanarak inline script'lere izin ver
    // unsafe-eval: Google Tag Manager ve Google Ads bazı durumlarda eval kullanıyor (güvenlik riski var ama Google servisleri için gerekli)
    `script-src 'self' 'nonce-${nonce}' 'unsafe-eval' https://maps.googleapis.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.googleadservices.com https://*.googleadservices.com https://www.google.com https://*.google.com https://*.google.com.tr https://pagead2.googlesyndication.com https://*.googlesyndication.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://googletagmanager.com https://tagmanager.google.com;`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://virtualriddle.com https://googletagmanager.com https://tagmanager.google.com;",
    // style-src-elem ekle (CSS @import için gerekli - Next.js font yükleme için)
    "style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com;",
    // Google Tag Manager, Google Analytics, Google Ads için img-src
    // *.google.com.tr: Türkiye için Google Ads conversion tracking
    "img-src 'self' data: https://virtualriddle.com https://maps.googleapis.com https://www.googletagmanager.com https://*.googletagmanager.com https://*.google-analytics.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.google.com https://*.google.com https://*.google.com.tr https://www.google.com.tr https://pagead2.googlesyndication.com https://www.googleadservices.com https://google.com https://stats.g.doubleclick.net https://ssl.gstatic.com https://www.gstatic.com;",
    "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com data:;",
    // Google Tag Manager, Google Analytics, Google Ads için connect-src
    // Google Analytics 4 için: https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com
    // Google Ads için: https://www.google.com https://google.com https://www.googleadservices.com https://googleads.g.doubleclick.net
    // Not: CSP path bazlı kontrol yapmaz, sadece domain bazlı. 
    // www.google.com/ccm/collect ve www.google-analytics.com/g/collect endpoint'leri domain'ler kapsanıyor.
    // Production'da "Fetch failed loading" mesajları CSP hatası değil, network/CORS veya consent mode nedeniyle oluşabilir.
    `connect-src 'self' https://rvskttz2jh.execute-api.us-east-1.amazonaws.com https://www.googletagmanager.com https://*.googletagmanager.com https://google-analytics.com https://*.google-analytics.com https://www.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://stats.g.doubleclick.net https://*.doubleclick.net https://pagead2.googlesyndication.com https://*.googlesyndication.com https://www.googleadservices.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://google.com https://*.google.com https://google.com.tr https://*.google.com.tr https://www.google.com.tr;`,
    // Next.js plugin sistemi için object-src'yi data: ile güncelle
    "object-src 'self' data:;",
    // Google Tag Manager Preview Mode ve Google Maps için frame-src
    "frame-src https://www.google.com https://maps.google.com https://www.google.com/maps/ https://maps.gstatic.com https://www.googletagmanager.com;",
    "frame-ancestors 'none';",
    "base-uri 'self';",
    "form-action 'self';",
    "report-uri /api/csp-violation;"
  ].join(' ');
  
  // CSP header'ını response'a ekle
  response.headers.set('Content-Security-Policy', cspHeader);
  
  // Diğer güvenlik header'larını da ekle
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Frame-Options', 'DENY');
  
  return response;
}

// Middleware'in çalışacağı route'ları belirle
export const config = {
  matcher: [
    /*
     * Tüm request path'lerini eşleştir, ancak şunları hariç tut:
     * - api/csp-violation (CSP violation endpoint'i - CSP header'ına ihtiyaç duymaz)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml gibi dosyalar
     */
    {
      source: '/((?!api/csp-violation|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    },
  ],
};
