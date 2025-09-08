"use client";

import Image from "next/image";
import Link from "next/link";

export default function OpsgeniePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Uyarı ve On-Call Yönetimi
            </h1>
            <p className="text-xl mb-8">
              Opsgenie ile IT operasyonlarınızı optimize edin. Uyarı yönetimi, on-call rotasyonları ve 
              olay müdahale süreçlerinizi otomatikleştirin ve hızlandırın.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="https://www.atlassian.com/software/opsgenie" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
              >
                Ürünü İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Akıllı Uyarı Yönetimi</h3>
              <p className="text-blue-600/80">Gelişmiş uyarı filtreleme ve yönlendirme ile doğru kişiye doğru zamanda bildirim gönderin.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">On-Call Rotasyonları</h3>
              <p className="text-blue-600/80">Otomatik on-call rotasyonları ile ekip yükünü dengeli dağıtın ve 7/24 kapsama sağlayın.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Hızlı Olay Müdahalesi</h3>
              <p className="text-blue-600/80">Olay müdahale süreçlerini hızlandırın, SLA'ları takip edin ve çözüm sürelerini kısaltın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Atlassian Platform Entegrasyonu</h2>
            <p className="text-xl text-white/80">Opsgenie'nin Atlassian ekosistemi ile tam entegrasyonu ile iş akışlarınızı optimize edin.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Jira Service Management</h4>
              <p className="text-white/80">Opsgenie uyarılarını otomatik olarak Jira Service Management olaylarına dönüştürün.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Compass Entegrasyonu</h4>
              <p className="text-white/80">Geliştirici deneyimini artırın ve Opsgenie uyarılarını Compass ile entegre edin.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Otomatik Migrasyon</h4>
              <p className="text-white/80">Mevcut Opsgenie verilerinizi ve konfigürasyonlarınızı otomatik olarak taşıyın.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Kesintisiz İş Sürekliliği</h4>
              <p className="text-white/80">IT operasyonlarınızı kesintisiz yönetin ve kritik sistemlerinizi koruyun.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">IT Operasyonları İçin Kapsamlı Çözüm</h2>
            <p className="text-xl text-blue-600/80">Opsgenie ile farklı IT operasyon ihtiyaçlarına özel çözümler sunun.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">DevOps Ekipleri</h3>
                <p className="text-blue-600/80">CI/CD pipeline'larından gelen uyarıları yönetin, deployment süreçlerini izleyin ve hızlı müdahale sağlayın.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Site Reliability Engineering</h3>
                <p className="text-blue-600/80">Sistem sağlığını izleyin, performans metriklerini takip edin ve proaktif sorun çözümü sağlayın.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">IT Service Management</h3>
                <p className="text-blue-600/80">ITSM süreçlerinizi optimize edin, SLA'ları takip edin ve müşteri deneyimini iyileştirin.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Kurumsal Güvenlik</h3>
                <p className="text-blue-600/80">Güvenlik olaylarını hızlıca tespit edin, güvenlik ekiplerinizi uyarın ve müdahale süreçlerini yönetin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Notice */}
      <section className="py-24 bg-yellow-50 border-t border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-100 rounded-2xl p-8 border border-yellow-300">
              <h2 className="text-3xl font-bold text-yellow-800 mb-4">
                Opsgenie Migrasyonu
              </h2>
              <p className="text-lg text-yellow-700 mb-6">
                Opsgenie'nin uyarı ve on-call özellikleri artık Jira Service Management ve Compass'ta mevcuttur. 
                5 Nisan 2027'ye kadar mevcut Opsgenie verilerinizi ve konfigürasyonlarınızı otomatik migrasyon aracımızla taşıyabilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/free-discovery" 
                  className="px-8 py-4 bg-yellow-600 text-white rounded-xl font-semibold hover:bg-yellow-700 transition-all w-full sm:w-auto text-center"
                >
                  Migrasyon Planı Alın
                </Link>
                <Link 
                  href="https://www.atlassian.com/software/opsgenie" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-yellow-600 rounded-xl font-semibold hover:bg-yellow-50 transition-all w-full sm:w-auto text-center border border-yellow-300"
                >
                  Detayları Öğrenin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Opsgenie'yi keşfedin</h2>
            <p className="text-xl text-white/80 mb-8">IT operasyonlarınızı optimize edin ve kesintisiz hizmet sağlayın.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/free-discovery" 
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-white/90 transition-all w-full sm:w-auto text-center"
              >
                Ücretsiz Başlayın
              </Link>
              <Link 
                href="/solutions/consulting" 
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
              >
                Teklif İste
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 