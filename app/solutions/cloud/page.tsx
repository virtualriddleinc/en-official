export default function CloudPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Cloud Çözümleri</h1>
            <p className="text-xl">
              Modern cloud teknolojileri ile işletmenizi geleceğe taşıyın
            </p>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Cloud Migration</h2>
                <p className="text-gray-700">
                  Mevcut sistemlerinizi güvenli ve kesintisiz bir şekilde cloud ortamına taşıyın.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Cloud Native</h2>
                <p className="text-gray-700">
                  Modern mikroservis mimarileri ile ölçeklenebilir uygulamalar geliştirin.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Cloud Security</h2>
                <p className="text-gray-700">
                  En iyi güvenlik pratikleri ile cloud altyapınızı koruyun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platformları */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Desteklenen Cloud Platformları</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-24 h-24 bg-[#FF9900] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">AWS</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Amazon Web Services</h3>
                <p className="text-gray-700">
                  EC2, S3, RDS, Lambda ve diğer AWS servisleri ile ölçeklenebilir çözümler.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-24 h-24 bg-[#00A4EF] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">Azure</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Microsoft Azure</h3>
                <p className="text-gray-700">
                  Azure VM, App Service, SQL Database ve Azure Functions ile enterprise çözümler.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-24 h-24 bg-[#4285F4] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">GCP</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Google Cloud Platform</h3>
                <p className="text-gray-700">
                  Compute Engine, Cloud Storage, BigQuery ve Cloud Run ile yenilikçi çözümler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Özellikler */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Cloud Hizmetlerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Strateji Danışmanlığı</h3>
                  <p className="text-gray-700">
                    İşletmeniz için en uygun cloud stratejisini belirleyin ve dönüşüm yol haritanızı oluşturun.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Güvenlik ve Uyumluluk</h3>
                  <p className="text-gray-700">
                    Cloud altyapınızı güvenlik standartlarına uygun şekilde yapılandırın ve yönetin.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Optimizasyonu</h3>
                  <p className="text-gray-700">
                    Maliyet optimizasyonu ve performans iyileştirmeleri ile cloud yatırımınızdan maksimum fayda sağlayın.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Managed Cloud Services</h3>
                  <p className="text-gray-700">
                    7/24 izleme ve yönetim hizmetleri ile cloud altyapınızı profesyonel ekibimize emanet edin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Cloud Yolculuğunuza Başlayın</h2>
            <p className="text-xl text-gray-600 mb-12">
              İşletmenizi cloud'a taşımak için ilk adımı atın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Ücretsiz Keşif Görüşmesi
              </button>
              <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Vaka Çalışmalarımız
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 