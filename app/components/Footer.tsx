"use client";

export default function Footer() {
  const products = {
    'Proje & İş Yönetimi': [
      { name: 'Jira Software', href: '/products/jira-software' },
      { name: 'Jira Work Management', href: '/products/jira-work-management' },
      { name: 'Jira Service Management', href: '/products/jira-service-management' },
    ],
    'Doküman & İşbirliği': [
      { name: 'Confluence', href: '/products/confluence' },
    ],
    'DevOps & Code': [
      { name: 'Bitbucket', href: '/products/bitbucket' },
    ],
    'Platform & Marketplace': [
      { name: 'Atlassian Platform', href: '/products/platform' },
      { name: 'Marketplace', href: '/products/marketplace' },
    ],
  };

  const exploreProducts = [
    { name: 'Bitbucket', href: '/products/bitbucket' },
    { name: 'Trello', href: '/products/trello' },
    { name: 'Statuspage', href: '/products/statuspage' },
    { name: 'Opsgenie', href: '/products/opsgenie' },
  ];

  return (
    <footer className="bg-[#0F172A] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Logo ve Açıklama */}
        <div className="flex flex-col items-center mb-12">
          <img src="/logo-footer.svg" alt="Virtual Riddle Logo" className="w-16 h-16 mx-auto" />
        </div>

        {/* Ana İçerik Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Ürünler */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Ürünler</h3>
            <div className="space-y-4">
              {Object.entries(products).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {items.map((item) => (
                      <li key={item.name}>
                        <a 
                          href={item.href} 
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {/* Keşfet */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Keşfet</h4>
                <ul className="space-y-1">
                  {exploreProducts.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Çözümler */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Çözümler</h3>
            <ul className="space-y-2">
              <li><a href="/solutions/consulting" className="text-gray-400 hover:text-white transition-colors text-sm">Atlassian Danışmanlığı</a></li>
              <li><a href="/solutions/cloud-migration" className="text-gray-400 hover:text-white transition-colors text-sm">Cloud Migration</a></li>
              <li><a href="/solutions/training" className="text-gray-400 hover:text-white transition-colors text-sm">Eğitim & Sertifikasyon</a></li>
              <li><a href="/solutions/devops" className="text-gray-400 hover:text-white transition-colors text-sm">AI Altyapısı</a></li>
              <li><a href="/solutions/it-support" className="text-gray-400 hover:text-white transition-colors text-sm">IT Destek</a></li>
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Şirket</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">Hakkımızda</a></li>
              <li><a href="/career" className="text-gray-400 hover:text-white transition-colors text-sm">Kariyer</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">İletişim</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Destek */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Destek</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Teknik Destek</a></li>
              <li><a href="/free-discovery" className="text-gray-400 hover:text-white transition-colors text-sm">Ücretsiz Keşif</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Gizlilik Politikası</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Kullanım Şartları</a></li>
              <li><a href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">Site Haritası</a></li>
            </ul>
          </div>
        </div>

        {/* Sosyal Medya */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/robertdowneyjr/?hl=tr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://sosyal.teknofest.app/@virtualriddle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Next Social"
          >
            <svg xmlns="//v6s.cnnturk.com/images/favicon/next-button.svg" width="14" height="14" viewBox="0 0 16 16" fill="none" className="w-6 h-6">
              <path d="M4.77139 0.0125732H0.00012207V15.9997H4.77139V0.0125732Z" fill="currentColor"></path>
              <path d="M10.2404 15.9871C9.08771 15.9871 8.0582 15.3922 7.67872 14.5067L5.32297 8.38192L2.12354 0H7.77092L11.1035 8.68911L13.9783 15.9871H10.2404Z" fill="currentColor"></path>
              <path d="M11.354 9.57871C11.271 9.34492 11.2288 9.34462 11.2288 9.09744V0.0131836H16.0001V13.7914C16.0001 14.9291 15.1134 15.8686 13.9785 15.9871L11.354 9.57871Z" fill="currentColor"></path>
            </svg>
          </a>
        </div>

        {/* Telif Hakkı */}
        <div className="text-center text-gray-500">
          <p>© 2024 Virtual Riddle. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 