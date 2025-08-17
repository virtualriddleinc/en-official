'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Global hata loglama
    console.error('Global uygulama hatası:', error);
  }, [error]);

  return (
    <html lang="tr">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Kritik Hata
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Uygulama başlatılırken bir hata oluştu. Lütfen sayfayı yenileyin.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={reset}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Sayfayı Yenile
              </button>
              
              <a
                href="/"
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Ana Sayfaya Dön
              </a>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Hata Detayları (Geliştirme)
                </summary>
                <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-auto">
                  {error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
