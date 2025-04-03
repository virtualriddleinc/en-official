"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CloudMigrationPage() {
  // Form durumu için state tanımı
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    currentEnvironment: "",
    usersCount: "",
    message: ""
  });

  // Mevcut Atlassian ortamları
  const environments = [
    "Server",
    "Data Center",
    "Cloud",
    "Henüz kullanmıyorum"
  ];

  // Kullanıcı sayıları
  const userCounts = [
    "1-10",
    "11-50",
    "51-250",
    "251-500",
    "501-2000",
    "2000+"
  ];

  // Form gönderim işleme
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form gönderildi:", formData);
    // API'ye gönderme işlemi burada gerçekleştirilecek
    alert("Değerlendirme talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.");
  };

  // Input değişimlerini yakalama
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Cloud Migration</h1>
            <p className="text-xl">
              Atlassian Cloud'a güvenli ve sorunsuz geçiş için uzman ekibimizden destek alın.
              Server ve Data Center ortamlarından Cloud'a sorunsuz geçiş çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Süreç Adımları */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Geçiş Süreci</h2>
            <p className="text-xl text-gray-600">
              Adım adım güvenli ve sorunsuz cloud geçişi için yapılandırılmış metodolojimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Adım 1 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Değerlendirme</h3>
              <p className="text-gray-600">Mevcut sistem analizi ve geçiş planı oluşturma, uygunluk değerlendirmesi</p>
              <div className="mt-6">
                <svg className="w-16 h-16 mx-auto text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 12L10 16L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Adım 2 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Hazırlık</h3>
              <p className="text-gray-600">Veri temizliği, yetkilendirme planı ve geçiş öncesi optimizasyon</p>
              <div className="mt-6">
                <svg className="w-16 h-16 mx-auto text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Adım 3 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Geçiş</h3>
              <p className="text-gray-600">Güvenli veri transferi, kullanıcı ve uygulama taşıma, doğrulama</p>
              <div className="mt-6">
                <svg className="w-16 h-16 mx-auto text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C7.11001 8 7.21947 8.00466 7.32779 8.01377C7.95849 5.66926 10.1655 4 12.7778 4C15.8921 4 18.4212 6.59238 18.5 9.80108C20.5 10.36 22 12.26 22 14.5C22 16.99 19.99 19 17.5 19H7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V16M12 16L15 13M12 16L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Adım 4 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">4</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Optimizasyon</h3>
              <p className="text-gray-600">Cloud ortamında performans optimizasyonu ve en iyi uygulamaların uygulanması</p>
              <div className="mt-6">
                <svg className="w-16 h-16 mx-auto text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 10L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5 15C14.5 17.2091 12.7091 19 10.5 19C8.29086 19 6.5 17.2091 6.5 15C6.5 12.7909 8.29086 11 10.5 11C12.7091 11 14.5 12.7909 14.5 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6C17.5 7.65685 16.1569 9 14.5 9C12.8431 9 11.5 7.65685 11.5 6C11.5 4.34315 12.8431 3 14.5 3C16.1569 3 17.5 4.34315 17.5 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faydalar Bölümü */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud'un Avantajları</h2>
            <p className="text-xl text-gray-600">
              Atlassian Cloud ile işinizi bir üst seviyeye taşımanın faydaları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fayda 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ölçeklenebilirlik</h3>
              <p className="text-gray-600">
                İhtiyaçlarınıza göre esnek kaynak kullanımı ile hızlı büyüme imkanı
              </p>
            </div>

            {/* Fayda 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gelişmiş Güvenlik</h3>
              <p className="text-gray-600">
                Enterprise seviye güvenlik, veri koruma ve düzenli otomatik güncellemeler
              </p>
            </div>

            {/* Fayda 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maliyet Tasarrufu</h3>
              <p className="text-gray-600">
                Altyapı maliyetlerinde önemli tasarruf ve yönetim kolaylığı ile maliyet optimizasyonu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Başvuru Formu */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-800 to-blue-950 rounded-3xl shadow-xl overflow-hidden">
              <div className="p-10 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-8">Ücretsiz Cloud Migration Değerlendirmesi</h2>
                <p className="text-white/80 mb-10">
                  Atlassian sistemleriniz için ücretsiz cloud migration analizi ve geçiş planı almak için aşağıdaki formu doldurun.
                  Uzman ekibimiz 24 saat içinde sizinle iletişime geçecektir.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Kişisel ve Şirket Bilgileri */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-2">
                        Ad Soyad*
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-white/80 mb-2">
                        Şirket Adı*
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="Şirketinizin adı"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        E-posta*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="ornek@sirket.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Telefon*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="+90 (___) ___ __ __"
                      />
                    </div>
                    <div>
                      <label htmlFor="currentEnvironment" className="block text-sm font-medium text-white/80 mb-2">
                        Mevcut Atlassian Ortamı*
                      </label>
                      <select
                        id="currentEnvironment"
                        name="currentEnvironment"
                        value={formData.currentEnvironment}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Mevcut ortamınızı seçin</option>
                        {environments.map(env => (
                          <option key={env} value={env} className="bg-blue-900 text-white">{env}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="usersCount" className="block text-sm font-medium text-white/80 mb-2">
                        Kullanıcı Sayısı*
                      </label>
                      <select
                        id="usersCount"
                        name="usersCount"
                        value={formData.usersCount}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Kullanıcı sayısını seçin</option>
                        {userCounts.map(count => (
                          <option key={count} value={count} className="bg-blue-900 text-white">{count}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Ek Mesaj */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Geçiş İle İlgili Bilgiler ve Beklentileriniz
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="Mevcut Atlassian ürünleriniz ve cloud geçişi hakkındaki beklentileriniz"
                    ></textarea>
                  </div>

                  {/* Gönder Butonu */}
                  <div className="flex flex-col sm:flex-row justify-end gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-3 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      Değerlendirme Talep Et
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 