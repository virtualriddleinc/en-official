"use client";

import { useEffect, useRef } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('gpu-accelerated');
            observerRef.current?.unobserve(target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    // Observe all images and heavy elements
    const images = document.querySelectorAll('img[loading="lazy"]');
    const heavyElements = document.querySelectorAll('.contain-layout, .contain-paint');
    
    [...images, ...heavyElements].forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    // Defer non-critical CSS loading
    // NOT: globals.css Next.js tarafından otomatik olarak yüklenir, manuel yükleme gereksiz
    // Font CSS'i de Next.js font optimization tarafından yüklenir
    const loadNonCriticalCSS = () => {
      // Sadece gerçekten gerekli external CSS'leri yükle
      // globals.css ve font CSS'i Next.js tarafından otomatik yüklenir
      const nonCriticalCSS: string[] = [];
      
      // Eğer external CSS yüklenecekse buraya ekle
      // nonCriticalCSS.push('https://example.com/external.css');

      nonCriticalCSS.forEach((href) => {
        // CSS zaten yüklenmiş mi kontrol et
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (existingLink) return;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = 'print';
        link.onload = () => {
          link.media = 'all';
        };
        document.head.appendChild(link);
      });
    };

    // Load non-critical CSS after page load
    if (document.readyState === 'complete') {
      loadNonCriticalCSS();
    } else {
      window.addEventListener('load', loadNonCriticalCSS);
    }

    // Preload critical resources - KALDIRILDI: Gereksiz preload'lar performansı düşürüyor
    // Next.js otomatik olarak kritik kaynakları optimize ediyor
    // Route preload'ları Next.js Link component'i tarafından otomatik yapılıyor

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none'
        }).then((registration) => {
          // Service Worker registered
        }).catch((registrationError) => {
          // Service Worker registration failed
        });
      });
    }

    // Preload critical images - KALDIRILDI: Gereksiz preload'lar performansı düşürüyor
    // Next.js Image component'i otomatik olarak kritik görselleri optimize ediyor
    // Sadece gerçekten above-the-fold kritik görselleri preload etmek gerekir

    // Cleanup
    return () => {
      window.removeEventListener('load', loadNonCriticalCSS);
    };
  }, []);

  return <>{children}</>;
}
