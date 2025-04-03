"use client";

import Link from "next/link";

export default function AtlasPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 min-h-[500px] flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Atlas
            </h1>
            <p className="text-xl text-gray mb-8">
              Proje ve kaynakların görünürlüğü için yeni nesil platform
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="px-6 py-3 bg-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                Ücretsiz Dene
              </Link>
              <Link
                href="#"
                className="px-6 py-3 bg-white text-blue font-medium rounded-lg border border-blue hover:bg-blue-50 transition-colors"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Proje Görünürlüğü</h3>
              <p className="text-gray">
                Tüm projelerinizi ve kaynaklarınızı tek bir yerden görüntüleyin.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Performans Analizi</h3>
              <p className="text-gray">
                Proje performansını ve ekip verimliliğini ölçün ve analiz edin.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">Hızlı Aksiyon</h3>
              <p className="text-gray">
                Sorunları hızlıca tespit edin ve çözüm için aksiyon alın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Güçlü Dashboard'lar
            </h2>
            <p className="text-gray">
              Özelleştirilebilir dashboard'lar ile verilerinizi görselleştirin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dashboard Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-dark mb-4">Proje Metrikleri</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Sprint performansı
                </li>
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Görev tamamlama oranları
                </li>
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Zaman takibi
                </li>
              </ul>
            </div>

            {/* Dashboard Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-dark mb-4">Ekip Analitiği</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Kaynak kullanımı
                </li>
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  İş yükü dağılımı
                </li>
                <li className="flex items-center text-gray">
                  <svg className="w-5 h-5 text-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Verimlilik göstergeleri
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Atlassian Ürünleriyle Entegrasyon
            </h2>
            <p className="text-gray">
              Atlas'ı diğer Atlassian ürünleriyle birlikte kullanarak verimliliğinizi artırın
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Integration 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-dark">Jira Entegrasyonu</h3>
              </div>
              <p className="text-gray text-sm">Jira projeleri ve görevleriyle otomatik senkronizasyon.</p>
            </div>

            {/* Integration 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-dark">Confluence Entegrasyonu</h3>
              </div>
              <p className="text-gray text-sm">Proje dokümantasyonu ve bilgi yönetimi entegrasyonu.</p>
            </div>

            {/* Integration 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-dark">Bitbucket Entegrasyonu</h3>
              </div>
              <p className="text-gray text-sm">Kod değişiklikleri ve deployment süreçleri takibi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Atlas ile Tanışın
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Projelerinizi ve kaynaklarınızı daha iyi yönetin.
            </p>
            <Link
              href="#"
              className="inline-block px-8 py-4 bg-white text-blue font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Hemen Başlayın
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 