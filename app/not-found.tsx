"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white p-4 md:p-8">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-8 relative">
          <div className="text-[160px] md:text-[220px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 leading-none">404</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="h-2 w-full max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-full"></div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Page Not Found</h1>
        
        <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
          The page you are looking for cannot be reached. The page may have been removed, renamed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
          >
            Return to Home
          </Link>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.history.back();
              }
            }}
            className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
          >
            Go Back
          </button>
        </div>
        
        <div className="mt-16 flex items-center justify-center">
          <img src="/logo-footer.svg" alt="Virtual Riddle Logo" className="w-80 h-auto" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl opacity-10"></div>
      </div>
    </main>
  );
} 