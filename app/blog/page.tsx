"use client";
import { useState } from "react";
import { Link } from "../components/Link";

// Date parsing function
function parseDate(dateStr) {
  const months = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
    'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
  };
  const [day, month, year] = dateStr.split(' ');
  return new Date(Number(year), months[month], Number(day));
}

export const posts = [
  {
    href: "/blog/claude-atlassian-mcp-entegrasyonu",
    category: "Artificial Intelligence",
    title: "Working with Claude Connected to Atlassian: The MCP Revolution",
    summary: "Thanks to Atlassian's new Remote MCP Server, you can directly access your Jira and Confluence data with Claude and create AI-powered workflows. This integration increases team productivity while eliminating information silos.",
    date: "1 September 2025",
    readingTime: "10 min",
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
    title: "Our Favorite Wiki Tool: Confluence!",
    summary: "Confluence is a powerful tool that facilitates internal knowledge sharing and keeps corporate memory digital. Learn about its advantages, features, and how it integrates with Jira to transform team collaboration.",
    date: "5 July 2025",
    readingTime: "4 min",
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
    title: "What is Jira Software?",
    summary: "Discover what Jira Software is, what it does, and why it's so popular. Learn about its advantages, features, and best practices for modern development teams. From agile project management to sprint planning.",
    date: "10 June 2024",
    readingTime: "4 min",
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
    title: "Transform Your IT Operations Revolutionarily with Jira Service Management",
    summary: "Jira Service Management (JSM) is Atlassian's comprehensive ITSM platform developed for modern IT teams. Automation features reduce manual processes by 60-70%, and AI-powered solution recommendations increase first-call resolution rates by 30-40%.",
    date: "7 April 2024",
    readingTime: "8 min",
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
    category: "Consulting",
    title: "8 Critical Advantages of Jira Consulting for Your Business",
    summary: "Optimize your business's project management processes with Jira consulting. Discover how you can achieve 40-60% productivity increase, cost savings, and continuous improvement advantages for your team.",
    date: "15 March 2024",
    readingTime: "4 min",
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
    title: "2024 DevOps Trends",
    summary: "Explore the top DevOps trends for 2024: AI-powered DevOps tools, the rise of GitOps, Platform engineering, and how these technologies are transforming software development and IT operations.",
    date: "5 March 2024",
    readingTime: "6 min",
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
    category: "Digital Transformation",
    title: "Successful Digital Transformation Strategies",
    summary: "Discover critical points that companies should pay attention to in their digital transformation journey. Learn best practices, common pitfalls, and strategies to successfully navigate your digital transformation initiatives.",
    date: "3 March 2024",
    readingTime: "7 min",
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
    title: "Multi-Cloud Strategies",
    summary: "Learn effective ways to use different cloud providers and best practices for multi-cloud architectures. Discover how to optimize costs, improve reliability, and avoid vendor lock-in with smart multi-cloud strategies.",
    date: "28 February 2024",
    readingTime: "6 min",
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
    href: "/blog/atlassian-datacenter-alternatives",
    category: "Digital Transformation",
    title: "Atlassian Datacenter End of Life Alternatives: A Guide for Defense Industry and Security-Focused Companies",
    summary: "Jira and Confluence alternatives for defense industry and security-focused companies that cannot migrate to Cloud after Atlassian Datacenter end of life. Detailed analysis of XWiki, BlueSpice, Wiki.js, MediaWiki and more.",
    date: "7 January 2026",
    readingTime: "20 min",
    color: "from-blue-600 to-indigo-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    categoryColor: "text-blue-700",
    hoverColor: "group-hover:text-blue-800"
  },
  {
    href: "/blog/rovo-devrimi",
    category: "Artificial Intelligence",
    title: "Rovo: Atlassian's GenAI Revolution Touching Corporate Knowledge",
    summary: "The next-generation AI-powered enterprise assistant enables teams to quickly and meaningfully access scattered knowledge sources. Documents, notes, chats and task management tools converge at a single point. Sought information can be queried in natural language, summarized and personalized. It also saves time by automating repetitive tasks. It works in compliance with security and privacy principles. It offers an effective solution for teams who want to increase productivity, easily access information and reduce workload.",
    date: "8 July 2024",
    readingTime: "6 min",
    color: "from-purple-600 to-blue-700",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    categoryColor: "text-purple-700",
    hoverColor: "group-hover:text-purple-800"
  }
].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

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
              Latest news, articles and analysis from the digital transformation and technology world
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
                        Continue Reading 
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