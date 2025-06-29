"use client";

import { useState } from "react";
import Link from "next/link";

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Kategori ikonları
  const CategoryIcon = ({ name }: { name: string }) => {
    switch (name) {
      case "ana":
        return (
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case "ürünler":
        return (
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case "çözümler":
        return (
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        );
      case "yasal":
        return (
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };
  
  // Alt kategori ikonları
  const SubcategoryIcon = ({ name }: { name: string }) => {
    switch (name) {
      case "işbirliği":
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "kod":
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "servis":
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case "agile":
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      case "diğer":
        return (
          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Sayfa grupları
  const pages = {
    ana: [
      { title: "Ana Sayfa", path: "/" },
      { title: "Hakkımızda", path: "/about" },
      { title: "Hizmetler", path: "/services" },
      { title: "Kariyer", path: "/career" },
      { title: "İletişim", path: "/contact" },
      { title: "Blog", path: "/blog" },
      { title: "Site Haritası", path: "/sitemap" },
    ],
    ürünler: {
      işbirliği: [
        { title: "Jira Software", path: "/products/jira-software" },
        { title: "Confluence", path: "/products/confluence" },
      ],
      kod: [
        { title: "Bitbucket", path: "/products/bitbucket" },
      ],
      servis: [
        { title: "Jira Service Management", path: "/products/jira-service-management" },
        { title: "Opsgenie", path: "/products/opsgenie" },
      ],
      agile: [
        { title: "Trello", path: "/products/trello" },
        { title: "Statuspage", path: "/products/statuspage" },
      ],
      diğer: [
        { title: "Jira Work Management", path: "/products/jira-work-management" },
      ],
    },
    çözümler: [
      { title: "Atlassian Danışmanlığı", path: "/solutions/consulting" },
      { title: "Cloud Migration", path: "/solutions/cloud-migration" },
      { title: "Eğitim & Sertifikasyon", path: "/solutions/training" },
      { title: "Ücretsiz Keşif", path: "/free-discovery" },
    ],
    yasal: [
      { title: "Gizlilik Politikası", path: "/privacy" },
      { title: "Kullanım Koşulları", path: "/terms" },
      { title: "Sıkça Sorulan Sorular", path: "/faq" },
      { title: "Destek", path: "/support" },
    ],
  };

  // Tüm linkleri düzleştir (arama için)
  const allLinks = [
    ...pages.ana,
    ...Object.values(pages.ürünler).flat(),
    ...pages.çözümler,
    ...pages.yasal,
  ];

  // Arama filtreleme fonksiyonu
  const filteredLinks = searchTerm
    ? allLinks.filter(link => 
        link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.path.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Site Haritası</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Virtual Riddle'ın tüm bölümlerine kolayca erişin. Sayfamızdaki tüm bağlantıların kategorik ve düzenli listesi.
            </p>
          </div>
          
          {/* Arama */}
          <div className="mb-12">
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Sayfa ara..."
                className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <svg 
                className="w-6 h-6 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          {/* Arama Sonuçları */}
          {searchTerm && (
            <div className="mb-12 bg-blue-50 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {filteredLinks.length > 0 
                  ? `"${searchTerm}" için arama sonuçları (${filteredLinks.length})` 
                  : `"${searchTerm}" için sonuç bulunamadı`}
              </h2>
              
              {filteredLinks.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                  {filteredLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.path} 
                        className="flex items-center py-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          
          {/* Site Haritası İçeriği */}
          {!searchTerm && (
            <div className="space-y-12">
              {/* Hızlı Erişim */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg mr-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Hızlı Erişim
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {[
                    { title: "Ana Sayfa", path: "/", icon: "home" },
                    { title: "Hakkımızda", path: "/about", icon: "info" },
                    { title: "Kariyer", path: "/career", icon: "career" },
                    { title: "İletişim", path: "/contact", icon: "contact" },
                    { title: "Blog", path: "/blog", icon: "blog" },
                    { title: "Ürünler", path: "/products", icon: "products" },
                  ].map((item, index) => (
                    <Link 
                      key={index}
                      href={item.path}
                      className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <IconForQuickLinks name={item.icon} />
                      <span className="mt-2 text-gray-800 font-medium">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Ana Sayfalar */}
              <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <CategoryIcon name="ana" />
                  <span className="ml-2">Ana Sayfalar</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {pages.ana.map((link, index) => (
                    <Link 
                      key={index} 
                      href={link.path} 
                      className="flex items-center p-3 rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <span className="text-gray-800">{link.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Ürünler */}
              <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <CategoryIcon name="ürünler" />
                  <span className="ml-2">Ürünler</span>
                </h2>
                
                <div className="space-y-8">
                  {Object.entries(pages.ürünler).map(([category, links], idx) => {
                    const categoryLabels: Record<string, string> = {
                      işbirliği: "İş Birliği & Güvenlik",
                      kod: "Kod Yönetimi",
                      servis: "Servis Yönetimi",
                      agile: "Agile & DevOps",
                      diğer: "Diğer Ürünler"
                    };
                    
                    return (
                      <div key={idx} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                        <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                          <SubcategoryIcon name={category} />
                          <span className="ml-2">{categoryLabels[category]}</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 pl-6">
                          {links.map((link, linkIdx) => (
                            <Link 
                              key={linkIdx} 
                              href={link.path} 
                              className="text-blue-600 hover:text-blue-800 hover:underline py-1.5 flex items-center"
                            >
                              <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                              {link.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Çözümler */}
              <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <CategoryIcon name="çözümler" />
                  <span className="ml-2">Çözümler</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pages.çözümler.map((link, index) => (
                    <Link 
                      key={index} 
                      href={link.path} 
                      className="p-4 bg-blue-50 hover:bg-blue-100 transition-colors rounded-xl flex flex-col"
                    >
                      <div className="mb-3 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <SolutionIcon index={index} />
                      </div>
                      <span className="font-medium text-gray-900">{link.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Yasal & Diğer */}
              <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <CategoryIcon name="yasal" />
                  <span className="ml-2">Yasal & Diğer</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
                  {pages.yasal.map((link, index) => (
                    <Link 
                      key={index} 
                      href={link.path} 
                      className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <LegalIcon index={index} />
                      </div>
                      <span className="text-gray-800">{link.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

// Hızlı erişim ikonları
function IconForQuickLinks({ name }: { name: string }) {
  switch (name) {
    case "home":
      return (
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
      );
    case "info":
      return (
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      );
    case "services":
      return (
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      );
    case "career":
      return (
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      );
    case "contact":
      return (
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      );
    case "blog":
      return (
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
      );
    case "products":
      return (
        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      );
    default:
      return null;
  }
}

// Çözüm ikonları
function SolutionIcon({ index }: { index: number }) {
  const icons = [
    <svg key={0} className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    <svg key={1} className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>,
    <svg key={2} className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>,
    <svg key={3} className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>,
  ];
  
  return icons[index] || icons[0];
}

// Yasal ikonlar
function LegalIcon({ index }: { index: number }) {
  const icons = [
    <svg key={0} className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    <svg key={1} className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key={2} className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key={3} className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>,
  ];
  
  return icons[index] || icons[0];
} 