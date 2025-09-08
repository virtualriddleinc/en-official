"use client";
import { useState } from "react";
import { Link } from "../components/Link";

// Türkçe ay adlarını destekleyen bir sıralama fonksiyonu ekle
function parseTurkishDate(dateStr) {
  const months = {
    'Ocak': 0, 'Şubat': 1, 'Mart': 2, 'Nisan': 3, 'Mayıs': 4, 'Haziran': 5,
    'Temmuz': 6, 'Ağustos': 7, 'Eylül': 8, 'Ekim': 9, 'Kasım': 10, 'Aralık': 11
  };
  const [day, month, year] = dateStr.split(' ');
  return new Date(Number(year), months[month], Number(day));
}

export const posts = [
  {
    href: "/blog/claude-atlassian-mcp-entegrasyonu",
    category: "Yapay Zeka",
    title: "Claude ile Atlassian'ı Bağlayarak Çalışmak: MCP Devrimi",
    summary: "Atlassian'ın yeni Remote MCP Server'ı sayesinde Claude ile Jira ve Confluence verilerinize doğrudan erişebilir, AI destekli iş akışları oluşturabilirsiniz. Bu entegrasyon, ekip verimliliğini artırırken bilgi silolarını ortadan kaldırıyor.",
    date: "1 Eylül 2025",
    readingTime: "10 dk",
    color: "from-purple-600 to-blue-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    categoryColor: "text-purple-700",
    hoverColor: "group-hover:text-purple-800"
  },
  {
    href: "/blog/favori-wiki-aracimiz-confluence",
    category: "Confluence",
    title: "Favori Wiki Aracımız: Confluence!",
    summary: "Ekip içi bilgi paylaşımında neden Confluence'ı tercih ediyoruz? Avantajları, ipuçları ve entegrasyonlar...",
    date: "5 Temmuz 2025",
    readingTime: "4 dk",
    color: "from-blue-400 to-blue-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
        <circle cx="12" cy="7" r="4" strokeWidth="2" />
      </svg>
    ),
    categoryColor: "text-blue-700",
    hoverColor: "group-hover:text-blue-800"
  },
  {
    href: "/blog/jira-software-nedir",
    category: "Jira",
    title: "Nedir bu Jira Software?",
    summary: "Jira Software nedir, ne işe yarar ve neden bu kadar popüler? Modern ekipler için avantajları ve ipuçları...",
    date: "10 Haziran 2024",
    readingTime: "4 dk",
    color: "from-yellow-400 to-yellow-600",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M12 8v8" />
      </svg>
    ),
    categoryColor: "text-yellow-700",
    hoverColor: "group-hover:text-yellow-800"
  },
  {
    href: "/blog/cloud-native-performans",
    category: "Jira Service Management",
    title: "Jira Service Management ile IT Operasyonlarınızı Devrim Niteliğinde Dönüştürün",
    summary: "Jira Service Management (JSM), Atlassian'ın modern IT ekipleri için geliştirdiği kapsamlı ITSM platformudur. Otomatikleştirme özellikleri ile manuel işlemleri %60-70 oranında azaltır, AI destekli çözüm önerileri ile first-call resolution oranını %30-40 artırır.",
    date: "7 Nisan 2024",
    readingTime: "8 dk",
    color: "from-blue-600 to-blue-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    categoryColor: "text-blue-700",
    hoverColor: "group-hover:text-blue-800"
  },
  {
    href: "/blog/jira-danismanligi-avantajlari",
    category: "Danışmanlık",
    title: "Jira Danışmanlığı Almanın İşletmenize Sağlayacağı 8 Kritik Avantaj",
    summary: "Jira danışmanlığı ile işletmenizin proje yönetimi süreçlerini optimize edin. %40-60 verimlilik artışı, maliyet tasarrufu ve sürekli iyileştirme avantajları.",
    date: "15 Mart 2024",
    readingTime: "4 dk",
    color: "from-blue-600 to-blue-800",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    categoryColor: "text-blue-700",
    hoverColor: "group-hover:text-blue-800"
  },
  {
    href: "/blog/2024-devops-trendleri",
    category: "DevOps & Cloud",
    title: "2024 DevOps Trendleri",
    summary: "Yapay zeka destekli DevOps araçları, GitOps ve Platform mühendisliğinin yükselişi...",
    date: "5 Mart 2024",
    readingTime: "6 dk",
    color: "from-blue-600 to-blue-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    categoryColor: "text-blue-800",
    hoverColor: "group-hover:text-blue-900"
  },
  {
    href: "/blog/basarili-dijital-donusum-stratejileri",
    category: "Dijital Dönüşüm",
    title: "Başarılı Dijital Dönüşüm Stratejileri",
    summary: "Şirketlerin dijital dönüşüm yolculuğunda dikkat etmesi gereken kritik noktalar...",
    date: "3 Mart 2024",
    readingTime: "7 dk",
    color: "from-indigo-600 to-indigo-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    categoryColor: "text-blue-800",
    hoverColor: "group-hover:text-blue-900"
  },
  {
    href: "/blog/multi-cloud-stratejileri",
    category: "Cloud Computing",
    title: "Multi-Cloud Stratejileri",
    summary: "Farklı cloud sağlayıcılarını etkin kullanmanın yolları ve best practice'ler...",
    date: "28 Şubat 2024",
    readingTime: "6 dk",
    color: "from-green-600 to-green-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
      </svg>
    ),
    categoryColor: "text-blue-800",
    hoverColor: "group-hover:text-blue-900"
  },
  {
    href: "/blog/rovo-devrimi",
    category: "Yapay Zeka",
    title: "Rovo: Atlassian’ın GenAI ile Kurumsal Bilgiye Dokunma Devrimi",
    summary: "Yeni nesil yapay zeka destekli kurumsal asistan, ekiplerin dağınık bilgi kaynaklarına hızlı ve anlamlı erişimini sağlıyor. Belgeler, notlar, sohbetler ve görev yönetim araçları tek bir noktada birleşiyor. Aranan bilgi doğal dil ile sorgulanabiliyor, özetleniyor ve kişiye özel hale geliyor. Ayrıca, tekrar eden görevleri otomatikleştirerek zaman kazandırıyor. Güvenlik ve gizlilik ilkelerine uygun şekilde çalışıyor. Verimliliği artırmak, bilgiye kolay ulaşmak ve iş yükünü azaltmak isteyen ekipler için etkili bir çözüm sunuyor.",
    date: "8 Temmuz 2024",
    readingTime: "6 dk",
    color: "from-purple-600 to-blue-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    categoryColor: "text-purple-700",
    hoverColor: "group-hover:text-purple-800"
  }
].sort((a, b) => parseTurkishDate(b.date).getTime() - parseTurkishDate(a.date).getTime());

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

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
            <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl">
              Dijital dönüşüm ve teknoloji dünyasından en güncel haberler, makaleler ve analizler
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {paginatedPosts.map((post, i) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group relative block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transform hover:-translate-y-2"
                >
                  <div style={{ height: 420 }}>
                    {/* Gradient Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
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
                      <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {post.title}
                      </h3>
                    </div>
                    
                    {/* Summary Section - Fixed Height */}
                    <div className="px-6 mb-4" style={{ height: 100 }}>
                      <p className="text-gray-700 text-sm leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {post.summary}
                      </p>
                    </div>
                    
                    {/* Bottom Section - Meta Info */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                          </svg>
                          <span className="font-semibold">{post.readingTime}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="font-medium">{post.date}</span>
                  </div>
                      
                      {/* Read More */}
                      <span className={`${post.categoryColor} text-sm font-bold group-hover:underline ${post.hoverColor} transition-colors inline-flex items-center gap-1`}>
                        Devamını Oku 
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  
                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button
                    className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                  >
                    ←
                  </button>
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx + 1}
                      className={`px-3 py-2 rounded-lg ${page === idx + 1 ? "bg-blue-600 text-white" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                      onClick={() => setPage(idx + 1)}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  <button
                    className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                  >
                    →
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
} 