"use client";

import Image from "next/image";
import Link from "next/link";

export default function TrelloPage() {
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
              Organize edin, görselleştirin, başarın
            </h1>
            <p className="text-xl mb-8">
              Trello ile ekiplerinizin iş akışlarını görselleştirin, projeleri organize edin ve verimliliği artırın. 
              Kanban board'ları ile iş süreçlerinizi şeffaf ve etkili hale getirin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="https://trello.com/" 
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
                  <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Görsel Kanban Board'ları</h3>
              <p className="text-blue-600/80">Projelerinizi görsel board'larda organize edin. Sürükle-bırak ile kolayca yönetin ve ilerlemeyi takip edin.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Otomasyon ve Power-Ups</h3>
              <p className="text-blue-600/80">Butler otomasyonu ile tekrarlayan görevleri otomatikleştirin. Power-Ups ile favori araçlarınızı entegre edin.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Ekip İş Birliği</h3>
              <p className="text-blue-600/80">Gerçek zamanlı iş birliği ile ekip üyelerinizle birlikte çalışın. Yorumlar, etiketler ve dosya paylaşımı.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Atlassian Intelligence ile Güçlendirilmiş</h2>
            <p className="text-xl text-white/80">Trello'nun AI özellikleri ile iş akışlarınızı optimize edin ve verimliliği artırın.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Email Magic</h4>
              <p className="text-white/80">E-postalarınızı Trello'ya yönlendirin, AI otomatik olarak organize edilmiş görevlere dönüştürsün.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Message App Entegrasyonu</h4>
              <p className="text-white/80">Slack ve Microsoft Teams mesajlarını doğrudan Trello board'larınıza kaydedin.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Akıllı Özetler</h4>
              <p className="text-white/80">AI ile oluşturulan özetler ve bağlantılar ile bilgilere hızlıca erişin.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Otomatik Organizasyon</h4>
              <p className="text-white/80">Gelen bilgileri otomatik olarak kategorize edin ve uygun board'lara yerleştirin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Her Ekip İçin Uygun Çözümler</h2>
            <p className="text-xl text-blue-600/80">Trello ile farklı ekiplerin ihtiyaçlarına özel çözümler sunun.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Pazarlama Ekipleri</h3>
                <p className="text-blue-600/80">Yeni ürün lansmanları, kampanyalar ve içerik oluşturma süreçlerini organize edin. Kampanya takvimlerini görselleştirin.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Ürün Yönetimi</h3>
                <p className="text-blue-600/80">Karmaşık projeleri basitleştirin, roadmap özelliklerini kullanın ve süreçleri yönetin.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Mühendislik Ekipleri</h3>
                <p className="text-blue-600/80">Daha fazla kod üretin, hızlı çalışın ve geliştiricilerinize daha fazla esneklik sağlayın.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Uzak Ekipler</h3>
                <p className="text-blue-600/80">Dünyanın her yerindeki uzak ekiplerinizi bağlı ve motive tutun. Gerçek zamanlı iş birliği sağlayın.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Trello'yu ücretsiz deneyin</h2>
            <p className="text-xl text-white/80 mb-8">Milyonlarca kullanıcı Trello ile daha fazla iş yapıyor. Siz de ekibe katılın.</p>
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