"use client";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("./components/ThemeToggle"), { ssr: false });

import { useState, useEffect, useMemo, useRef, useCallback, memo } from "react";
import Link from "next/link";
import CookieConsent from "./components/CookieConsent";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import { useRouter } from "next/navigation";
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

const CategoryIcon = memo(({ category, className }: { category: string, className?: string }) => {
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
});

CategoryIcon.displayName = 'CategoryIcon';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<FuseResult<SearchItem>[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const listContainerRef = useRef<HTMLDivElement>(null);

  let productsCloseTimeout: NodeJS.Timeout;
  let solutionsCloseTimeout: NodeJS.Timeout;

  // Memoized values for performance
  const isHomePage = useMemo(() => pathname === '/', [pathname]);
  const isContactPage = useMemo(() => pathname === '/contact', [pathname]);

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

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsSearchOpen(true);
    }
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

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

  const handleProductsMouseEnter = useCallback(() => {
    clearTimeout(productsCloseTimeout);
    setIsSolutionsMenuOpen(false);
    setIsProductsMenuOpen(true);
  }, []);

  const handleProductsMouseLeave = useCallback(() => {
    productsCloseTimeout = setTimeout(() => {
      setIsProductsMenuOpen(false);
    }, 300);
  }, []);

  const handleSolutionsMouseEnter = useCallback(() => {
    clearTimeout(solutionsCloseTimeout);
    setIsProductsMenuOpen(false);
    setIsSolutionsMenuOpen(true);
  }, []);

  const handleSolutionsMouseLeave = useCallback(() => {
    solutionsCloseTimeout = setTimeout(() => {
      setIsSolutionsMenuOpen(false);
    }, 300);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchText('');
    const searchInput = document.getElementById('search-input-modal') as HTMLInputElement;
    if (searchInput) searchInput.focus();
  }, []);

  const handleSearchKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
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
  }, [searchResults, searchText, selectedIndex, router]);
  
  const handleResultClick = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const productLinks = useMemo(() => [
    { href: "/products/jira-software", icon: JiraSoftwareIcon, title: "Jira Software", description: "Çevik proje yönetimi", color: "blue" as const },
    { href: "/products/jira-service-management", icon: JiraServiceManagementIcon, title: "Jira Service Management", description: "IT servis yönetimi", color: "purple" as const },
    { href: "/products/jira-work-management", icon: JiraWorkManagementIcon, title: "Jira Work Management", description: "İş takımları için proje yönetimi", color: "purple" as const },
    { href: "/products/confluence", icon: ConfluenceIcon, title: "Confluence", description: "Takım iş birliği ve bilgi paylaşımı", color: "indigo" as const },
    { href: "/products/bitbucket", icon: BitbucketIcon, title: "Bitbucket", description: "Git tabanlı kod yönetimi", color: "blue" as const },
  ], []);

  const solutionLinks = useMemo(() => [
    { href: "/solutions/consulting", icon: ConsultingIcon, title: "Atlassian Danışmanlığı", description: "Kurumsal süreç optimizasyonu", color: "emerald" as const },
    { href: "/solutions/cloud-migration", icon: CloudMigrationIcon, title: "Cloud Migration", description: "Bulut geçiş stratejisi", color: "sky" as const },
    { href: "/solutions/training", icon: TrainingIcon, title: "Eğitim & Sertifikasyon", description: "Atlassian ürün eğitimleri", color: "amber" as const },
    { href: "/free-discovery", icon: DiscoveryIcon, title: "Ücretsiz Keşif", description: "Dijital dönüşüm ön analizi", color: "teal" as const },
  ], []);

  return (
    <PerformanceOptimizer>
      <ThemeToggle />
      <header className="fixed w-full bg-white z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <img src="/logo.svg" alt="Virtual Riddle Logo" className="w-auto h-12" />
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
                      className="absolute left-0 mt-4 w-full max-w-[calc(100vw-2rem)] lg:w-[525px] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl border border-white/5 shadow-xl backdrop-blur-sm"
                    >
                      <div className="p-4">
                        {/* Featured Section */}
                        <div className="mb-5">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white text-lg font-bold tracking-tight">Öne Çıkanlar</h3>
                            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-transparent rounded-lg p-3 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02]">
                              <Link href="/products/jira-software" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-2">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-lg flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 group-hover:scale-110 transition-all duration-300">
                                    <JiraSoftwareIcon className="w-5 h-5 text-blue-300 group-hover:text-blue-200" />
                                  </div>
                          <div>
                                    <h4 className="text-white text-sm font-bold group-hover:text-blue-200 transition-colors duration-300">Jira Software</h4>
                                    <p className="text-gray-400 text-xs leading-tight mt-1">Çevik proje yönetimi</p>
                              </div>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent rounded-lg p-3 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]">
                              <Link href="/products/jira-service-management" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-2">
                                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-lg flex items-center justify-center border border-purple-500/30 group-hover:border-purple-400/50 group-hover:scale-110 transition-all duration-300">
                                    <JiraServiceManagementIcon className="w-5 h-5 text-purple-300 group-hover:text-purple-200" />
                                  </div>
                            <div>
                                    <h4 className="text-white text-sm font-bold group-hover:text-purple-200 transition-colors duration-300">Jira Service Management</h4>
                                    <p className="text-gray-400 text-xs leading-tight mt-1">IT servis yönetimi</p>
                      </div>
                      </div>
                              </Link>
                    </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent rounded-lg p-3 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02]">
                              <Link href="/products/jira-work-management" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-2">
                                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-lg flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-400/50 group-hover:scale-110 transition-all duration-300">
                                    <JiraWorkManagementIcon className="w-5 h-5 text-emerald-300 group-hover:text-emerald-200" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-sm font-bold group-hover:text-emerald-200 transition-colors duration-300">Jira Work Management</h4>
                                    <p className="text-gray-400 text-xs leading-tight mt-1">İş takımları için proje yönetimi</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-500/10 via-indigo-600/5 to-transparent rounded-lg p-3 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02]">
                              <Link href="/products/confluence" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-2">
                                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/30 to-indigo-600/30 rounded-lg flex items-center justify-center border border-indigo-500/30 group-hover:border-indigo-400/50 group-hover:scale-110 transition-all duration-300">
                                    <ConfluenceIcon className="w-5 h-5 text-indigo-300 group-hover:text-indigo-200" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-sm font-bold group-hover:text-indigo-200 transition-colors duration-300">Confluence</h4>
                                    <p className="text-gray-400 text-xs leading-tight mt-1">Takım iş birliği platformu</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        
                        {/* All Products Section */}
                        <div className="border-t border-white/10 pt-4">
                          <div className="flex items-center justify-between mb-2.5">
                            <h4 className="text-white text-sm font-bold tracking-wide">Keşfet</h4>
                            <div className="flex space-x-1">
                              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-transparent rounded-lg p-2.5 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20 hover:scale-[1.02]">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <Link href="/products/bitbucket" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-1.5">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-md flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 group-hover:scale-110 transition-all duration-300">
                                    <BitbucketIcon className="w-5 h-5 text-blue-300 group-hover:text-blue-200" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-xs font-bold group-hover:text-blue-200 transition-colors duration-300">Bitbucket</h4>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-teal-500/10 via-teal-600/5 to-transparent rounded-lg p-2.5 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 hover:shadow-md hover:shadow-teal-500/20 hover:scale-[1.02]">
                              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <Link href="/products/trello" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-1.5">
                                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500/30 to-teal-600/30 rounded-md flex items-center justify-center border border-teal-500/30 group-hover:border-teal-400/50 group-hover:scale-110 transition-all duration-300">
                                    <JiraSoftwareIcon className="w-5 h-5 text-teal-300 group-hover:text-teal-200" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-xs font-bold group-hover:text-teal-200 transition-colors duration-300">Trello</h4>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-500/10 via-indigo-600/5 to-transparent rounded-lg p-2.5 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/20 hover:scale-[1.02]">
                              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <Link href="/products/statuspage" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-1.5">
                                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/30 to-indigo-600/30 rounded-md flex items-center justify-center border border-indigo-500/30 group-hover:border-indigo-400/50 group-hover:scale-110 transition-all duration-300">
                                    <BitbucketIcon className="w-5 h-5 text-indigo-300 group-hover:text-indigo-200" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-xs font-bold group-hover:text-indigo-200 transition-colors duration-300">Statuspage</h4>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent rounded-lg p-2.5 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 hover:scale-[1.02]">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <Link href="/products/opsgenie" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-1.5">
                                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-md flex items-center justify-center border border-purple-500/30 group-hover:border-purple-400/50 group-hover:scale-110 transition-all duration-300">
                                    <JiraServiceManagementIcon className="w-5 h-5 text-purple-300 group-hover:text-purple-200" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-xs font-bold group-hover:text-purple-200 transition-colors duration-300">Opsgenie</h4>
                                  </div>
                                </div>
                              </Link>
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
                      className="absolute left-0 mt-4 w-full max-w-[calc(100vw-2rem)] lg:w-[350px] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl border border-white/5 shadow-xl backdrop-blur-sm"
                    >
                      <div className="p-4">
                        <div className="space-y-2">
                          <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent rounded-xl p-3 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Link href="/solutions/consulting" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-lg flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-400/50 group-hover:scale-110 transition-all duration-300">
                                  <ConsultingIcon className="w-5 h-5 text-emerald-300 group-hover:text-emerald-200" />
                                </div>
                                <div>
                                  <h4 className="text-white text-sm font-bold transition-colors duration-300">Atlassian Danışmanlığı</h4>
                                  <p className="text-gray-400 text-xs leading-tight">Kurumsal süreç optimizasyonu</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                          
                          <div className="group relative overflow-hidden bg-gradient-to-br from-sky-500/10 via-sky-600/5 to-transparent rounded-xl p-3 border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Link href="/solutions/cloud-migration" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-sky-500/30 to-sky-600/30 rounded-lg flex items-center justify-center border border-sky-500/30 group-hover:border-sky-400/50 group-hover:scale-110 transition-all duration-300">
                                  <CloudMigrationIcon className="w-5 h-5 text-sky-300 group-hover:text-sky-200" />
                                </div>
                                <div>
                                  <h4 className="text-white text-sm font-bold transition-colors duration-300">Cloud Migration</h4>
                                  <p className="text-gray-400 text-xs leading-tight">Bulut geçiş stratejisi</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                          
                          <div className="group relative overflow-hidden bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-transparent rounded-xl p-3 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Link href="/solutions/training" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-amber-500/30 to-amber-600/30 rounded-lg flex items-center justify-center border border-amber-500/30 group-hover:border-amber-400/50 group-hover:scale-110 transition-all duration-300">
                                  <TrainingIcon className="w-5 h-5 text-amber-300 group-hover:text-amber-200" />
                                </div>
                                <div>
                                  <h4 className="text-white text-sm font-bold transition-colors duration-300">Eğitim & Sertifikasyon</h4>
                                  <p className="text-gray-400 text-xs leading-tight">Atlassian ürün eğitimleri</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                          
                          <div className="group relative overflow-hidden bg-gradient-to-br from-teal-500/10 via-teal-600/5 to-transparent rounded-xl p-3 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Link href="/free-discovery" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-500/30 to-teal-600/30 rounded-lg flex items-center justify-center border border-teal-500/30 group-hover:border-teal-400/50 group-hover:scale-110 transition-all duration-300">
                                  <DiscoveryIcon className="w-5 h-5 text-teal-300 group-hover:text-teal-200" />
                                </div>
                                <div>
                                  <h4 className="text-white text-sm font-bold transition-colors duration-300">Ücretsiz Keşif</h4>
                                  <p className="text-gray-400 text-xs leading-tight">Dijital dönüşüm ön analizi</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
                aria-label={isMobileMenuOpen ? "Mobil menüyü kapat" : "Mobil menüyü aç"}
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
              className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-2xl"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6 flex-shrink-0">
                  <h3 className="text-2xl font-bold text-white">Menü</h3>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-300 hover:bg-white/10 transition-all duration-200"
                    aria-label="Mobil menüyü kapat"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-grow overflow-y-auto -mr-6 pr-6">
                  <div className="px-2 space-y-2">
                  <button 
                    onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }}
                      className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-transparent rounded-xl text-left mb-3 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                      aria-label="Arama yap"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-lg flex items-center justify-center border border-blue-500/30">
                          <Search className="w-5 h-5 text-blue-300" />
                        </div>
                        <div>
                          <span className="font-semibold text-white text-base">Ara...</span>
                          <p className="text-gray-400 text-xs mt-1">Ürün, çözüm veya bir özellik arayın</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-blue-400">
                        <kbd className="px-2 py-1 bg-blue-100/20 rounded-lg">{isMac ? '⌘' : 'Ctrl'}</kbd>
                        <span>+</span>
                        <kbd className="px-2 py-1 bg-blue-100/20 rounded-lg">K</kbd>
                      </div>
                  </button>

                    <div className="border-b border-white/10">
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center p-4 font-semibold text-lg text-white hover:bg-white/5 rounded-xl transition-all duration-200">
                            Hakkımızda
                        </Link>
                    </div>

                  <MobileAccordion title="Ürünler">
                      <div className="pt-2 pb-4 px-2">
                        {/* Featured Section */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-white text-sm font-bold tracking-tight">Öne Çıkanlar</h3>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-transparent rounded-lg p-3 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02]">
                              <Link href="/products/jira-software" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-2">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-lg flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 group-hover:scale-110 transition-all duration-300">
                                    <JiraSoftwareIcon className="w-5 h-5 text-blue-300 group-hover:text-blue-200" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-xs font-bold group-hover:text-blue-200 transition-colors duration-300">Jira Software</h4>
                                    <p className="text-gray-400 text-[10px] leading-tight mt-1">Çevik proje yönetimi</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent rounded-lg p-3 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]">
                              <Link href="/products/jira-service-management" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-2">
                                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-lg flex items-center justify-center border border-purple-500/30 group-hover:border-purple-400/50 group-hover:scale-110 transition-all duration-300">
                                    <JiraServiceManagementIcon className="w-5 h-5 text-purple-300 group-hover:text-purple-200" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-xs font-bold group-hover:text-purple-200 transition-colors duration-300">Jira Service Management</h4>
                                    <p className="text-gray-400 text-[10px] leading-tight mt-1">IT servis yönetimi</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent rounded-lg p-3 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02]">
                              <Link href="/products/jira-work-management" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-2">
                                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-lg flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-400/50 group-hover:scale-110 transition-all duration-300">
                                    <JiraWorkManagementIcon className="w-5 h-5 text-emerald-300 group-hover:text-emerald-200" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-xs font-bold group-hover:text-emerald-200 transition-colors duration-300">Jira Work Management</h4>
                                    <p className="text-gray-400 text-[10px] leading-tight mt-1">İş takımları için proje yönetimi</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-500/10 via-indigo-600/5 to-transparent rounded-lg p-3 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02]">
                              <Link href="/products/confluence" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-2">
                                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/30 to-indigo-600/30 rounded-lg flex items-center justify-center border border-indigo-500/30 group-hover:border-indigo-400/50 group-hover:scale-110 transition-all duration-300">
                                    <ConfluenceIcon className="w-5 h-5 text-indigo-300 group-hover:text-indigo-200" />
                                  </div>
                                  <div>
                                    <h4 className="text-white text-xs font-bold group-hover:text-indigo-200 transition-colors duration-300">Confluence</h4>
                                    <p className="text-gray-400 text-[10px] leading-tight mt-1">Takım iş birliği platformu</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        
                        {/* All Products Section */}
                        <div className="border-t border-white/10 pt-3">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white text-xs font-bold tracking-wide">Keşfet</h4>
                            <div className="flex space-x-1">
                              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-1.5">
                            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-transparent rounded-md p-2 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                              <Link href="/products/bitbucket" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-1">
                                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-md flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 group-hover:scale-110 transition-all duration-300">
                                    <BitbucketIcon className="w-4 h-4 text-blue-300 group-hover:text-blue-200" />
                                  </div>
                                  <h4 className="text-white text-[10px] font-bold group-hover:text-blue-200 transition-colors duration-300">Bitbucket</h4>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-teal-500/10 via-teal-600/5 to-transparent rounded-md p-2 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
                              <Link href="/products/trello" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-1">
                                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500/30 to-teal-600/30 rounded-md flex items-center justify-center border border-teal-500/30 group-hover:border-teal-400/50 group-hover:scale-110 transition-all duration-300">
                                    <JiraSoftwareIcon className="w-4 h-4 text-teal-300 group-hover:text-teal-200" />
                                  </div>
                                  <h4 className="text-white text-[10px] font-bold group-hover:text-teal-200 transition-colors duration-300">Trello</h4>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-indigo-500/10 via-indigo-600/5 to-transparent rounded-md p-2 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                              <Link href="/products/statuspage" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-1">
                                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500/30 to-indigo-600/30 rounded-md flex items-center justify-center border border-indigo-500/30 group-hover:border-indigo-400/50 group-hover:scale-110 transition-all duration-300">
                                    <BitbucketIcon className="w-4 h-4 text-indigo-300 group-hover:text-indigo-200" />
                                  </div>
                                  <h4 className="text-white text-[10px] font-bold group-hover:text-indigo-200 transition-colors duration-300">Statuspage</h4>
                                </div>
                              </Link>
                            </div>
                            
                            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent rounded-md p-2 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                              <Link href="/products/opsgenie" onClick={() => setIsMobileMenuOpen(false)} className="relative block">
                                <div className="flex flex-col items-center text-center space-y-1">
                                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-md flex items-center justify-center border border-purple-500/30 group-hover:border-purple-400/50 group-hover:scale-110 transition-all duration-300">
                                    <JiraServiceManagementIcon className="w-4 h-4 text-purple-300 group-hover:text-purple-200" />
                                  </div>
                                  <h4 className="text-white text-[10px] font-bold group-hover:text-purple-200 transition-colors duration-300">Opsgenie</h4>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                  </MobileAccordion>

                  <MobileAccordion title="Çözümler">
                      <div className="pt-2 pb-4 px-2">
                        <ul className="space-y-1">
                      {solutionLinks.map(link => (
                            <MenuItem key={link.href} {...link} onClick={() => setIsMobileMenuOpen(false)} />
                      ))}
                    </ul>
                      </div>
                  </MobileAccordion>


                    <div className="border-b border-white/10">
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center p-4 font-semibold text-lg text-white hover:bg-white/5 rounded-xl transition-all duration-200">
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            {/* Logo ve Sosyal Medya */}
            <div className="flex flex-col items-start space-y-10">
              <img src="/logo-footer.svg" alt="Virtual Riddle Logo" className="w-72" style={{ height: 'auto', maxHeight: '18rem' }} />
              <p className="text-gray-400">Dijital dönüşüm yolculuğunuzda yanınızdayız. Modern çözümlerle işinizi ileriye taşıyın.</p>
              <div className="flex items-center space-x-4">
                  {/* Instagram */}
                  <a href="https://www.instagram.com/virtual.riddle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all" aria-label="Virtual Riddle Instagram sayfasını ziyaret edin - Sosyal medya içeriklerimizi takip edin">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* Youtube */}
                  <a href="https://www.youtube.com/@VirtualRiddle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all" aria-label="Virtual Riddle YouTube kanalını ziyaret edin - Video içeriklerimizi izleyin">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.124 0 12 0 12s0 3.876.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.876 24 12 24 12s0-3.876-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  {/* Linkedin */}
                  <a href="https://www.linkedin.com/company/virtualriddle/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all" aria-label="Virtual Riddle LinkedIn şirket sayfasını ziyaret edin - Profesyonel ağımıza katılın">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {/* Next - Teknofest Sosyal */}
                  <a href="https://sosyal.teknofest.app/@virtualriddle" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all" aria-label="Virtual Riddle Teknofest Sosyal profilini ziyaret edin - Next sosyal medya hesabımız">
                    <svg xmlns="//v6s.cnnturk.com/images/favicon/next-button.svg" width="14" height="14" viewBox="0 0 16 16" fill="none" className="w-8 h-8">
                      <path d="M4.77139 0.0125732H0.00012207V15.9997H4.77139V0.0125732Z" fill="currentColor"></path>
                      <path d="M10.2404 15.9871C9.08771 15.9871 8.0582 15.3922 7.67872 14.5067L5.32297 8.38192L2.12354 0H7.77092L11.1035 8.68911L13.9783 15.9871H10.2404Z" fill="currentColor"></path>
                      <path d="M11.354 9.57871C11.271 9.34492 11.2288 9.34462 11.2288 9.09744V0.0131836H16.0001V13.7914C16.0001 14.9291 15.1134 15.8686 13.9785 15.9871L11.354 9.57871Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
            </div>

            {/* Ürünler */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Ürünler</h3>
              <ul className="space-y-4">
                <li><Link href="/products/jira-software" className="text-gray-400 hover:text-white transition-colors">Jira Software</Link></li>
                <li><Link href="/products/jira-service-management" className="text-gray-400 hover:text-white transition-colors">Jira Service Management</Link></li>
                <li><Link href="/products/jira-work-management" className="text-gray-400 hover:text-white transition-colors">Jira Work Management</Link></li>
                <li><Link href="/products/confluence" className="text-gray-400 hover:text-white transition-colors">Confluence</Link></li>
                <li><Link href="/products/bitbucket" className="text-gray-400 hover:text-white transition-colors">Bitbucket</Link></li>
                <li><Link href="/products/trello" className="text-gray-400 hover:text-white transition-colors">Trello</Link></li>
                <li><Link href="/products/opsgenie" className="text-gray-400 hover:text-white transition-colors">Opsgenie</Link></li>
                <li><Link href="/products/statuspage" className="text-gray-400 hover:text-white transition-colors">Statuspage</Link></li>
              </ul>
            </div>

            {/* Çözümler */}
            <div>
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
            <div>
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
            <div>
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
    </PerformanceOptimizer>
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