export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
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
                <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-lg overflow-hidden">
                  {/* Ana Emoji ve Grafikler */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl animate-bounce">🚀</div>
                  </div>
                  
                  {/* Üst Köşe Emojileri */}
                  <div className="absolute top-6 left-6 text-3xl animate-pulse">💡</div>
                  <div className="absolute top-8 right-8 text-2xl animate-spin" style={{animationDuration: '3s'}}>⚡</div>
                  
                  {/* Alt Köşe Emojileri */}
                  <div className="absolute bottom-6 left-8 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>🎯</div>
                  <div className="absolute bottom-8 right-6 text-3xl animate-pulse" style={{animationDelay: '1s'}}>🌟</div>
                  
                  {/* Orta Alan Grafikleri */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-ping"></div>
                  <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-indigo-300 rounded-full opacity-50 animate-ping" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-purple-200 rounded-full opacity-70 animate-ping" style={{animationDelay: '0.6s'}}></div>
                  
                  {/* Çizgi Grafikleri */}
                  <svg className="absolute bottom-0 left-0 w-full h-24 opacity-30" viewBox="0 0 400 100" fill="none">
                    <path d="M0 80 Q100 60 200 40 T400 20" stroke="#3B82F6" strokeWidth="3" fill="none"/>
                    <path d="M0 90 Q100 70 200 50 T400 30" stroke="#6366F1" strokeWidth="2" fill="none"/>
                  </svg>
                  
                  {/* Veri Noktaları */}
                  <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  
                  {/* İstatistik Kartları */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">2024</div>
                      <div className="text-xs text-gray-600">Kuruluş</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    <div className="text-center">
                      <div className="text-sm font-bold text-indigo-600">100%</div>
                      <div className="text-xs text-gray-600">Başarı</div>
                    </div>
                  </div>
                  
                  {/* Teknoloji İkonları */}
                  <div className="absolute top-1/2 left-6 text-xl">🔧</div>
                  <div className="absolute top-1/2 right-6 text-xl">💻</div>
                  <div className="absolute bottom-1/2 left-6 text-xl">📊</div>
                  <div className="absolute bottom-1/2 right-6 text-xl">🎨</div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="mb-2 text-blue-600 font-semibold tracking-wide">HİKAYEMİZ</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Uzmanlıktan Doğan Yenilikçi Yaklaşım</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Virtual Riddle Teknoloji A.Ş., Atlassian sertifikalı uzmanlardan oluşan deneyimli ekibimizin Türkiye'nin önde gelen şirketlerine ve yurtdışında uluslararası çaptaki kuruluşlara uzun yıllar sağladığı Atlassian danışmanlığı ve destek tecrübesi üzerine 2024 yılında kuruldu. Maslak 42'deki İstanbul merkezimizden, sektöre getirdiğimiz yenilikçi yaklaşımla müşterilerimizin dijital dönüşüm süreçlerine değer katıyoruz.</p>
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
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                  {/* Sadece Emoji Animasyonu */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    
                    {/* Merkez Büyük Emoji */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-8xl animate-bounce">🏢</div>
                    </div>
                    
                    {/* Üst Köşe Emojileri */}
                    <div className="absolute top-8 left-8 text-4xl animate-pulse">💻</div>
                    <div className="absolute top-12 right-12 text-3xl animate-pulse" style={{animationDelay: '0.3s'}}>🚀</div>
                    
                    {/* Alt Köşe Emojileri */}
                    <div className="absolute bottom-8 left-12 text-3xl animate-pulse" style={{animationDelay: '0.6s'}}>🤝</div>
                    <div className="absolute bottom-12 right-8 text-4xl animate-pulse" style={{animationDelay: '0.9s'}}>💡</div>
                    
                    {/* Orta Sol Emojileri */}
                    <div className="absolute top-1/3 left-6 text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>👨‍💻</div>
                    <div className="absolute bottom-1/3 left-6 text-2xl animate-bounce" style={{animationDelay: '0.8s'}}>👩‍💼</div>
                    
                    {/* Orta Sağ Emojileri */}
                    <div className="absolute top-1/3 right-6 text-2xl animate-bounce" style={{animationDelay: '0.4s'}}>👨‍🔧</div>
                    <div className="absolute bottom-1/3 right-6 text-2xl animate-bounce" style={{animationDelay: '1.0s'}}>👩‍🎨</div>
                    
                    {/* Üst Orta Emojileri */}
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-3xl animate-pulse" style={{animationDelay: '0.5s'}}>🏆</div>
                    <div className="absolute top-1/4 left-1/3 text-2xl animate-pulse" style={{animationDelay: '0.7s'}}>⭐</div>
                    <div className="absolute top-1/4 right-1/3 text-2xl animate-pulse" style={{animationDelay: '0.1s'}}>🌟</div>
                    
                    {/* Alt Orta Emojileri */}
                    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-3xl animate-pulse" style={{animationDelay: '0.2s'}}>📈</div>
                    <div className="absolute bottom-1/4 left-1/3 text-2xl animate-pulse" style={{animationDelay: '0.4s'}}>🎯</div>
                    <div className="absolute bottom-1/4 right-1/3 text-2xl animate-pulse" style={{animationDelay: '0.6s'}}>⚡</div>
                    
                    {/* Merkez Etrafındaki Küçük Emojiler */}
                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-xl animate-ping">😊</div>
                    <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 text-xl animate-ping" style={{animationDelay: '0.3s'}}>🎉</div>
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-xl animate-ping" style={{animationDelay: '0.6s'}}>🔥</div>
                    <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-xl animate-ping" style={{animationDelay: '0.9s'}}>✨</div>
                    
                    {/* Köşe Dekoratif Emojiler */}
                    <div className="absolute top-4 left-1/4 text-lg animate-pulse" style={{animationDelay: '0.1s'}}>🔧</div>
                    <div className="absolute top-4 right-1/4 text-lg animate-pulse" style={{animationDelay: '0.4s'}}>📊</div>
                    <div className="absolute bottom-4 left-1/4 text-lg animate-pulse" style={{animationDelay: '0.7s'}}>🎨</div>
                    <div className="absolute bottom-4 right-1/4 text-lg animate-pulse" style={{animationDelay: '1.0s'}}>🤖</div>
                    
                    {/* Dönen Emojiler */}
                    <div className="absolute top-1/4 left-1/4 text-2xl animate-spin" style={{animationDuration: '4s'}}>🔄</div>
                    <div className="absolute bottom-1/4 right-1/4 text-2xl animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}>⚙️</div>
                    
                    {/* Zıplayan Emojiler */}
                    <div className="absolute top-1/3 left-1/3 text-xl animate-bounce" style={{animationDelay: '0.5s'}}>🎪</div>
                    <div className="absolute bottom-1/3 right-1/3 text-xl animate-bounce" style={{animationDelay: '0.8s'}}>🎭</div>
                    
                    {/* Yanıp Sönen Emojiler */}
                    <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 text-lg animate-pulse">💫</div>
                    <div className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2 text-lg animate-pulse" style={{animationDelay: '0.3s'}}>💫</div>
                    
                  </div>

                  {/* Animasyonlu Arka Plan Elementleri */}
                  <div className="absolute top-3 left-3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute top-6 right-6 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.6s'}}></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.9s'}}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-40" style={{animationDelay: '0.2s'}}></div>

                  {/* Dekoratif Çizgiler */}
                  <svg className="absolute bottom-0 left-0 w-full h-8 opacity-30" viewBox="0 0 400 32" fill="none">
                    <path d="M0 25 Q100 15 200 20 T400 15" stroke="#3B82F6" strokeWidth="2" fill="none" className="animate-pulse"/>
                    <path d="M0 30 Q100 20 200 25 T400 20" stroke="#10B981" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                  </svg>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Açık ve Şeffaf İletişim */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Açık İletişim</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Müşterilerimizle şeffaf ve dürüst iletişim kurar, her adımda bilgilendirme yaparız. Sorunları açıkça konuşur, çözümleri birlikte ararız.
                </p>
              </div>

              {/* Mükemmellik için Çaba */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-green-400 to-green-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Mükemmellik</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Her projede en yüksek kalite standartlarını hedefler, sürekli iyileştirme için çaba gösteririz. Detaylara önem verir, mükemmellik için çalışırız.
                </p>
              </div>

              {/* Basit ve Odaklanmış */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-purple-400 to-purple-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Odaklanmış Yaklaşım</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Karmaşık sorunları basit çözümlerle ele alır, gereksiz karmaşıklıktan kaçınırız. Net hedefler belirler, odaklanmış çözümler sunarız.
                </p>
              </div>

              {/* Güçlü Takım Ruhu */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-orange-400 to-orange-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Takım Ruhu</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Birlikte çalışmanın gücüne inanır, farklı bakış açılarını değerli buluruz. Takım içi işbirliği ve karşılıklı destek ile başarıya ulaşırız.
                </p>
              </div>

              {/* Müşteri Odaklılık */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-teal-400 to-teal-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Müşteri Odaklılık</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Müşterilerimizin ihtiyaçlarını merkeze alır, onların başarısı için çalışırız. Uzun vadeli ilişkiler kurar, sürekli değer yaratırız.
                </p>
              </div>

              {/* Yenilikçilik */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-indigo-400 to-indigo-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Yenilikçilik</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Yeni fikirleri destekler, yaratıcı çözümler geliştiririz. Teknolojik gelişmeleri takip eder, sürekli öğrenme ve gelişim için çaba gösteririz.
                </p>
              </div>

              {/* Güvenilirlik */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-red-400 to-red-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Güvenilirlik</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Söz verdiğimiz her işi zamanında ve eksiksiz tamamlarız. Müşterilerimizin güvenini kazanmak ve korumak bizim en önemli önceliğimizdir.
                </p>
              </div>

              {/* Sürdürülebilir Büyüme */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Sürdürülebilir Büyüme</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Hem kendi şirketimiz hem de müşterilerimiz için sürdürülebilir büyüme stratejileri geliştiririz. Uzun vadeli başarı için sağlam temeller atarız.
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
          <div className="absolute top-0 right-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
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