"use client";

import { useState, useEffect } from "react";

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const cookieConsent = localStorage.getItem("cookie-consent");
        if (!cookieConsent) {
          setShowConsent(true);
        }
      } else {
        setShowConsent(true);
      }
    } catch (error) {
      console.error('Cookie consent error:', error);
      setShowConsent(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveCookiePreference = (consent: string, analytics: string, marketing: string) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem("cookie-consent", consent);
        localStorage.setItem("cookie-analytics", analytics);
        localStorage.setItem("cookie-marketing", marketing);
        setCookie("cookie-consent", consent);
        setCookie("cookie-analytics", analytics);
        setCookie("cookie-marketing", marketing);
        console.log('Cookie preferences saved:', { consent, analytics, marketing });
      }
    } catch (error) {
      console.error('Error saving cookie preferences:', error);
    }
    setShowConsent(false);
  };

  const acceptAllCookies = () => {
    saveCookiePreference("all", "true", "true");
  };

  const acceptNecessaryCookies = () => {
    saveCookiePreference("necessary", "false", "false");
  };

  const savePreferences = () => {
    saveCookiePreference(
      "custom", 
      analyticsEnabled ? "true" : "false", 
      marketingEnabled ? "true" : "false"
    );
  };

  if (isLoading) return null;
  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {!showDetails ? (
          // Main Cookie Consent - Sticky Bottom
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.9965 12H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9955 12H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.99451 12H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Çerez Tercihleri</h2>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                Bu web sitesi, deneyiminizi geliştirmek, içerik ve reklamları kişiselleştirmek ve site trafiğini analiz etmek için çerezleri kullanır. 
                Sitemizi kullanarak çerezlerin kullanımını kabul etmiş olursunuz. Çerez tercihlerinizi dilediğiniz zaman değiştirebilirsiniz.
              </p>
              
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <a href="/privacy" className="underline hover:text-blue-600 transition-colors">Gizlilik Politikamız</a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowDetails(true)}
                className="px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Çerez Ayarları
              </button>
              
              <button
                onClick={acceptNecessaryCookies}
                className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors text-sm"
              >
                Sadece Zorunlu
              </button>
              
              <button
                onClick={acceptAllCookies}
                className="px-6 py-3 bg-blue-600 rounded-xl text-white font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                Tümünü Kabul Et
              </button>
            </div>
          </div>
        ) : (
          // Detailed Cookie Settings - Expanded View
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.9965 12H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9955 12H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.99451 12H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Çerez Ayarları</h2>
              </div>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-100"
                aria-label="Çerez ayarlarını kapat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-900">Zorunlu Çerezler</h3>
                  <div className="w-10 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    Aktif
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bu çerezler web sitesinin düzgün çalışması için gereklidir ve sistemimizde devre dışı bırakılamazlar.
                  Genellikle yalnızca sizin tarafınızdan gerçekleştirilen ve gizlilik tercihlerinizi ayarlama, form doldurma gibi 
                  hizmet taleplerine karşılık olarak ayarlanırlar.
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-900">Analitik Çerezler</h3>
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    />
                    <div className={`relative w-10 h-5 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer transition-colors ${
                      analyticsEnabled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}>
                      <div className={`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-4 w-4 transition-all ${
                        analyticsEnabled ? 'translate-x-5' : 'translate-x-0'
                      }`}></div>
                    </div>
                  </label>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandığına dair bilgileri toplar. Bu bilgiler, sayfaların ziyaret 
                  sayısı, ziyaretçilerin sitemize nereden geldiği ve sayfaları nasıl dolaştığı gibi anonim bilgileri içerir.
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-900">Pazarlama Çerezleri</h3>
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={marketingEnabled}
                      onChange={(e) => setMarketingEnabled(e.target.checked)}
                    />
                    <div className={`relative w-10 h-5 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer transition-colors ${
                      marketingEnabled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}>
                      <div className={`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-4 w-4 transition-all ${
                        marketingEnabled ? 'translate-x-5' : 'translate-x-0'
                      }`}></div>
                    </div>
                  </label>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bu çerezler, ziyaretçilere ilgi alanlarına göre hedeflenmiş reklamlar göstermek için kullanılır. 
                  Bu çerezler, ziyaretçilerin web sitemizi tekrar ziyaret etmesini sağlayan bilgileri de toplar.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <a href="/privacy" className="underline hover:text-blue-600 transition-colors">Gizlilik Politikamız</a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
                >
                  Geri
                </button>
                <button
                  onClick={savePreferences}
                  className="px-6 py-3 bg-blue-600 rounded-xl text-white font-medium hover:bg-blue-700 transition-colors text-sm"
                >
                  Tercihleri Kaydet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 