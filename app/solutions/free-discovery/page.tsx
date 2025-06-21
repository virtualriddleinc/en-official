"use client";

import { useState } from "react";
import Link from "next/link";

export default function FreeDiscoveryPage() {
  // Form durumu için state tanımları
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    position: "",
    teamSize: "",
    products: {
      jira: false,
      confluence: false,
      bitbucket: false,
      jiraServiceManagement: false,
      advanced: false
    },
    challenges: [],
    currentTools: "",
    message: ""
  });

  // Ürün listesi ve açıklamaları
  const productList = [
    { id: "jira", name: "Jira Software", description: "Çevik proje yönetimi ve planlama" },
    { id: "confluence", name: "Confluence", description: "Döküman yönetimi ve bilgi tabanı" },
    { id: "bitbucket", name: "Bitbucket", description: "Git tabanlı kod yönetimi" },
    { id: "jiraServiceManagement", name: "Jira Service Management", description: "IT servis yönetimi" },
    { id: "advanced", name: "Advanced Roadmaps", description: "Gelişmiş proje planlama ve yönetimi" }
  ];

  // Şirket büyüklükleri
  const teamSizes = [
    "1-20",
    "21-100",
    "101-500",
    "501-1000",
    "1000+"
  ];

  // Form gönderim işleme
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form gönderildi:", formData);
    // API'ye gönderme işlemi burada gerçekleştirilecek
    alert("Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.");
  };

  // Input değişimlerini yakalama
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Ürün seçimlerini yakalama
  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      products: {
        ...formData.products,
        [name]: checked
      }
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Ücretsiz Keşif</h1>
            <p className="text-xl">
              Atlassian ürünleriyle dijital dönüşüm yolculuğunuzdaki ilk adımınızı birlikte atalım. 
              Uzman ekibimiz, kurumsal ihtiyaçlarınıza yönelik ücretsiz ön analiz ve raporlama hizmeti sunuyor.
            </p>
          </div>
        </div>
      </section>

      {/* Süreç Adımları */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ücretsiz Keşif Süreci</h2>
            <p className="text-xl text-gray-600">
              İhtiyaçlarınızı anlayarak, en uygun Atlassian çözümlerini belirliyor ve size özel bir yol haritası sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Adım 1 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Başvuru</h3>
              <p className="text-gray-600">Formu doldurarak ihtiyaçlarınızı ve mevcut durumunuzu paylaşın.</p>
              <div className="mt-6">
                <img src="/images/form-icon.svg" alt="Başvuru" className="w-16 h-16 mx-auto opacity-60" />
              </div>
            </div>

            {/* Adım 2 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Analiz</h3>
              <p className="text-gray-600">Uzman ekibimiz ihtiyaçlarınızı değerlendirir ve mevcut süreçlerinizi analiz eder.</p>
              <div className="mt-6">
                <img src="/images/analysis-icon.svg" alt="Analiz" className="w-16 h-16 mx-auto opacity-60" />
              </div>
            </div>

            {/* Adım 3 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Raporlama</h3>
              <p className="text-gray-600">Kurumunuza özel hazırlanan ayrıntılı değerlendirme raporunu alın.</p>
              <div className="mt-6">
                <img src="/images/report-icon.svg" alt="Raporlama" className="w-16 h-16 mx-auto opacity-60" />
              </div>
            </div>

            {/* Adım 4 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">4</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Sunum</h3>
              <p className="text-gray-600">Bulguları ve önerileri içeren raporun sunumu ve yol haritasının belirlenmesi.</p>
              <div className="mt-6">
                <img src="/images/presentation-icon.svg" alt="Sunum" className="w-16 h-16 mx-auto opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faydalar Bölümü */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neler Kazanacaksınız?</h2>
            <p className="text-xl text-gray-600">
              Ücretsiz keşif hizmetimiz sayesinde elde edeceğiniz kazanımlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fayda 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mevcut Durum Analizi</h3>
              <p className="text-gray-600">
                Mevcut iş süreçlerinizin detaylı bir değerlendirmesini alarak, iyileştirme fırsatlarını keşfedin.
              </p>
            </div>

            {/* Fayda 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimizasyon Önerileri</h3>
              <p className="text-gray-600">
                Atlassian ürünleriyle süreçlerinizi nasıl optimize edebileceğinize dair uzman önerileri alın.
              </p>
            </div>

            {/* Fayda 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Projeksiyonu</h3>
              <p className="text-gray-600">
                Atlassian çözümlerine yatırımınızın potansiyel getirisinin ölçülebilir bir değerlendirmesini alın.
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
                <h2 className="text-3xl font-bold text-white mb-8">Ücretsiz Keşif Başvuru Formu</h2>
                <p className="text-white/80 mb-10">
                  İhtiyaçlarınızı daha iyi anlayabilmemiz için aşağıdaki formu doldurarak başvurunuzu tamamlayın.
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
                      <label htmlFor="position" className="block text-sm font-medium text-white/80 mb-2">
                        Pozisyon
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="Şirketteki pozisyonunuz"
                      />
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-white/80 mb-2">
                        Şirket Büyüklüğü*
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Çalışan sayısını seçin</option>
                        {teamSizes.map(size => (
                          <option key={size} value={size} className="bg-blue-900 text-white">{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* İlgilenilen Ürünler */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">İhtiyacınız Olan Atlassian Ürünleri</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {productList.map(product => (
                        <div key={product.id} className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                          <input
                            type="checkbox"
                            id={product.id}
                            name={product.id}
                            checked={formData.products[product.id as keyof typeof formData.products]}
                            onChange={handleProductChange}
                            className="mt-1 h-5 w-5 rounded border-white/30 text-blue-500 focus:ring-blue-400"
                          />
                          <div>
                            <label htmlFor={product.id} className="block font-medium text-white cursor-pointer">
                              {product.name}
                            </label>
                            <p className="text-sm text-white/60">{product.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mevcut araçlar ve açıklama */}
                  <div>
                    <label htmlFor="currentTools" className="block text-sm font-medium text-white/80 mb-2">
                      Mevcut Kullandığınız Araçlar
                    </label>
                    <input
                      type="text"
                      id="currentTools"
                      name="currentTools"
                      value={formData.currentTools}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="Şu anda kullandığınız araçlar (ör. Trello, Asana, GitLab)"
                    />
                  </div>

                  {/* Ek Mesaj */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Ek Bilgiler ve Beklentileriniz
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="Projeleriniz ve beklentileriniz hakkında bize daha fazla bilgi verin"
                    ></textarea>
                  </div>

                  {/* Gönder Butonu */}
                  <div className="flex flex-col sm:flex-row justify-end gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-3 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      Başvuru Gönder
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