"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";

export default function ConsultingForm() {
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

  // Popup'ı gösterme
  useEffect(() => {
    if (status) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000);
    }
  }, [status]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Atlassian Danışmanlığı
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Atlassian araçları hakkında uzman danışmanlık hizmetimizle, kurumsal süreçlerinizi optimize edin ve verimliliğinizi %40'a kadar artırın
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-blue-700/50 rounded-full text-sm font-medium">Jira Danışmanlığı</span>
              <span className="px-4 py-2 bg-blue-700/50 rounded-full text-sm font-medium">Confluence Danışmanlığı</span>
              <span className="px-4 py-2 bg-blue-700/50 rounded-full text-sm font-medium">Agile Dönüşüm</span>
              <span className="px-4 py-2 bg-blue-700/50 rounded-full text-sm font-medium">DevOps Danışmanlığı</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ücretsiz Danışmanlık Talebi
              </h2>
              <p className="text-lg text-blue-100">
                Uzman ekibimiz size özel çözümler sunmak için hazır. Hemen başvurun!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Kişisel Bilgiler */}
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
                    placeholder="e-posta@example.com"
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
                    placeholder="+90 5XX XXX XX XX"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </>
  );
} 