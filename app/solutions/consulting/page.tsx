"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";

export default function ConsultingPage() {
  // Form durumu için state tanımları
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    position: "",
    teamSize: "",
    services: {
      processAnalysis: false,
      productConsulting: false,
      projectManagement: false,
      agileTransformation: false,
      devopsConsulting: false,
      customConsulting: false
    },
    currentTools: "",
    projectScope: "",
    timeline: "",
    budget: "",
    message: ""
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const requiredFields = ["fullName", "companyName", "email", "phone", "message"];
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [validationMsg, setValidationMsg] = useState("");

  // Danışmanlık hizmetleri
  const serviceList = [
    { id: "processAnalysis", name: "Süreç Analizi", description: "Mevcut iş süreçlerinin analizi ve optimizasyonu" },
    { id: "productConsulting", name: "Ürün Danışmanlığı", description: "Atlassian ürünlerinin yapılandırması ve optimizasyonu" },
    { id: "projectManagement", name: "Proje Yönetimi", description: "Proje yönetimi süreçlerinin iyileştirilmesi" },
    { id: "agileTransformation", name: "Agile Dönüşüm", description: "Çevik metodolojilere geçiş danışmanlığı" },
    { id: "devopsConsulting", name: "DevOps Danışmanlığı", description: "DevOps süreçlerinin kurulması ve optimizasyonu" },
    { id: "customConsulting", name: "Özel Danışmanlık", description: "Kurumunuza özel danışmanlık hizmetleri" }
  ];

  // Şirket büyüklükleri
  const teamSizes = [
    "1-20",
    "21-100",
    "101-500",
    "501-1000",
    "1000+"
  ];

  // Proje kapsamları
  const projectScopes = [
    "Küçük Ölçekli (1-3 ay)",
    "Orta Ölçekli (3-6 ay)",
    "Büyük Ölçekli (6-12 ay)",
    "Kurumsal Dönüşüm (12+ ay)"
  ];

  // Zaman çizelgeleri
  const timelines = [
    "Acil (1 ay içinde)",
    "Orta Vadeli (3 ay içinde)",
    "Uzun Vadeli (6 ay içinde)",
    "Planlama Aşamasında"
  ];

  // Bütçe aralıkları
  const budgets = [
    "10K-50K TL",
    "50K-100K TL",
    "100K-250K TL",
    "250K+ TL",
    "Belirlenmemiş"
  ];

  // Kullanıcıya görünen hizmet etiketleri
  const serviceLabels = {
    processAnalysis: "Süreç Analizi",
    productConsulting: "Ürün Danışmanlığı",
    projectManagement: "Proje Yönetimi",
    agileTransformation: "Agile Dönüşüm",
    devopsConsulting: "DevOps Danışmanlığı",
    customConsulting: "Özel Danışmanlık"
  };

  // Lambda ile uyumlu field mapping fonksiyonu
  function mapFormToLambda(form) {
    return {
      page: "/solutions/consulting",
      name: form.fullName,
      company: form.companyName,
      email: form.email,
      phone: form.phone,
      position: form.position,
      teamSize: form.teamSize,
      consultingServices: Object.entries(form.services)
        .filter(([k,v])=>v)
        .map(([k])=>serviceLabels[k] || k)
        .join(", "),
      currentTools: form.currentTools,
      projectScope: form.projectScope,
      timeline: form.timeline,
      budget: form.budget,
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
      
      // Form temizleme
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        position: "",
        teamSize: "",
        services: {
          processAnalysis: false,
          productConsulting: false,
          projectManagement: false,
          agileTransformation: false,
          devopsConsulting: false,
          customConsulting: false
        },
        currentTools: "",
        projectScope: "",
        timeline: "",
        budget: "",
        message: ""
      });
      setErrors({});
      
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      // Form temizleme
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        position: "",
        teamSize: "",
        services: {
          processAnalysis: false,
          productConsulting: false,
          projectManagement: false,
          agileTransformation: false,
          devopsConsulting: false,
          customConsulting: false
        },
        currentTools: "",
        projectScope: "",
        timeline: "",
        budget: "",
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

  // Hizmet seçimlerini yakalama
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
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
            <h1 className="text-5xl font-bold mb-6 text-white">Atlassian Danışmanlığı</h1>
            <p className="text-xl">
              Atlassian araçları hakkında uzman danışmanlık hizmetimizle, kurumsal süreçlerinizi optimize edin ve verimliliğinizi artırın.
              Uzman ekibimiz, organizasyonunuza özel çözümler sunmak için yanınızda.
            </p>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları Bölümü */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Uzmanlık Alanlarımız</h2>
            <p className="text-xl text-gray-600">
              Kurumsal ihtiyaçlarınıza yönelik kapsamlı Atlassian danışmanlık hizmetlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12H15M8 16H12M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Süreç Analizi</h3>
              <p className="text-gray-600">
                Mevcut iş süreçlerinizin detaylı analizi ve Atlassian araçlarıyla optimize edilmesi için öneriler sunuyoruz.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Ürün Danışmanlığı</h3>
              <p className="text-gray-600">
                Jira, Confluence, Bitbucket ve diğer Atlassian ürünlerinin kurumunuza özel yapılandırması ve optimizasyonu.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Agile Dönüşüm</h3>
              <p className="text-gray-600">
                Organizasyonunuzun çevik metodolojilere geçişini hızlandırın ve verimliliğinizi artırın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faydalar Bölümü */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden Atlassian Danışmanlığı?</h2>
            <p className="text-xl text-gray-600">
              Danışmanlık hizmetlerimizle elde edeceğiniz kazanımlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fayda 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Verimlilik Artışı</h3>
              <p className="text-gray-600">
                Atlassian araçlarının doğru yapılandırılması ve kullanımı sayesinde ekip verimliliğinizi %40'a kadar artırabilirsiniz.
              </p>
            </div>

            {/* Fayda 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">İş Birliği Gelişimi</h3>
              <p className="text-gray-600">
                Ekipler arası iletişim ve iş birliğini geliştirerek proje başarı oranınızı artırın.
              </p>
            </div>

            {/* Fayda 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Maksimizasyonu</h3>
              <p className="text-gray-600">
                Atlassian araçlarına yaptığınız yatırımdan maksimum geri dönüş sağlayın.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Danışmanlık Talebi Formu */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-800 to-blue-950 rounded-3xl shadow-xl overflow-hidden">
              <div className="p-10 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-8">Danışmanlık Talebi</h2>
                <p className="text-white/80 mb-10">
                  Kurumunuzun ihtiyaçlarını anlayarak size özel danışmanlık hizmeti sunmak için aşağıdaki formu doldurun.
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
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.fullName 
                            ? 'border-red-400 bg-red-500/10' 
                            : 'border-white/10 bg-white/5'
                        } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
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
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.companyName 
                            ? 'border-red-400 bg-red-500/10' 
                            : 'border-white/10 bg-white/5'
                        } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
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
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email 
                            ? 'border-red-400 bg-red-500/10' 
                            : 'border-white/10 bg-white/5'
                        } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
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
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone 
                            ? 'border-red-400 bg-red-500/10' 
                            : 'border-white/10 bg-white/5'
                        } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
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
                        Şirket Büyüklüğü
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Çalışan sayısını seçin</option>
                        {teamSizes.map(size => (
                          <option key={size} value={size} className="bg-blue-900 text-white">{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Validation mesajı */}
                  {validationMsg && (
                    <div className="bg-red-500/10 border border-red-400 text-red-200 px-4 py-3 rounded-xl">
                      {validationMsg}
                    </div>
                  )}

                  {/* İhtiyaç Duyulan Danışmanlık Hizmetleri */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">İhtiyaç Duyduğunuz Danışmanlık Hizmetleri</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {serviceList.map(service => (
                        <div key={service.id} className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                          <input
                            type="checkbox"
                            id={service.id}
                            name={service.id}
                            checked={formData.services[service.id as keyof typeof formData.services]}
                            onChange={handleServiceChange}
                            className="mt-1 h-5 w-5 rounded border-white/30 text-blue-500 focus:ring-blue-400"
                          />
                          <div>
                            <label htmlFor={service.id} className="block font-medium text-white cursor-pointer">
                              {service.name}
                            </label>
                            <p className="text-sm text-white/60">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Proje Detayları */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="projectScope" className="block text-sm font-medium text-white/80 mb-2">
                        Proje Kapsamı
                      </label>
                      <select
                        id="projectScope"
                        name="projectScope"
                        value={formData.projectScope}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Proje kapsamını seçin</option>
                        {projectScopes.map(scope => (
                          <option key={scope} value={scope} className="bg-blue-900 text-white">{scope}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-white/80 mb-2">
                        Zaman Çizelgesi
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Zaman çizelgesini seçin</option>
                        {timelines.map(timeline => (
                          <option key={timeline} value={timeline} className="bg-blue-900 text-white">{timeline}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                        Bütçe Aralığı
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Bütçe aralığını seçin</option>
                        {budgets.map(budget => (
                          <option key={budget} value={budget} className="bg-blue-900 text-white">{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mevcut araçlar */}
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
                      placeholder="Şu anda kullandığınız araçlar ve sistemler"
                    />
                  </div>

                  {/* Ek Mesaj */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Danışmanlık İhtiyacınız ve Beklentileriniz*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message 
                          ? 'border-red-400 bg-red-500/10' 
                          : 'border-white/10 bg-white/5'
                      } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
                      placeholder="Danışmanlık ihtiyacınız, projeleriniz ve beklentileriniz hakkında detaylı bilgi verin"
                    ></textarea>
                  </div>

                  {/* Gönder Butonu */}
                  <div className="flex flex-col sm:flex-row justify-end gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full sm:w-auto px-10 py-3 font-semibold rounded-xl transition-colors ${
                        loading 
                          ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                          : 'bg-white text-blue-800 hover:bg-blue-50'
                      }`}
                    >
                      {loading ? 'Gönderiliyor...' : 'Danışmanlık Talebi Gönder'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
            <div className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {status === "success" ? (
                  <CheckCircle className="w-16 h-16 text-green-500" />
                ) : (
                  <AlertTriangle className="w-16 h-16 text-red-500" />
                )}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                status === "success" ? "text-green-800" : "text-red-800"
              }`}>
                {status === "success" ? "Başarılı!" : "Hata!"}
              </h3>
              <p className={`text-gray-600 ${
                status === "success" ? "text-green-700" : "text-red-700"
              }`}>
                {status === "success" 
                  ? "Danışmanlık talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz." 
                  : "Bir hata oluştu. Lütfen tekrar deneyin."
                }
              </p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
} 