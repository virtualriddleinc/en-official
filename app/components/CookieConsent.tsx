"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already responded to cookie consent
    const cookieConsent = localStorage.getItem("cookie-consent");
    
    // If not, show the consent popup
    if (!cookieConsent) {
      setShowConsent(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem("cookie-consent", "all");
    localStorage.setItem("cookie-analytics", "true");
    localStorage.setItem("cookie-marketing", "true");
    setShowConsent(false);
  };

  const acceptNecessaryCookies = () => {
    localStorage.setItem("cookie-consent", "necessary");
    localStorage.setItem("cookie-analytics", "false");
    localStorage.setItem("cookie-marketing", "false");
    setShowConsent(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", "custom");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center pointer-events-none p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-auto" onClick={() => setShowDetails(false)} />
      
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto">
        <div className="p-6 md:p-8">
          {!showDetails ? (
            // Main Cookie Consent
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Çerez Tercihleri</h2>
                <button 
                  onClick={() => setShowConsent(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                Bu web sitesi, deneyiminizi geliştirmek, içerik ve reklamları kişiselleştirmek ve site trafiğini analiz etmek için çerezleri kullanır. 
                Sitemizi kullanarak çerezlerin kullanımını kabul etmiş olursunuz. Çerez tercihlerinizi dilediğiniz zaman değiştirebilirsiniz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Çerez Ayarları
                </button>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptNecessaryCookies}
                    className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                  >
                    Sadece Zorunlu Çerezler
                  </button>
                  
                  <button
                    onClick={acceptAllCookies}
                    className="px-6 py-3 bg-blue-600 rounded-xl text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    Tümünü Kabul Et
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Detailed Cookie Settings
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Çerez Ayarları</h2>
                <button 
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-6 mb-6">
                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Zorunlu Çerezler</h3>
                    <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      Aktif
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Bu çerezler web sitesinin düzgün çalışması için gereklidir ve sistemimizde devre dışı bırakılamazlar.
                    Genellikle yalnızca sizin tarafınızdan gerçekleştirilen ve gizlilik tercihlerinizi ayarlama, form doldurma gibi 
                    hizmet taleplerine karşılık olarak ayarlanırlar.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Analitik Çerezler</h3>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandığına dair bilgileri toplar. Bu bilgiler, sayfaların ziyaret 
                    sayısı, ziyaretçilerin sitemize nereden geldiği ve sayfaları nasıl dolaştığı gibi anonim bilgileri içerir.
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Pazarlama Çerezleri</h3>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Bu çerezler, ziyaretçilere ilgi alanlarına göre hedeflenmiş reklamlar göstermek için kullanılır. 
                    Bu çerezler, ziyaretçilerin web sitemizi tekrar ziyaret etmesini sağlayan bilgileri de toplar.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Geri
                </button>
                <button
                  onClick={savePreferences}
                  className="px-6 py-3 bg-blue-600 rounded-xl text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  Tercihleri Kaydet
                </button>
              </div>
            </>
          )}
          
          <div className="mt-4 text-sm text-gray-500 flex justify-center">
            <a href="/privacy" className="underline hover:text-blue-600 transition-colors">Gizlilik Politikamız</a>
          </div>
        </div>
      </div>
    </div>
  );
} 