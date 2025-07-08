"use client";

import JobApplicationModal from "../components/JobApplicationModal";
import { useState } from "react";

export default function CareerPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const positions = [
    {
      title: "Jira Administrator (Remote)",
      tags: ["Tam Zamanlı", "Remote", "Türkiye"]
    },
    {
      title: "Atlassian Expert (Remote)",
      tags: ["Tam Zamanlı", "Remote", "Türkiye"]
    },
    {
      title: "Jr. Atlassian Consultant (Remote)",
      tags: ["Yarı Zamanlı", "Remote", "Türkiye"]
    }
  ];

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setModalOpen(true);
  };

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
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
              <img
                src="/images/office-illustration.jpeg"
                alt="Ofis ve Ekip Çalışması İllustrasyonu"
                className="object-cover w-full h-full"
              />
            </div>

            {/* İçerik */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Ekibimize Katılın
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
      <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-blue-900 flex items-center justify-center gap-3">
              <span>✨</span> Neden Virtual Riddle? <span>🚀</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Kişisel ve Profesyonel Gelişim</h3>
                <p className="text-gray-700">Sürekli eğitim, sertifika ve konferans desteğiyle hem teknik hem kişisel gelişiminiz için yatırım yapıyoruz.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Remote & Hibrit Çalışma</h3>
                <p className="text-gray-700">Dilediğiniz yerden, esnek saatlerle çalışabilir; iş-yaşam dengenizi koruyabilirsiniz.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">💙</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Çalışana Saygı & Destek</h3>
                <p className="text-gray-700">Hayatınıza ve özel zamanlarınıza saygı duyan, sağlıklı iş yükü ve psikolojik güvenlik sunan bir ortam.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Takım Ruhu & Birlikte Başarma</h3>
                <p className="text-gray-700">Açık iletişim, destekleyici ekip ve birlikte öğrenme kültürüyle başarıya birlikte ulaşırız.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Yan Haklar & Avantajlar</h3>
                <p className="text-gray-700">Özel sağlık sigortası, yemek kartı, ekipman desteği ve sürpriz ödüllerle motivasyonunuzu artırıyoruz.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Çeşitlilik & Kapsayıcılık</h3>
                <p className="text-gray-700">Farklılıklara değer veren, kapsayıcı ve eşitlikçi bir iş ortamı sunuyoruz.</p>
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
              {positions.map((pos) => (
                <div key={pos.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pos.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {pos.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <button
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      onClick={() => handleApply(pos.title)}
                    >
                      Başvur
                    </button>
                  </div>
                </div>
              ))}
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
      <JobApplicationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        position={selectedPosition || ""}
      />
    </main>
  );
} 