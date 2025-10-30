'use client';

interface SearchResult {
  title: string;
  description: string;
  url: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
}

export default function SearchResults({ results, isLoading }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="mt-4 space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
        No results found.
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-4">
      {results.map((result, index) => (
        <a
          key={index}
          href={result.url}
          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            {result.title}
          </h3>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            {result.description}
          </p>
        </a>
      ))}
    </div>
  );
} 