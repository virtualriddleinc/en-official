"use client";

import Image from "next/image";
import Link from "next/link";

export default function JiraServiceManagementPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-24 min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              ITSM'nin Geleceği Burada
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Jira Service Management ile IT ekiplerinizin hızını artırın, sorunu yönetin ve üstün müşteri deneyimi sunun.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Ücretsiz Dene
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
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Müşteri Hizmetleri Mükemmelliği</h3>
              <p className="text-blue-600/80">Müşterileriniz için kullanımı kolay self-servis portalları, bilgi tabanları ve otomasyon ile hizmet kalitesini artırın.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Gelişmiş Olay Yönetimi</h3>
              <p className="text-blue-600/80">Major olayları hızla tespit edin ve çözün. Olayları otomatik sınıflandırma ve önceliklendirme ile etkin yönetin.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Gerçek Zamanlı Raporlama</h3>
              <p className="text-blue-600/80">Hizmet seviyesi anlaşmaları (SLA), performans metrikleri ve ekip verimliliği için gerçek zamanlı raporlar ve gösterge panelleri.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Yapay Zeka Destekli Hizmet Yönetimi</h2>
            <p className="text-xl text-white/80">Jira Service Management'ın yapay zeka özellikleriyle talep çözüm sürelerini kısaltın ve ekip verimliliğini artırın.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Akıllı Bilet Sınıflandırma</h4>
              <p className="text-white/80">Yapay zeka, talepleri otomatik olarak analiz eder ve doğru departmana yönlendirir.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Çözüm Önerileri</h4>
              <p className="text-white/80">Benzer biletlerin çözümlerine dayanarak, yapay zeka hızlı çözüm yolları önerir.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Önleyici Analitik</h4>
              <p className="text-white/80">Potansiyel sorunları önceden tespit ederek IT ekiplerinin proaktif önlem almasını sağlar.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Sanal Asistanlar</h4>
              <p className="text-white/80">Chatbot'lar ile kullanıcılara 7/24 hizmet vererek tekrarlayan talepleri otomatik çözüme ulaştırın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Çeşitli Kullanım Senaryoları</h2>
            <p className="text-xl text-blue-600/80">Jira Service Management ile farklı ekip ve departmanlarınızın tüm hizmet yönetimi ihtiyaçlarını karşılayın.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">IT Service Desk</h3>
                <p className="text-blue-600/80">IT yardım masası ekipleriniz için talep yönetimi, sorun çözümü ve asset management. ITIL uyumlu süreçler ve otomasyon.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Müşteri Hizmetleri</h3>
                <p className="text-blue-600/80">Müşteri taleplerinizi tek bir platformda yönetin. Kişiselleştirilmiş yanıtlar ve otomatik bildirimlerle müşteri memnuniyetini artırın.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">HR Hizmet Yönetimi</h3>
                <p className="text-blue-600/80">İşe alım süreçleri, onboarding talepleri ve çalışan sorularını verimli bir şekilde yönetin ve izleyin.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">DevOps</h3>
                <p className="text-blue-600/80">Geliştirme ve operasyon ekipleri arasında kesintisiz iş birliği. Değişiklik yönetimi ve otomatik deployment süreçleri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Geniş Entegrasyon Ağı</h2>
            <p className="text-xl text-gray-600">Jira Service Management'ı mevcut IT altyapınızla sorunsuz bir şekilde entegre edin.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {/* Integration Logos */}
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">Slack</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">Microsoft Teams</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">Confluence</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">ServiceNow</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">Zendesk</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">+200 Entegrasyon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Jira Service Management'ı ücretsiz deneyin</h2>
            <p className="text-xl text-white/80 mb-8">35.000'den fazla şirket IT hizmet yönetimi süreçlerinde Jira Service Management'a güveniyor.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
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