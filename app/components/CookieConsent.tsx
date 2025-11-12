"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

type ConsentState = {
  ad_storage: "granted" | "denied";
  analytics_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
};

function pushToDataLayer(args: any[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

function updateGtagConsent(state: ConsentState) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", state);
    window.gtag("set", "ads_data_redaction", state.ad_storage === "denied");
  } else {
    pushToDataLayer(["consent", "update", state]);
    pushToDataLayer(["set", "ads_data_redaction", state.ad_storage === "denied"]);
  }
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const cookieConsent = localStorage.getItem("cookie-consent");
        const analyticsPreference = localStorage.getItem("cookie-analytics");
        const marketingPreference = localStorage.getItem("cookie-marketing");

        if (!cookieConsent) {
          setShowConsent(true);
          updateGtagConsent({
            ad_storage: "denied",
            analytics_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
          });
        } else {
          const analyticsAllowed = analyticsPreference === "true";
          const marketingAllowed = marketingPreference === "true";

          setAnalyticsEnabled(analyticsAllowed);
          setMarketingEnabled(marketingAllowed);

          updateGtagConsent({
            ad_storage: marketingAllowed ? "granted" : "denied",
            analytics_storage: analyticsAllowed ? "granted" : "denied",
            ad_user_data: marketingAllowed ? "granted" : "denied",
            ad_personalization: marketingAllowed ? "granted" : "denied",
          });
        }
      } else {
        setShowConsent(true);
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Cookie consent error:', error);
      }
      setShowConsent(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const persistConsent = (consent: string, analytics: string, marketing: string) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem("cookie-consent", consent);
        localStorage.setItem("cookie-analytics", analytics);
        localStorage.setItem("cookie-marketing", marketing);
        setCookie("cookie-consent", consent);
        setCookie("cookie-analytics", analytics);
        setCookie("cookie-marketing", marketing);
        if (process.env.NODE_ENV === 'development') {
          console.log('Cookie preferences saved:', { consent, analytics, marketing });
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error saving cookie preferences:', error);
      }
    }
  };

  const saveCookiePreference = (consent: string, analytics: string, marketing: string) => {
    persistConsent(consent, analytics, marketing);

    const analyticsAllowed = analytics === "true";
    const marketingAllowed = marketing === "true";

    updateGtagConsent({
      ad_storage: marketingAllowed ? "granted" : "denied",
      analytics_storage: analyticsAllowed ? "granted" : "denied",
      ad_user_data: marketingAllowed ? "granted" : "denied",
      ad_personalization: marketingAllowed ? "granted" : "denied",
    });

    setShowConsent(false);
  };

  const acceptAllCookies = () => {
    saveCookiePreference("all", "true", "true");
  };

  const acceptNecessaryCookies = () => {
    saveCookiePreference("necessary", "false", "false");
  };

  const savePreferences = () => {
    saveCookiePreference(
      "custom", 
      analyticsEnabled ? "true" : "false", 
      marketingEnabled ? "true" : "false"
    );
  };

  if (isLoading) return null;
  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {!showDetails ? (
          // Main Cookie Consent - Sticky Bottom
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.9965 12H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9955 12H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.99451 12H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Cookie Preferences</h2>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                This website uses cookies to enhance your experience, personalize content and ads, and analyze site traffic. 
                By using our site, you consent to the use of cookies. You can change your cookie preferences at any time.
              </p>
              
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <a href="/privacy" className="underline hover:text-blue-600 transition-colors">Privacy Policy</a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowDetails(true)}
                className="px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Cookie Settings
              </button>
              
              <button
                onClick={acceptNecessaryCookies}
                className="px-6 py-3 bg-gray-100 rounded-xl text-gray-700 font-medium hover:bg-gray-200 transition-colors text-sm"
              >
                Necessary Only
              </button>
              
              <button
                onClick={acceptAllCookies}
                className="px-6 py-3 bg-blue-600 rounded-xl text-white font-medium hover:bg-blue-700 transition-colors text-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          // Detailed Cookie Settings - Expanded View
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.9965 12H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9955 12H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.99451 12H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Cookie Settings</h2>
              </div>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-100"
                aria-label="Close cookie settings"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-900">Necessary Cookies</h3>
                  <div className="w-10 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    Active
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  These cookies are necessary for the website to function properly and cannot be disabled in our system. 
                  They are usually set only in response to actions made by you such as setting privacy preferences, filling in forms.
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-900">Analytics Cookies</h3>
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    />
                    <div className={`relative w-10 h-5 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer transition-colors ${
                      analyticsEnabled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}>
                      <div className={`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-4 w-4 transition-all ${
                        analyticsEnabled ? 'translate-x-5' : 'translate-x-0'
                      }`}></div>
                    </div>
                  </label>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  These cookies collect information about how visitors use our website. This data includes anonymous information such as 
                  page visit counts, where visitors came from, and how they navigated through pages.
                </p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-900">Marketing Cookies</h3>
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={marketingEnabled}
                      onChange={(e) => setMarketingEnabled(e.target.checked)}
                    />
                    <div className={`relative w-10 h-5 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer transition-colors ${
                      marketingEnabled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}>
                      <div className={`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-4 w-4 transition-all ${
                        marketingEnabled ? 'translate-x-5' : 'translate-x-0'
                      }`}></div>
                    </div>
                  </label>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  These cookies are used to show visitors targeted advertisements based on their interests. 
                  These cookies also collect information that enables visitors to revisit our website.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <a href="/privacy" className="underline hover:text-blue-600 transition-colors">Privacy Policy</a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-6 py-3 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors text-sm"
                >
                  Back
                </button>
                <button
                  onClick={savePreferences}
                  className="px-6 py-3 bg-blue-600 rounded-xl text-white font-medium hover:bg-blue-700 transition-colors text-sm"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 