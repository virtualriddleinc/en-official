"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleTurkishClick = () => {
        const currentUrl = window.location.href;
        // Replace .com with .com.tr
        // We specifically target the TLD change as requested
        if (currentUrl.includes("virtualriddle.com")) {
            window.location.href = currentUrl.replace("virtualriddle.com", "virtualriddle.com.tr");
        } else {
            // Fallback for testing/localhost - just to show it works, or maybe we shouldn't redirect on localhost
            // But the user asked for a specific behavior.
            // If I am on localhost, I can't redirect to .com.tr effectively without breaking it.
            // I'll add a console log for localhost.
            console.log("Redirect logic triggered. On production, this would go to .com.tr");
            // If the user wants to test the URL change logic specifically:
            if (currentUrl.includes(".com")) {
                window.location.href = currentUrl.replace(".com", ".com.tr");
            }
        }
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-200 border border-transparent hover:border-gray-200"
            >
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="font-semibold text-sm text-gray-700">English</span>
                <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                        <div className="p-1.5">
                            <button
                                className="w-full flex items-center justify-between px-3 py-2 text-sm text-blue-600 bg-blue-50 rounded-lg font-medium"
                                disabled
                            >
                                <span>English</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            </button>
                            <button
                                onClick={handleTurkishClick}
                                className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors mt-0.5"
                            >
                                <span>Türkçe</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
