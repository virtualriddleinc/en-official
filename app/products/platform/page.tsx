"use client";

import Image from "next/image";
import Link from "next/link";

export default function PlatformPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-24 min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-indigo-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-indigo-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Atlassian Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tüm Atlassian ürünlerini birleştiren güçlü platform ile ekibinizin verimli çalışması için gereken her şey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all w-full sm:w-auto text-center"
              >
                Platformu Keşfet
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
              >
                Demo İzle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-indigo-600/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-600">Kesintisiz İş Birliği</h3>
              <p className="text-indigo-600/80">Ekipler arası iş birliğini kolaylaştıran entegre ürün ailesi. Tek platform ile tüm bilgilerinize erişin.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-600">İş Akışı Yönetimi</h3>
              <p className="text-indigo-600/80">Projeleri, görevleri ve süreçleri tek yerden yönetin. Departmanlar arası iş akışlarını optimize edin.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-600">Merkezi Bilgi Yönetimi</h3>
              <p className="text-indigo-600/80">Tüm kurumsal bilgilerinizi merkezi bir konumda saklayın ve ekip üyelerinizin kolayca erişmesini sağlayın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Bileşenleri</h2>
            <p className="text-xl text-gray-600">Atlassian Platform'u oluşturan temel ürünler ve onların birlikte çalışma şekli.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 rounded-xl p-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jira Software</h3>
              <p className="text-gray-700">Çevik proje yönetimi ve yazılım geliştirme süreçleri için tasarlanmış güçlü araç.</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Confluence</h3>
              <p className="text-gray-700">Belgeler, fikirler ve planlar oluşturmak ve paylaşmak için işbirliği alanı.</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bitbucket</h3>
              <p className="text-gray-700">Git kod deposu yönetimi ve CI/CD çözümü ile geliştirme süreçlerinizi hızlandırın.</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8h1a4 4 0 010 8h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 1v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jira Service Management</h3>
              <p className="text-gray-700">IT hizmet yönetimi ve diğer departmanlar için hızlı ve etkili hizmet yönetimi çözümü.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Yapay Zeka Destekli Platform</h2>
            <p className="text-xl text-white/80">Atlassian'ın yapay zeka özellikleriyle işlerinizi daha hızlı ve akıllıca yönetin.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Akıllı İçerik Oluşturma</h4>
              <p className="text-white/80">Belgeler, görev açıklamaları ve raporlar için yapay zeka destekli içerik önerileri alın.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">İş Zekası ve Analitik</h4>
              <p className="text-white/80">Gelişmiş veri analitiği ile projelerinizdeki trendleri analiz edin ve daha iyi kararlar alın.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Otomasyon Önerileri</h4>
              <p className="text-white/80">Yapay zeka tekrarlayan görevleri analiz ederek otomatikleştirme fırsatlarını belirler.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Akıllı Arama</h4>
              <p className="text-white/80">Tüm Atlassian ürünleri genelinde doğal dil ile arama yapın ve ilgili içerikleri hızlıca bulun.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-indigo-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-600 mb-4">Ekosistem Entegrasyonları</h2>
            <p className="text-xl text-indigo-600/80">Atlassian Platform'un diğer araçlarla entegrasyonu sayesinde kesintisiz iş akışı.</p>
          </div>

          <div className="relative">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-indigo-600 rounded-full flex items-center justify-center z-10">
              <p className="text-white font-bold text-xl text-center">Atlassian Platform</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 mx-auto bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Microsoft 365</h4>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 mx-auto bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12h-7a3 3 0 00-3 3v7h10v-5m0-5h7a3 3 0 013 3v4m-10-5V4m0 8V4a2 2 0 012-2h5.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Google Workspace</h4>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 mx-auto bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Slack</h4>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 mx-auto bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7L12 2 2 7v10l10 5 10-5V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">AWS</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Atlassian Platform ile işlerinizi dönüştürün</h2>
            <p className="text-xl text-white/80 mb-8">Ekiplerinizin potansiyelini açığa çıkarın ve daha verimli çalışmalarını sağlayın.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-white/90 transition-all w-full sm:w-auto text-center"
              >
                Ücretsiz Deneme
              </Link>
              <Link 
                href="/pricing" 
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
              >
                Fiyatlandırmayı Görüntüle
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 