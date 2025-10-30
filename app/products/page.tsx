import Link from "next/link";
export { generateMetadata } from './metadata';

export default function ProductsPage() {
  const products = [
    {
      id: "jira-software",
      name: "Jira Software",
      description: "Project management and issue tracking solution for software teams",
      icon: "/icons/jira-software.svg",
      color: "from-blue-600 to-blue-700",
      features: ["Agile project management", "Issue tracking", "Sprint planning", "Kanban board"],
      href: "/products/jira-software"
    },
    {
      id: "jira-service-management",
      name: "Jira Service Management",
      description: "Comprehensive solution for IT service management and customer support",
      icon: "/icons/jira-service-management.svg",
      color: "from-green-600 to-green-700",
      features: ["ITSM", "Customer support", "SLA management", "Self-service portal"],
      href: "/products/jira-service-management"
    },
    {
      id: "jira-work-management",
      name: "Jira Work Management",
      description: "Customizable work management platform for all business teams",
      icon: "/icons/jira-work-management.svg",
      color: "from-purple-600 to-purple-700",
      features: ["Workflow management", "Cross-department collaboration", "Flexible views", "Customizable processes"],
      href: "/products/jira-work-management"
    },
    {
      id: "confluence",
      name: "Confluence",
      description: "Central platform for team knowledge and documentation",
      icon: "/icons/confluence.svg",
      color: "from-orange-600 to-orange-700",
      features: ["Knowledge base", "Collaboration spaces", "Documentation", "Integrations"],
      href: "/products/confluence"
    },
    {
      id: "bitbucket",
      name: "Bitbucket",
      description: "Git repository management and CI/CD integration",
      icon: "/icons/bitbucket.svg",
      color: "from-indigo-600 to-indigo-700",
      features: ["Git hosting", "CI/CD pipeline", "Code review", "Jira integration"],
      href: "/products/bitbucket"
    },
    {
      id: "trello",
      name: "Trello",
      description: "Visual project management and workflow organization",
      icon: "/icons/trello.svg",
      color: "from-teal-600 to-teal-700",
      features: ["Kanban boards", "Butler automation", "Power-Ups", "Team collaboration"],
      href: "/products/trello"
    },
    {
      id: "opsgenie",
      name: "Opsgenie",
      description: "Alert management and on-call operations",
      icon: "/icons/opsgenie.svg",
      color: "from-red-600 to-red-700",
      features: ["Smart alert management", "On-call rotations", "Incident response", "Atlassian integration"],
      href: "/products/opsgenie"
    },
    {
      id: "statuspage",
      name: "Statuspage",
      description: "Real-time service status and incident notifications",
      icon: "/icons/statuspage.svg",
      color: "from-indigo-600 to-indigo-700",
      features: ["Status notifications", "Incident management", "Reliability display", "Integrations"],
      href: "/products/statuspage"
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Atlassian Product Suite
            </h1>
            <p className="text-xl mb-8">
              Comprehensive solutions for software development, project management, collaboration and more. 
              Discover the right tools for every team.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                <span className="text-base sm:text-lg">🚀</span>
                <span>PRODUCT PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Products We Provide Consulting Services For
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Products we specialize in within the Atlassian ecosystem to digitalize your business
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 scale-0 group-hover:scale-100"></div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                        {product.id === "jira-software" && "📋"}
                        {product.id === "jira-service-management" && "🛠️"}
                        {product.id === "jira-work-management" && "⚙️"}
                        {product.id === "confluence" && "📚"}
                        {product.id === "bitbucket" && "💻"}
                        {product.id === "trello" && "📋"}
                        {product.id === "opsgenie" && "🚨"}
                        {product.id === "statuspage" && "📊"}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 group-hover:scale-125 transition-transform flex-shrink-0"></div>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        View Details
                      </span>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-green-100 text-green-700 font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                <span className="text-base sm:text-lg">🎯</span>
                <span>CATEGORIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Discover by Category
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Find the product that best suits your needs and transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Project Management */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-blue-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 scale-0 group-hover:scale-100"></div>
                
                <div className="relative">
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    📋
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Project Management</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Comprehensive solutions for software development and general project management to organize your teams.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <Link href="/products/jira-software" className="flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl hover:bg-blue-50 transition-colors group/item">
                      <span className="text-sm sm:text-base text-blue-600 font-medium">Jira Software</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 group-hover/item:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link href="/products/jira-work-management" className="flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl hover:bg-blue-50 transition-colors group/item">
                      <span className="text-sm sm:text-base text-blue-600 font-medium">Jira Work Management</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 group-hover/item:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service Management */}
              <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-green-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 scale-0 group-hover:scale-100"></div>
                
                <div className="relative">
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    🛠️
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Service Management</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Specialized solutions for IT service management and customer support to enhance your service quality.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <Link href="/products/jira-service-management" className="flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl hover:bg-green-50 transition-colors group/item">
                      <span className="text-sm sm:text-base text-green-600 font-medium">Jira Service Management</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 group-hover/item:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Collaboration */}
              <div className="group relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-orange-100 overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 scale-0 group-hover:scale-100"></div>
                
                <div className="relative">
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    🤝
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Collaboration & Documentation</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Powerful platforms for team collaboration and knowledge management to increase efficiency.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <Link href="/products/confluence" className="flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl hover:bg-orange-50 transition-colors group/item">
                      <span className="text-sm sm:text-base text-orange-600 font-medium">Confluence</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 group-hover/item:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link href="/products/bitbucket" className="flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl hover:bg-orange-50 transition-colors group/item">
                      <span className="text-sm sm:text-base text-orange-600 font-medium">Bitbucket</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 group-hover/item:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link href="/products/trello" className="flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl hover:bg-orange-50 transition-colors group/item">
                      <span className="text-sm sm:text-base text-orange-600 font-medium">Trello</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 group-hover/item:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Operations Management */}
              <div className="group relative bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-red-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-red-200 to-pink-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 scale-0 group-hover:scale-100"></div>
                
                <div className="relative">
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    🚨
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Operations Management</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Specialized solutions for IT operations and alert management to protect your systems.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <Link href="/products/opsgenie" className="flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl hover:bg-red-50 transition-colors group/item">
                      <span className="text-sm sm:text-base text-red-600 font-medium">Opsgenie</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 group-hover/item:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Find out which product best suits you
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 px-4">
              Talk to our experts and discover the Atlassian solution that best suits your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Link 
                href="/free-discovery" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-white/90 transition-all text-center"
              >
                Free Discovery
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all text-center backdrop-blur-sm"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 