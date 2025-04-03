"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [searchText, setSearchText] = useState('');
  let productsCloseTimeout: NodeJS.Timeout;
  let solutionsCloseTimeout: NodeJS.Timeout;

  useEffect(() => {
    // İşletim sistemini tespit et
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  // Arama kısayolu için event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
          searchInput.focus();
        }
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleProductsMouseEnter = () => {
    clearTimeout(productsCloseTimeout);
    setIsSolutionsMenuOpen(false);
    setIsProductsMenuOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsCloseTimeout = setTimeout(() => {
      setIsProductsMenuOpen(false);
    }, 500);
  };

  const handleSolutionsMouseEnter = () => {
    clearTimeout(solutionsCloseTimeout);
    setIsProductsMenuOpen(false);
    setIsSolutionsMenuOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsCloseTimeout = setTimeout(() => {
      setIsSolutionsMenuOpen(false);
    }, 500);
  };

  const handleClearSearch = () => {
    setSearchText('');
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    if (searchInput) {
      searchInput.focus();
    }
  };

  return (
    <>
      <header className="fixed w-full bg-white z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img src="/logo.png" alt="Virtual Riddle Logo" className="w-[200px] h-[200px] object-contain" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                href="/about" 
                className="px-4 py-2 text-base text-gray-800 hover:text-blue-600 font-semibold rounded-xl transition-all duration-200"
              >
                Hakkımızda
              </Link>

              <div 
                className="relative group"
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <button 
                  onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-800 hover:text-blue-600 font-semibold text-base transition-all duration-200 text-left"
                >
                  <span className="text-left">Ürünler</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isProductsMenuOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                <div 
                  className={`absolute left-0 mt-4 w-[500px] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl border border-white/5 shadow-2xl transform transition-all duration-300 ease-out origin-top text-left ${
                    isProductsMenuOpen 
                      ? 'opacity-100 translate-y-0 visible' 
                      : 'opacity-0 -translate-y-4 invisible'
                  }`}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold text-white mb-4 text-xl tracking-tight text-left">Planlama & Takip</h3>
                        <ul className="space-y-3">
                          <li>
                            <Link href="/products/jira-software" className="group/item flex items-start p-2.5 rounded-2xl hover:bg-white/5 transition-all">
                              <div className="shrink-0 w-11 h-11 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover/item:scale-95 transition-transform">
                                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div className="ml-3">
                                <h5 className="font-semibold text-white group-hover/item:text-blue-300 text-[16px] mb-1 transition-colors">Jira Software</h5>
                                <p className="text-[14px] text-gray-300 leading-snug">Çevik proje yönetimi</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/jira-service-management" className="group/item flex items-start p-2.5 rounded-2xl hover:bg-white/5 transition-all">
                              <div className="shrink-0 w-11 h-11 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-purple-500/20 group-hover/item:scale-95 transition-transform">
                                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div className="ml-3">
                                <h5 className="font-semibold text-white group-hover/item:text-purple-300 text-[16px] mb-1 transition-colors">Jira Service Management</h5>
                                <p className="text-[14px] text-gray-300 leading-snug">IT servis yönetimi</p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products/jira-work-management" className="group/item flex items-start p-2.5 rounded-2xl hover:bg-white/5 transition-all">
                              <div className="shrink-0 w-11 h-11 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-purple-500/20 group-hover/item:scale-95 transition-transform">
                                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M7 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M7 17H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <div className="ml-3">
                                <div className="font-semibold text-white group-hover/item:text-purple-300 text-[16px] mb-1 transition-colors">Jira Work Management</div>
                                <div className="text-[14px] text-gray-300 leading-snug">İş takımları için proje yönetimi</div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-8">
                        <div>
                          <h3 className="font-semibold text-white mb-4 text-xl tracking-tight">İş Birliği & Güvenlik</h3>
                          <ul className="space-y-3">
                            <li>
                              <Link href="/products/confluence" className="group/item flex items-start p-2.5 rounded-2xl hover:bg-white/5 transition-all">
                                <div className="shrink-0 w-11 h-11 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl flex items-center justify-center border border-indigo-500/20 group-hover/item:scale-95 transition-transform">
                                  <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 11H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <div className="ml-3">
                                  <div className="font-semibold text-white group-hover/item:text-indigo-300 text-[16px] mb-1 transition-colors">Confluence</div>
                                  <div className="text-[14px] text-gray-300 leading-snug">Takım iş birliği ve bilgi paylaşımı</div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                          <div className="mt-6 border-t border-white/10 pt-6">
                            <h4 className="font-semibold text-white mb-4 text-lg tracking-tight">Kod Yönetimi</h4>
                            <ul className="space-y-3">
                              <li>
                                <Link href="/products/bitbucket" className="group/item flex items-start p-2.5 rounded-2xl hover:bg-white/5 transition-all">
                                  <div className="shrink-0 w-11 h-11 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover/item:scale-95 transition-transform">
                                    <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17 3H7C4 3 2 4.79 2 7.5V16.5C2 19.21 4 21 7 21H17C20 21 22 19.21 22 16.5V7.5C22 4.79 20 3 17 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M8 10L16 10M8 14L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </div>
                                  <div className="ml-3">
                                    <div className="font-semibold text-white group-hover/item:text-blue-300 text-[16px] mb-1 transition-colors">Bitbucket</div>
                                    <div className="text-[14px] text-gray-300 leading-snug">Git tabanlı kod yönetimi</div>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className="relative group"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <button 
                  onClick={() => setIsSolutionsMenuOpen(!isSolutionsMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-800 hover:text-blue-600 font-semibold text-base transition-all duration-200"
                >
                  <span>Çözümler</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isSolutionsMenuOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                <div 
                  className={`absolute left-0 mt-4 w-[300px] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl border border-white/5 shadow-2xl transform transition-all duration-300 ease-out origin-top ${
                    isSolutionsMenuOpen 
                      ? 'opacity-100 translate-y-0 visible' 
                      : 'opacity-0 -translate-y-4 invisible'
                  }`}
                >
                  <div className="p-3">
                    <div className="space-y-3">
                      <Link href="/solutions/consulting" className="group/item flex items-start p-2.5 rounded-2xl hover:bg-white/5 transition-all">
                        <div className="shrink-0 w-11 h-11 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover/item:scale-95 transition-transform">
                          <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 12H15M8 16H12M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h5 className="font-semibold text-white group-hover/item:text-emerald-300 text-[16px] mb-1 transition-colors">Atlassian Danışmanlığı</h5>
                          <p className="text-[14px] text-gray-300 leading-snug">Kurumsal süreç optimizasyonu</p>
                        </div>
                      </Link>

                      <Link href="/solutions/cloud-migration" className="group/item flex items-start p-2.5 rounded-2xl hover:bg-white/5 transition-all">
                        <div className="shrink-0 w-11 h-11 bg-gradient-to-br from-sky-500/20 to-sky-600/20 rounded-2xl flex items-center justify-center border border-sky-500/20 group-hover/item:scale-95 transition-transform">
                          <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 19H17.5C21.5 19 22 17.2 22 15.5C22 13.8 21.5 12 17.5 12C17.5 7 15.5 5 12 5C8.5 5 6.5 7 6.5 12C2.5 12 2 13.8 2 15.5C2 17.2 2.5 19 6.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h5 className="font-semibold text-white group-hover/item:text-sky-300 text-[16px] mb-1 transition-colors">Cloud Migration</h5>
                          <p className="text-[14px] text-gray-300 leading-snug">Bulut geçiş stratejisi ve uygulaması</p>
                        </div>
                      </Link>

                      <Link href="/solutions/training" className="group/item flex items-start p-2.5 rounded-2xl hover:bg-white/5 transition-all">
                        <div className="shrink-0 w-11 h-11 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl flex items-center justify-center border border-amber-500/20 group-hover/item:scale-95 transition-transform">
                          <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h5 className="font-semibold text-white group-hover/item:text-amber-300 text-[16px] mb-1 transition-colors">Eğitim & Sertifikasyon</h5>
                          <p className="text-[14px] text-gray-300 leading-snug">Atlassian ürün eğitimleri</p>
                        </div>
                      </Link>

                      <Link href="/free-discovery" className="group/item flex items-start p-2.5 rounded-2xl hover:bg-white/5 transition-all">
                        <div className="shrink-0 w-11 h-11 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-2xl flex items-center justify-center border border-teal-500/20 group-hover/item:scale-95 transition-transform">
                          <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h5 className="font-semibold text-white group-hover/item:text-teal-300 text-[16px] mb-1 transition-colors">Ücretsiz Keşif</h5>
                          <p className="text-[14px] text-gray-300 leading-snug">Dijital dönüşüm ön analizi</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/pricing" 
                className="px-4 py-2 text-base text-gray-800 hover:text-blue-600 font-semibold rounded-xl transition-all duration-200"
              >
                Fiyatlandırma
              </Link>

              <Link 
                href="/contact" 
                className="px-4 py-2 text-base text-gray-800 hover:text-blue-600 font-semibold rounded-xl transition-all duration-200"
              >
                İletişim
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              {/* Search */}
              <div className="hidden md:block">
                <div className="relative">
                  <svg className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                  </svg>
                  <input
                    id="search-input"
                    type="search"
                    placeholder="Ara..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-72 pl-12 pr-10 py-2.5 bg-blue-50 rounded-xl text-sm text-blue-400 placeholder-blue-400
                    border border-blue-100 focus:outline-none focus:border-blue-200
                    hover:bg-blue-100/50 flex items-center truncate appearance-none [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
                    onFocus={() => setIsSearchOpen(true)}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        setIsSearchOpen(false);
                      }
                    }}
                  />
                  {searchText && (
                    <button
                      onClick={handleClearSearch}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                  <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center space-x-1.5 text-xs text-blue-400 h-full transition-opacity ${isSearchOpen || searchText ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    {isMac ? (
                      <kbd className="px-2 py-1 bg-blue-100/50 rounded-lg flex items-center justify-center">⌘</kbd>
                    ) : (
                      <kbd className="px-2 py-1 bg-blue-100/50 rounded-lg flex items-center justify-center">Ctrl</kbd>
                    )}
                    <span className="flex items-center justify-center">+</span>
                    <kbd className="px-2 py-1 bg-blue-100/50 rounded-lg flex items-center justify-center">K</kbd>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden text-gray-600 hover:text-blue focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden py-6 border-t border-gray-100/50 mt-2`}>
            <div className="flex flex-col space-y-6">
              {/* Mobile Search */}
              <div className="px-2">
                <div className="relative group">
                  <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                  </svg>
                  <input
                    type="search"
                    placeholder="Ara..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white/80 rounded-xl text-sm border border-gray-200 
                    hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent 
                    shadow-sm hover:shadow-md transition-all duration-200 backdrop-blur-lg"
                  />
              </div>
              </div>

              {/* Mobile Menu Items */}
              <div className="px-2 space-y-4">
                <Link href="/about" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50">
                  Hakkımızda
                </Link>
                
                <Link href="/career" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50">
                  Kariyer
                </Link>
                
                <Link href="/contact" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50">
                  İletişim
                </Link>
                
                <div className="space-y-2">
                  <p className="px-3 text-sm font-semibold text-gray-900">Ürünler</p>
                  <Link href="/products/jira-software" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50 ml-4">
                    Jira Software
                  </Link>
                  <Link href="/products/jira-service-management" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50 ml-4">
                    Jira Service Management
                  </Link>
                  <Link href="/products/confluence" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50 ml-4">
                    Confluence
                  </Link>
                  <Link href="/products/bitbucket" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50 ml-4">
                    Bitbucket
                  </Link>
                </div>
                
                <div className="space-y-2">
                  <p className="px-3 text-sm font-semibold text-gray-900">Çözümler</p>
                  <Link href="/solutions/consulting" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50 ml-4">
                    Atlassian Danışmanlığı
                  </Link>
                  <Link href="/solutions/cloud-migration" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50 ml-4">
                    Cloud Migration
                  </Link>
                  <Link href="/solutions/training" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50 ml-4">
                    Eğitim & Sertifikasyon
                  </Link>
                  <Link href="/free-discovery" className="flex items-center px-3 py-2 text-gray-600 hover:text-blue font-medium rounded-xl hover:bg-gray-50 ml-4">
                    Ücretsiz Keşif
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {children}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Logo ve Sosyal Medya */}
            <div className="md:col-span-3 space-y-6">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Virtual Riddle</span>
              </Link>
              <p className="text-gray-400">Dijital dönüşüm yolculuğunuzda yanınızdayız. Modern çözümlerle işinizi ileriye taşıyın.</p>
              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Ürünler */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6">Ürünler</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/products/jira-software" className="text-gray-400 hover:text-white transition-colors">Jira Software</Link>
                </li>
                <li>
                  <Link href="/products/confluence" className="text-gray-400 hover:text-white transition-colors">Confluence</Link>
                </li>
                <li>
                  <Link href="/products/bitbucket" className="text-gray-400 hover:text-white transition-colors">Bitbucket</Link>
                </li>
                <li>
                  <Link href="/products/jira-service-management" className="text-gray-400 hover:text-white transition-colors">Jira Service Management</Link>
                </li>
              </ul>
            </div>
            
            {/* Çözümler */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6">Çözümler</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/solutions/consulting" className="text-gray-400 hover:text-white transition-colors">Atlassian Danışmanlığı</Link>
                </li>
                <li>
                  <Link href="/solutions/cloud-migration" className="text-gray-400 hover:text-white transition-colors">Cloud Migration</Link>
                </li>
                <li>
                  <Link href="/solutions/training" className="text-gray-400 hover:text-white transition-colors">Eğitim & Sertifikasyon</Link>
                </li>
                <li>
                  <Link href="/free-discovery" className="text-gray-400 hover:text-white transition-colors">Ücretsiz Keşif</Link>
                </li>
              </ul>
            </div>

            {/* Şirket */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6">Şirket</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link>
                </li>
                <li>
                  <Link href="/career" className="text-gray-400 hover:text-white transition-colors">Kariyer</Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">İletişim</Link>
                </li>
              </ul>
            </div>

            {/* İletişim */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-white mb-6">Bize Ulaşın</h3>
              <div className="space-y-4">
                <p className="text-gray-400">Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız.</p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all space-x-2"
                >
                  <span>İletişime Geç</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Alt Bilgi */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">© 2024 Virtual Riddle. Tüm hakları saklıdır.</p>
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Gizlilik Politikası</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Kullanım Koşulları</Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Site Haritası</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 