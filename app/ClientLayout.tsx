"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import CookieConsent from "./components/CookieConsent";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, FileText, ChevronRight, Package, Zap, Building, Scale, BookText, ChevronDown, ChevronUp, Building2, DollarSign, Mail, BarChart, Users, MessageSquare } from "lucide-react";
import Fuse, { IFuseOptions, FuseResult } from 'fuse.js';
import { searchData } from "./lib/searchData";
import { 
    JiraSoftwareIcon, 
    JiraServiceManagementIcon, 
    JiraWorkManagementIcon, 
    ConfluenceIcon,
    BitbucketIcon,
    ConsultingIcon,
    CloudMigrationIcon,
    TrainingIcon,
    DiscoveryIcon
} from "./components/MenuIcons";

// Arama verisi için tip tanımları
interface SearchItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
}

const fuseOptions: IFuseOptions<SearchItem> = {
  keys: [
    { name: 'title', weight: 0.7 },
    { name: 'description', weight: 0.3 },
    { name: 'tags', weight: 0.2 },
  ],
  includeScore: true,
  threshold: 0.3,
  minMatchCharLength: 2,
};

const fuse = new Fuse(searchData as SearchItem[], fuseOptions);

const CategoryIcon = ({ category, className }: { category: string, className?: string }) => {
  const defaultClassName = "h-5 w-5 text-gray-400";
  const combinedClassName = `${defaultClassName} ${className || ''}`;

  switch (category) {
    case 'Ürünler': return <Package className={combinedClassName} />;
    case 'Çözümler': return <Zap className={combinedClassName} />;
    case 'Kurumsal': return <Building className={combinedClassName} />;
    case 'Blog': return <BookText className={combinedClassName} />;
    case 'Yasal': return <Scale className={combinedClassName} />;
    default: return <FileText className={combinedClassName} />;
  }
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<FuseResult<SearchItem>[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const listContainerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  let productsCloseTimeout: NodeJS.Timeout;
  let solutionsCloseTimeout: NodeJS.Timeout;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        const searchInput = document.getElementById('search-input-modal');
        if (searchInput) searchInput.focus();
      }, 100);
    } else {
      setSearchText('');
      setSearchResults([]);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (searchText.trim().length > 1) {
      const results = fuse.search(searchText);
      setSearchResults(results.slice(0, 7));
    } else {
      setSearchResults([]);
    }
    setSelectedIndex(-1);
  }, [searchText]);
  
  useEffect(() => {
    if (selectedIndex < 0 || !listContainerRef.current) return;
    const selectedElement = listContainerRef.current.querySelector(`[data-index='${selectedIndex}']`);
    if (selectedElement) {
      selectedElement.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  const handleProductsMouseEnter = () => {
    clearTimeout(productsCloseTimeout);
    setIsSolutionsMenuOpen(false);
    setIsProductsMenuOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsCloseTimeout = setTimeout(() => {
      setIsProductsMenuOpen(false);
    }, 300);
  };

  const handleSolutionsMouseEnter = () => {
    clearTimeout(solutionsCloseTimeout);
    setIsProductsMenuOpen(false);
    setIsSolutionsMenuOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsCloseTimeout = setTimeout(() => {
      setIsSolutionsMenuOpen(false);
    }, 300);
  };

  const handleClearSearch = () => {
    setSearchText('');
    const searchInput = document.getElementById('search-input-modal') as HTMLInputElement;
    if (searchInput) searchInput.focus();
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const totalResults = searchResults.length;
    const hasViewAllLink = totalResults > 0 && searchText.trim();
    const totalItems = hasViewAllLink ? totalResults + 1 : totalResults;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (totalItems > 0) setSelectedIndex(prev => (prev + 1) % totalItems);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (totalItems > 0) setSelectedIndex(prev => (prev - 1 + totalItems) % totalItems);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < totalResults) {
        router.push(searchResults[selectedIndex].item.url);
        setIsSearchOpen(false);
      } else if (hasViewAllLink && selectedIndex === totalResults) {
        router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
        setIsSearchOpen(false);
      } else if (searchText.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
        setIsSearchOpen(false);
      }
    }
  };
  
  const handleResultClick = () => {
    setIsSearchOpen(false);
  };

  const productLinks = [
    { href: "/products/jira-software", icon: JiraSoftwareIcon, title: "Jira Software", description: "Çevik proje yönetimi", color: "blue" as const },
    { href: "/products/jira-service-management", icon: JiraServiceManagementIcon, title: "Jira Service Management", description: "IT servis yönetimi", color: "purple" as const },
    { href: "/products/jira-work-management", icon: JiraWorkManagementIcon, title: "Jira Work Management", description: "İş takımları için proje yönetimi", color: "purple" as const },
    { href: "/products/confluence", icon: ConfluenceIcon, title: "Confluence", description: "Takım iş birliği ve bilgi paylaşımı", color: "indigo" as const },
    { href: "/products/bitbucket", icon: BitbucketIcon, title: "Bitbucket", description: "Git tabanlı kod yönetimi", color: "blue" as const },
  ];

  const solutionLinks = [
    { href: "/solutions/consulting", icon: ConsultingIcon, title: "Atlassian Danışmanlığı", description: "Kurumsal süreç optimizasyonu", color: "emerald" as const },
    { href: "/solutions/cloud-migration", icon: CloudMigrationIcon, title: "Cloud Migration", description: "Bulut geçiş stratejisi", color: "sky" as const },
    { href: "/solutions/training", icon: TrainingIcon, title: "Eğitim & Sertifikasyon", description: "Atlassian ürün eğitimleri", color: "amber" as const },
    { href: "/free-discovery", icon: DiscoveryIcon, title: "Ücretsiz Keşif", description: "Dijital dönüşüm ön analizi", color: "teal" as const },
  ];

  return (
    <>
      <header className="fixed w-full bg-white z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <img src="/logo.png" alt="Virtual Riddle Logo" className="w-auto h-12" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
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
                <button className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-800 hover:text-blue-600 font-semibold text-base transition-all duration-200 text-left">
                  <span>Ürünler</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isProductsMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-4 w-full max-w-[calc(100vw-2rem)] lg:w-[550px] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl border border-white/5 shadow-2xl"
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                          <div>
                            <h3 className="font-semibold text-white mb-4 text-xl tracking-tight text-left">Planlama & Takip</h3>
                            <ul className="space-y-3">
                              <MenuItem href="/products/jira-software" icon={JiraSoftwareIcon} title="Jira Software" description="Çevik proje yönetimi" color="blue" onClick={() => setIsMobileMenuOpen(false)} />
                              <MenuItem href="/products/jira-service-management" icon={JiraServiceManagementIcon} title="Jira Service Management" description="IT servis yönetimi" color="purple" onClick={() => setIsMobileMenuOpen(false)} />
                              <MenuItem href="/products/jira-work-management" icon={JiraWorkManagementIcon} title="Jira Work Management" description="İş takımları için proje yönetimi" color="purple" onClick={() => setIsMobileMenuOpen(false)} />
                            </ul>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <h3 className="font-semibold text-white mb-4 text-xl tracking-tight">İş Birliği & Güvenlik</h3>
                              <ul className="space-y-3">
                                <MenuItem href="/products/confluence" icon={ConfluenceIcon} title="Confluence" description="Takım iş birliği ve bilgi paylaşımı" color="indigo" onClick={() => setIsMobileMenuOpen(false)} />
                              </ul>
                            </div>
                            <div className="border-t border-white/10 pt-6">
                              <h4 className="font-semibold text-white mb-4 text-lg tracking-tight">Kod Yönetimi</h4>
                              <ul className="space-y-3">
                                <MenuItem href="/products/bitbucket" icon={BitbucketIcon} title="Bitbucket" description="Git tabanlı kod yönetimi" color="blue" onClick={() => setIsMobileMenuOpen(false)} />
                              </ul>
                            </div>
                            <div className="border-t border-white/10 pt-6">
                              <h4 className="font-semibold text-white mb-4 text-lg tracking-tight">Agile & DevOps</h4>
                              <ul className="space-y-3">
                                <MenuItem href="/products/trello" icon={JiraSoftwareIcon} title="Trello" description="Görsel proje yönetimi" color="teal" onClick={() => setIsMobileMenuOpen(false)} />
                                <MenuItem href="/products/statuspage" icon={BitbucketIcon} title="Statuspage" description="Durum ve olay bildirimi" color="indigo" onClick={() => setIsMobileMenuOpen(false)} />
                              </ul>
                            </div>
                            <div className="border-t border-white/10 pt-6">
                              <h4 className="font-semibold text-white mb-4 text-lg tracking-tight">Servis Yönetimi</h4>
                              <ul className="space-y-3">
                                <MenuItem href="/products/opsgenie" icon={JiraServiceManagementIcon} title="Opsgenie" description="Uyarı ve on-call yönetimi" color="purple" onClick={() => setIsMobileMenuOpen(false)} />
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div 
                className="relative group"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <button className="flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-800 hover:text-blue-600 font-semibold text-base transition-all duration-200">
                  <span>Çözümler</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isSolutionsMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-4 w-[350px] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl border border-white/5 shadow-2xl"
                    >
                      <div className="p-4">
                        <ul className="space-y-2">
                           <MenuItem href="/solutions/consulting" icon={ConsultingIcon} title="Atlassian Danışmanlığı" description="Kurumsal süreç optimizasyonu" color="emerald" onClick={() => setIsMobileMenuOpen(false)} />
                           <MenuItem href="/solutions/cloud-migration" icon={CloudMigrationIcon} title="Cloud Migration" description="Bulut geçiş stratejisi" color="sky" onClick={() => setIsMobileMenuOpen(false)} />
                           <MenuItem href="/solutions/training" icon={TrainingIcon} title="Eğitim & Sertifikasyon" description="Atlassian ürün eğitimleri" color="amber" onClick={() => setIsMobileMenuOpen(false)} />
                           <MenuItem href="/free-discovery" icon={DiscoveryIcon} title="Ücretsiz Keşif" description="Dijital dönüşüm ön analizi" color="teal" onClick={() => setIsMobileMenuOpen(false)} />
                        </ul>
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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

            {/* Arama Butonu ve Mobil Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block">
                    <button
                    onClick={() => setIsSearchOpen(true)}
                    className="flex items-center justify-between w-72 p-2.5 pl-4 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                        <Search className="w-5 h-5 text-blue-400" />
                        <span className="text-sm text-blue-400">Ara...</span>
                  </div>
                    <div className="flex items-center space-x-1.5 text-xs text-blue-400">
                        <kbd className="px-2 py-1 bg-blue-100/50 rounded-lg">{isMac ? '⌘' : 'Ctrl'}</kbd>
                        <span>+</span>
                        <kbd className="px-2 py-1 bg-blue-100/50 rounded-lg">K</kbd>
                </div>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
              >
                <X className={`w-6 h-6 transition-transform ${!isMobileMenuOpen ? 'rotate-45 scale-0' : ''}`} />
                <svg className={`w-6 h-6 transition-transform ${isMobileMenuOpen ? '-rotate-45 scale-0' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-2xl"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6 flex-shrink-0">
                  <h3 className="text-2xl font-bold text-white">Menü</h3>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-300 hover:bg-white/10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-grow overflow-y-auto -mr-6 pr-6">
                  <div className="px-2 space-y-2">
                    <button 
                      onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }}
                      className="w-full flex items-center justify-between p-4 bg-white/5 rounded-lg text-left mb-2"
                    >
                      <span className="font-semibold text-gray-300">Ara...</span>
                      <Search className="w-5 h-5 text-gray-500" />
                    </button>

                    <div className="border-b border-white/10">
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center p-4 font-semibold text-lg text-white">
                            Hakkımızda
                        </Link>
                    </div>
                    
                    <MobileAccordion title="Ürünler">
                      <ul className="space-y-1 pt-2">
                        {productLinks.map(link => (
                          <MenuItem key={link.href} {...link} onClick={() => setIsMobileMenuOpen(false)} />
                        ))}
                      </ul>
                    </MobileAccordion>

                    <MobileAccordion title="Çözümler">
                      <ul className="space-y-1 pt-2">
                        {solutionLinks.map(link => (
                          <MenuItem key={link.href} {...link} onClick={() => setIsMobileMenuOpen(false)} />
                        ))}
                      </ul>
                    </MobileAccordion>
                    
                    <div className="border-b border-white/10">
                        <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center p-4 font-semibold text-lg text-white">
                            Fiyatlandırma
                        </Link>
                    </div>

                    <div className="border-b border-white/10">
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center p-4 font-semibold text-lg text-white">
                            İletişim
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={pathname === '/search' ? 'pt-20' : ''}>
        {children}
      </main>

      <AnimatePresence>
        {isSearchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-black/50"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-0 left-0 right-0 z-[101] mx-auto mt-[15vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-x-0 top-0 z-0 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80aaff] to-[#3c82f6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center px-4 border-b border-gray-200 dark:border-gray-700/50">
                  <Search className="h-6 w-6 text-gray-500 flex-shrink-0" />
                  <input
                    id="search-input-modal"
                    type="text"
                    placeholder="Ürün, çözüm veya bir özellik arayın..."
                    className="w-full bg-transparent p-4 text-lg border-0 focus:ring-0 focus:outline-none text-gray-800 dark:text-gray-200 placeholder-gray-500"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    autoComplete="off"
                  />
                  {searchText && (
                     <button onClick={handleClearSearch} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-full">
                       <X className="h-5 w-5" />
                     </button>
                  )}
                </div>
                
                <div ref={listContainerRef} className="max-h-[45vh] overflow-y-auto">
                  {searchResults.length > 0 && <p className="pt-2 px-4 text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase">Sayfalar</p>}
                  
                  {searchResults.length > 0 ? (
                    <ul className="p-2">
                      {searchResults.map(({ item }, index) => (
                        <li key={item.id} data-index={index}>
                          <Link href={item.url} legacyBehavior>
                            <a 
                              onClick={handleResultClick} 
                              className={`flex justify-between items-center p-3 my-1 rounded-lg cursor-pointer transition-colors ${
                                selectedIndex === index
                                  ? 'bg-blue-600/10 dark:bg-blue-500/20'
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
                              }`}
                            >
                              <div className="flex items-center space-x-4">
                                <CategoryIcon category={item.category} className={`h-6 w-6 transition-transform group-hover:scale-110 ${selectedIndex === index ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                                <div>
                                  <p className={`font-semibold text-base ${selectedIndex === index ? 'text-blue-700 dark:text-blue-300' : 'text-gray-800 dark:text-gray-200'}`}>{item.title}</p>
              </div>
              </div>
                              <ChevronRight className={`h-5 w-5 ${selectedIndex === index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`} />
                            </a>
                      </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    searchText.trim().length > 1 && (
                      <div className="p-10 text-center">
                        <FileText className="mx-auto h-10 w-10 text-gray-400" />
                        <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">Sonuç Bulunamadı</h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          "<span className="font-medium">{searchText}</span>" için sonuç yok.
                        </p>
                      </div>
                    )
                  )}
                   {searchText.trim().length <= 1 && searchResults.length === 0 && (
                     <div className="p-10 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Aramaya başlamak için en az 2 karakter girin.
                        </p>
                  </div>
                   )}
                  </div>
                {searchResults.length > 0 && (
                  <div data-index={searchResults.length} className="border-t border-gray-200 dark:border-gray-700/50">
                    <Link href={`/search?q=${encodeURIComponent(searchText.trim())}`} legacyBehavior>
                      <a 
                        onClick={handleResultClick} 
                        className={`block w-full text-left p-4 text-base font-semibold transition-colors ${
                          selectedIndex === searchResults.length
                            ? 'bg-blue-600/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                        }`}
                      >
                        <span className="flex items-center"><Search className="h-5 w-5 mr-3" /> &quot;{searchText}&quot; için tüm sonuçları gör</span>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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

      <CookieConsent />

      {/* Alpha Version Sticky Banner */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-2xl border border-white/20 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🚀</span>
            </div>
            <div className="text-sm font-medium">
              <span className="mr-2">Alpha Versiyon</span>
              <span className="opacity-80">v1.0.0</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-xs opacity-80">Geliştirme Aşamasında</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 

const colorClasses = {
    blue: {
        bg: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/20',
        text: 'text-blue-400',
        hoverText: 'group-hover/item:text-blue-300'
    },
    purple: {
        bg: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/20',
        text: 'text-purple-400',
        hoverText: 'group-hover/item:text-purple-300'
    },
    indigo: {
        bg: 'bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 border-indigo-500/20',
        text: 'text-indigo-400',
        hoverText: 'group-hover/item:text-indigo-300'
    },
    emerald: {
        bg: 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-emerald-500/20',
        text: 'text-emerald-400',
        hoverText: 'group-hover/item:text-emerald-300'
    },
    sky: {
        bg: 'bg-gradient-to-br from-sky-500/20 to-sky-600/20 border-sky-500/20',
        text: 'text-sky-400',
        hoverText: 'group-hover/item:text-sky-300'
    },
    amber: {
        bg: 'bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-amber-500/20',
        text: 'text-amber-400',
        hoverText: 'group-hover/item:text-amber-300'
    },
    teal: {
        bg: 'bg-gradient-to-br from-teal-500/20 to-teal-600/20 border-teal-500/20',
        text: 'text-teal-400',
        hoverText: 'group-hover/item:text-teal-300'
    }
};

type Color = keyof typeof colorClasses;

const MenuItem = ({ href, icon: Icon, title, description, color, onClick }: { href: string, icon: React.ElementType, title: string, description: string, color: Color, onClick?: () => void }) => {
    const classes = colorClasses[color];

    return (
        <li>
            <Link href={href} onClick={onClick} className="group/item flex items-start p-2.5 rounded-2xl hover:bg-white/5 transition-all">
                <div className={`shrink-0 w-11 h-11 ${classes.bg} rounded-2xl flex items-center justify-center border group-hover/item:scale-95 transition-transform`}>
                    <Icon className={`w-6 h-6 ${classes.text}`} />
                </div>
                <div className="ml-3">
                    <h5 className={`font-semibold text-white text-[16px] mb-1`}>{title}</h5>
                    <p className="text-[14px] text-gray-300 leading-snug">{description}</p>
                </div>
            </Link>
        </li>
    );
};

const MobileAccordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 font-semibold text-lg text-white"
      >
        <span>{title}</span>
        <ChevronDown className={`w-5 h-5 text-white/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 