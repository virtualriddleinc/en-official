"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Shrink } from 'lucide-react';

export default function AlphaBanner() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none sm:right-5 sm:bottom-5 z-[100] w-full sm:w-auto px-4 sm:px-0">
      <AnimatePresence>
        {isMinimized ? (
          <motion.div
            key="icon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="flex justify-center sm:justify-start"
          >
            <button
              onClick={() => setIsMinimized(false)}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
              aria-label="Uyarıyı genişlet"
            >
              <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-white dark:text-yellow-900" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="banner"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full sm:w-96"
          >
            <div 
              className="relative bg-yellow-50 dark:bg-yellow-900/80 backdrop-blur-xl border border-yellow-200 dark:border-yellow-700/60 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsMinimized(true)}
                className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 p-1.5 rounded-full text-yellow-600 dark:text-yellow-300 hover:bg-yellow-200/50 dark:hover:bg-yellow-700/50 transition-colors"
                aria-label="Uyarıyı küçült"
              >
                <Shrink className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <div className="p-4 sm:p-5 pr-10 sm:pr-12">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-500 dark:text-yellow-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-base sm:text-lg text-yellow-800 dark:text-yellow-200">
                      Alpha Versiyon 🚧
                    </h3>
                    <p className="text-xs sm:text-sm text-yellow-700 dark:text-yellow-300 mt-1 sm:mt-1.5 leading-relaxed">
                      Bu site şu an geliştirme aşamasındadır. Bazı özellikler eksik olabilir veya hatalarla karşılaşabilirsiniz.
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-yellow-800 dark:text-yellow-200 mt-2 sm:mt-3">
                      Geri bildirimleriniz bizi çok mutlu eder! 😊
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 