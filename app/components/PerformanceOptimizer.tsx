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
    // Preload critical resources
    const preloadLinks = [
      { href: '/contact', as: 'fetch' },
      { href: '/free-discovery', as: 'fetch' },
      { href: '/about', as: 'fetch' },
      { href: '/manifest.json', as: 'manifest' },
    ];

    preloadLinks.forEach(({ href, as }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as as any;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none'
        }).then((registration) => {
          console.log('SW registered: ', registration);
        }).catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }

    // Preload critical images
    const criticalImages = [
      '/vr-showcase/solutions-1.svg',
      '/vr-showcase/solutions-2.png',
      '/vr-showcase/solutions-3.png',
      '/logo.svg',
      '/logo-footer.svg'
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      if (src.endsWith('.svg')) {
        link.type = 'image/svg+xml';
      }
      document.head.appendChild(link);
    });

    // Preload critical CSS
    const criticalCSS = [
      '/app/globals.css',
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    criticalCSS.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = 'style';
      link.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });
  }, []);

  return <>{children}</>;
} 