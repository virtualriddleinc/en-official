"use client";

export default function CareerPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Kariyer</h1>
            <p className="text-xl">
              Geleceğin teknolojilerini bizimle şekillendirin
            </p>
          </div>
        </div>
      </section>

      {/* Kariyer Fırsatları */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Görsel */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/banker-woman.jpg"
                alt="Bankacı Kadın"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* İçerik */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Bizimle Çalışın
              </h2>
              <p className="text-lg text-gray-600">
                Virtual Riddle'da çalışmak, geleceğin teknolojilerini şekillendirmek ve sürekli öğrenmek demektir. Dinamik ekibimizin bir parçası olun, birlikte büyüyelim.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Sürekli Gelişim</h3>
                    <p className="text-gray-600">Eğitim ve gelişim programlarıyla kariyerinizi ileriye taşıyın</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Harika Ekip</h3>
                    <p className="text-gray-600">Yetenekli ve tutkulu profesyonellerle çalışın</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Esnek Çalışma</h3>
                    <p className="text-gray-600">İş-yaşam dengenizi koruyun</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="#acik-pozisyonlar" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Açık Pozisyonlar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz? */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Neden Virtual Riddle?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sürekli Gelişim</h3>
                <p className="text-gray-700">
                  Eğitim bütçesi, konferans katılımları ve sertifika programları ile kendinizi geliştirin.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Harika Ekip</h3>
                <p className="text-gray-700">
                  Alanında uzman, dinamik ve yenilikçi bir ekibin parçası olun.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Esnek Çalışma</h3>
                <p className="text-gray-700">
                  Hibrit çalışma modeli ve esnek çalışma saatleri ile iş-yaşam dengenizi koruyun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Açık Pozisyonlar */}
      <section id="acik-pozisyonlar" className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Açık Pozisyonlar</h2>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior DevOps Mühendisi</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tam Zamanlı</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Hibrit</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">İstanbul</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Başvur
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Stack Geliştirici</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tam Zamanlı</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Hibrit</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">İstanbul</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Başvur
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Cloud Çözüm Mimarı</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tam Zamanlı</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Hibrit</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">İstanbul</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Başvur
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Başvuru Süreci */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Başvuru Süreci</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Başvuru</h3>
                <p className="text-gray-700">
                  İlgilendiğiniz pozisyona online başvurunuzu yapın.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">İlk Görüşme</h3>
                <p className="text-gray-700">
                  İK ekibimiz ile online bir görüşme gerçekleştirin.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teknik Görüşme</h3>
                <p className="text-gray-700">
                  Teknik ekibimiz ile detaylı bir değerlendirme yapın.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teklif</h3>
                <p className="text-gray-700">
                  Olumlu değerlendirme sonrası iş teklifini alın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 