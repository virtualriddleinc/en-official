"use client";

import Link from "next/link";
import { Suspense } from "react";

export default function ITSupportPage() {
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
            <h1 className="text-5xl font-bold text-white mb-6">IT Destek Çözümleri</h1>
            <p className="text-xl mb-8">Yapay zeka destekli servis yönetimi ile IT ekibinizin verimliliğini artırın</p>
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
                Demo Talep Et
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Özellikler Grid */}
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
              <h3 className="text-2xl font-bold text-blue-600">Hızlı Kurulum</h3>
              <p className="text-blue-600/80">Hazır şablonlar ve kolay entegrasyon seçenekleri ile IT destek masanızı dakikalar içinde kurun.</p>
            </div>
            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-600">Merkezi Yönetim</h3>
              <p className="text-green-600/80">Tüm IT destek taleplerini tek bir platformdan yönetin ve takip edin.</p>
            </div>
            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-600">Yapay Zeka Desteği</h3>
              <p className="text-purple-600/80">AI destekli otomasyon ile rutin görevleri otomatikleştirin ve yanıt sürelerini kısaltın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Destekli IT Destek */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Yapay Zeka ile Akıllı IT Destek</h2>
            <p className="text-xl text-white/80">AI tabanlı otomasyon ve öngörülerle IT destek süreçlerinizi hızlandırın ve verimliliği artırın.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Akıllı Talep Yönlendirme</h4>
              <p className="text-white/80">AI, talepleri otomatik olarak en uygun destek personeline yönlendirir.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Otomatik Yanıtlar</h4>
              <p className="text-white/80">Sık sorulan sorulara anında otomatik yanıtlar vererek zaman kazanın.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Proaktif Sorun Tespiti</h4>
              <p className="text-white/80">Olası sorunları erkenden tespit edin ve önleyici aksiyonlar alın.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Performans Analizi</h4>
              <p className="text-white/80">Destek süreçlerinizin performansını analiz edin ve iyileştirin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entegrasyonlar */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Kesintisiz Entegrasyonlar</h2>
            <p className="text-xl text-blue-600/80">IT destek süreçlerinizi en sevdiğiniz araçlarla entegre ederek daha verimli hale getirin.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Servis Masası Entegrasyonu</h3>
                <p className="text-blue-600/80">Jira Service Management, Zendesk gibi servis masası araçlarıyla tam entegrasyon sağlayın.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Bildirim ve Otomasyon</h3>
                <p className="text-blue-600/80">Slack, Teams gibi iletişim araçlarıyla anlık bildirimler ve otomasyonlar kurun.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Varlık Yönetimi</h3>
                <p className="text-blue-600/80">CMDB ve varlık yönetimi sistemleriyle entegre çalışarak tüm altyapınızı yönetin.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">API ve Webhook Desteği</h3>
                <p className="text-blue-600/80">Güçlü API ve webhook desteğiyle özel entegrasyonlar oluşturun.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">IT Destek Süreçlerinizi Dönüştürün</h2>
            <p className="text-xl text-gray-600 mb-12">Modern ve verimli bir IT destek yönetimi için hemen başlayın</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-discovery" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto text-center">Ücretsiz Deneyin</Link>
              <Link href="/contact" className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto text-center">Demo Talep Et</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 