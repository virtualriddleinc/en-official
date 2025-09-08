"use client";

import Image from "next/image";
import Link from "next/link";

export default function StatuspagePage() {
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
              Her olayda güven oluşturun
            </h1>
            <p className="text-xl mb-8">
              Statuspage ile kullanıcılarınıza gerçek zamanlı durum bilgisi verin. 
              DigitalOcean ve Dropbox gibi şirketlerin kullandığı profesyonel durum sayfası çözümü.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="https://www.atlassian.com/software/statuspage" 
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
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Gerçek Zamanlı Durum Bildirimi</h3>
              <p className="text-blue-600/80">Kullanıcılarınıza servis durumunuz hakkında şeffaf ve güncel bilgi verin. Güven oluşturun ve destek taleplerini azaltın.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Olay Yönetimi</h3>
              <p className="text-blue-600/80">'Araştırılıyor'dan 'Çözüldü'ye kadar kullanıcıları bilgilendirin. Önceden yazılmış şablonlar ile hızlı iletişim.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Güvenilirlik Gösterimi</h3>
              <p className="text-blue-600/80">Uptime Showcase ile geçmiş performansınızı sergileyin. Mevcut ve potansiyel müşterilerinize güvenilirliğinizi kanıtlayın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Benefits */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Her Ekip İçin Faydalar</h2>
            <p className="text-xl text-white/80">Statuspage ile farklı ekiplerin ihtiyaçlarına özel çözümler sunun.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Destek & IT Ekipleri</h4>
              <p className="text-white/80">Olay sırasında destek taleplerini azaltın. Aboneleri doğrudan yönetin ve tutarlı mesajlar gönderin.</p>
            </div>

            {/* Team 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">DevOps & IT Ekipleri</h4>
              <p className="text-white/80">Servisinizin her bileşeninin durumunu gösterin. 150+ üçüncü taraf bileşen entegrasyonu.</p>
            </div>

            {/* Team 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Olay Müdahale Ekipleri</h4>
              <p className="text-white/80">Olay iletişimini kolaylaştırın. Favori araçlarınızla entegrasyon ile hızlı yanıt verin.</p>
            </div>

            {/* Team 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Pazarlama & Satış Ekipleri</h4>
              <p className="text-white/80">Sayfanızı satış ve pazarlama aracına dönüştürün. Geçmiş uptime verilerini sergileyin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Favori Araçlarınızla Entegrasyon</h2>
            <p className="text-xl text-blue-600/80">Statuspage, olay yönetimi sürecinizin iletişim parçasıdır.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">İzleme & Uyarı Araçları</h3>
                <p className="text-blue-600/80">Nagios, Zabbix, Datadog, New Relic ve diğer izleme araçlarınızla entegre edin. Otomatik durum güncellemeleri alın.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Sohbet & Yardım Masası</h3>
                <p className="text-blue-600/80">Slack, Microsoft Teams, Jira Service Management ile entegrasyon. Her seferinde verimli yanıt için.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Üçüncü Taraf Bileşenler</h3>
                <p className="text-blue-600/80">Stripe, Mailgun, Shopify, PagerDuty gibi kritik araçlarınızın durumunu gösterin.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Otomatik Bildirimler</h3>
                <p className="text-blue-600/80">E-posta, SMS, webhook ve Slack bildirimleri ile kullanıcılarınızı otomatik olarak bilgilendirin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Binlerce şirket tarafından güvenilir</h2>
            <p className="text-lg text-gray-600 mb-12">DigitalOcean, Dropbox, Reddit ve daha fazlası Statuspage kullanıyor</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              <div className="text-2xl font-bold text-gray-400">DigitalOcean</div>
              <div className="text-2xl font-bold text-gray-400">Dropbox</div>
              <div className="text-2xl font-bold text-gray-400">Reddit</div>
              <div className="text-2xl font-bold text-gray-400">Twilio</div>
              <div className="text-2xl font-bold text-gray-400">Coinbase</div>
              <div className="text-2xl font-bold text-gray-400">Shopify</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Statuspage'i ücretsiz deneyin</h2>
            <p className="text-xl text-white/80 mb-8">Kullanıcılarınızla güven oluşturun ve destek taleplerini azaltın.</p>
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