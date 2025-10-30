'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Sample search results (for quick preview)
const sampleResults = [
  {
    title: 'Jira Software',
    description: 'Powerful tool for agile project management and issue tracking.',
    url: '/products/jira-software'
  },
  {
    title: 'Confluence',
    description: 'Team collaboration and knowledge sharing platform.',
    url: '/products/confluence'
  },
  {
    title: 'Bitbucket',
    description: 'Git-based code hosting and collaboration platform.',
    url: '/products/bitbucket'
  }
];

// Debounce fonksiyonu
function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<typeof sampleResults>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const debouncedSearch = useRef(
    debounce((query: string) => {
      if (!query.trim()) {
        setResults([]);
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      const filteredResults = sampleResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3);
      setResults(filteredResults);
      setIsLoading(false);
    }, 250)
  ).current;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
        setResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // useEffect for instant search
  useEffect(() => {
      setIsLoading(true);
    debouncedSearch(searchQuery);
  }, [searchQuery]);

  const navigateToSearch = () => {
    if (searchQuery.trim()) {
      setIsOpen(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateToSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchQuery('');
      setResults([]);
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
                className="w-full px-4 py-2 pr-10 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:text-white"
                autoComplete="off"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setResults([]);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" />
                </button>
              )}
            </div>
            <button type="submit" className="sr-only">Search</button>
          </form>
          
          <div className="mt-4 space-y-4">
            {isLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              ))
            ) : results.length === 0 && searchQuery ? (
              <div className="text-center text-gray-600 dark:text-gray-400">
                Press Enter to view all results
              </div>
            ) : results.length > 0 ? (
              <>
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {result.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                      {result.description}
                    </p>
                  </Link>
                ))}
                <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={navigateToSearch}
                    className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    View all results
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
} 