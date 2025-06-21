"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";
import { searchData } from "../lib/searchData";

const categories = ["Tümü", ...Array.from(new Set(searchData.map(item => item.category)))];

export default function UniversalSearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [results, setResults] = useState<typeof searchData>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Fuzzy search ayarları
  const fuse = new Fuse(searchData, {
    keys: [
      "title",
      "description",
      "tags",
      "category"
    ],
    threshold: 0.35,
    minMatchCharLength: 2,
    ignoreLocation: true
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery("");
        setResults([]);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const performSearch = async () => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 200));
      let filtered: typeof searchData = [];
      if (selectedCategory === "Tümü") {
        filtered = fuse.search(searchQuery).map(res => res.item);
      } else {
        filtered = fuse.search(searchQuery).map(res => res.item).filter(item => item.category === selectedCategory);
      }
      setResults(filtered.slice(0, 7));
      setIsLoading(false);
    };
    performSearch();
  }, [searchQuery, selectedCategory]);

  const navigateToSearch = () => {
    if (searchQuery.trim()) {
      setIsOpen(false);
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}&cat=${encodeURIComponent(selectedCategory)}`);
      setSearchQuery(""); // Arama sonrası input'u temizle
      setResults([]);
      setHighlightedIndex(-1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateToSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearchQuery("");
      setResults([]);
      setHighlightedIndex(-1);
    } else if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && highlightedIndex >= 0 && results[highlightedIndex]) {
      router.push(results[highlightedIndex].url);
      setIsOpen(false);
      setSearchQuery("");
      setResults([]);
      setHighlightedIndex(-1);
    }
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Site içi arama"
      >
        <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-3 sm:p-4 z-50">
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col gap-2 mb-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setHighlightedIndex(-1);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Site içinde ara..."
                  className="w-full px-4 py-2 pr-10 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white text-sm"
                  autoComplete="off"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setResults([]);
                      setHighlightedIndex(-1);
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center p-1"
                  >
                    <X className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" />
                  </button>
                )}
              </div>
            </div>
            <button type="submit" className="sr-only">Ara</button>
          </form>
          <div className="mt-2 space-y-2 max-h-48 sm:max-h-64 overflow-y-auto">
            {isLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              ))
            ) : results.length === 0 && searchQuery ? (
              <div className="text-center text-gray-600 dark:text-gray-400 text-sm py-4">
                Sonuç bulunamadı
              </div>
            ) : results.length > 0 ? (
              <>
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    className={`block w-full text-left p-2 sm:p-3 rounded-lg transition-colors ${highlightedIndex === index ? "bg-blue-50 dark:bg-blue-900" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}
                    onClick={() => {
                      setIsOpen(false);
                      setSearchQuery("");
                      setResults([]);
                      setHighlightedIndex(-1);
                    }}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{result.category}</span>
                      {result.tags && result.tags.length > 0 && (
                        <span className="text-xs text-gray-400 dark:text-gray-500">{result.tags.slice(0,2).join(", ")}</span>
                      )}
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mt-1">
                      {result.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {result.description}
                    </p>
                  </Link>
                ))}
                <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={navigateToSearch}
                    className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-2"
                  >
                    Tüm sonuçları görüntüle
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