"use client";

import Image from "next/image";
import Link from "next/link";

export default function BitbucketPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-24 min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Kod ve CI/CD, Atlassian platformunun gücüyle
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Yapay zeka destekli, CI/CD entegrasyonlu ve sınıfının en iyisi Jira entegrasyonu ile planlama aşamasından üretime ve sonrasına kadar yazılım geliştirme sürecinizi yükseltin.
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
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Araç zincirinizi basitleştirin</h3>
              <p className="text-blue-600/80">Tüm yazılım geliştirme yaşam döngüsünü kapsayan yeteneklerle kodunuzu ve CI/CD'nizi tek bir platformda toplayın.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Hızı artırın</h3>
              <p className="text-blue-600/80">Yapay zeka ve otomasyon ile sıkıcı görevleri ortadan kaldırın. Geliştirici iş akışlarını tek bir platformda merkezileştirerek dikkat dağıtıcı unsurları azaltın.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">İş birliğini güçlendirin</h3>
              <p className="text-blue-600/80">Jira, Confluence ve Atlassian platformu aracılığıyla kod ve CI/CD güncellemelerini yazılım, BT operasyonları ve iş ekipleri arasında kolayca paylaşın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Kod üretmenin ötesinde yapay zeka</h2>
            <p className="text-xl text-white/80">Atlassian, geliştirici deneyimini iyileştirmek ve hızı artırmak için yapay zekayı tüm yazılım yaşam döngüsüne entegre eder.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Yapay Zeka PR Açıklamaları</h4>
              <p className="text-white/80">Kod değişikliklerine ve commit mesajlarına dayalı olarak otomatik pull request özetleri oluşturun.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Üretken AI Düzenleme</h4>
              <p className="text-white/80">Yazma netliğini artırmak için geliştiricilerin yorumlar ve PR özetleri yazmasına yardımcı olun.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Atlassian Rovo</h4>
              <p className="text-white/80">SaaS uygulamalarında bilgi bulun, proje bağlamını daha hızlı öğrenin ve hem kod içinde hem de dışında üretkenliği artırın.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">AI Entegrasyonları</h4>
              <p className="text-white/80">Bitbucket depolarınızdan bağlam içeren kod önerileri almak için tercih ettiğiniz AI aracını kullanın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Ölçeklenebilir güvenlik ve uyumluluk</h2>
            <p className="text-xl text-blue-600/80">Kurumsal düzeyde güvenlik kontrolleri ve uyumluluk özellikleriyle kodunuzu koruyun.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Kodunuz için organizasyon çapında kalite kontrolü</h3>
                <p className="text-blue-600/80">Organizasyonunuza özgü standart veya özel birleştirme kontrolleriyle dahili kod kalitesi politikalarını ve uyumluluk gereksinimlerini uygulayın.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Tüm iş akışınıza güvenliği entegre edin</h3>
                <p className="text-blue-600/80">Geliştirme, kod incelemesi sırasında veya CI/CD pipeline'ınızın bir parçası olarak güvenlik açıklarını sürekli olarak izleyin ve düzeltin.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Platform düzeyinde CI/CD orkestrasyon</h3>
                <p className="text-blue-600/80">Ekiplerin en iyi uygulamalara uymasını ve uyumlu olmasını sağlamak için CI/CD iş akışlarını platform düzeyinde ayarlayın ve uygulayın.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Ayrıntılı erişim ve kullanım izinleri</h3>
                <p className="text-blue-600/80">İzinleri çalışma alanı, proje veya repo düzeyinde kontrol edin veya belirli dal düzeyi veya ortam düzeyi izinlerini tanımlayın.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Bitbucket'ı ücretsiz deneyin</h2>
            <p className="text-xl text-white/80 mb-8">15 milyondan fazla geliştirici Bitbucket'ı tercih ediyor. Siz de ekibe katılın.</p>
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