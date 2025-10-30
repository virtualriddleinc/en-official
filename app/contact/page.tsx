"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import StructuredData from '../components/StructuredData';
import { getSortedCountryCodes } from "../lib/countryCodes";
import dynamic from 'next/dynamic';

const GoogleMap = dynamic(() => import('../components/GoogleMap'), { ssr: false });

function SimpleGoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Google Maps JS
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD_16pLyXZxeu-NhhKebjtLvo9Z6TDe6to&libraries=marker&v=weekly`;
    script.async = true;
    script.onload = async () => {
      const { google } = window as any;
      if (!google || !mapRef.current) return;
      
      try {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        
        const position = { lat: 41.1130485, lng: 29.0185254 };
        
        const map = new Map(mapRef.current, {
          zoom: 16,
          center: position,
          mapId: "DEMO_MAP_ID",
        });
        
        mapInstanceRef.current = map;
        
        const marker = new AdvancedMarkerElement({
          map: map,
          position: position,
          title: "42 Maslak",
        });
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error loading Google Maps:', error);
        }
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}

const countryCodes = getSortedCountryCodes();

export default function ContactPage() {
  const initialForm = { name: "", email: "", subject: "", message: "", phone: "", countryCode: "+1" };
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only get numbers
    // Allow up to 15 digits for international phone numbers
    if (value.length <= 15) {
      setForm({ ...form, phone: value });
    }
  };

  const handleCountryCodeChange = (countryCode: string) => {
    setForm({ ...form, countryCode });
    setShowCountryDropdown(false);
  };


  // Lambda-compatible field mapping function
  function mapFormToLambda(form) {
    return {
      page: "/contact",
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
      phone: form.countryCode + form.phone,
      countryCode: form.countryCode
    };
  }

  useEffect(() => {
    if (status) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    
    // Validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      setLoading(false);
      return;
    }
    
    // Create Lambda-compatible payload
    const payload = mapFormToLambda(form);
    
    try {
      const res = await fetch("https://rvskttz2jh.execute-api.us-east-1.amazonaws.com/prod/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      // Form temizleme
      setForm(initialForm);
      
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      // Form temizleme
      setForm(initialForm);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Contact</h1>
            <p className="text-xl">
              Contact us to start your digital transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                {/* Warning Box */}
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-800">
                        <span className="font-medium">For consulting requests,</span>{' '}
                        <a href="/solutions/consulting" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                          Atlassian Consulting
                        </a>{' '}
                        page to submit your request
                      </p>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your first and last name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="example@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                      <div className="relative">
                      {/* Country Code Selector */}
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="absolute inset-y-0 left-0 pl-3 pr-2 flex items-center border-r border-gray-300 hover:bg-gray-50 rounded-l-lg transition-colors bg-white"
                        aria-label="Select country code"
                      >
                        <span className="text-base mr-1.5">
                          {countryCodes.find(c => c.code === form.countryCode)?.flag || "🇺🇸"}
                        </span>
                        <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
                          {form.countryCode}
                        </span>
                        <svg className={`w-4 h-4 ml-1 text-gray-500 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Country Dropdown */}
                      {showCountryDropdown && (
                        <>
                          <div 
                            className="fixed inset-0 z-10" 
                            onClick={() => {
                              setShowCountryDropdown(false);
                              setCountrySearch("");
                            }}
                          ></div>
                          <div className="absolute left-0 top-full mt-1 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
                            <div className="p-2">
                              <input
                                type="text"
                                placeholder="Search country..."
                                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                value={countrySearch}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => setCountrySearch(e.target.value)}
                              />
                              <div className="space-y-1 max-h-48 overflow-y-auto">
                                {countryCodes
                                  .filter((country) => {
                                    if (!countrySearch) return true;
                                    const search = countrySearch.toLowerCase();
                                    return (
                                      country.country.toLowerCase().includes(search) ||
                                      country.code.includes(search) ||
                                      country.flag.includes(search)
                                    );
                                  })
                                  .map((country) => (
                                    <button
                                      key={country.code}
                                      type="button"
                                      onClick={() => {
                                        handleCountryCodeChange(country.code);
                                        setShowCountryDropdown(false);
                                        setCountrySearch("");
                                      }}
                                      className={`w-full flex items-center px-3 py-2 text-sm rounded-md hover:bg-blue-50 transition-colors ${
                                        form.countryCode === country.code ? 'bg-blue-100' : ''
                                      }`}
                                    >
                                      <span className="text-lg mr-3">{country.flag}</span>
                                      <span className="font-medium text-gray-900 mr-2">{country.code}</span>
                                      <span className="text-gray-600 flex-1 text-left">{country.country}</span>
                                      {form.countryCode === country.code && (
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                      )}
                                    </button>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full pl-24 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={handlePhoneChange}
                        required
                        maxLength={15}
                        pattern="[0-9]{7,15}"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Enter your phone number (numbers only, 7-15 digits)
                    </p>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-transparent"
                      placeholder="Subject title"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your message..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
                {/* Bildirim Pop-up Modal */}
                {showPopup && status && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className={`relative w-full max-w-xs sm:max-w-md md:max-w-lg mx-4 sm:mx-0 rounded-2xl shadow-2xl border transition-all duration-300 animate-fade-in-up
                      ${status === "success"
                        ? "bg-gradient-to-br from-green-50 via-white to-green-100 border-green-200 text-green-800"
                        : "bg-gradient-to-br from-red-50 via-white to-red-100 border-red-200 text-red-800"}
                    `}>
                      <button
                        className="absolute top-3 right-3 p-1 rounded-full hover:bg-black/10 focus:outline-none"
                        onClick={() => { setShowPopup(false); setStatus(null); }}
                        aria-label="Close"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      <div className="flex flex-col items-center gap-3 px-6 py-8 sm:py-10">
                        {status === "success" ? (
                          <CheckCircle className="w-10 h-10 text-green-500 mb-2" />
                        ) : (
                          <AlertTriangle className="w-10 h-10 text-red-500 mb-2" />
                        )}
                        <span className="font-semibold text-center text-base sm:text-lg">
                          {status === "success"
                            ? "Your message has been sent successfully. We will contact you as soon as possible."
                            : "An error occurred. You can send an email directly to info@virtualriddle.com."}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">info@virtualriddle.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                        <p className="text-gray-600">
                          Maslak Neighborhood, AOS 55. Street<br />
                          42 Maslak B Block, Unit 4/542<br />
                          Sarıyer, Istanbul<br />
                          TURKEY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Working Hours</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900 font-semibold">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900 font-semibold">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-900 font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <div className="mt-6 mb-16 flex flex-col items-center gap-4 w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Us</h2>
        <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.953863185987!2d29.018368075781428!3d41.113698671335946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab55922b60eef%3A0x3091fdd92dc97d43!2sVirtual%20Riddle%20Teknoloji%20A.%C5%9E.!5e0!3m2!1str!2str!4v1752847175795!5m2!1str!2str"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
      </div>

      {/* Structured Data */}
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', item: 'https://virtualriddle.com' },
          { name: 'Contact', item: 'https://virtualriddle.com/contact' }
        ]}
      />
      
      <StructuredData
        type="faq"
        faqItems={[
          {
            question: 'How can I contact Virtual Riddle?',
            answer: 'To contact Virtual Riddle, you can send an email to info@virtualriddle.com or use the contact form on our website.'
          },
          {
            question: 'What is Virtual Riddle\'s address?',
            answer: 'Virtual Riddle is located at Maslak Neighborhood, AOS 55. Street, 42 Maslak B Block, Unit 4/542, Sarıyer, Istanbul, TURKEY.'
          },
          {
            question: 'What are the working hours?',
            answer: 'We provide services Monday-Friday 09:00-18:00, Saturday 10:00-14:00.'
          },
          {
            question: 'What services can I contact you for?',
            answer: 'You can contact us for Atlassian consulting, Jira setup, Confluence consulting, digital transformation projects and technology solutions.'
          }
        ]}
      />
    </main>
  );
} 