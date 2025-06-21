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
                      className="absolute left-0 mt-4 w-[550px] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl border border-white/5 shadow-2xl"
                >
                  <div className="p-6">
                        <div className="grid grid-cols-2 gap-8">
                          <div>
                            <h3 className="font-semibold text-white mb-4 text-xl tracking-tight text-left">Planlama &amp; Takip</h3>
                        <ul className="space-y-3">
                              <MenuItem href="/products/jira-software" icon={JiraSoftwareIcon} title="Jira Software" description="Çevik proje yönetimi" color="blue" onClick={() => setIsMobileMenuOpen(false)} />
                              <MenuItem href="/products/jira-service-management" icon={JiraServiceManagementIcon} title="Jira Service Management" description="IT servis yönetimi" color="purple" onClick={() => setIsMobileMenuOpen(false)} />
                              <MenuItem href="/products/jira-work-management" icon={JiraWorkManagementIcon} title="Jira Work Management" description="İş takımları için proje yönetimi" color="purple" onClick={() => setIsMobileMenuOpen(false)} />
                            </ul>
                              </div>
                          <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-white mb-4 text-xl tracking-tight">İş Birliği &amp; Güvenlik</h3>
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
                                <CategoryIcon category={item.category} className={`