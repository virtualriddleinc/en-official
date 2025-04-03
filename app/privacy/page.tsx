import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Gizlilik Politikası</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Kişisel verilerinizin korunması ve güvenliği önceliğimizdir. Bu politika, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Quick Navigation */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                İçerik
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Link href="#kisisel-veriler" className="flex items-center p-4 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group shadow-sm">
                  <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-semibold">1</span>
                  </span>
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors">Kişisel Veriler</span>
                </Link>
                <Link href="#veri-guvenligi" className="flex items-center p-4 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group shadow-sm">
                  <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-semibold">2</span>
                  </span>
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors">Veri Güvenliği</span>
                </Link>
                <Link href="#cerezler" className="flex items-center p-4 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group shadow-sm">
                  <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-semibold">3</span>
                  </span>
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors">Çerezler</span>
                </Link>
                <Link href="#gizlilik-haklari" className="flex items-center p-4 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group shadow-sm">
                  <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-semibold">4</span>
                  </span>
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors">Gizlilik Hakları</span>
                </Link>
                <Link href="#veri-ihlali" className="flex items-center p-4 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group shadow-sm">
                  <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-semibold">5</span>
                  </span>
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors">Veri İhlali Bildirimi</span>
                </Link>
                <Link href="#ucuncu-taraf" className="flex items-center p-4 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group shadow-sm">
                  <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-blue-600 font-semibold">6</span>
                  </span>
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors">Üçüncü Taraf Hizmetler</span>
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-14">
              {/* Kişisel Veriler */}
              <section id="kisisel-veriler" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Kişisel Veriler</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle olarak, size daha iyi hizmet verebilmek için bazı kişisel bilgilerinizi toplamaktayız. 
                      Bu bilgilerin kullanımına ilişkin her türlü işlem, Kişisel Verilerin Korunması Kanunu ve ilgili mevzuata uygun 
                      olarak titizlikle gerçekleştirilmektedir.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-emerald-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Topladığımız Kişisel Veriler
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="font-medium text-gray-900">Kimlik Bilgileri</span>
                        </div>
                        <p className="text-gray-600 ml-11 text-sm">
                          Ad, soyad, unvan gibi sizi tanımlayan temel bilgiler
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="font-medium text-gray-900">İletişim Bilgileri</span>
                        </div>
                        <p className="text-gray-600 ml-11 text-sm">
                          E-posta adresi, telefon numarası, adres
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14 16.5V18.6C14 20.8 12.2 22.6 10 22.6C7.8 22.6 6 20.8 6 18.6V16.5C6 14.3 7.8 12.5 10 12.5C12.2 12.5 14 14.3 14 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18 17.5L22 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18 21.5L22 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M3 7C3 4 4.5 2 8.5 2H15.5C19.5 2 21 4 21 7V10C21 12.28 20.13 13.85 18 14.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="font-medium text-gray-900">Hesap Bilgileri</span>
                        </div>
                        <p className="text-gray-600 ml-11 text-sm">
                          Kullanıcı adı, şifre (şifrelenmiş olarak), hesap tercihleri
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 16.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 16.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 7.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 7.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="font-medium text-gray-900">Şirket Bilgileri</span>
                        </div>
                        <p className="text-gray-600 ml-11 text-sm">
                          Şirket adı, vergi numarası, sektör, çalışan sayısı
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 16.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 16.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 7.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 7.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="font-medium text-gray-900">Kullanım Verileri</span>
                        </div>
                        <p className="text-gray-600 ml-11 text-sm">
                          IP adresi, tarayıcı bilgileri, oturum verileri, tıklama analitiği
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 15C13.3807 15 14.5 13.8807 14.5 12.5C14.5 11.1193 13.3807 10 12 10C10.6193 10 9.5 11.1193 9.5 12.5C9.5 13.8807 10.6193 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M19.14 19.14L15.83 15.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.83 9.17L19.14 5.86" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8.17 15.83L4.86 19.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8.17 9.17L4.86 5.86" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 22V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 6V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M22 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="font-medium text-gray-900">Cihaz Bilgileri</span>
                        </div>
                        <p className="text-gray-600 ml-11 text-sm">
                          Kullandığınız cihaz türü, işletim sistemi, ekran boyutu
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-emerald-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Veri Toplama Amacı
                    </h3>
                    
                    <div className="bg-emerald-50 p-6 rounded-xl mb-6 border border-emerald-100">
                      <p className="text-emerald-800 mb-4">
                        Virtual Riddle, kişisel verilerinizi aşağıdaki amaçlar doğrultusunda ancak bunlarla sınırlı olmamak kaydıyla toplar, saklar, kullanır ve işler:
                      </p>
                      <ul className="space-y-2 text-emerald-800">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Hizmetlerimizi sunmak, işletmek, iyileştirmek ve geliştirmek için</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Size özel teklifler, ürünler ve hizmetler sunmak, pazarlama iletişimleri göndermek için</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Kullanıcı davranışlarını analiz etmek, hizmet kullanım istatistiklerini oluşturmak ve yapay zeka / makine öğrenimi modellerini eğitmek için</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>İş ortaklarımız, tedarikçilerimiz ve bağlı kuruluşlarımızla veri paylaşımı yaparak hizmet entegrasyonunu sağlamak için</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Güvenlik, dolandırıcılığı önleme ve risk azaltma amacıyla kullanıcı verilerini işlemek için</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Yasal yükümlülüklerimizi yerine getirmek, şirketimizin haklarını korumak ve yasal süreçlerde kullanmak için</span>
                        </li>
                      </ul>
                      <div className="bg-white p-4 rounded-lg mt-4 shadow-sm">
                        <p className="text-gray-700 text-sm">
                          <strong>Önemli Bilgilendirme:</strong> Virtual Riddle, kişisel verilerinizi yukarıda belirtilen amaçlar dışında da kullanma ve işleme hakkını saklı tutar. Platformumuzu kullanmaya devam ettiğiniz sürece, verilerinizin şirketimiz tarafından gerekli görülen her türlü amaç için işlenmesini kabul etmiş sayılırsınız. Veri işleme faaliyetlerimiz, herhangi bir bildirimde bulunmaksızın değiştirilebilir. Bu durumda, değişiklikler web sitemizde yayınlandığı andan itibaren geçerli olacaktır. Hizmetlerimizi kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelecektir.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.08008 15L8.03008 16.95L12.9201 12.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-emerald-800">Hizmetlerimizi sunmak ve iyileştirmek</span>
                      </div>
                      
                      <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97C3 3.33 4.34 2 6 2H18C19.66 2 21 3.33 21 4.97V15.88C21 17.52 19.66 18.86 18 18.86Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 9.15991C7 8.25991 7.75 7.50991 8.65 7.50991H11.35C12.25 7.50991 13 8.25991 13 9.15991V9.15991C13 10.0599 12.25 10.8099 11.35 10.8099H8.65C7.75 10.8099 7 10.0599 7 9.15991V9.15991Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11 10.8101H13.35C14.25 10.8101 15 11.5601 15 12.4601V12.4601C15 13.3601 14.25 14.1101 13.35 14.1101H11C10.1 14.1101 9.35 13.3601 9.35 12.4601V12.4601C9.35 11.5601 10.1 10.8101 11 10.8101Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-emerald-800">Müşteri desteği sağlamak</span>
                      </div>
                      
                      <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 9.5V14.5C17 16.5 16 17.5 14 17.5H10C8 17.5 7 16.5 7 14.5V9.5C7 7.5 8 6.5 10 6.5H14C16 6.5 17 7.5 17 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.5 11H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-emerald-800">Yasal yükümlülüklerimizi yerine getirmek</span>
                      </div>
                      
                      <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.41016 22C3.41016 18.13 7.26015 15 12.0002 15C12.9602 15 13.8902 15.13 14.7602 15.37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C21.21 20.42 20.94 20.74 20.63 21C19.93 21.63 19.01 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.74 14.58 15.61 15.5 14.88C16.19 14.33 17.06 14 18 14C20.21 14 22 15.79 22 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.4395 18L17.4294 18.99L19.5594 17.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-emerald-800">İletişim ve bilgilendirme</span>
                      </div>
                      
                      <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.5 7.5L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 16L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-emerald-800">Güvenlik ve dolandırıcılığı önleme</span>
                      </div>
                    </div>
                    
                    <p className="mt-6 text-gray-600">
                      Kişisel verileriniz, kullanım amacı gerektirdiği sürece ve yasal saklama süreleri boyunca sistemlerimizde muhafaza edilmektedir. 
                      Bu süreler dolduğunda, verileriniz uygun yöntemlerle imha edilmektedir.
                    </p>
                  </div>
                </div>
              </section>

              {/* Veri Güvenliği */}
              <section id="veri-guvenligi" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.72997C3.08997 5.90997 3.70997 4.97997 4.47997 4.66997L10.05 2.39001C11.3 1.88001 12.71 1.88001 13.96 2.39001L19.53 4.66997C20.29 4.97997 20.92 5.90997 20.92 6.72997L20.91 11.12Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 12.5V15.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Veri Güvenliği</h2>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle olarak, kişisel verilerinizin güvenliği en büyük önceliklerimizden biridir. 
                      Verilerinizi korumak için endüstri standardı güvenlik önlemlerini uyguluyoruz ve sürekli 
                      olarak güvenlik protokollerimizi geliştiriyoruz.
                    </p>
                    
                    <div className="bg-purple-50 p-6 rounded-xl mt-6 mb-8 border border-purple-100">
                      <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Önemli Bilgilendirme
                      </h3>
                      <p className="text-purple-800 mb-0">
                        Veri güvenliği konusunda şeffaflığı önemsiyoruz. Hiçbir dijital sistem %100 güvenli değildir, ancak 
                        verilerinizi korumak için sürekli olarak en yüksek güvenlik standartlarını uygulamaktayız. 
                        Bilgi güvenliği ekibimiz, sistemlerimizi düzenli olarak test etmekte ve güvenlik denetimlerine tabi tutmaktadır.
                      </p>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Uygulanan Güvenlik Önlemleri
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.99 9.20996L14.56 11.6399C13.15 13.0399 13.15 15.3699 14.56 16.7699C15.96 18.1599 18.29 18.1599 19.7 16.7699L22.13 14.3399" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7.01001 14.7999L9.44001 12.3699C10.85 10.9699 10.85 8.63993 9.44001 7.23993C8.04001 5.84993 5.71001 5.84993 4.30001 7.23993L1.87 9.68994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7.01 14.8L16.99 9.21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">SSL/TLS Şifreleme</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Tüm veri transferlerinde SSL/TLS şifreleme protokolleri kullanılmaktadır. Bu, internet 
                              üzerindeki iletişimin güvenli şekilde şifrelenmesini sağlar.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.71 16.3C3.25 15.74 3 15.06 3 14.33C3 13.0899 3.53 11.9199 4.45 11.0999C5.37 10.2799 6.59 9.94994 7.74 10.1899C8.27 8.92994 9.22 7.88994 10.44 7.26994C11.66 6.64994 13.06 6.5 14.36 6.78994C15.66 7.07994 16.8 7.77994 17.63 8.76994C18.46 9.75994 18.94 10.99 18.99 12.27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M21 16H16L18.05 18.05L16 20.11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 14H9L11.05 16.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Düzenli Yedekleme</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Veri kaybını önlemek için düzenli ve otomatik yedekleme sistemleri kullanılmaktadır. 
                              Yedekler şifreli olarak saklanır.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 11V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 11V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15 11V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Güvenlik Duvarları</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Gelişmiş güvenlik duvarları ve saldırı tespit sistemleri ile yetkisiz erişimler 
                              ve siber saldırılar engellenmektedir.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.0199 2.05005C11.6299 1.77005 12.3699 1.77005 12.9799 2.05005L19.5099 4.72005C20.7199 5.22005 20.7199 6.97005 19.5099 7.47005L12.9799 10.1401C12.3699 10.4201 11.6299 10.4201 11.0199 10.1401L4.48994 7.47005C3.27994 6.97005 3.27994 5.22005 4.48994 4.72005L11.0199 2.05005Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M20.9999 13V17.55C20.9999 19.11 19.9499 20.51 18.4599 20.9L12.9999 22.46C12.3499 22.65 11.6499 22.65 10.9999 22.46L5.53994 20.9C4.04994 20.51 2.99994 19.11 2.99994 17.55V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Erişim Kontrolleri</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Çok faktörlü kimlik doğrulama ve rol tabanlı erişim kontrolleri ile verilerinize 
                              sadece yetkili personel ulaşabilmektedir.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Veri Minimizasyonu</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Sadece gereken verileri toplayarak ve işleyerek olası riskleri azaltıyoruz.
                              Amaçla sınırlı veri işleme prensibi uygulanmaktadır.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-purple-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14C12.8285 14 13.5 13.3284 13.5 12.5C13.5 11.6716 12.8285 11 12 11C11.1715 11 10.5 11.6716 10.5 12.5C10.5 13.3284 11.1715 14 12 14Z" fill="currentColor"/>
                        <path d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.72997C3.08997 5.90997 3.70997 4.97997 4.47997 4.66997L10.05 2.39001C11.3 1.88001 12.71 1.88001 13.96 2.39001L19.53 4.66997C20.29 4.97997 20.92 5.90997 20.92 6.72997L20.91 11.12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Veri Saklama ve İmha Politikası
                    </h3>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-4">
                        Kişisel verileriniz, aşağıdaki prensiplere göre saklanmakta ve imha edilmektedir:
                      </p>
                      
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Verileriniz, ilgili yasal düzenlemelerde belirtilen süreler boyunca saklanır.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Hizmete ilişkin yükümlülüklerimiz sona erdiğinde veya veri işleme amacı ortadan kalktığında, verileriniz silinir, yok edilir veya anonim hale getirilir.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>İmha işlemleri, güvenli silme yöntemleri kullanılarak gerçekleştirilir ve kayıt altına alınır.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Talebiniz üzerine, KVKK kapsamındaki haklarınız çerçevesinde verilerinizin silinmesini isteyebilirsiniz.</span>
                        </li>
                    </ul>
                    </div>
                    
                    <p className="mt-6 text-gray-600">
                      Virtual Riddle olarak, güvenlik önlemlerimizi sürekli gözden geçirmekte ve teknolojik gelişmelere 
                      paralel olarak iyileştirmeler yapmaktayız. Güvenlik süreçlerimiz ve veri koruma önlemlerimiz 
                      hakkında daha detaylı bilgi için bizimle iletişime geçebilirsiniz.
                    </p>
                  </div>
                </div>
              </section>

              {/* Çerezler */}
              <section id="cerezler" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.9965 12H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.9955 12H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.99451 12H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Çerezler ve İzleme</h2>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle olarak web sitemizde ve hizmetlerimizde deneyiminizi en iyi hale getirmek, 
                      site performansını analiz etmek ve daha kişiselleştirilmiş bir hizmet sunmak için çerez 
                      ve benzer teknolojileri kullanmaktayız.
                    </p>
                    
                    <div className="bg-amber-50 p-6 rounded-xl mt-6 mb-6 border border-amber-100">
                      <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Çerez Kullanımı Rızası
                      </h3>
                      <p className="text-amber-800 mb-4">
                        Virtual Riddle web sitesini veya hizmetlerini kullanarak, çerezler ve benzer izleme teknolojileri aracılığıyla veri toplanmasına, işlenmesine ve kullanılmasına onay vermiş sayılırsınız. Bu onay, hizmetlerimizi kullanmak için gereklidir ve çerezleri reddetmeniz durumunda hizmetlerimizin tamamını veya bir kısmını kullanamayabilirsiniz.
                      </p>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-amber-800 text-sm flex items-start">
                          <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>
                            Çerezlerin devre dışı bırakılabilmesi için tarayıcı ayarlarınızda değişiklik yapmanız mümkün olsa da, bu değişiklikler web sitemizdeki ve uygulamalarımızdaki temel işlevselliği ciddi şekilde etkileyebilir. Ayrıca bazı çerezlerin devre dışı bırakılmasının sizinle yaptığımız sözleşmelerin yerine getirilmesini imkânsız hale getirebileceğini ve bu durumda hizmet sunumunu sonlandırma hakkımızın saklı olduğunu belirtmek isteriz.
                          </span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 p-6 rounded-xl mt-6 mb-8 border border-amber-100">
                      <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Çerez Nedir?
                      </h3>
                      <p className="text-amber-800 mb-0">
                        Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız tarafından cihazınıza kaydedilen küçük 
                        metin dosyalarıdır. Bu dosyalar, siteyi nasıl kullandığınız, hangi sayfaları ziyaret ettiğiniz 
                        ve belirli işlevleri nasıl kullandığınız hakkında bilgi toplar. Bu bilgiler, sonraki ziyaretlerinizde 
                        sitemizi daha kullanışlı ve kişiselleştirilmiş hale getirmemize yardımcı olur.
                      </p>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-6 flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.16992 7.44L11.9999 12.55L20.7699 7.46997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 21.61V12.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.92965 2.48L4.58965 5.44C3.37965 6.11 2.38965 7.79 2.38965 9.17V14.82C2.38965 16.2 3.37965 17.88 4.58965 18.55L9.92965 21.52C11.0696 22.15 12.9396 22.15 14.0796 21.52L19.4196 18.55C20.6296 17.88 21.6196 16.2 21.6196 14.82V9.17C21.6196 7.79 20.6296 6.11 19.4196 5.44L14.0796 2.47C12.9296 1.84 11.0696 1.84 9.92965 2.48Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Kullandığımız Çerez Türleri
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Zorunlu Çerezler</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Bu çerezler, web sitemizin düzgün çalışması için gereklidir ve sistem ayarlarımızda 
                              kapatılamazlar. Bunlar genellikle yalnızca sizin tarafınızdan yapılan ve bir hizmet 
                              talebinde bulunma, gizlilik tercihlerinizi ayarlama, sisteme giriş yapma gibi 
                              eylemlerinize yanıt olarak ayarlanır.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M17 2.44V7.99C17 8.54 16.36 8.84 15.92 8.49L14.76 7.6C14.55 7.44 14.24 7.44 14.04 7.6L12.87 8.49C12.43 8.84 11.79 8.55 11.79 7.99V2.44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Performans Çerezleri</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Bu çerezler, ziyaretçi sayısı ve trafik kaynakları gibi bilgileri toplamak için 
                              kullanılır. Bu çerezler, web sitemizin performansını ölçmemize ve iyileştirmemize 
                              yardımcı olur. Bu çerezlerin topladığı tüm bilgiler anonimdir.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M21.5 7.5L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 16L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">İşlevsellik Çerezleri</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Bu çerezler, web sitemizde gelişmiş işlevsellik ve kişiselleştirme sunmamıza 
                              olanak tanır. Bunlar bizim tarafımızdan veya yerleştirdiğimiz üçüncü taraf 
                              sağlayıcılar tarafından ayarlanabilir. Bu çerezlere izin vermezseniz, 
                              bu hizmetlerin bazıları veya tamamı düzgün çalışmayabilir.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-5 h-5 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.1286 8.34863L20.3996 13.1696C20.7596 13.4196 21.0296 14.0396 20.9696 14.4896L20.1596 19.7596C20.0696 20.4196 19.4196 20.9396 18.7496 20.8596L13.5096 20.1196C13.0596 20.0596 12.4396 20.3196 12.1896 20.6896L8.99957 25.0796C8.45957 25.8096 7.53957 25.8196 6.98957 25.0796L3.79957 20.6896C3.55957 20.3196 2.93957 20.0596 2.48957 20.1196L7.32957 15.2796C7.02957 14.9796 6.60957 14.4696 6.69957 14.0196L7.50957 8.74961C7.59957 8.08961 8.24957 7.56961 8.91957 7.64961L14.1596 8.38961C14.6096 8.45961 15.2296 8.19961 15.4796 7.82961L18.6696 3.43961C19.2096 2.70961 20.1296 2.69961 20.6796 3.43961L23.8696 7.82961C24.1096 8.19961 24.7296 8.45961 25.1796 8.38961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2.66992 18.9496L7.60992 14.0096" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Hedefleme Çerezleri</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Bu çerezler, ilgi alanlarınıza uygun olabilecek reklamları göstermek için 
                              reklam ortaklarımız tarafından web sitemiz aracılığıyla ayarlanabilir. 
                              Bu çerezler benzersiz bir tanımlayıcı içerebilir ve diğer sitelerdeki 
                              tarama alışkanlıklarınızı izleyebilecek bilgiler toplayabilir.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-6 flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z" fill="currentColor"/>
                      </svg>
                      Diğer İzleme Teknolojileri
                    </h3>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
                      <p className="text-gray-700 mb-4">
                        Çerezlere ek olarak, deneyiminizi iyileştirmek, site kullanımını analiz etmek ve 
                        ürünlerimizi geliştirmek için aşağıdaki teknolojileri de kullanabiliriz:
                      </p>
                      
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span><strong>Web İşaretçileri (Beacon):</strong> Bu küçük grafik dosyaları, bir web sayfasının veya e-postanın açılıp açılmadığını takip etmek için kullanılır.</span>
                      </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span><strong>Piksel Etiketleri:</strong> Web sayfalarına gömülen küçük görüntü dosyaları olup, kullanıcı davranışını izlememize yardımcı olur.</span>
                      </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span><strong>Yerel Depolama (Local Storage):</strong> Bu teknoloji, web tarayıcınızın site tercihlerinizi ve diğer bilgileri cihazınızda saklamasına olanak tanır.</span>
                      </li>
                    </ul>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Çerez Tercihlerinizi Yönetme
                    </h3>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <p className="text-gray-700 mb-4">
                        Çoğu web tarayıcısı, çerezleri varsayılan olarak kabul edecek şekilde ayarlanmıştır. 
                        Ancak, çerezlerin kullanımını kontrol etmek veya kısıtlamak için tarayıcı ayarlarınızı 
                        değiştirebilirsiniz:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="font-medium text-gray-800">Google Chrome</p>
                          <p className="text-sm text-gray-600">Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Diğer Site Verileri</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="font-medium text-gray-800">Mozilla Firefox</p>
                          <p className="text-sm text-gray-600">Seçenekler &gt; Gizlilik ve Güvenlik &gt; Çerezler ve Site Verileri</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="font-medium text-gray-800">Safari</p>
                          <p className="text-sm text-gray-600">Tercihler &gt; Gizlilik &gt; Çerezler ve Web Sitesi Verileri</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="font-medium text-gray-800">Microsoft Edge</p>
                          <p className="text-sm text-gray-600">Ayarlar &gt; Çerezler ve Site İzinleri &gt; Çerezleri ve Site Verileri Yönet</p>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mt-4">
                        <p className="text-sm text-amber-800 flex items-start">
                          <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>
                            Lütfen çerezleri devre dışı bırakmanız durumunda, web sitemizin bazı özelliklerinin 
                            düzgün çalışmayabileceğini unutmayın. Özellikle, zorunlu çerezlerin devre dışı bırakılması 
                            sitemizin temel işlevlerini etkileyebilir.
                          </span>
                        </p>
                      </div>
                    </div>
                    
                    <p className="mt-6 text-gray-600">
                      Çerezlerle ilgili politikamız periyodik olarak gözden geçirilmekte ve güncellenmektedir. 
                      Çerez kullanımımız hakkında daha fazla bilgi almak veya çerez tercihlerinizle ilgili sorularınız için 
                      lütfen bizimle <a href="mailto:privacy@virtualriddle.com" className="text-blue-600 hover:underline">privacy@virtualriddle.com</a> 
                      adresinden iletişime geçebilirsiniz.
                    </p>
                  </div>
                </div>
              </section>

              {/* Gizlilik Hakları */}
              <section id="gizlilik-haklari" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4999 8.41994V16.8499C21.4999 19.2999 19.5599 21.2399 17.1099 21.2399H6.88989C4.43989 21.2399 2.49989 19.2999 2.49989 16.8499V8.41994" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11.9999V15.9999" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.25 12V16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.75 12V16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6.23996V6.89996C22 7.96996 21.76 8.93996 21.4 9.77996C20.28 8.90996 18.86 8.39996 17.33 8.39996H6.67C5.14 8.39996 3.72 8.90996 2.6 9.77996C2.24 8.93996 2 7.96996 2 6.89996V6.23996C2 3.98996 3.79 2.19995 6.04 2.19995H17.96C20.21 2.19995 22 3.98996 22 6.23996Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Gizlilik Hakları</h2>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle olarak, kişisel verileriniz üzerinde kontrolünüzün olması gerektiğine inanıyoruz. 
                      <strong className="text-emerald-700"> 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)</strong> kapsamında aşağıdaki haklara sahipsiniz:
                    </p>
                    
                    <div className="bg-amber-50 p-6 rounded-xl mt-6 mb-8 border border-amber-100">
                      <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Hakların Kapsamı ve Sınırlandırmalar
                      </h3>
                      <p className="text-amber-800 mb-4">
                        Aşağıda belirtilen haklarınızı kullanırken, lütfen şu hususları göz önünde bulundurunuz:
                      </p>
                      <ul className="space-y-2 text-amber-800">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Virtual Riddle, talep ettiğiniz hakkın kullanımını yasal yükümlülükler, teknik sınırlamalar, ticari sırlar, fikri mülkiyet hakları veya diğer kullanıcıların gizlilik hakları gerekçesiyle kısmen veya tamamen reddedebilir.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Veri silme talepleriniz, yasal saklama sürelerimiz kapsamındaki verileri içeremez ve bu talepler sistem bütünlüğümüzü, hizmet kalitesini veya yasal yükümlülüklerimizi riske atacak şekilde işleme alınamaz.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Haklarınızı kötüye kullanım teşkil edecek şekilde veya kötü niyetle kullanamaz, Virtual Riddle'ın operasyonlarını zorlaştıracak sıklıkta veya sayıda talepte bulunamazsınız.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Virtual Riddle, mevzuata aykırı olmamak kaydıyla, taleplerin değerlendirilmesi ve işleme alınması konusunda takdir hakkını saklı tutar ve bu hakkını kullanıcı menfaatlerini gözetme yükümlülüğü olmaksızın kullanabilir.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.75 9H8.25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.75 15H8.25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">Bilgi Edinme Hakkı</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenen veriler hakkında bilgi talep etme ve 
                              verilerin kimlere aktarıldığını bilme hakkına sahipsiniz.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15 12H3.62" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">Erişim Hakkı</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Kişisel verilerinize erişim talep etme ve verilerinizin bir kopyasını alma hakkına sahipsiniz.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">Düzeltme Hakkı</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Hatalı veya eksik kişisel verilerinizin düzeltilmesini talep etme hakkına sahipsiniz.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10.33 16.5H13.66" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9.5 12.5H14.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">Silme Hakkı</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Belirli koşullar altında kişisel verilerinizin silinmesini talep etme hakkına sahipsiniz.
                              Bu hak, "unutulma hakkı" olarak da bilinir.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.93 8.95L15.04 4.06C14.47 3.49 13.53 3.49 12.96 4.06L8.07001 8.95C7.80001 9.22 7.66 9.59 7.66 9.98V17.92C7.66 18.88 8.43001 19.65 9.39001 19.65H18.61C19.57 19.65 20.34 18.88 20.34 17.92V9.98C20.34 9.59 20.2 9.22 19.93 8.95Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M5.21 10.81L4.07 11.95C3.5 12.52 3.5 13.46 4.07 14.03L8.96 18.92C9.23 19.19 9.59999 19.33 9.99 19.33H17.93C18.89 19.33 19.66 18.56 19.66 17.6V8.38C19.66 7.42 18.89 6.65 17.93 6.65H9.99C9.59999 6.65 9.23 6.79 8.96 7.06L5.21 10.81Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M11.25 10.7H16.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M11.25 14.7H14.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">İşleme Sınırlandırma Hakkı</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Belirli koşullar altında kişisel verilerinizin işlenmesini sınırlandırma hakkına sahipsiniz.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">Veri Taşınabilirliği Hakkı</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Kişisel verilerinizi yapılandırılmış, yaygın kullanılan ve makine tarafından okunabilir bir formatta alma ve 
                              bu verileri başka bir veri sorumlusuna aktarma hakkına sahipsiniz.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9.17 14.83L14.83 9.17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14.83 14.83L9.17 9.17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">İtiraz Hakkı</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Kişisel verilerinizin işlenmesine karşı çıkma hakkına sahipsiniz. Bu, özellikle 
                              profilleme ve doğrudan pazarlama amacıyla işlenen veriler için geçerlidir.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.5 9.75C14.54 6.6 8.5 6 8.5 11.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8.5 10.5L7 12.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8.5 10.5L10.5 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14.5 16V12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14.5 15.5C15.9 16.1 17.5 14.5 16.5 13.5C15.5 12.5 14.5 13.5 14.5 15.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">Onayı Geri Çekme Hakkı</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Daha önce vermiş olduğunuz herhangi bir onayı istediğiniz zaman geri çekme hakkına sahipsiniz. 
                              Onayın geri çekilmesi, geri çekme işleminden önceki veri işleme faaliyetlerinin hukuka uygunluğunu etkilemez.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50/50 p-6 rounded-xl mt-10 border border-emerald-100">
                      <h3 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-emerald-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="currentColor"/>
                        </svg>
                        Haklarınızı Nasıl Kullanabilirsiniz?
                      </h3>
                      <div className="text-emerald-800">
                        <p className="mb-4">
                          Yukarıda belirtilen haklarınızı kullanmak için bize yazılı olarak başvurabilirsiniz. 
                          Başvurunuzu aşağıdaki kanallardan birini kullanarak yapabilirsiniz:
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-white p-4 rounded-lg border border-emerald-200 flex items-center">
                            <svg className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div>
                              <span className="text-sm font-medium text-emerald-900">E-posta ile:</span>
                              <a href="mailto:privacy@virtualriddle.com" className="block text-sm hover:underline text-emerald-700">privacy@virtualriddle.com</a>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg border border-emerald-200 flex items-center">
                            <svg className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 8H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div>
                              <span className="text-sm font-medium text-emerald-900">İletişim formu ile:</span>
                              <a href="/contact" className="block text-sm hover:underline text-emerald-700">İletişim sayfamızdan</a>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-emerald-200 flex items-center mb-4">
                          <svg className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 10.9999V4.83989C22 3.33989 21.51 2.91989 19.9 2.91989H16.1C14.49 2.91989 14 3.33989 14 4.83989V10.9999C14 12.4999 14.49 12.9199 16.1 12.9199H19.9C21.51 12.9199 22 12.4999 22 10.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 19.77V18.87C22 17.37 21.51 16.95 19.9 16.95H16.1C14.49 16.95 14 17.37 14 18.87V19.77C14 21.27 14.49 21.69 16.1 21.69H19.9C21.51 21.69 22 21.27 22 19.77Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 13.0999V19.2599C10 20.7599 9.51 21.1799 7.9 21.1799H4.1C2.49 21.1799 2 20.7599 2 19.2599V13.0999C2 11.5999 2.49 11.1799 4.1 11.1799H7.9C9.51 11.1799 10 11.5999 10 13.0999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 4.23V5.13C10 6.63 9.51 7.05 7.9 7.05H4.1C2.49 7.05 2 6.63 2 5.13V4.23C2 2.73 2.49 2.31 4.1 2.31H7.9C9.51 2.31 10 2.73 10 4.23Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <div>
                            <span className="text-sm font-medium text-emerald-900">Hesap ayarları üzerinden:</span>
                            <a href="/account/privacy" className="block text-sm hover:underline text-emerald-700">Gizlilik ve Veri bölümünden</a>
                          </div>
                        </div>
                        
                        <p className="mb-2">
                          Başvurunuzda aşağıdaki bilgilerin bulunması gerekmektedir:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
                          <li>Ad ve soyadınız</li>
                          <li>KVKK kapsamında hangi hakkınızı kullanmak istediğiniz</li>
                          <li>Başvurunuza ilişkin açıklamalar</li>
                          <li>İletişim bilgileriniz</li>
                    </ul>
                        
                        <p className="text-sm">
                          Başvurunuzu aldıktan sonra, talebinizi <strong>en geç 30 gün içinde</strong> ücretsiz olarak 
                          sonuçlandıracağız. İşlemin ayrıca bir maliyet gerektirmesi halinde, Kişisel Verileri Koruma 
                          Kurulu tarafından belirlenen tarifedeki ücret talep edilebilir.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-4">
                        <svg className="w-8 h-8 text-amber-500 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-900">Önemli Bilgilendirme</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Virtual Riddle olarak, kişisel verilerinizin korunması kapsamındaki haklarınıza saygı duyuyor ve 
                        bu hakların kullanımını kolaylaştırmak için her türlü çabayı gösteriyoruz. Ancak, bazı durumlarda 
                        yasal yükümlülüklerimiz gereği taleplerinizi kısmen veya tamamen karşılayamayabiliriz.
                      </p>
                      <p className="text-gray-700 mb-0">
                        Haklarınızın kullanımı konusunda detaylı bilgi almak veya sorularınızı iletmek için yukarıda 
                        belirtilen kanallardan bizimle iletişime geçebilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Veri İhlali Bildirimi */}
              <section id="veri-ihlali" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8.95V12.55" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 16.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.05 3.32L3.67 13.5C2.01 16.5 4.17 20 7.59 20H16.41C19.83 20 21.99 16.5 20.33 13.5L14.95 3.32C13.18 0.22 10.83 0.22 9.05 3.32Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Veri İhlali Bildirimi</h2>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle olarak, kişisel verilerinizin güvenliği bizim için son derece önemlidir. 
                      Olası bir veri ihlali durumunda, şeffaflık ilkemiz doğrultusunda sizleri bilgilendirmek ve 
                      gerekli önlemleri almak için aşağıdaki süreci takip etmekteyiz.
                    </p>
                    
                    <div className="bg-red-50 p-6 rounded-xl mt-6 mb-8 border border-red-100">
                      <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Sorumluluk Sınırlandırması
                      </h3>
                      <p className="text-red-800 mb-4">
                        Virtual Riddle, verilerin korunması için endüstri standardı güvenlik önlemlerini uygulamakla birlikte, herhangi bir veri ihlali durumunda aşağıdaki hususlar geçerlidir:
                      </p>
                      <ul className="space-y-2 text-red-800">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Virtual Riddle, üçüncü taraf hizmet sağlayıcıları, tedarikçiler, iş ortakları veya bağlı kuruluşlar tarafından gerçekleşen veri ihlallerinden sorumlu tutulamaz.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Bildirimler, yalnızca uygulanabilir yasaların zorunlu tuttuğu durumlarda ve kapsamda yapılacaktır. Virtual Riddle, bildirim yapmama kararını gerektiren güvenlik veya hukuki nedenler olması durumunda bildirimi erteleme veya kısıtlama hakkını saklı tutar.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Virtual Riddle, veri ihlali sonucunda oluşabilecek doğrudan veya dolaylı hiçbir zarar ve kayıptan (kâr kaybı, itibar kaybı, iş kaybı, fırsat kaybı, gelir kaybı veya diğer ekonomik kayıplar dahil) sorumlu olmayacaktır.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Veri ihlali bildirimi, Virtual Riddle'ın herhangi bir sorumluluğu kabul ettiği anlamına gelmemektedir. Tüm yasal haklarımız ve yasal savunma araçlarımız saklıdır.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl mt-8 mb-8 border border-red-100">
                      <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Veri İhlali Nedir?
                      </h3>
                      <p className="text-red-800 mb-0">
                        Veri ihlali, kişisel verilerin kazara veya yasadışı yollarla imha edilmesi, kaybolması, değiştirilmesi, 
                        yetkisiz şekilde ifşa edilmesi veya bunlara erişim sağlanması durumudur. Veri ihlalleri, siber saldırılar, 
                        fiziksel güvenlik ihlalleri, insan hatası veya sistem arızaları gibi çeşitli nedenlerden kaynaklanabilir.
                      </p>
                    </div>
                    
                    {/* Veri İhlali Yönetim Süreci - Görsel Adımlar */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-6 flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9998 19.9201L8.47983 13.4001C7.70983 12.6301 7.70983 11.3701 8.47983 10.6001L14.9998 4.08008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Veri İhlali Yönetim Süreci
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-y-10 relative mb-10">
                      {/* Bağlantı çizgisi */}
                      <div className="absolute left-6 top-10 bottom-0 w-1 bg-gradient-to-b from-red-500 to-orange-400 rounded-full"></div>
                      
                      {/* Adım 1 */}
                      <div className="flex group">
                        <div className="relative">
                          <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-bold z-10 relative transition-all duration-300 group-hover:scale-110 shadow-lg">1</div>
                          <div className="absolute top-0 left-0 w-12 h-12 bg-red-500 rounded-full animate-ping opacity-20 z-0"></div>
                        </div>
                        <div className="ml-6 bg-white p-6 rounded-xl shadow-md border border-gray-100 flex-1 transform transition-all duration-300 group-hover:translate-x-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                            <svg className="w-5 h-5 text-red-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.15 17.15L12 21L15.85 17.15" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 12V21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M20.95 13.05C22.15 10.83 22.51 7.86 20.9 5.6C19.96 4.21 18.5 3.28 16.88 2.91C15.26 2.53 13.55 2.74 12.09 3.48L10.97 4.01" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M3.5 10.99C2.55 13.24 2.87 15.9 4.4 17.9C5.33 19.3 6.79 20.23 8.41 20.6C10.03 20.97 11.74 20.77 13.2 20.02L14.04 19.56" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8.5 8.5L8.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.5 15.5L15.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Tespit ve İlk Değerlendirme
                          </h4>
                          <p className="text-gray-600">
                            Olası bir veri ihlali tespit edildiğinde, ilk olarak ihlal kapsamını, etkilenen veri türlerini ve 
                            etkilenen kişi sayısını belirlemek için hızlı bir değerlendirme yapılır. Bu aşama, veri ihlali 
                            yönetim sürecinin kritik bir adımıdır.
                          </p>
                        </div>
                      </div>
                      
                      {/* Adım 2 */}
                      <div className="flex group">
                        <div className="relative">
                          <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold z-10 relative transition-all duration-300 group-hover:scale-110 shadow-lg">2</div>
                          <div className="absolute top-0 left-0 w-12 h-12 bg-red-600 rounded-full animate-ping opacity-20 z-0 animation-delay-300"></div>
                        </div>
                        <div className="ml-6 bg-white p-6 rounded-xl shadow-md border border-gray-100 flex-1 transform transition-all duration-300 group-hover:translate-x-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                            <svg className="w-5 h-5 text-red-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.38 10.58V15.31C17.38 16.13 16.99 16.9 16.33 17.44L12.41 20.58C11.33 21.45 9.75999 21.45 8.66999 20.58L4.75999 17.44C4.09999 16.9 3.70999 16.13 3.70999 15.31V10.58C3.70999 9.22 4.63999 7.97 6.01999 7.57V7.57C8.83999 6.81 11.85 6.81 14.67 7.57V7.57C16.05 7.97 17.38 9.22 17.38 10.58Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 12V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M20.29 6.95999L19.42 5.74999C18.86 4.96999 17.75 4.79999 16.99 5.37999L16.57 5.68999C15.41 6.51999 13.87 6.48999 12.75 5.62999L12.6 5.49999C11.48 4.61999 9.95001 4.59999 8.79001 5.44999L8.37001 5.75999C7.60001 6.33999 6.49001 6.16999 5.93001 5.38999L5.06001 4.17999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 16L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 16L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Yetkili Kurumlara Bildirim
                          </h4>
                          <p className="text-gray-600">
                            Kişisel Verileri Koruma Kurumu'na (KVKK) ihlal tespit edildikten sonra en geç 72 saat içinde bildirimde bulunulur. 
                            Bu bildirimde, ihlal hakkında detaylı bilgiler, muhtemel sonuçlar ve alınan önlemler hakkında bilgiler paylaşılır.
                          </p>
                        </div>
                      </div>
                      
                      {/* Adım 3 */}
                      <div className="flex group">
                        <div className="relative">
                          <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center text-lg font-bold z-10 relative transition-all duration-300 group-hover:scale-110 shadow-lg">3</div>
                          <div className="absolute top-0 left-0 w-12 h-12 bg-red-700 rounded-full animate-ping opacity-20 z-0 animation-delay-600"></div>
                        </div>
                        <div className="ml-6 bg-white p-6 rounded-xl shadow-md border border-gray-100 flex-1 transform transition-all duration-300 group-hover:translate-x-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                            <svg className="w-5 h-5 text-red-700 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.4 17.5H5.6C3.6 17.5 2 15.9 2 13.9V7.1C2 5.1 3.6 3.5 5.6 3.5H18.4C20.4 3.5 22 5.1 22 7.1V13.9C22 15.9 20.4 17.5 18.4 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 17.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 21.5H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7.5 10.5H10.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M13.5 10.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Etkilenenlere Bildirim
                          </h4>
                          <p className="text-gray-600">
                            Veri ihlalinden etkilenen kişilere, ihlal hakkında açık ve anlaşılır bir dille bilgi verilir. Bu bildirimde, 
                            ihlalin niteliği, muhtemel sonuçları ve alınan önlemler hakkında bilgiler yer alır. Bildirim, e-posta, SMS 
                            veya web sitesi duyurusu gibi uygun kanallar aracılığıyla yapılır.
                          </p>
                        </div>
                      </div>
                      
                      {/* Adım 4 */}
                      <div className="flex group">
                        <div className="relative">
                          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold z-10 relative transition-all duration-300 group-hover:scale-110 shadow-lg">4</div>
                          <div className="absolute top-0 left-0 w-12 h-12 bg-orange-500 rounded-full animate-ping opacity-20 z-0 animation-delay-900"></div>
                        </div>
                        <div className="ml-6 bg-white p-6 rounded-xl shadow-md border border-gray-100 flex-1 transform transition-all duration-300 group-hover:translate-x-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                            <svg className="w-5 h-5 text-orange-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7.75 12.0001L10.58 14.8301L16.25 9.17007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            İyileştirme ve Önleme
                          </h4>
                          <p className="text-gray-600">
                            Veri ihlalinin nedenini belirlemek için kapsamlı bir inceleme yapılır ve benzer ihlallerin tekrarlanmaması 
                            için gerekli teknik ve idari önlemler alınır. Güvenlik politikaları gözden geçirilir, personel eğitimleri 
                            düzenlenir ve gerekli sistem güncellemeleri yapılır.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Veri İhlali Şüphesi Bildirimi */}
                    <div className="bg-orange-50 p-6 rounded-xl mt-10 border border-orange-100">
                      <h3 className="text-xl font-semibold text-orange-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="currentColor"/>
                        </svg>
                        Veri İhlali Şüphelerinizi Bildirin
                      </h3>
                      <p className="text-orange-800 mb-4">
                        Kişisel verilerinizle ilgili olası bir ihlal durumundan şüpheleniyorsanız veya güvenlik endişeleriniz varsa, 
                        lütfen aşağıdaki kanallar aracılığıyla bize bildirin:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-orange-200 flex items-center">
                          <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                          <div>
                            <span className="text-sm font-medium text-orange-900">E-posta ile:</span>
                            <a href="mailto:security@virtualriddle.com" className="block text-sm hover:underline text-orange-700">security@virtualriddle.com</a>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-orange-200 flex items-center">
                          <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 8H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <div>
                            <span className="text-sm font-medium text-orange-900">İletişim formu ile:</span>
                            <a href="/contact" className="block text-sm hover:underline text-orange-700">İletişim sayfamızdan</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="mt-8 text-gray-700">
                      Virtual Riddle olarak, veri güvenliği konusunda proaktif bir yaklaşım benimsemekteyiz. 
                      Potansiyel riskleri en aza indirmek ve veri güvenliğinizi en üst düzeyde sağlamak için 
                      sürekli olarak güvenlik önlemlerimizi gözden geçiriyor ve geliştiriyoruz. Gizlilik ve veri 
                      güvenliği konularında sorularınız için her zaman yanınızdayız.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 