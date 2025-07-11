"use client";

import Image from "next/image";
import Link from "next/link";

export default function JiraWorkManagementPage() {
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
              Tüm iş akışlarınız için tek platform
            </h1>
            <p className="text-xl mb-8">
              Jira Work Management ile pazarlama, İK, finans ve diğer tüm iş ekipleriniz için güçlü ve özelleştirilebilir iş yönetim çözümü. İş birimleriniz arasındaki koordinasyonu artırın.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="https://www.atlassian.com/software/jira" 
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
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Zamandan Tasarruf</h3>
              <p className="text-blue-600/80">Hazır şablonlar ve otomasyon ile iş akışlarınızı hızlandırın. Manuel görevleri otomatikleştirerek zamandan tasarruf edin.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Departmanlar Arası İş Birliği</h3>
              <p className="text-blue-600/80">Pazarlama, İK, finans ve BT ekipleri arasında kesintisiz iş birliği sağlayın. Tüm departmanlar tek platformda çalışsın.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 3H3v18h18V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 9h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Esnek Görünümler</h3>
              <p className="text-blue-600/80">Liste, takvim, zaman çizelgesi, kanban ve daha fazlası. Her ekibin kendi tercihine göre özelleştirilebilen görünümler sunun.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Yapay Zeka ile İş Akışı Optimizasyonu</h2>
            <p className="text-xl text-white/80">Jira Work Management'in yapay zeka özellikleriyle iş süreçlerinizi analiz edin ve optimize edin.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Akıllı Önceliklendirme</h3>
              <p className="text-white/80">Yapay zeka iş önceliklerinizi analiz ederek en kritik görevleri belirlemenize yardımcı olur.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">İş Akışı Önerileri</h3>
              <p className="text-white/80">Mevcut iş akışlarınızı analiz eden AI, verimliliği artırmak için iyileştirme önerileri sunar.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Otomatik Görev Oluşturma</h3>
              <p className="text-white/80">Yapay zeka, ekip ihtiyaçlarını anlayarak gerekli görevleri otomatik olarak oluşturur ve atar.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Performans Tahminleri</h3>
              <p className="text-white/80">Geçmiş verilere dayalı performans tahminleri ile proje tamamlanma sürelerini daha doğru hesaplayın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Her Departman İçin Uygun Çözümler</h2>
            <p className="text-xl text-blue-600/80">Jira Work Management ile farklı iş birimlerinin ihtiyaçlarına özel çözümler sunun.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Pazarlama Ekipleri</h3>
                <p className="text-blue-600/80">Kampanya planlaması, içerik takvimi ve lansman etkinliklerini tek bir platformda yönetin. Dijital varlıkları organize edin.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">İnsan Kaynakları</h3>
                <p className="text-blue-600/80">İşe alım süreçlerini, çalışan onboarding, performans değerlendirmeleri ve izin takibini basitleştirin.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Finans</h3>
                <p className="text-blue-600/80">Bütçe planlama, fatura yönetimi ve finansal raporlama süreçlerini standartlaştırın ve takip edin.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Operasyon Ekipleri</h3>
                <p className="text-blue-600/80">Proje planlama, kaynak tahsisi ve süreç iyileştirme çalışmalarınızı optimize edin ve takip edin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Jira Work Management'ı ücretsiz deneyin</h2>
            <p className="text-xl text-white/80 mb-8">50.000'den fazla şirket Jira Work Management ile iş süreçlerini yönetiyor. Siz de ekibe katılın.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/free-discovery" 
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-white/90 transition-all w-full sm:w-auto text-center"
              >
                Ücretsiz Başlayın
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