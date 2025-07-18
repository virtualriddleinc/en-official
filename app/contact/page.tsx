"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import StructuredData from '../components/StructuredData';
import dynamic from 'next/dynamic';

const GoogleMap = dynamic(() => import('../components/GoogleMap'), { ssr: false });

function SimpleGoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Google Maps JS yükle
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD_16pLyXZxeu-NhhKebjtLvo9Z6TDe6to&libraries=marker&v=weekly`;
    script.async = true;
    script.onload = async () => {
      const { google } = window as any;
      if (!google || !mapRef.current) return;
      
      try {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        
        const position = { lat: 41.1130485, lng: 29.0185254 };
        
        const map = new Map(mapRef.current, {
          zoom: 16,
          center: position,
          mapId: "DEMO_MAP_ID",
        });
        
        mapInstanceRef.current = map;
        
        const marker = new AdvancedMarkerElement({
          map: map,
          position: position,
          title: "42 Maslak",
        });
      } catch (error) {
        console.error('Google Maps yüklenirken hata:', error);
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}

export default function ContactPage() {
  const initialForm = { name: "", email: "", subject: "", message: "" };
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("https://rvskttz2jh.execute-api.us-east-1.amazonaws.com/prod/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setForm(initialForm);
      if (res.ok) {
        setStatus("success");
        if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion === 'function') {
          (window as any).gtag_report_conversion();
        }
      } else {
        setStatus("error");
      }
    } catch {
      setForm(initialForm);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

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
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={form.name}
                      onChange={handleChange}
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
                      value={form.email}
                      onChange={handleChange}
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
                      placeholder="Konu başlığı"
                      value={form.subject}
                      onChange={handleChange}
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
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    disabled={loading}
                  >
                    {loading ? "Gönderiliyor..." : "Gönder"}
                  </button>
                </form>
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
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <div className="mt-6 mb-16 flex flex-col items-center gap-4 w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Bizi Ziyaret Edin</h2>
        <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.953863185987!2d29.018368075781428!3d41.113698671335946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab55922b60eef%3A0x3091fdd92dc97d43!2sVirtual%20Riddle%20Teknoloji%20A.%C5%9E.!5e0!3m2!1str!2str!4v1752847175795!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
      </div>

      {/* Structured Data */}
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Ana Sayfa', item: 'https://virtualriddle.com' },
          { name: 'İletişim', item: 'https://virtualriddle.com/contact' }
        ]}
      />
      
      <StructuredData
        type="faq"
        faqItems={[
          {
            question: 'Virtual Riddle ile nasıl iletişime geçebilirim?',
            answer: 'Virtual Riddle ile iletişime geçmek için info@virtualriddle.com adresine e-posta gönderebilir veya web sitemizdeki iletişim formunu kullanabilirsiniz.'
          },
          {
            question: 'Virtual Riddle\'ın adresi nedir?',
            answer: 'Virtual Riddle, İstanbul\'un Maslak bölgesinde Maslak Mahallesi AOS 55. Sokak 42 Maslak B Blok No: 4/542 adresinde bulunmaktadır.'
          },
          {
            question: 'Çalışma saatleri nedir?',
            answer: 'Pazartesi-Cuma 09:00-18:00, Cumartesi 10:00-14:00 saatleri arasında hizmet vermekteyiz.'
          },
          {
            question: 'Hangi hizmetler için iletişime geçebilirim?',
            answer: 'Atlassian danışmanlığı, Jira kurulumu, Confluence danışmanlığı, dijital dönüşüm projeleri ve teknoloji çözümleri için iletişime geçebilirsiniz.'
          }
        ]}
      />
    </main>
  );
} 