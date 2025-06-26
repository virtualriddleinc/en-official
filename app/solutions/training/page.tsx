"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";

export default function TrainingPage() {
  // Form durumu için state tanımı
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    position: "",
    interests: {
      jiraSoftware: false,
      confluence: false,
      jiraServiceManagement: false,
      bitbucket: false,
      advanced: false
    },
    currentExperience: "",
    message: ""
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const requiredFields = ["fullName", "companyName", "email", "phone", "message"];
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [validationMsg, setValidationMsg] = useState("");

  // Eğitim programları
  const programs = [
    { id: "jiraSoftware", name: "Jira Software", description: "Proje yönetimi ve Agile metodolojiler" },
    { id: "confluence", name: "Confluence", description: "İçerik yönetimi ve ekip iş birliği" },
    { id: "jiraServiceManagement", name: "Jira Service Management", description: "ITSM ve servis masası yönetimi" },
    { id: "bitbucket", name: "Bitbucket", description: "Git tabanlı kod yönetimi" },
    { id: "advanced", name: "Advanced Roadmaps", description: "Gelişmiş proje planlama ve portföy yönetimi" }
  ];

  // Deneyim seviyeleri
  const experienceLevels = [
    "Başlangıç",
    "Orta Seviye",
    "İleri Seviye",
    "Henüz deneyimim yok"
  ];

  // Kullanıcıya görünen ürün etiketleri
  const productLabels = {
    jiraSoftware: "Jira Software",
    confluence: "Confluence",
    jiraServiceManagement: "Jira Service Management",
    bitbucket: "Bitbucket",
    advanced: "İleri Seviye/Özel Eğitim"
  };

  function buildContent(form: typeof formData) {
    return [
      `Ad Soyad: ${form.fullName || "-"}`,
      `Şirket Adı: ${form.companyName || "-"}`,
      `E-posta: ${form.email || "-"}`,
      `Telefon: ${form.phone || "-"}`,
      `Pozisyon: ${form.position || "-"}`,
      `Deneyim Seviyesi: ${form.currentExperience || "-"}`,
      `Eğitim ve Sertifikasyon İlgisi: ${Object.entries(form.interests).filter(([k,v])=>v).map(([k])=>k).join(", ") || "-"}`,
      `Mesaj: ${form.message || "-"}`
    ].join("\n");
  }

  // Lambda ile uyumlu field mapping fonksiyonu
  function mapFormToLambda(form) {
    return {
      page: "/solutions/training",
      name: form.fullName,
      company: form.companyName,
      email: form.email,
      phone: form.phone,
      position: form.position,
      trainingType: form.trainingType || "",
      atlassianProducts: Object.entries(form.interests)
        .filter(([k,v])=>v)
        .map(([k])=>productLabels[k] || k)
        .join(", "),
      participantCount: form.participantCount || "",
      experienceLevel: form.currentExperience,
      trainingFormat: form.trainingFormat || "",
      language: form.language || "",
      timeline: form.timeline || "",
      certification: form.certification || "",
      customRequirements: form.customRequirements || "",
      message: form.message
    };
  }

  // Form gönderim işleme
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setValidationMsg("");
    // Validasyon
    const newErrors: { [key: string]: boolean } = {};
    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setValidationMsg("Lütfen zorunlu alanları doldurun.");
      setLoading(false);
      setTimeout(() => setValidationMsg(""), 3000);
      return;
    }
    // Lambda ile uyumlu payload oluştur
    const payload = mapFormToLambda(formData);
    try {
      const res = await fetch("https://rvskttz2jh.execute-api.us-east-1.amazonaws.com/prod/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        position: "",
        interests: {
          jiraSoftware: false,
          confluence: false,
          jiraServiceManagement: false,
          bitbucket: false,
          advanced: false
        },
        currentExperience: "",
        message: ""
      });
      setErrors({});
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        position: "",
        interests: {
          jiraSoftware: false,
          confluence: false,
          jiraServiceManagement: false,
          bitbucket: false,
          advanced: false
        },
        currentExperience: "",
        message: ""
      });
      setErrors({});
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Input değişimlerini yakalama
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Program seçimlerini yakalama
  const handleProgramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [name]: checked
      }
    });
  };

  useEffect(() => {
    if (status) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
            <h1 className="text-5xl font-bold text-white mb-6">Eğitim & Sertifikasyon</h1>
            <p className="text-xl">
              Atlassian ürünlerinde uzmanlaşın, kariyerinizi ileriye taşıyın.
              Profesyonel eğitimlerimizle bilgi ve becerinizi geliştirin, uluslararası geçerliliği olan
              sertifikalarla uzmanlığınızı belgeleyin.
            </p>
          </div>
        </div>
      </section>

      {/* Eğitimler Bölümü */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eğitim Programları</h2>
            <p className="text-xl text-gray-600">
              Temel seviyeden ileri seviyeye kadar kapsamlı eğitim programlarımız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Jira Software</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Proje yönetimi temelleri</li>
                <li>• Agile & Scrum metodolojileri</li>
                <li>• İş akışı yönetimi ve otomasyon</li>
                <li>• Raporlama ve analitik</li>
              </ul>
            </div>

            {/* Program 2 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Confluence</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• İçerik yönetimi ve oluşturma</li>
                <li>• Ekip iş birliği ve bilgi paylaşımı</li>
                <li>• Şablonlar ve makrolar</li>
                <li>• Entegrasyonlar ve özelleştirme</li>
              </ul>
            </div>

            {/* Program 3 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Jira Service Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ITSM temelleri ve ITIL uyumu</li>
                <li>• Servis masası yönetimi</li>
                <li>• SLA ve raporlama</li>
                <li>• Müşteri portalı ve otomasyon</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikasyon Süreci */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sertifikasyon Süreci</h2>
            <p className="text-xl text-gray-600">
              Atlassian sertifikaları ile uzmanlığınızı belgeleyin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Adım 1 */}
            <div className="bg-white p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Eğitim</h3>
              <p className="text-gray-600">Kapsamlı eğitim programı ile bilgi ve becerilerinizi geliştirin.</p>
            </div>

            {/* Adım 2 */}
            <div className="bg-white p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Pratik</h3>
              <p className="text-gray-600">Gerçek dünya senaryoları ile uygulama deneyimi kazanın.</p>
            </div>

            {/* Adım 3 */}
            <div className="bg-white p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Sınav</h3>
              <p className="text-gray-600">Online veya gözetimli sertifikasyon sınavına girin.</p>
            </div>

            {/* Adım 4 */}
            <div className="bg-white p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">4</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Sertifika</h3>
              <p className="text-gray-600">Resmi Atlassian sertifikanızı alın ve kariyerinizi ileriye taşıyın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifika Avantajları */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sertifika Avantajları</h2>
            <p className="text-xl text-gray-600">
              Atlassian sertifikasyonu ile elde edeceğiniz kazanımlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Avantaj 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Uluslararası Geçerlilik</h3>
              <p className="text-gray-600">
                Dünya çapında tanınan Atlassian sertifikaları ile global iş olanaklarına erişim sağlayın.
              </p>
            </div>

            {/* Avantaj 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kariyer Gelişimi</h3>
              <p className="text-gray-600">
                Sektördeki değerinizi artırın, daha iyi pozisyonlara ve ücretlere erişim kazanın.
              </p>
            </div>

            {/* Avantaj 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rekabet Avantajı</h3>
              <p className="text-gray-600">
                Diğer adaylardan farklılaşın, işverenlere doğrulanmış uzmanlığınızı gösterin.
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
                <h2 className="text-3xl font-bold text-white mb-8">Eğitim ve Sertifikasyon Başvuru Formu</h2>
                <p className="text-white/80 mb-10">
                  İhtiyaçlarınıza özel eğitim ve sertifikasyon programları için aşağıdaki formu doldurun.
                  Uzman ekibimiz 24 saat içinde sizinle iletişime geçecektir.
                </p>

                {/* Validasyon mesajı */}
                {validationMsg && (
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-800 rounded-xl px-4 py-2 shadow transition-all animate-fade-in-up">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <span className="font-semibold">{validationMsg}</span>
                    </div>
                  </div>
                )}

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
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.fullName ? 'border-red-500 bg-red-50' : ''}`}
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
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.companyName ? 'border-red-500 bg-red-50' : ''}`}
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
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.email ? 'border-red-500 bg-red-50' : ''}`}
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
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.phone ? 'border-red-500 bg-red-50' : ''}`}
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
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.position ? 'border-red-500 bg-red-50' : ''}`}
                        placeholder="Şirketteki pozisyonunuz"
                      />
                    </div>
                    <div>
                      <label htmlFor="currentExperience" className="block text-sm font-medium text-white/80 mb-2">
                        Atlassian Deneyim Seviyeniz*
                      </label>
                      <select
                        id="currentExperience"
                        name="currentExperience"
                        value={formData.currentExperience}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.currentExperience ? 'border-red-500 bg-red-50' : ''}`}
                      >
                        <option value="" disabled>Deneyim seviyenizi seçin</option>
                        {experienceLevels.map(level => (
                          <option key={level} value={level} className="bg-blue-900 text-white">{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* İlgilenilen Eğitimler */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">İlgilendiğiniz Eğitim Programları</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {programs.map(program => (
                        <div key={program.id} className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                          <input
                            type="checkbox"
                            id={program.id}
                            name={program.id}
                            checked={formData.interests[program.id as keyof typeof formData.interests]}
                            onChange={handleProgramChange}
                            className={`mt-1 h-5 w-5 rounded border-white/30 text-blue-500 focus:ring-blue-400 ${errors[program.id] ? 'border-red-500 bg-red-50' : ''}`}
                          />
                          <div>
                            <label htmlFor={program.id} className="block font-medium text-white cursor-pointer">
                              {program.name}
                            </label>
                            <p className="text-sm text-white/60">{program.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
                      className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.message ? 'border-red-500 bg-red-50' : ''}`}
                      placeholder="Eğitim ve sertifikasyon ihtiyaçlarınız hakkında detaylı bilgi verin"
                    ></textarea>
                  </div>

                  {/* Gönder Butonu */}
                  <div className="flex flex-col sm:flex-row justify-end gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-3 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                      disabled={loading}
                    >
                      {loading ? "Gönderiliyor..." : "Gönder"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bildirim Pop-up Modal */}
      {showPopup && status && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className={`relative w-full max-w-xs sm:max-w-md md:max-w-lg mx-4 sm:mx-0 rounded-2xl shadow-2xl border transition-all duration-300 animate-fade-in-up
            ${status === "success"
              ? "bg-gradient-to-br from-green-50 via-white to-green-100 border-green-200 text-green-800"
              : "bg-gradient-to-br from-red-50 via-white to-red-100 border-red-200 text-red-800"}
          `}>
            <button
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-black/10 focus:outline-none"
              onClick={() => { setShowPopup(false); setStatus(null); }}
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center gap-3 px-6 py-8 sm:py-10">
              {status === "success" ? (
                <CheckCircle className="w-10 h-10 text-green-500 mb-2" />
              ) : (
                <AlertTriangle className="w-10 h-10 text-red-500 mb-2" />
              )}
              <span className="font-semibold text-center text-base sm:text-lg">
                {status === "success"
                  ? "Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz."
                  : "Bir hata oluştu. info@virtualriddle.com adresine doğrudan e-posta gönderebilirsiniz."}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 