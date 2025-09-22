"use client";

import Image from "next/image";
import dynamic from 'next/dynamic';
import Link from "next/link";
import StructuredData from './components/StructuredData';
import { posts as blogPosts } from "./blog/page";

// Lazy load components for better performance
const KanbanBoard = dynamic(() => import('./components/KanbanBoard'), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

export default function Home() {
  return (
    <main>
      {/* Preload critical resources */}
      <link rel="preload" href="/app/globals.css" as="style" />
      <link rel="preload" href="/contact" as="fetch" crossOrigin="anonymous" />
      <link rel="preload" href="/free-discovery" as="fetch" crossOrigin="anonymous" />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen bg-[#004BB3] overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#004BB3] via-[#0052CC] to-[#004BB3]" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px),
                                linear-gradient(0deg, white 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}>
            </div>
          </div>

          {/* Gradient Circles */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30" />
          
          {/* Subtle Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 left-1/4 w-full h-32 bg-white/5 rotate-45 transform -translate-x-1/2" />
            <div className="absolute top-1/4 right-0 w-32 h-96 bg-white/5 -rotate-45" />
          </div>
        </div>

        <div className="relative pt-28">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="h-full flex flex-col lg:flex-row items-center gap-10 pb-16">
              {/* Sol Taraf - İçerik */}
              <div className="flex-1 text-center lg:text-left">
                <div className="max-w-3xl mx-auto lg:mx-0 space-y-8">
                  {/* Üst Başlık */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-white/20"></div>
                      <div className="px-5 py-2.5 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                        <span className="text-base font-medium text-white tracking-wide">Profesyonel Danışmanlık</span>
                      </div>
                      <div className="h-px flex-1 bg-white/20"></div>
                    </div>
                  </div>

                  {/* Ana Başlık */}
                  <div className="space-y-6">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                      <div className="text-white leading-tight">Atlassian</div>
                      <div className="text-white/90 leading-tight">Danışmanlık</div>
                      <div className="text-white/80 leading-tight">Hizmetleri</div>
                </h1>
                    
                    <p className="text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                      Jira ve Confluence başta olmak üzere tüm Atlassian ürünleri için kurumsal danışmanlık hizmetleri.
                    </p>
                  </div>

                  {/* CTA Butonları */}
                  <div className="flex flex-col md:flex-row gap-4 mt-8">
                    <Link
                      href="/contact"
                      className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all text-center"
                      prefetch={true}
                    >
                      İletişime Geç
                    </Link>
                    <Link
                      href="/free-discovery"
                      className="bg-transparent border border-white/30 backdrop-blur-sm text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all text-center"
                      prefetch={true}
                    >
                      Ücretsiz Keşif
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Sağ Taraf - Workflow */}
              <div className="flex-1">
                <div className="relative">
                  {/* Workflow Container */}
                  <div className="relative p-8 pb-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    {/* Workflow Başlık */}
                    <h2 className="text-2xl font-bold text-white mb-8">Danışmanlık Süreci</h2>
                    {/* Workflow Steps */}
                    <div className="relative">
                      <div className="absolute left-[2.25rem] top-12 bottom-4 w-0.5 bg-gradient-to-b from-[#0052CC] via-[#00B8D9] to-[#36B37E]"></div>
                      
                      <div className="space-y-10">
                        {/* Step 1 */}
                        <div className="relative flex items-start gap-5">
                          <div className="w-[4.5rem] h-[4.5rem] rounded-xl bg-[#6554C0] flex items-center justify-center flex-shrink-0">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <div className="flex-1 pt-2">
                            <h3 className="text-xl font-semibold text-white mb-2">İhtiyaç Analizi</h3>
                            <p className="text-base text-white/80">Mevcut süreçlerin analizi ve Atlassian ürün seçimi</p>
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex items-start gap-5">
                          <div className="w-[4.5rem] h-[4.5rem] rounded-xl bg-[#00B8D9] flex items-center justify-center flex-shrink-0">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                          </div>
                          <div className="flex-1 pt-2">
                            <h3 className="text-xl font-semibold text-white mb-2">Kurulum ve Yapılandırma</h3>
                            <p className="text-base text-white/80">Atlassian ürünlerinin kurulumu ve özelleştirmesi</p>
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex items-start gap-5">
                          <div className="w-[4.5rem] h-[4.5rem] rounded-xl bg-[#36B37E] flex items-center justify-center flex-shrink-0">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div className="flex-1 pt-2">
                            <h3 className="text-xl font-semibold text-white mb-2">Eğitim ve Dokümantasyon</h3>
                            <p className="text-base text-white/80">Kullanıcı ve admin eğitimleri, süreç dokümantasyonu</p>
                          </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative flex items-start gap-5">
                          <div className="w-[4.5rem] h-[4.5rem] rounded-xl bg-[#FF5630] flex items-center justify-center flex-shrink-0">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="flex-1 pt-2">
                            <h3 className="text-xl font-semibold text-white mb-2">Sürekli Destek</h3>
                            <p className="text-base text-white/80">Farklı SLA seviyeleriyle teknik destek ve optimizasyon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Neden Virtual Riddle? */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24 overflow-hidden">
            <div className="absolute inset-0">
          {/* Ana Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/5 via-transparent to-[#0052CC]/3"></div>

          {/* Dekoratif Elementler */}
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-radial from-[#0052CC]/10 via-[#0052CC]/5 to-transparent transform rotate-12"></div>
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-gradient-radial from-[#0052CC]/10 via-[#0052CC]/5 to-transparent transform -rotate-12"></div>
          
          {/* Animasyonlu Çizgiler */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0052CC]/20 to-transparent blur-sm"></div>
            <div className="absolute bottom-20 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0052CC]/15 to-transparent blur-sm"></div>
            <div className="absolute left-20 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#0052CC]/10 to-transparent blur-sm"></div>
            <div className="absolute right-20 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#0052CC]/10 to-transparent blur-sm"></div>
        </div>

          {/* Noktalar Deseni */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(#0052CC 1px, transparent 1px),
                radial-gradient(#0052CC 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px, 40px 40px',
              backgroundPosition: '0 0, 20px 20px',
              opacity: '0.05'
            }}>
          </div>

          {/* Işık Efektleri */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#0052CC]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-[#0052CC]/10 text-[#0052CC] font-medium text-sm tracking-wider uppercase mb-6">NEDEN BİZ?</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#253858] mb-6">
              Neden Virtual Riddle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              İşletmenizi bir sonraki seviyeye taşımak için ihtiyacınız olan tüm dijital çözümler tek çatı altında.
              Deneyimli ekibimiz ve modern teknolojilerimizle dijital dönüşüm yolculuğunuzda yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hızlı Entegrasyon Kartı */}
            <div className="group relative bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:-translate-y-1 border border-gray-100 w-5/6 mx-auto lg:w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/5 to-[#0052CC]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-[#0052CC] rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#253858] mb-4">Hızlı Entegrasyon</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Modern teknolojilerle işletmenizi hızla dijitalleştiriyor, süreçlerinizi optimize ediyoruz.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0052CC] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Detaylı ihtiyaç analizi ve planlama</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0052CC] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Mevcut sistemlerle sorunsuz entegrasyon</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0052CC] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Özelleştirilebilir iş akışları</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Atlassian's Best Practices Kartı */}
            <div className="group relative bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:-translate-y-1 border border-gray-100 w-5/6 mx-auto lg:w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/5 to-[#0052CC]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-[#0052CC] rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#253858] mb-4">Atlassian's Best Practices</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Atlassian'ın önerdiği en iyi uygulama ve yöntemleri kullanarak projelerinizi doğru şekilde yönetmenize yardımcı oluyoruz.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0052CC] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Doğru yetkilendirme ve proje yönetimi</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0052CC] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Doğru yapılandırılmış iş akışları</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0052CC] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Verimli proje yönetim metodolojileri</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Uzman Ekip Kartı */}
            <div className="group relative bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:-translate-y-1 border border-gray-100 w-5/6 mx-auto lg:w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC]/5 to-[#0052CC]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-[#0052CC] rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#253858] mb-4">Uzman Ekip</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Atlassian tarafından onaylı sertifikalı danışmanlarımızla projenizin her aşamasında yanınızdayız.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0052CC] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Atlassian sertifikalı uzmanlar</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0052CC] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Atlassian araçlarında köklü deneyim</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0052CC] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Enterprise seviye proje deneyimi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Güvenilir Çözüm Ortağınız */}
      <section className="relative py-14 bg-[#004BB3]">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#004BB3] via-[#0052CC] to-[#004BB3]" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px),
                                linear-gradient(0deg, white 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}>
            </div>
          </div>

          {/* Gradient Circles */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30" />
          
          {/* Subtle Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 left-1/4 w-full h-32 bg-white/5 rotate-45 transform -translate-x-1/2" />
            <div className="absolute top-1/4 right-0 w-32 h-96 bg-white/5 -rotate-45" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-7xl mx-auto">
            {/* Başlık */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span className="text-sm font-medium text-white/90 uppercase tracking-wider">Başarılarımız</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Güvenilir Çözüm Ortağınız
              </h2>
            </div>

            {/* İstatistikler */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
              {/* Müşteri Kartı */}
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] opacity-60 blur-3xl transition-all duration-500 group-hover:opacity-80"></div>
                <div className="relative h-full bg-black/20 backdrop-blur-xl rounded-3xl p-10 border border-white/10 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] opacity-20 blur-3xl rounded-full transform translate-x-20 -translate-y-20"></div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] p-0.5">
                        <div className="w-full h-full rounded-2xl bg-black/30 flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-2xl font-extrabold bg-gradient-to-r from-[#FF8E53] via-white to-[#FF6B6B] bg-clip-text text-transparent drop-shadow text-center leading-none">Kurumsal Müşteri</span>
                    </div>
                    <div className="flex flex-row items-center justify-center mb-2 gap-1">
                      <span className="text-7xl sm:text-8xl font-extrabold text-white leading-none drop-shadow-lg">25</span>
                      <span className="text-5xl font-extrabold text-[#FF8E53] -mb-2">+</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-[#FF8E53] via-white to-[#FF6B6B] bg-clip-text text-transparent drop-shadow-xl text-center tracking-tight">
                      Kurumsal Müşteri
                    </h3>
                    <p className="text-lg text-white/90 font-semibold mt-6 text-center">Ulusal ve uluslararası şirketlere Atlassian çözümleri</p>
                  </div>
                </div>
              </div>

              {/* Proje Kartı */}
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] opacity-60 blur-3xl transition-all duration-500 group-hover:opacity-80"></div>
                <div className="relative h-full bg-black/20 backdrop-blur-xl rounded-3xl p-10 border border-white/10 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#7C3AED] to-[#EC4899] opacity-20 blur-3xl rounded-full transform translate-x-20 -translate-y-20"></div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] p-0.5">
                        <div className="w-full h-full rounded-2xl bg-black/30 flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-2xl font-extrabold bg-gradient-to-r from-[#EC4899] via-white to-[#7C3AED] bg-clip-text text-transparent drop-shadow text-center leading-none">Başarılı Proje</span>
                    </div>
                    <div className="flex flex-row items-center justify-center mb-2 gap-1">
                      <span className="text-7xl sm:text-8xl font-extrabold text-white leading-none drop-shadow-lg">100</span>
                      <span className="text-5xl font-extrabold text-[#EC4899] -mb-2">+</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-[#EC4899] via-white to-[#7C3AED] bg-clip-text text-transparent drop-shadow-xl text-center tracking-tight">
                      Başarılı Proje
                    </h3>
                    <p className="text-lg text-white/90 font-semibold mt-6 text-center">Tamamlanan başarılı proje</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#312E81]/50 via-transparent to-[#0F172A]/50"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 [text-shadow:_0_2px_20px_rgb(255_255_255_/_30%)] tracking-tight leading-tight">
              Dijital Dönüşüm Yolculuğunuza <br/> Bugün Başlayın
            </h2>
            <p className="text-xl text-white/80 mb-6">
              Ücretsiz analiz hizmetimizle işletmeniz için en uygun çözümleri belirleyelim.
            </p>
            <div className="flex justify-center">
              <a href="/free-discovery" className="group relative px-6 py-3 rounded-xl font-medium transition-all scale-105 hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 backdrop-blur-sm px-8 py-3 rounded-xl transition-all border border-white/10">
                  <span className="text-white text-lg font-semibold tracking-wide">Hemen Başlayın</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Solutions Section */}
      <section className="w-full py-20 bg-[#004BB3] relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#004BB3] via-[#0052CC] to-[#004BB3]" />
        
        {/* Decorative Elements */}
            <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px),
                                linear-gradient(0deg, white 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}>
            </div>
          </div>

          {/* Gradient Circles */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30" />
          
          {/* Subtle Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 left-1/4 w-full h-32 bg-white/5 rotate-45 transform -translate-x-1/2" />
            <div className="absolute top-1/4 right-0 w-32 h-96 bg-white/5 -rotate-45" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Çözümlerimiz</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına özel Atlassian çözümleri sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Atlassian Danışmanlığı */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all w-5/6 mx-auto lg:w-full">
              <div className="relative h-48 w-full flex items-center justify-center bg-white rounded-t-xl">
                <Image
                  src="/vr-showcase/solutions-1.svg"
                  alt="Atlassian Danışmanlığı"
                  fill
                  className="object-contain p-4"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#253858] mb-3">Atlassian Danışmanlığı</h3>
                <p className="text-[#42526E] mb-4">Jira, Confluence ve diğer Atlassian ürünleriyle iş süreçlerinizi optimize edin. Uzman ekibimiz, kurumunuza özel yapılandırma, entegrasyon ve süreç iyileştirme çözümleri sunuyor.</p>
                <a href="/solutions/consulting" className="inline-flex items-center text-[#0052CC] font-medium hover:underline">
                  Detaylı Bilgi
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
              
            {/* Cloud Migration */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all w-5/6 mx-auto lg:w-full">
              <div className="relative h-48 w-full flex items-center justify-center bg-white rounded-t-xl">
                <Image
                  src="/vr-showcase/solutions-2.png"
                  alt="Cloud Migration"
                  fill
                  className="object-contain p-4"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#253858] mb-3">Cloud Migration</h3>
                <p className="text-[#42526E] mb-4">On-premise Atlassian ürünlerinizi sorunsuz şekilde Cloud ortamına taşıyın. Verilerinizin güvenli migrasyonu, kullanıcı yönetimi ve entegrasyonlar için uçtan uca destek sağlıyoruz.</p>
                <a href="/solutions/cloud-migration" className="inline-flex items-center text-[#0052CC] font-medium hover:underline">
                  Detaylı Bilgi
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Eğitim & Sertifikasyon */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all w-5/6 mx-auto lg:w-full">
              <div className="relative h-48 w-full flex items-center justify-center bg-white rounded-t-xl">
                <Image
                  src="/vr-showcase/solutions-3.png"
                  alt="Eğitim & Sertifikasyon"
                  fill
                  className="object-contain p-4"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#253858] mb-3">Eğitim & Sertifikasyon</h3>
                <p className="text-[#42526E] mb-4">Ekibinizin Atlassian ürünlerini etkin kullanabilmesi için özelleştirilmiş eğitim programları ve sertifikasyon hazırlık kursları sunuyoruz. Uygulamalı eğitimlerle verimlilik artışı sağlayın.</p>
                <a href="/solutions/training" className="inline-flex items-center text-[#0052CC] font-medium hover:underline">
                  Detaylı Bilgi
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Öne Çıkanlar Section */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <span className="text-blue-200 font-bold tracking-widest mb-4">YENİLİKLER</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text text-transparent">
              Öne Çıkan Teknolojiler
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI Altyapısı Card */}
            <div className="group bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-1 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 w-5/6 mx-auto lg:w-full">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 h-full">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rotate-3 absolute"></div>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl -rotate-3 relative z-10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-white">AI Altyapısı</h3>
                    <span className="px-3 py-1 text-xs font-bold text-blue-900 bg-blue-200 rounded-full">Yeni</span>
                </div>
                  <p className="text-blue-200">
                  Yapay zeka destekli altyapı çözümlerimizle süreçlerinizi otomatikleştirin ve verimliliğinizi artırın.
                </p>
                  <a href="/products/rovo" className="inline-flex items-center text-blue-300 font-bold group-hover:text-white">
                  İncele
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            </div>

            {/* Cloud Solutions Card */}
            <div className="group bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-1 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 w-5/6 mx-auto lg:w-full">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 h-full">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rotate-3 absolute"></div>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl -rotate-3 relative z-10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Cloud Çözümleri</h3>
                  <p className="text-blue-200">
                  Modern cloud altyapısı ile işletmenizi geleceğe taşıyın, maliyetlerinizi optimize edin.
                </p>
                  <a href="/solutions/consulting" className="inline-flex items-center text-blue-300 font-bold group-hover:text-white">
                  İncele
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                </div>
              </div>
            </div>

            {/* IT Support Card */}
            <div className="group bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-1 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 w-5/6 mx-auto lg:w-full">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 h-full">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rotate-3 absolute"></div>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl -rotate-3 relative z-10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">IT Destek</h3>
                  <p className="text-blue-200">
                  7/24 uzman IT desteği ile sistemlerinizin kesintisiz çalışmasını sağlayın.
                </p>
                  <a href="/solutions/it-support" className="inline-flex items-center text-blue-300 font-bold group-hover:text-white">
                  İncele
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Blog Yazıları Section */}
      <section className="w-full py-24 bg-gradient-to-b from-[#F4F5F7] via-white to-[#F4F5F7] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[#0052CC]/5 via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-[#0052CC]/3 via-transparent to-transparent opacity-40"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0052CC]/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#0052CC] animate-pulse"></div>
              <span className="text-[#0052CC] font-bold tracking-widest text-xs uppercase">Blog</span>
              <div className="w-2 h-2 rounded-full bg-[#0052CC] animate-pulse"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#172B4D] text-center mb-6 leading-tight">
              Son <span className="bg-gradient-to-r from-[#0052CC] to-[#004BB3] bg-clip-text text-transparent">Yazılarımız</span>
            </h2>
            <p className="text-lg text-[#42526E] max-w-3xl text-center leading-relaxed">
              Dijital dönüşüm, Atlassian ve teknoloji dünyasından en güncel içerikler
            </p>
          </div>
          
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {blogPosts.slice(0, 4).map((post, index) => (
                              <a
                  key={post.href}
                  href={post.href}
                  className="group relative block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#0052CC]/30 focus:outline-none focus:ring-4 focus:ring-[#0052CC]/20 transform hover:-translate-y-2"
                  style={{ height: 420 }}
                >
                  {/* Gradient Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0052CC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Section - Category and Icon */}
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${post.categoryColor} bg-opacity-10 backdrop-blur-sm border border-opacity-20 shadow-sm`}>
                        {post.category}
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {post.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title Section - Fixed Height */}
                  <div className="px-6 mb-3" style={{ height: 80 }}>
                    <h3 className="text-lg font-bold text-[#172B4D] leading-tight group-hover:text-[#0052CC] transition-colors" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.title}
                    </h3>
                  </div>
                  
                  {/* Summary Section - Fixed Height */}
                  <div className="px-6 mb-4" style={{ height: 100 }}>
                    <p className="text-[#42526E] text-sm leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.summary}
                    </p>
                  </div>
                  
                  {/* Bottom Section - Meta Info */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-[#6B778C]">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#0052CC]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                        </svg>
                        <span className="font-semibold">{post.readingTime}</span>
                      </div>
                      <span className="text-gray-400">•</span>
                      <span className="font-medium">{post.date}</span>
                    </div>
                    
                    {/* Read More */}
                    <span className="text-[#0052CC] text-sm font-bold group-hover:underline flex items-center gap-1">
                      Oku 
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
                
                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#0052CC]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mt-16">
            <a href="/blog" className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#0052CC] to-[#004BB3] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <span>Tüm Blog Yazılarını Gör</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Kanban Board */}
      <KanbanBoard />

      {/* Structured Data */}
      <StructuredData
        type="service"
        serviceData={{
          name: 'Virtual Riddle Atlassian Danışmanlığı',
          description: 'Jira ve Confluence başta olmak üzere tüm Atlassian ürünleri için kurumsal danışmanlık hizmetleri',
          url: 'https://virtualriddle.com',
          offers: [
            {
              name: 'Atlassian Danışmanlığı',
              description: 'Jira, Confluence ve diğer Atlassian ürünleriyle iş süreçlerinizi optimize edin'
            },
            {
              name: 'Cloud Migration',
              description: 'On-premise Atlassian ürünlerinizi sorunsuz şekilde Cloud ortamına taşıyın'
            },
            {
              name: 'Eğitim & Sertifikasyon',
              description: 'Ekibinizin Atlassian ürünlerini etkin kullanabilmesi için özelleştirilmiş eğitim programları'
            }
          ]
        }}
      />
    </main>
  );
}