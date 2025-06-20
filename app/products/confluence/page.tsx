"use client";

import Image from "next/image";
import Link from "next/link";

export default function ConfluencePage() {
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
              Ekip bilgisi için tek kaynak
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Confluence ile tüm ekip bilgilerinizi merkezi bir platformda toplayın, düzenleyin ve paylaşın. Yapay zeka destekli bilgi tabanı çözümüyle daha verimli çalışın.
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
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Merkezi Bilgi Tabanı</h3>
              <p className="text-blue-600/80">Tüm ekip bilgilerinizi, projelerinizi ve dökümanlarınızı tek bir yerde toplayın. Bilgilere hızlıca erişin ve paylaşın.</p>
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
              <h3 className="text-2xl font-bold text-blue-600">İş Birliği Alanları</h3>
              <p className="text-blue-600/80">Ekip çalışması için özel alanlar oluşturun. Gerçek zamanlı düzenleme, yorum ve geri bildirim özellikleriyle verimli çalışın.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Kesintisiz Entegrasyonlar</h3>
              <p className="text-blue-600/80">Jira, Bitbucket ve diğer Atlassian ürünleriyle sorunsuz entegre olun. Proje bilgilerinizi ve dokümantasyonlarınızı birbirine bağlayın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Yapay Zeka Destekli Dokümantasyon</h2>
            <p className="text-xl text-white/80">Confluence'ın yapay zeka özellikleri sayesinde içerik oluşturma ve bilgi keşfi süreçlerini hızlandırın.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">İçerik Özeti</h4>
              <p className="text-white/80">Uzun dokümanlarda otomatik özetler oluşturarak ekip üyelerinizin bilgiye hızlıca erişmesini sağlayın.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Akıllı Arama</h4>
              <p className="text-white/80">Yapay zeka destekli arama ile dokümanlarda tam olarak ihtiyacınız olan bilgiyi saniyeler içinde bulun.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">İçerik Asistanı</h4>
              <p className="text-white/80">Yapay zeka asistanı ile dokümantasyon oluşturmayı hızlandırın ve yazım kalitesini artırın.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Bilgi İlişkilendirme</h4>
              <p className="text-white/80">İlgili dokümantasyonları otomatik olarak ilişkilendirin ve bilgi siloları oluşmasını engelleyin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Her Departman İçin Çözümler</h2>
            <p className="text-xl text-blue-600/80">Confluence, organizasyonunuzun her bölümü için bilgi ve iş birliği çözümleri sunar.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Yazılım Geliştirme</h3>
                <p className="text-blue-600/80">Teknik dokümantasyon, mimari kararlar ve geliştirme süreçlerinizi kayıt altına alın. Kod görünümleri ve diyagramlarla zenginleştirin.</p>
                </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">İnsan Kaynakları</h3>
                <p className="text-blue-600/80">Şirket politikaları, onboarding belgeleri ve eğitim materyallerini merkezi bir şekilde yönetin. Çalışan el kitapları oluşturun.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Pazarlama</h3>
                <p className="text-blue-600/80">Pazarlama stratejileri, kampanya planları ve içerik takvimlerinizi yönetin. Ekip üyeleri arasında iş birliğini güçlendirin.</p>
            </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Proje Yönetimi</h3>
                <p className="text-blue-600/80">Proje planları, toplantı notları ve iş öğeleri için merkezi bir depo oluşturun. Jira ile entegre ederek proje izlenebilirliğini artırın.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Confluence'ı ücretsiz deneyin</h2>
            <p className="text-xl text-white/80 mb-8">75.000'den fazla şirket Confluence ile bilgi yönetimini geliştiriyor. Siz de ekibe katılın.</p>
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