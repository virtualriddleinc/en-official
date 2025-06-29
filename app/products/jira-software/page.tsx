"use client";

import Link from "next/link";
import { CommandLineIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/outline';
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

export default function JiraSoftwarePage() {
  const features = [
    {
      Icon: CommandLineIcon,
      title: "Çevik Planlama",
      description: "Scrum, Kanban veya kendi özel iş akışınızla projelerinizi planlayın ve takip edin."
    },
    {
      Icon: UsersIcon,
      title: "Takım İş Birliği",
      description: "Ekip üyeleri arasında sorunsuz iletişim ve iş birliği sağlayın."
    },
    {
      Icon: ChartBarIcon,
      title: "Gelişmiş Raporlama",
      description: "Gerçek zamanlı metrikler ve özelleştirilebilir raporlarla projenizi analiz edin."
    }
  ];

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
              Yazılım geliştirmenin geleceği burada
              </h1>
            <p className="text-xl text-gray-300 mb-8">
              Yapay zeka destekli planlama ve yönetim araçlarıyla projelerinizi zamanında ve bütçe dahilinde tamamlayın. Modern ekipler için tasarlanmış #1 çevik proje yönetim aracı.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
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
              <h3 className="text-2xl font-bold text-blue-600">Çevik Planlama</h3>
              <p className="text-blue-600/80">Scrum, Kanban veya kendi özel iş akışınızla projelerinizi planlayın ve takip edin. Her adımda görselleştirin ve optimize edin.</p>
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
              <h3 className="text-2xl font-bold text-blue-600">Takım İş Birliği</h3>
              <p className="text-blue-600/80">Ekip üyeleri arasında sorunsuz iletişim ve iş birliği sağlayın. Gerçek zamanlı güncellemeler ve bildirimlerle her zaman güncel kalın.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Gelişmiş Raporlama</h3>
              <p className="text-blue-600/80">Gerçek zamanlı metrikler ve özelleştirilebilir raporlarla projenizi analiz edin. Trendleri izleyin ve performansı sürekli iyileştirin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Yapay Zeka Destekli Proje Yönetimi</h2>
            <p className="text-xl text-white/80">Jira Software'in yapay zeka özellikleri ile görevleri daha hızlı tamamlayın, süreçleri otomatikleştirin ve ekip performansını artırın.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Akıllı Görev Tahminleri</h4>
              <p className="text-white/80">Yapay zeka, geçmiş verilere dayanarak daha doğru zaman tahminleri yapmanıza yardımcı olur.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Otomatik Görev Atama</h4>
              <p className="text-white/80">Ekip üyelerinin becerileri ve iş yüküne göre görevleri otomatik olarak en uygun kişilere atayın.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Kalite Öngörüleri</h4>
              <p className="text-white/80">Olası sorunları erkenden tespit edin ve proaktif önlemler alarak proje kalitesini artırın.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Trend Analizi</h4>
              <p className="text-white/80">Proje verilerinizi analiz ederek gelecek sprint performansı hakkında değerli öngörüler elde edin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Kesintisiz Entegrasyonlar</h2>
            <p className="text-xl text-blue-600/80">En sevdiğiniz geliştirme araçlarıyla sorunsuz entegre çalışan Jira Software ile iş akışınızı optimize edin.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Kod Depoları ile Doğrudan Bağlantı</h3>
                <p className="text-blue-600/80">GitHub, Bitbucket ve GitLab gibi kod depolarıyla doğrudan entegrasyon sayesinde kodunuzu ve görevlerinizi tek bir yerden yönetin.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">CI/CD Pipeline Entegrasyonu</h3>
                <p className="text-blue-600/80">Jenkins, CircleCI ve Travis CI gibi sürekli entegrasyon araçlarıyla bağlantı kurarak yazılım geliştirme sürecinizi otomatikleştirin.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Eksiksiz Atlassian Ekosistemi</h3>
                <p className="text-blue-600/80">Confluence, Bitbucket ve diğer Atlassian ürünleriyle birlikte çalışarak tam bir geliştirme ortamı oluşturun.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">API ve Webhook Desteği</h3>
                <p className="text-blue-600/80">Güçlü API ve webhook desteği sayesinde özel entegrasyonlar oluşturun ve Jira'yı tam olarak ihtiyaçlarınıza göre özelleştirin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Jira Software'i ücretsiz deneyin</h2>
            <p className="text-xl text-white/80 mb-8">100.000'den fazla şirket Jira Software ile projelerini yönetiyor. Siz de ekibe katılın.</p>
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