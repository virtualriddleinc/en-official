'use client';

import { useState, useEffect, useMemo, useRef, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Fuse, { IFuseOptions } from 'fuse.js';
import { motion, AnimatePresence } from 'framer-motion';
import { searchData } from '../lib/searchData';
import { Search, Tag, X, ListFilter, FileText } from 'lucide-react';

// Clear type definition for search data
interface SearchItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

const fuseOptions: IFuseOptions<SearchItem> = {
  keys: [
    { name: 'title', weight: 0.7 },
    { name: 'tags', weight: 0.5 },
    { name: 'description', weight: 0.2 },
  ],
  includeScore: true,
  threshold: 0.4,
  minMatchCharLength: 2,
};

// Initialize Fuse with SearchItem type
const fuse = new Fuse(searchData as SearchItem[], fuseOptions);

// Debounce function
function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

function SearchPageComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const selectedCategories = useMemo(() => searchParams.getAll('category') || [], [searchParams]);
  const selectedTags = useMemo(() => searchParams.getAll('tag') || [], [searchParams]);

  const allCategories = useMemo(() => Array.from(new Set(searchData.map(item => item.category))), []);
  
  const topTags = useMemo(() => {
    const tagFrequencies: { [tag: string]: number } = {};
    searchData.forEach(item => {
      item.tags.forEach(tag => {
        tagFrequencies[tag] = (tagFrequencies[tag] || 0) + 1;
      });
    });
    return Object.keys(tagFrequencies)
      .sort((a, b) => tagFrequencies[b] - tagFrequencies[a])
      .slice(0, 25);
  }, []);

  const [results, setResults] = useState<SearchResult[]>([]);

  const debouncedFilter = useRef(
    debounce((query: string, selectedCategories: string[], selectedTags: string[]) => {
    let filteredData: SearchItem[];
    if (query) {
      filteredData = fuse.search(query).map(result => result.item);
    } else {
      filteredData = searchData as SearchItem[];
    }
    if (selectedCategories.length > 0) {
      filteredData = filteredData.filter(item => selectedCategories.includes(item.category));
    }
    if (selectedTags.length > 0) {
      filteredData = filteredData.filter(item => selectedTags.some(tag => item.tags.includes(tag)));
    }
    setResults(filteredData.map((item, index) => ({ item, refIndex: index })));
    }, 250)
  ).current;

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  useEffect(() => {
    debouncedFilter(query, selectedCategories, selectedTags);
  }, [query, selectedCategories, selectedTags]);
  
  const updateURLParams = (newParams: Record<string, string | string[]>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(newParams).forEach(([key, value]) => {
      params.delete(key); // Clear existing values for this key
      if (Array.isArray(value)) {
        value.forEach(v => params.append(key, v));
      } else if (value) {
        params.set(key, value);
      }
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateURLParams({ q: searchQuery, category: selectedCategories, tag: selectedTags });
  };
  
  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    updateURLParams({ q: searchQuery, category: newCategories, tag: selectedTags });
  };
  
  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    updateURLParams({ q: searchQuery, category: selectedCategories, tag: newTags });
  };

  const clearFilters = () => {
    updateURLParams({ q: '', category: [], tag: [] });
  };
  
  const hasActiveContent = query || selectedCategories.length > 0 || selectedTags.length > 0;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Filter Panel */}
        <aside className="lg:col-span-1 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg self-start sticky top-24">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <ListFilter className="mr-2 h-5 w-5" />
            Filters
          </h2>
          
          {hasActiveContent && (
            <button
              onClick={clearFilters}
              className="w-full mb-6 text-sm flex items-center justify-center px-3 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
            >
              <X className="mr-1.5 h-4 w-4" />
              Clear All Filters
            </button>
          )}

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {allCategories.map(category => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-semibold mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {topTags.map((tag, index) => (
                <button
                  key={`${tag}-${index}`}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Search Results */}
        <main className="lg:col-span-3">
          <form onSubmit={handleSearch} className="mb-8 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search the site... (e.g., jira, agile, consulting)"
              className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition dark:bg-gray-800"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
          </form>

          <div className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {results.length} result{results.length !== 1 ? 's' : ''} found{query && ` for: "${query}"`}
            </p>
          </div>
          
          <AnimatePresence>
            <div className="space-y-4">
              {results.length > 0 ? (
                results.map(({ item }, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link href={item.url} legacyBehavior>
                      <a className="block p-5 bg-white dark:bg-gray-800/70 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">{item.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span key={`${tag}-${tagIndex}`} className="flex items-center text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                              <Tag className="h-3 w-3 mr-1.5" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16 px-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                >
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">No Results Found</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Try changing your search criteria or clearing the filters.
                  </p>
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8 md:py-12 pt-20">Loading...</div>}>
      <SearchPageComponent />
    </Suspense>
  );
} 