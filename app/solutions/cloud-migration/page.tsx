"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import { getSortedCountryCodes } from "../../lib/countryCodes";

// Country codes with flags (sorted by popularity, Palestine first)
const countryCodes = getSortedCountryCodes();

export default function CloudMigrationPage() {
  // Form state definition
  const initialForm = {
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    currentEnvironment: "",
    usersCount: "",
    message: ""
  };
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Current Atlassian environments
  const environments = [
    "Server",
    "Data Center",
    "Cloud",
    "Not using yet"
  ];

  // User counts
  const userCounts = [
    "1-10",
    "11-50",
    "51-250",
    "251-500",
    "501-2000",
    "2000+"
  ];

  const requiredFields = ["fullName", "companyName", "email", "currentEnvironment", "usersCount", "message"];
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [validationMsg, setValidationMsg] = useState("");

  // Lambda-compatible field mapping function for AWS SES
  function mapFormToLambda(form) {
    return {
      page: "/solutions/cloud-migration",
      name: form.fullName || "",
      company: form.companyName || "",
      email: form.email || "",
      phone: form.countryCode && form.phone ? form.countryCode + form.phone : form.phone || "",
      countryCode: form.countryCode || "+1",
      currentEnvironment: form.currentEnvironment || "",
      userCount: form.usersCount || "",
      message: form.message || ""
    };
  }

  // Handle phone number input (only numbers)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only get numbers
    // Allow up to 15 digits for international phone numbers
    if (value.length <= 15) {
      setForm({ ...form, phone: value });
    }
  };

  // Handle country code selection
  const handleCountryCodeChange = (countryCode: string) => {
    setForm({ ...form, countryCode });
    setShowCountryDropdown(false);
    setCountrySearch("");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Form submission processing
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setValidationMsg("");
    
    // Validation
    const newErrors: { [key: string]: boolean } = {};
    requiredFields.forEach((field) => {
      if (!form[field] || form[field].trim() === "") {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setValidationMsg("Please fill in the required fields.");
      setLoading(false);
      setTimeout(() => setValidationMsg(""), 3000);
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
      
      // Clear form
      setForm(initialForm);
      setErrors({});
      setCountrySearch("");
      
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      // Clear form
      setForm(initialForm);
      setErrors({});
      setCountrySearch("");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Capturing input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (status) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Cloud Migration</h1>
            <p className="text-xl">
              Get support from our expert team for a secure and seamless transition to Atlassian Cloud.
              We provide seamless migration solutions from Server and Data Center environments to Cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Migration Process</h2>
            <p className="text-xl text-gray-600">
              Our structured methodology for a step-by-step secure and seamless cloud migration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Assessment</h3>
              <p className="text-gray-600">Current system analysis and migration plan creation, compliance assessment</p>
              <div className="mt-6">
                <svg className="w-16 h-16 mx-auto text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 12L10 16L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Readiness</h3>
              <p className="text-gray-600">Data cleansing, authorization planning and pre-migration optimization</p>
              <div className="mt-6">
                <svg className="w-16 h-16 mx-auto text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Migration</h3>
              <p className="text-gray-600">Secure data transfer, user and application migration, validation</p>
              <div className="mt-6">
                <svg className="w-16 h-16 mx-auto text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C7.11001 8 7.21947 8.00466 7.32779 8.01377C7.95849 5.66926 10.1655 4 12.7778 4C15.8921 4 18.4212 6.59238 18.5 9.80108C20.5 10.36 22 12.26 22 14.5C22 16.99 19.99 19 17.5 19H7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12V16M12 16L15 13M12 16L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">4</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Optimization</h3>
              <p className="text-gray-600">Performance optimization in Cloud environment and implementation of best practices</p>
              <div className="mt-6">
                <svg className="w-16 h-16 mx-auto text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 10L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5 15C14.5 17.2091 12.7091 19 10.5 19C8.29086 19 6.5 17.2091 6.5 15C6.5 12.7909 8.29086 11 10.5 11C12.7091 11 14.5 12.7909 14.5 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6C17.5 7.65685 16.1569 9 14.5 9C12.8431 9 11.5 7.65685 11.5 6C11.5 4.34315 12.8431 3 14.5 3C16.1569 3 17.5 4.34315 17.5 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Cloud</h2>
            <p className="text-xl text-gray-600">
              The benefits of taking your business to the next level with Atlassian Cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalability</h3>
              <p className="text-gray-600">
                Flexible resource usage according to your needs and fast growth opportunities
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Security</h3>
              <p className="text-gray-600">
                Enterprise-level security, data protection and regular automatic updates
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Savings</h3>
              <p className="text-gray-600">
                Significant savings in infrastructure costs and cost optimization with management ease
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-800 to-blue-950 rounded-3xl shadow-xl overflow-hidden">
              <div className="p-10 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-8">Free Cloud Migration Assessment</h2>
                <p className="text-white/80 mb-10">
                  Fill out the form below to get a free cloud migration analysis and migration plan for your Atlassian systems.
                  Our expert team will contact you within 24 hours.
                </p>

                {/* Validation message */}
                {validationMsg && (
                  <div className="bg-red-500/10 border border-red-400 text-red-200 px-4 py-3 rounded-xl mb-6">
                    {validationMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal and Company Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.fullName 
                            ? 'border-red-400 bg-red-500/10' 
                            : 'border-white/10 bg-white/5'
                        } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
                        placeholder="Your first and last name"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-white/80 mb-2">
                        Company Name*
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.companyName 
                            ? 'border-red-400 bg-red-500/10' 
                            : 'border-white/10 bg-white/5'
                        } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email 
                            ? 'border-red-400 bg-red-500/10' 
                            : 'border-white/10 bg-white/5'
                        } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
                        placeholder="example@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone*
                      </label>
                      <div className="flex gap-2">
                        {/* Country Code Selector */}
                        <div className="relative" ref={countryDropdownRef}>
                          <button
                            type="button"
                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                            className="px-3 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors flex items-center gap-2 min-w-[100px] justify-between"
                          >
                            <span className="flex items-center gap-2">
                              <span>{countryCodes.find(c => c.code === form.countryCode)?.flag || "🇺🇸"}</span>
                              <span className="text-sm">{form.countryCode}</span>
                            </span>
                            <svg className={`w-4 h-4 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          
                          {showCountryDropdown && (
                            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 max-h-80 w-64">
                              {/* Search Input */}
                              <div className="p-3 border-b border-gray-200 sticky top-0 bg-white">
                                <input
                                  type="text"
                                  placeholder="Search country..."
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                              
                              {/* Country List */}
                              <div className="overflow-y-auto max-h-64">
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
                          )}
                        </div>
                        
                        {/* Phone Number Input */}
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handlePhoneChange}
                          required
                          className={`flex-1 px-4 py-3 rounded-xl border ${
                            errors.phone 
                              ? 'border-red-400 bg-red-500/10' 
                              : 'border-white/10 bg-white/5'
                          } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="currentEnvironment" className="block text-sm font-medium text-white/80 mb-2">
                        Current Atlassian Environment*
                      </label>
                      <select
                        id="currentEnvironment"
                        name="currentEnvironment"
                        value={form.currentEnvironment}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.currentEnvironment 
                            ? 'border-red-400 bg-red-500/10' 
                            : 'border-white/10 bg-white/5'
                        } text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
                      >
                        <option value="" disabled>Select your current environment</option>
                        {environments.map(env => (
                          <option key={env} value={env} className="bg-blue-900 text-white">{env}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="usersCount" className="block text-sm font-medium text-white/80 mb-2">
                        User Count*
                      </label>
                      <select
                        id="usersCount"
                        name="usersCount"
                        value={form.usersCount}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.usersCount 
                            ? 'border-red-400 bg-red-500/10' 
                            : 'border-white/10 bg-white/5'
                        } text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
                      >
                        <option value="" disabled>Select user count</option>
                        {userCounts.map(count => (
                          <option key={count} value={count} className="bg-blue-900 text-white">{count}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Migration-Related Information and Expectations*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message 
                          ? 'border-red-400 bg-red-500/10' 
                          : 'border-white/10 bg-white/5'
                      } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
                      placeholder="Your current Atlassian products and expectations regarding cloud migration"
                    ></textarea>
                  </div>

                  {/* Send Button */}
                  <div className="flex flex-col sm:flex-row justify-end gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full sm:w-auto px-10 py-3 font-semibold rounded-xl transition-colors ${
                        loading 
                          ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                          : 'bg-white text-blue-800 hover:bg-blue-50'
                      }`}
                    >
                      {loading ? "Sending..." : "Submit Assessment Request"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Pop-up Modal */}
      {showPopup && status && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
            <div className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {status === "success" ? (
                  <CheckCircle className="w-16 h-16 text-green-500" />
                ) : (
                  <AlertTriangle className="w-16 h-16 text-red-500" />
                )}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                status === "success" ? "text-green-800" : "text-red-800"
              }`}>
                {status === "success" ? "Success!" : "Error!"}
              </h3>
              <p className={`text-gray-600 ${
                status === "success" ? "text-green-700" : "text-red-700"
              }`}>
                {status === "success" 
                  ? "Your message has been successfully sent. We will contact you as soon as possible." 
                  : "An error occurred. You can send an email directly to info@virtualriddle.com."
                }
              </p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
} 