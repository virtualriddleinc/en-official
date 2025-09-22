"use client";

import Link from "next/link";
import { Terminal, Users, BarChart3, Search, MessageCircle, Cpu } from 'lucide-react';
import Image from 'next/image';
import { Suspense } from 'react';

// Özellik kartı komponenti
const FeatureCard = ({ 
  Icon, 
  title, 
  description 
}: { 
  Icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-white transition-colors">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue" />
    </div>
    <h3 className="text-xl font-semibold text-dark mb-2">{title}</h3>
    <p className="text-gray">{description}</p>
  </div>
);

// Entegrasyon kartı komponenti
const IntegrationCard = ({ index }: { index: number }) => (
  <div key={index} className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 hover:border-white transition-colors">
    <div className="w-full h-8 sm:h-12 bg-gray-100 rounded animate-pulse"></div>
  </div>
);

export default function RovoPage() {
  const features = [
    {
      Icon: Search,
      title: "AI Destekli Arama",
      description: "Takımınızın bilgilerini süper şarj eden, kişiselleştirilmiş AI destekli arama deneyimi."
    },
    {
      Icon: MessageCircle,
      title: "Akıllı Sohbet",
      description: "İş bağlamında özelleştirilmiş içgörüler ve yanıtlarla öğrenmeyi artıran Rovo Chat."
    },
    {
      Icon: Cpu,
      title: "AI Ajanları",
      description: "Herhangi bir görev için hazır, Atlassian cloud platformuna yerleşik özelleşmiş becerilere sahip ajanlar."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI takım arkadaşlarıyla takım çalışmasını dönüştürün
            </h1>
            <p className="text-xl mb-8">
              AI destekli arama, sohbet, stüdyo ve ajanlar – takımınızın bilgileriyle desteklenen. Teamwork Graph ile güçlendirilmiş doğru, kişiselleştirilmiş AI içgörüleri ile her gün 1 milyondan fazla kullanıcı Atlassian uygulamalarında AI'nın gücünden yararlanıyor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="https://www.atlassian.com/software/rovo" 
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
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">AI Destekli Arama</h3>
              <p className="text-blue-600/80">Rovo Search, bağlantılı ve kişiselleştirilmiş hale getirilmiştir, böylece bağlı tüm uygulamalarınızda anında tam olarak önemli olan şeyi bulabilirsiniz. Takımınızın bilgilerine dayalı olarak size özel arama sonuçları alın.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Akıllı Sohbet</h3>
              <p className="text-blue-600/80">Rovo Chat, özelleştirilmiş içgörüler ve yanıtlarla öğrenmeyi artırır, işinizin bağlamında tam olarak ihtiyacınız olan bilgiyi sunar. Gerçek zamanlı öğrenme ve keşif ile takımınızın bilgi birikimini maksimize edin.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">AI Ajanları</h3>
              <p className="text-blue-600/80">Rovo Ajanları çalışmaya hazır, Atlassian cloud platformuna yerleşik ve her takımın sadece daha hızlı değil, daha akıllı çalışmasına yardımcı olan özelleşmiş beceriler içerir. Herhangi bir görev için hazır AI ajanları.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Teamwork Graph ile Güçlendirilmiş AI</h2>
            <p className="text-xl text-white/80">Rovo, Teamwork Graph'i kullanarak takımlar, iş, hedefler ve bilgiler arasında doğru, kişiselleştirilmiş AI içgörüleri sunar. Organizasyonunuzun bilgilerini süper şarj eden AI deneyimi.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Kişiselleştirilmiş Arama</h4>
              <p className="text-white/80">Takımınızın bilgilerine dayalı olarak size özel arama sonuçları alın. Bağlı tüm uygulamalarınızda anında önemli bilgileri bulun.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Akıllı Ajanlar</h4>
              <p className="text-white/80">Herhangi bir görev için hazır, özelleşmiş becerilere sahip AI ajanları. Kod yazmadan otomasyon ve uygulamalar oluşturun.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Gerçek Zamanlı İçgörüler</h4>
              <p className="text-white/80">İşinizin bağlamında anında bilgi ve öneriler alın. Takım çalışmasını optimize eden akıllı öneriler.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Rovo Studio</h4>
              <p className="text-white/80">Kod yazmadan AI ajanları, otomasyon ve uygulamalar oluşturun. En iyi fikirlerinizi hayata geçirin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Favori SaaS Uygulamalarınızı Bağlayın</h2>
            <p className="text-xl text-blue-600/80">Tüm bağlı uygulamalarınızda tek bir yerden keşfedin, öğrenin ve gerçek zamanlı olarak hareket edin. Kesintisiz entegrasyonlar ile iş akışınızı optimize edin.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Atlassian Ekosistemi</h3>
                <p className="text-blue-600/80">Jira, Confluence, Bitbucket ve diğer Atlassian ürünleriyle tam entegrasyon sağlayarak eksiksiz bir çalışma ortamı oluşturun. Teamwork Graph ile güçlendirilmiş deneyim.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Üçüncü Taraf Entegrasyonlar</h3>
                <p className="text-blue-600/80">Slack, Teams, GitHub ve diğer popüler araçlarla sorunsuz entegrasyon kurun. Tüm favori SaaS uygulamalarınızı tek bir yerden yönetin.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Güvenli ve Özel</h3>
                <p className="text-blue-600/80">Verilerinizi güvenli tutan ve izinlerinize saygı duyan güvenilir platformumuz üzerine inşa edilmiştir. Privacy by design yaklaşımı ile veri güvenliği.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">API ve Webhook Desteği</h3>
                <p className="text-blue-600/80">Güçlü API ve webhook desteğiyle özel entegrasyonlar oluşturun ve Rovo'yu tam olarak ihtiyaçlarınıza göre özelleştirin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Rovo'yu ücretsiz deneyin</h2>
            <p className="text-xl text-white/80 mb-8">1 milyondan fazla kullanıcı Atlassian uygulamalarında AI'nın gücünden yararlanıyor. Siz de ekibe katılın ve takım çalışmanızı dönüştürün.</p>
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