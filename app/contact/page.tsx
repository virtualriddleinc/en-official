"use client";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">İletişim</h1>
            <p className="text-xl">
              Dijital dönüşüm yolculuğunuza başlamak için bizimle iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Formu ve Bilgiler */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* İletişim Formu */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Bize Ulaşın</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="ornek@sirket.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Mesajınızın konusu"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Mesajınız..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Gönder
                  </button>
                </form>
              </div>

              {/* İletişim Bilgileri */}
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">E-posta</h3>
                        <p className="text-gray-600">info@virtualriddle.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Adres</h3>
                        <p className="text-gray-600">
                          Maslak Mah. AOS 55. Sok. 42 Maslak B Blok No:4/542<br />
                          Sarıyer/İSTANBUL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Çalışma Saatleri */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Çalışma Saatleri</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Pazartesi - Cuma</span>
                      <span className="text-gray-900 font-semibold">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cumartesi</span>
                      <span className="text-gray-900 font-semibold">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Pazar</span>
                      <span className="text-gray-900 font-semibold">Kapalı</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.9733035135135!2d29.00679567679671!3d41.11277001379325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5c0e7378549%3A0x83e43c131234f719!2s42%20Maslak!5e0!3m2!1str!2str!4v1710165547974!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 