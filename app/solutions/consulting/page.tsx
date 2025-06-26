"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";

export default function ConsultingPage() {
  // Form durumu için state tanımları
  const initialForm = { name: "", companyName: "", email: "", message: "" };
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const requiredFields = ["name", "companyName", "email", "message"];
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [validationMsg, setValidationMsg] = useState("");

  // Hizmet türleri
  const serviceTypes = [
    "Süreç Analizi",
    "Ürün Danışmanlığı",
    "Proje Yönetimi",
    "Agile Dönüşüm",
    "DevOps Danışmanlığı"
  ];

  // Kullanıcıya görünen ürün etiketleri (örnek, gerekirse ekle)
  const serviceLabels = {
    agile: "Agile Danışmanlığı",
    devops: "DevOps Danışmanlığı",
    cloud: "Cloud Danışmanlığı",
    migration: "Migration Danışmanlığı",
    custom: "Özel Danışmanlık"
  };

  function buildContent(form: typeof initialForm) {
    return [
      `Ad Soyad: ${form.name}`,
      `Şirket Adı: ${form.companyName}`,
      `E-posta: ${form.email}`,
      `Danışmanlık Talebi ve Mesaj: ${form.message}`
    ].join("\n");
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
      if (!form[field] || form[field].trim() === "") {
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
    // Subject ve content oluşturma
    const subject = `Danışmanlık Talebi : ${form.name || ""} - ${form.companyName || ""}`;
    const content = buildContent(form);
    const payload = { ...form, subject, content };
    try {
      const res = await fetch("https://rvskttz2jh.execute-api.us-east-1.amazonaws.com/prod/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setForm(initialForm);
      setErrors({});
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setForm(initialForm);
      setErrors({});
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Input değişimlerini yakalama
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

  function mapFormToLambda(form) {
    return {
      page: "/solutions/consulting",
      name: form.name,
      company: form.companyName,
      email: form.email,
      phone: form.phone,
      position: form.position,
      department: form.department || "",
      currentTools: form.currentTools || "",
      projectScope: form.projectScope || "",
      timeline: form.timeline || "",
      budget: form.budget || "",
      teamSize: form.teamSize || "",
      urgency: form.urgency || "",
      services: Array.isArray(form.services)
        ? form.services.map((k) => serviceLabels[k] || k).join(", ")
        : (form.services ? serviceLabels[form.services] || form.services : ""),
      message: form.message
    };
  }

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

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Kişisel ve Şirket Bilgileri */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Ad Soyad*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.name ? 'border-red-500 bg-red-50' : ''}`}
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-white/80 mb-2">
                        Şirket Adı
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.companyName ? 'border-red-500 bg-red-50' : ''}`}
                        placeholder="Şirket adı"
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
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.email ? 'border-red-500 bg-red-50' : ''}`}
                        placeholder="ornek@sirket.com"
                      />
                    </div>
                  </div>

                  {/* Ek Mesaj */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Danışmanlık İhtiyacınız ve Beklentileriniz
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.message ? 'border-red-500 bg-red-50' : ''}`}
                      placeholder="Danışmanlık ihtiyacınız ve projeleriniz hakkında bize daha fazla bilgi verin"
                    ></textarea>
                  </div>

                  {/* Validasyon mesajı */}
                  {validationMsg && (
                    <div className="mb-4 flex items-center justify-center">
                      <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-800 rounded-xl px-4 py-2 shadow transition-all animate-fade-in-up">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <span className="font-semibold">{validationMsg}</span>
                      </div>
                    </div>
                  )}

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