export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Hakkımızda</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Atlassian ürünleriyle işletmenizin dijital dönüşümüne değer katan, güvenilir teknoloji ortağınız
            </p>
          </div>
        </div>
      </section>

      {/* Hikayemiz */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="relative w-full">
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-3xl z-0"></div>
                  <img 
                    src="/images/founder.jpg" 
                    alt="Virtual Riddle Kurucusu" 
                    className="w-full rounded-3xl shadow-lg z-10 relative"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-2xl z-0"></div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="mb-2 text-blue-600 font-semibold tracking-wide">HİKAYEMİZ</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Uzmanlıktan Doğan Yenilikçi Yaklaşım</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Virtual Riddle Teknoloji A.Ş., kurucumuzun Türkiye'nin önde gelen şirketlerine ve yurtdışında uluslararası çaptaki kuruluşlara uzun yıllar Atlassian ürünleri konusunda sağladığı danışmanlık ve destek deneyimi üzerine 2024 yılında kuruldu. Maslak 42'deki İstanbul merkezimizden, sektöre getirdiğimiz yenilikçi yaklaşımla müşterilerimizin dijital dönüşüm süreçlerine değer katıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Virtual Riddle'da Yaşam */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/5">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Virtual Riddle'da Yaşam</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Virtual Riddle Teknoloji A.Ş. olarak, İstanbul'un iş ve teknoloji merkezi Maslak 42'de modern ve dinamik çalışma ortamımızla hizmet vermekteyiz.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Ofisimizdeki yenilikçi çalışma alanları ve son teknoloji ekipmanlarla müşterilerimize en iyi hizmeti sunmak için ideal bir ortam oluşturduk.
                </p>
                <div className="flex space-x-4">
                  <span className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-800 font-medium rounded-xl border border-gray-200">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Maslak 42, İstanbul</span>
                  </span>
                </div>
              </div>
              <div className="lg:w-3/5 mt-8 lg:mt-0">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl">
                  <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] flex items-center justify-center z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform group">
                      <svg className="w-10 h-10 text-white group-hover:text-blue-50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 absolute z-0"></div>
                    <img 
                      src="/images/office-workspace.jpg" 
                      alt="Virtual Riddle Modern Ofisi" 
                      className="w-full h-full object-cover object-center z-0"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl z-20 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">Ofis Turu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                İşletmelerin dijital dönüşüm süreçlerini en verimli şekilde yönetmelerine yardımcı olmak ve 
                Atlassian teknolojilerini kullanarak rekabet avantajı elde etmelerini sağlamak. Her müşterimizin başarısı, bizim başarımızdır.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vizyonumuz</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Türkiye'nin önde gelen Atlassian çözüm ortağı ve dijital dönüşüm danışmanlığı şirketi olmak ve 
                global pazarda söz sahibi bir teknoloji markası haline gelmek. Sürekli gelişim ve yenilikçilik ile sektöre yön vermek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Başarımızın temelinde yatan, bizi biz yapan ilkelerimiz
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Güvenilirlik</h3>
                <p className="text-gray-700">
                  Müşterilerimize her zaman şeffaf ve dürüst davranır, söz verdiğimiz her işi zamanında ve eksiksiz tamamlarız. Her projede güveninizi kazanmak için çalışırız.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-green-400 to-green-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Yenilikçilik</h3>
                <p className="text-gray-700">
                  Teknolojik gelişmeleri yakından takip eder, Atlassian ekosistemindeki en yeni çözümleri müşterilerimize sunarız. Sürekli öğrenme ve gelişim bizim DNA'mızda var.
                </p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-purple-400 to-purple-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">İş Birliği</h3>
                <p className="text-gray-700">
                  Müşterilerimizle uzun vadeli iş birlikleri kurar, başarılarını kendi başarımız olarak görürüz. Zorlu sorunları birlikte çözer, birlikte büyürüz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-800 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
              </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Dijital Dönüşüm Yolculuğunuza Bugün Başlayın</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Virtual Riddle ile Atlassian ürünlerinin gücünü keşfedin. Uzman ekibimiz, işletmenizin ihtiyaçlarına özel çözümler için yanınızda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                Bize Ulaşın
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 