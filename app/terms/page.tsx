"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Kullanım Koşulları</h1>
            <p className="text-xl text-blue-100">
              Virtual Riddle hizmetlerini kullanırken uymanız gereken koşul ve kurallar
            </p>
          </div>
        </div>
      </section>

      {/* İçerik Bölümü */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hızlı Navigasyon */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hızlı Erişim</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="#hizmet-kullanimi" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <span className="text-gray-700 font-medium">Hizmet Kullanımı</span>
                </Link>
                
                <Link href="#fikri-mulkiyet" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <span className="text-gray-700 font-medium">Fikri Mülkiyet</span>
                </Link>
                
                <Link href="#sorumluluk-sinirlari" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <span className="text-gray-700 font-medium">Sorumluluk Sınırları</span>
                </Link>
                
                <Link href="#odeme-kosullari" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">4</span>
                  </div>
                  <span className="text-gray-700 font-medium">Ödeme Koşulları</span>
                </Link>
                
                <Link href="#gizlilik" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">5</span>
                  </div>
                  <span className="text-gray-700 font-medium">Gizlilik</span>
                </Link>
                
                <Link href="#sozlesme-degisikligi" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">6</span>
                  </div>
                  <span className="text-gray-700 font-medium">Sözleşme Değişikliği</span>
                </Link>
              </div>
            </div>

            {/* İçerik Bölümleri */}
            <div className="space-y-12">
              {/* Hizmet Kullanımı bölümü */}
              <section id="hizmet-kullanimi" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3H21V8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 20L21 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 16V21H16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 15L3 3L3 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Hizmet Kullanımı</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle hizmetleri, kullanıcılarımızın iş süreçlerini optimize etmesi ve dijital dönüşüm yolculuklarında başarılı olmaları için tasarlanmıştır. Hizmetlerimizi kullanırken aşağıdaki kurallara uymanız gerekmektedir.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
                      <div className="bg-indigo-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Hesap Güvenliği</h3>
                        <ul className="space-y-3 text-indigo-700">
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            Hesap bilgilerinizin güvenliğinden siz sorumlusunuz
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            Güçlü ve benzersiz şifreler kullanmanız tavsiye edilir
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            Hesap erişim bilgilerinizi üçüncü kişilerle paylaşmayın
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            Şüpheli aktiviteleri derhal bildirmeniz gerekmektedir
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-indigo-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Kullanım Kısıtlamaları</h3>
                        <ul className="space-y-3 text-indigo-700">
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            Hizmetleri yasadışı faaliyetler için kullanamazsınız
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            Sistemi manipüle etmek veya güvenlik önlemlerini atlatmak yasaktır
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            Diğer kullanıcıların hizmet kullanımını engelleyecek davranışlarda bulunamazsınız
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            Abonelik paketinizdeki kaynak sınırlarına uymanız gerekmektedir
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Kabul Edilebilir Kullanım Politikası</h3>
                      <p className="text-gray-600 mb-4">
                        Virtual Riddle hizmetlerini kullanırken, aşağıdaki kullanım politikasını kabul etmiş sayılırsınız. Bu kuralları ihlal etmeniz durumunda, yasal haklarımızı saklı tutarız.
                      </p>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <p className="text-indigo-700 text-sm">
                          Virtual Riddle, kendi takdirine bağlı olarak, önceden bildirimde bulunmaksızın ve herhangi bir tazminat yükümlülüğü olmaksızın, kullanım koşullarını ihlal eden veya hizmetlerimizi kötüye kullanan kullanıcıların hesaplarını askıya alma, kısıtlama veya tamamen sonlandırma hakkını saklı tutar. Bu durumda, ödemiş olduğunuz ücretleri iade etme yükümlülüğümüz bulunmamaktadır.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Hizmet Kullanım Sorumluluğu</h3>
                      <p className="text-gray-600">
                        Virtual Riddle platformu üzerinde paylaşılan tüm içeriklerinizden siz sorumlusunuz. Telif hakkı ihlali, yasadışı veya uygunsuz içerik paylaşımı yapmamanız, başkalarının fikri mülkiyet haklarına saygı göstermeniz ve platformumuzda paylaştığınız içeriklerin yasal düzenlemelere uygun olması gerekmektedir.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Fikri Mülkiyet bölümü */}
              <section id="fikri-mulkiyet" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 4L8.12 15.88" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.47 14.48L20 20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.12 8.12L4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Fikri Mülkiyet</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle, kullanıcılarımızın ve kendi fikri mülkiyet haklarını korumaya büyük önem verir. Bu bölüm, platformumuzda bulunan içeriklerle ilgili fikri mülkiyet haklarını açıklamaktadır.
                    </p>
                    
                    <div className="bg-amber-50 p-6 rounded-xl mt-8 mb-8">
                      <h3 className="text-xl font-semibold text-amber-800 mb-4">Virtual Riddle'ın Fikri Mülkiyeti</h3>
                      <p className="text-amber-700 mb-4">
                        Virtual Riddle platformu, arayüzü, logolar, tasarımlar, metinler, grafikler, yazılım, algoritmalar ve diğer tüm içerikler Virtual Riddle'ın fikri mülkiyetidir ve telif hakkı, ticari marka, patent ve diğer fikri mülkiyet yasaları ile korunmaktadır.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 flex items-center">
                          <svg className="w-5 h-5 text-amber-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Virtual Riddle'ın önceden yazılı izni olmadan bu içerikleri kopyalamak, değiştirmek, dağıtmak veya kullanmak yasaktır.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Lisans Kullanımı</h3>
                        <p className="text-gray-600 mb-4">
                          Virtual Riddle, kullanıcılarına hizmetlerini kullanmak için sınırlı, münhasır olmayan, devredilemez bir lisans vermektedir. Bu lisans, sadece bu kullanım koşullarına uygun olarak hizmetleri kullanmanıza izin verir.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Lisans, hizmetlerin ticari amaçlar için yeniden satışını kapsamaz
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Yazılımı tersine mühendislik yapmak, kaynak koda dönüştürmek yasaktır
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Hizmetlerimizin herhangi bir bileşenini değiştirmek veya türetilmiş çalışmalar oluşturmak yasaktır
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Kullanıcı İçeriği</h3>
                        <p className="text-gray-600 mb-4">
                          Platformumuzda paylaştığınız veya yüklediğiniz tüm içerikler için, Virtual Riddle'a ve bağlı kuruluşlarına, dünya çapında, telifsiz, alt lisanslanabilir, aktarılabilir ve münhasır olmayan bir hak ve lisans vermiş olursunuz. Bu lisans, hizmetlerimizi sağlama, geliştirme, iyileştirme, tanıtma ve içeriği kullanma, kopyalama, uyarlama, değiştirme, analiz etme, yayınlama, aktarma, görüntüleme ve dağıtma amacıyla kullanılabilir.
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <p className="text-amber-700 text-sm">
                            Platformumuza içerik yükleyerek veya göndererek, bu içeriğin tüm fikri mülkiyet haklarına sahip olduğunuzu veya kullanma ve yayınlama hakkına sahip olduğunuzu ve içeriğin üçüncü tarafların haklarını ihlal etmediğini beyan ve taahhüt edersiniz. Virtual Riddle, herhangi bir zamanda ve herhangi bir nedenle içeriğinizi kaldırma hakkını saklı tutar.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Marka Kullanımı</h3>
                      <p className="text-gray-600">
                        Virtual Riddle adı, logosu ve ürün isimleri, Virtual Riddle'ın tescilli ticari markalarıdır. Bu markaları, önceden yazılı izin almadan ticari amaçlarla kullanmak yasaktır. Virtual Riddle'ın marka kullanım politikası hakkında daha fazla bilgi için lütfen iletişime geçin.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Gizlilik bölümü */}
              <section id="gizlilik" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11V10C9 8.34 10.34 7 12 7C13.66 7 15 8.34 15 10V11" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14.6C12.3314 14.6 12.6 14.3314 12.6 14C12.6 13.6686 12.3314 13.4 12 13.4C11.6686 13.4 11.4 13.6686 11.4 14C11.4 14.3314 11.6686 14.6 12 14.6Z" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Gizlilik</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle olarak kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu bölüm, platformumuzun gizlilik uygulamaları ve kişisel verilerin korunmasına yönelik politikalarımız hakkında özet bilgiler içermektedir.
                    </p>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 mt-8 mb-6">
                      <h3 className="text-xl font-semibold text-purple-900 mb-4">Detaylı Gizlilik Politikası</h3>
                      <p className="text-purple-800 mb-4">
                        Kişisel verilerinizin nasıl toplandığı, işlendiği, saklandığı ve paylaşıldığına dair detaylı bilgileri Gizlilik Politikamızda bulabilirsiniz. Gizlilik Politikamız, veri koruma yasalarına uygun olarak hazırlanmıştır.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-purple-600 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 11H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <Link href="/privacy" className="text-purple-600 font-medium hover:text-purple-800 transition-colors">Gizlilik Politikamız'ı okumak için tıklayın</Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-purple-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.49 2.23L5.50003 4.11C4.35003 4.54 3.41003 5.9 3.41003 7.12V14.55C3.41003 15.73 4.19003 17.28 5.14003 17.99L9.44003 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12C20.61 5.89 19.67 4.53 18.52 4.1L13.53 2.23C12.68 1.92 11.32 1.92 10.49 2.23Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Veri Güvenliği
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Verileriniz SSL/TLS şifreleme protokolleri ile korunmaktadır
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Düzenli güvenlik taramaları ve güncellemeleri yapılmaktadır
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Verilere erişim sadece yetkili personel ile sınırlandırılmıştır
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Güvenlik ihlali durumunda yasal süre içinde bildirim yapılır
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-purple-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Kullanıcı Hakları
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Kişisel verilerinize erişim ve düzeltme hakkına sahipsiniz
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Verilerinizin silinmesini talep edebilirsiniz
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Veri işleme faaliyetlerini kısıtlama hakkınız vardır
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Veri taşınabilirliğini talep edebilirsiniz
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Hakkınızda otomatik karar verme işlemlerine itiraz edebilirsiniz
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sözleşme Değişikliği Bölümü */}
              <section id="sozlesme-degisikligi" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sözleşme Değişikliği</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle, bu kullanım koşullarını tek taraflı olarak dilediği zaman değiştirme hakkını saklı tutar. Değişiklikler, web sitemizde yayınlandığı anda yürürlüğe girer.
                    </p>
                    
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-6">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">Değişiklik Bildirimleri</h3>
                      <p className="text-blue-700 mb-4">
                        Koşullarda yapılan değişiklikler, web sitemizde yayınlanmasıyla birlikte geçerli sayılacaktır. Virtual Riddle, değişiklikler konusunda bildirim yapma yükümlülüğüne sahip değildir, ancak önemli değişikliklerde web sitesi üzerinden bilgilendirme yapabilir. Hizmetlerimizi kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelir.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 flex items-center">
                          <svg className="w-5 h-5 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/>
                          </svg>
                          Son güncelleme tarihi: <span className="font-medium">01.05.2024</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sorumluluk Sınırları bölümü */}
              <section id="sorumluluk-sinirlari" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-rose-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9V14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 21.41H5.94C2.47 21.41 1.02 18.93 2.7 15.9L5.82 10.28L8.76 5.01C10.54 1.79 13.46 1.79 15.24 5.01L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.9941 17H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sorumluluk Sınırları</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle hizmetlerini kullanırken, aşağıdaki sorumluluk sınırlamalarını kabul etmiş sayılırsınız. Bu sınırlamalar, uygulanacak yasaların izin verdiği en geniş ölçüde geçerlidir.
                    </p>
                    
                    <div className="bg-rose-50 p-6 rounded-xl mt-8 mb-8">
                      <h3 className="text-xl font-semibold text-rose-800 mb-4">Hizmet Sunumu</h3>
                      <p className="text-rose-700 mb-4">
                        Virtual Riddle hizmetleri "olduğu gibi" ve "mevcut olduğu şekilde" sunulmaktadır. Hizmetlerimiz hakkında açık veya zımni hiçbir garanti veya taahhüt vermemekteyiz.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 text-sm flex items-start">
                          <svg className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9941 16H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Virtual Riddle, herhangi bir bildirimde bulunarak hizmetlerini değiştirme, askıya alma veya sonlandırma hakkını saklı tutar. Hizmetlerimizin kesintisiz, hatasız veya güvenli olacağını, belirli ihtiyaçlarınızı karşılayacağını veya herhangi bir sonuç elde edileceğini garanti etmemekteyiz.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Sorumluluk Reddi</h3>
                        <p className="text-gray-600 mb-4">
                          Virtual Riddle, uygulanabilir mevzuatın izin verdiği azami ölçüde, hiçbir durumda aşağıdakilerden sorumlu olmayacaktır:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Doğrudan, dolaylı, arızi, özel, cezai veya sonuç olarak ortaya çıkan herhangi bir zarar
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Kâr kaybı, iş kesintisi, veri kaybı veya sistem arızası
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Hizmetin kullanımı veya kullanılamamasından kaynaklanan herhangi bir zarar
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Üçüncü taraf yazılımları veya hizmetlerinden kaynaklanan sorunlar
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Yetkisiz erişim, veri değişikliği veya iletim hatası
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Sorumluluk Sınırı</h3>
                        <p className="text-gray-600 mb-4">
                          Herhangi bir sorumluluğun söz konusu olduğu durumlarda, Virtual Riddle'ın toplam sorumluluğu, hiçbir koşulda aşağıdaki tutarlardan yüksek olanını aşmayacaktır:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            İddia konusu olaydan önceki son üç (3) ay içinde tarafınızca ödenen hizmet bedeli
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            100 Türk Lirası (₺100)
                          </li>
                        </ul>
                        <div className="bg-rose-50 p-4 rounded-lg mt-4">
                          <p className="text-rose-700 text-sm">
                            Bu sorumluluk sınırlamaları, Virtual Riddle'a iddia veya zarar olasılığı bildirilmiş olsa dahi geçerlidir ve tüm hukuki teoriler kapsamında (sözleşme, haksız fiil, ihlal veya başka herhangi bir teori) uygulanır.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Üçüncü Taraf Hizmetleri</h3>
                      <p className="text-gray-600 mb-4">
                        Virtual Riddle platformunda üçüncü taraf uygulamalar, bağlantılar veya hizmetler bulunabilir. Bu üçüncü taraf hizmetlerinin kullanımından, içeriğinden, gizlilik politikalarından, uygulamalarından veya bu hizmetlerle ilgili herhangi bir zarardan Virtual Riddle hiçbir şekilde sorumlu değildir.
                      </p>
                      <div className="bg-rose-50 p-4 rounded-lg">
                        <p className="text-rose-700 text-sm">
                          Bazı yargı bölgelerinde tüketici haklarına ilişkin belirli garantilerin hariç tutulmasına veya bazı zararlar için sorumluluk sınırlamalarına izin verilmez. Bu durumda, yukarıdaki sınırlamalar veya istisnalar sizin için geçerli olmayabilir, ancak yasaların izin verdiği en geniş ölçüde uygulanacaktır.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Ödeme Koşulları bölümü */}
              <section id="odeme-kosullari" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-teal-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.50488H22" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 16.5049H8" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.5 16.5049H14.5" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ödeme Koşulları</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle hizmetlerine erişim sağlamak için geçerli abonelik ücretlerini ödemeniz gerekmektedir. Bu bölüm, ödeme koşullarımızı ve faturalandırma politikalarımızı açıklamaktadır.
                    </p>
                    
                    <div className="bg-teal-50 p-6 rounded-xl mt-8 mb-8">
                      <h3 className="text-xl font-semibold text-teal-800 mb-4">Fiyatlandırma ve Abonelik</h3>
                      <p className="text-teal-700 mb-4">
                        Virtual Riddle, farklı ihtiyaçlara yönelik çeşitli abonelik planları sunmaktadır. Tüm fiyatlar ve plan özellikleri web sitemizde açıkça belirtilmiştir. Abonelik ücretleri, seçtiğiniz plana ve ödeme dönemine göre değişiklik gösterebilir.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 flex items-center">
                          <svg className="w-5 h-5 text-teal-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 13.5049H13.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Virtual Riddle, önceden bildirimde bulunarak fiyatlandırma ve abonelik planlarında değişiklik yapma hakkını saklı tutar. Fiyat değişiklikleri, mevcut abonelik dönemini etkilemez ve bir sonraki yenileme döneminde geçerli olur.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Ödeme Yöntemleri</h3>
                        <p className="text-gray-600 mb-4">
                          Virtual Riddle, çeşitli güvenli ödeme yöntemlerini kabul etmektedir. Kabul edilen ödeme yöntemleri arasında kredi kartları, banka kartları ve kurumsal faturalama bulunmaktadır.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Tüm ödemeler TL, USD veya EUR cinsinden yapılabilir
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Faturalandırma bilgilerinizin güncel ve doğru olduğundan emin olun
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Ödemeler, abonelik planınıza göre aylık veya yıllık olarak alınır
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Otomatik Yenileme</h3>
                        <p className="text-gray-600 mb-4">
                          Tüm abonelikler, aksi belirtilmedikçe otomatik olarak yenilenir. Aboneliğinizi iptal etmek isterseniz, bir sonraki faturalandırma tarihinden en az 7 gün önce hesap ayarlarınızdan iptal işlemi yapmalısınız.
                        </p>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <p className="text-teal-700 text-sm">
                            İptal edilmiş abonelikler mevcut faturalandırma döneminin sonuna kadar aktif kalır. Abonelik iptali durumunda geri ödeme yapılmaz, ancak mevcut dönemin sonuna kadar hizmetlerimizi kullanmaya devam edebilirsiniz.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Vergiler ve Ek Ücretler</h3>
                      <p className="text-gray-600 mb-4">
                        Belirtilen tüm fiyatlar, uygulanabilecek vergiler (KDV dahil) hariçtir. Bulunduğunuz ülke veya bölgeye bağlı olarak ek vergiler uygulanabilir. Bu vergiler, nihai faturanıza yansıtılacaktır.
                      </p>
                      <p className="text-gray-600">
                        Bazı ödeme yöntemlerinde işlem ücretleri veya döviz kurlarından kaynaklanan ek ücretler oluşabilir. Bu ek ücretler, ödeme sağlayıcınız tarafından belirlenir ve Virtual Riddle tarafından kontrol edilmez.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">İade Politikası</h3>
                      <p className="text-gray-600 mb-4">
                        Virtual Riddle, dijital hizmet sağlayıcısı olarak aşağıdaki iade politikasını uygulamaktadır:
                      </p>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          Dijital hizmetlerin doğası gereği, abonelik başladıktan ve hizmet kullanıma açıldıktan sonra iade yapılmamaktadır
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          Hizmet kullanılmaya başlamadan önce ve ödeme yapıldıktan sonraki 48 saat içinde iptal talepleri, Virtual Riddle'ın takdirinde değerlendirilir
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          Teknik sorunlar nedeniyle hizmet sunulamaması durumunda, Virtual Riddle hizmet süresini uzatabilir veya kredi sağlayabilir, ancak nakit iade yapmak zorunda değildir
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          İade talepleri değerlendirilirken 10 TL'ye kadar işlem ücreti kesintisi yapılabilir
                        </li>
                      </ul>
                      <div className="bg-teal-50 p-4 rounded-lg mt-4">
                        <p className="text-teal-700 text-sm">
                          Virtual Riddle, iade politikasını herhangi bir zamanda değiştirme hakkını saklı tutar. İade taleplerinin değerlendirilmesi tamamen Virtual Riddle'ın takdirindedir ve her bir talep kendi koşullarına göre incelenir.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* İletişim Bölümü */}
              <section id="iletisim" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">İletişim</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Kullanım koşulları veya hizmetlerimizle ilgili herhangi bir sorunuz olduğunda, bizimle iletişime geçebileceğiniz birden fazla yol bulunmaktadır.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">İletişim Bilgileri</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-1">E-posta</h4>
                              <p className="text-gray-600">legal@virtualriddle.com</p>
                              <p className="text-gray-500 text-sm mt-1">Hukuki konular ve sözleşme soruları için</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-1">Telefon</h4>
                              <p className="text-gray-600">+90 212 555 6789</p>
                              <p className="text-gray-500 text-sm mt-1">Pazartesi - Cuma: 09:00 - 18:00</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 13.4299C14.7614 13.4299 17 11.7091 17 10.3099C17 8.58681 14.7614 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="currentColor" strokeWidth="1.5"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-1">Adres</h4>
                              <p className="text-gray-600">
                                Maslak Mah. AOS 55. Sok. 42 Maslak B Blok No:4/542<br />
                                Sarıyer/İSTANBUL
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Sıkça Sorulan Sorular</h3>
                        <div className="space-y-4">
                          <div className="pb-4 border-b border-gray-100">
                            <h4 className="font-medium text-gray-900 mb-1">Kullanım koşulları ne sıklıkla güncellenir?</h4>
                            <p className="text-gray-600">Kullanım koşullarımız, hizmet değişiklikleri, yasal düzenlemeler veya platform geliştirmeleri durumunda güncellenir. Tüm önemli güncellemelerden haberdar edileceksiniz.</p>
                          </div>
                          
                          <div className="pb-4 border-b border-gray-100">
                            <h4 className="font-medium text-gray-900 mb-1">Kullanım koşullarını kabul etmezsem platform hizmetlerini kullanabilir miyim?</h4>
                            <p className="text-gray-600">Hayır, Virtual Riddle platformunu ve hizmetlerini kullanmak için kullanım koşullarını kabul etmeniz gerekmektedir.</p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">Kullanım koşulları ile ilgili sorularımı nasıl iletebilirim?</h4>
                            <p className="text-gray-600">Kullanım koşullarıyla ilgili sorularınızı legal@virtualriddle.com adresine e-posta gönderebilir veya telefonla müşteri hizmetleri ekibimizle iletişime geçebilirsiniz.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 mt-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.9941 16H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Son Güncelleme Bilgisi
                      </h3>
                      <p className="text-green-700 mb-2">
                        Bu kullanım koşulları son olarak <span className="font-semibold">01.05.2024</span> tarihinde güncellenmiştir.
                      </p>
                      <p className="text-green-700">
                        Virtual Riddle, bu koşulları önceden bildirmek kaydıyla herhangi bir zamanda değiştirme hakkını saklı tutar. Düzenli olarak kullanım koşullarını kontrol etmenizi öneririz.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 