"use client";
import { useState } from "react";
import { Link } from "../components/Link";

const posts = [
  {
    href: "/blog/favori-wiki-aracimiz-confluence",
    category: "Atlassian",
    title: "Favori Wiki Aracımız: Confluence!",
    summary: "Ekip içi bilgi paylaşımında neden Confluence'ı tercih ediyoruz? Avantajları, ipuçları ve entegrasyonlar...",
    date: "1 Temmuz 2025",
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
    category: "Atlassian",
    title: "Nedir bu Jira Software?",
    summary: "Jira Software nedir, ne işe yarar ve neden bu kadar popüler? Modern ekipler için avantajları ve ipuçları...",
    date: "10 Haziran 2024",
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
    href: "/blog/2024-devops-trendleri",
    category: "DevOps & Cloud",
    title: "2024 DevOps Trendleri",
    summary: "Yapay zeka destekli DevOps araçları, GitOps ve Platform mühendisliğinin yükselişi...",
    date: "5 Mart 2024",
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
    href: "/blog/cloud-native-performans",
    category: "Performans",
    title: "Cloud Native Uygulamalarda Performans",
    summary: "Mikroservis mimarilerde performans optimizasyonu ve izleme stratejileri...",
    date: "1 Mart 2024",
    color: "from-purple-600 to-purple-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
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
    color: "from-green-600 to-green-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
      </svg>
    ),
    categoryColor: "text-blue-800",
    hoverColor: "group-hover:text-blue-900"
  }
];

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
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden block group focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${post.color} p-6 flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {post.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className={`${post.categoryColor} text-sm font-semibold mb-2`}>{post.category}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{post.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className={`${post.categoryColor} text-sm font-semibold ${post.hoverColor} transition-colors inline-flex items-center`}>Devamını Oku <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span></span>
                    </div>
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