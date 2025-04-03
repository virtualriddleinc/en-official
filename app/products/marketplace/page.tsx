"use client";

import Image from "next/image";
import Link from "next/link";

export default function MarketplacePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-24 min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-green-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-green-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Atlassian Araçlarınızı Güçlendirin
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Atlassian Marketplace ile iş akışlarınızı özelleştirin ve uygulamalarınızı genişletin. 5,000+ eklenti ve uygulama ile ihtiyaçlarınıza uygun çözümler bulun.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all w-full sm:w-auto text-center"
              >
                Uygulamaları Keşfet
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
              >
                Geliştirici Portalı
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-green-600/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-600">Güvenilir Uygulamalar</h3>
              <p className="text-green-600/80">Atlassian tarafından denetlenen ve onaylanan, güvenli ve yüksek kaliteli uygulamalar ile çalışın.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-600">İş Akışı Otomasyonu</h3>
              <p className="text-green-600/80">Tekrarlayan görevleri otomatikleştirerek zaman kazanın. İhtiyacınıza uygun uzantılarla süreçlerinizi optimize edin.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-600">Entegre Ekosistem</h3>
              <p className="text-green-600/80">Tüm Atlassian ürünleriyle kusursuz çalışan uygulamalar ile kesintisiz veri akışı ve kolay geçişler yapın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popüler Uygulama Kategorileri</h2>
            <p className="text-xl text-gray-600">Her ihtiyaca uygun binlerce uygulama ve eklenti keşfedin.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Category 1 */}
            <div className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 10h-4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 10l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.5 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 22h16a2 2 0 002-2V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Otomasyonlar</h4>
              <p className="text-sm text-gray-600 mt-1">450+ uygulama</p>
            </div>

            {/* Category 2 */}
            <div className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Zaman Takibi</h4>
              <p className="text-sm text-gray-600 mt-1">200+ uygulama</p>
            </div>

            {/* Category 3 */}
            <div className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8h1a4 4 0 010 8h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Raporlama</h4>
              <p className="text-sm text-gray-600 mt-1">350+ uygulama</p>
            </div>

            {/* Category 4 */}
            <div className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Git Entegrasyonları</h4>
              <p className="text-sm text-gray-600 mt-1">180+ uygulama</p>
            </div>

            {/* Category 5 */}
            <div className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">İş Birliği</h4>
              <p className="text-sm text-gray-600 mt-1">280+ uygulama</p>
            </div>

            {/* Category 6 */}
            <div className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg mx-auto flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15c1.667-2 3.333-3 5-3 2.05 0 3 1.445 3 3 0 3-5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15c-1.667-2-3.333-3-5-3-2.05 0-3 1.445-3 3 0 3 5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">UI Geliştirme</h4>
              <p className="text-sm text-gray-600 mt-1">150+ uygulama</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-24 bg-green-600/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-green-600">Kendi Uygulamanızı Geliştirin</h2>
              <p className="text-xl text-green-600/80">Atlassian Marketplace'de bir geliştirici olun ve uygulamalarınızı milyonlarca kullanıcıya ulaştırın.</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                  </div>
                  <p className="text-green-600/80">Kapsamlı API ve SDK dokümantasyonu ile hızlı geliştirme</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                  </div>
                  <p className="text-green-600/80">Atlassian ekibi tarafından destek ve yönlendirme</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    </svg>
                  </div>
                  <p className="text-green-600/80">Global bir pazarda uygulamalarınızı monetize edin</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Link href="/contact" className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all inline-block">
                  Geliştirici Olarak Başlayın
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">Geliştirici Kaynakları</h3>
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700 font-medium">Atlassian Developer Community</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22V12h6v10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700 font-medium">API Dokümantasyonu</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700 font-medium">Başlangıç Şablonları</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="6" y="4" width="4" height="16" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="14" y="4" width="4" height="16" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-700 font-medium">Video Eğitimler</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">İş akışınızı özelleştirmeye başlayın</h2>
            <p className="text-xl text-white/80 mb-8">5,000+ Atlassian eklentisi ile ekibinizin verimliliğini artırın.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-white/90 transition-all w-full sm:w-auto text-center"
              >
                Uygulamaları Keşfedin
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 