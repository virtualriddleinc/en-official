"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import { getSortedCountryCodes } from "../../lib/countryCodes";

// Country codes with flags (sorted by popularity, Palestine first)
const countryCodes = getSortedCountryCodes();

export default function TrainingPage() {
  // Form state definition
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    position: "",
    interests: {
      jiraSoftware: false,
      confluence: false,
      jiraServiceManagement: false,
      bitbucket: false,
      advanced: false
    },
    currentExperience: "",
    message: ""
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const requiredFields = ["fullName", "companyName", "email", "phone", "message"];
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [validationMsg, setValidationMsg] = useState("");

  // Training programs
  const programs = [
    { id: "jiraSoftware", name: "Jira Software", description: "Project management and Agile methodologies" },
    { id: "confluence", name: "Confluence", description: "Content management and team collaboration" },
    { id: "jiraServiceManagement", name: "Jira Service Management", description: "ITSM and service desk management" },
    { id: "bitbucket", name: "Bitbucket", description: "Git-based code management" },
    { id: "advanced", name: "Advanced Roadmaps", description: "Advanced project planning and portfolio management" }
  ];

  // Experience Levels
  const experienceLevels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "No experience yet"
  ];

  // Product labels visible to users
  const productLabels = {
    jiraSoftware: "Jira Software",
    confluence: "Confluence",
    jiraServiceManagement: "Jira Service Management",
    bitbucket: "Bitbucket",
    advanced: "Advanced/Custom Training"
  };

  // Lambda-compatible field mapping function for AWS SES
  function mapFormToLambda(form) {
    const selectedProducts = Object.entries(form.interests)
      .filter(([k, v]) => v)
      .map(([k]) => productLabels[k] || k)
      .join(", ");

    return {
      page: "/solutions/training",
      name: form.fullName || "",
      company: form.companyName || "",
      email: form.email || "",
      phone: form.countryCode && form.phone ? form.countryCode + form.phone : form.phone || "",
      countryCode: form.countryCode || "+1",
      position: form.position || "",
      atlassianProducts: selectedProducts || "",
      experienceLevel: form.currentExperience || "",
      message: form.message || ""
    };
  }

  // Handle phone number input (only numbers)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only get numbers
    // Allow up to 15 digits for international phone numbers
    if (value.length <= 15) {
      setFormData({ ...formData, phone: value });
    }
  };

  // Handle country code selection
  const handleCountryCodeChange = (countryCode: string) => {
    setFormData({ ...formData, countryCode });
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
      if (!formData[field] || formData[field].trim() === "") {
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
    const payload = mapFormToLambda(formData);
    try {
      const res = await fetch("https://rvskttz2jh.execute-api.us-east-1.amazonaws.com/prod/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      // Clear form
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        countryCode: "+1",
        position: "",
        interests: {
          jiraSoftware: false,
          confluence: false,
          jiraServiceManagement: false,
          bitbucket: false,
          advanced: false
        },
        currentExperience: "",
        message: ""
      });
      setErrors({});
      setCountrySearch("");
      
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      // Clear form
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        countryCode: "+1",
        position: "",
        interests: {
          jiraSoftware: false,
          confluence: false,
          jiraServiceManagement: false,
          bitbucket: false,
          advanced: false
        },
        currentExperience: "",
        message: ""
      });
      setErrors({});
      setCountrySearch("");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Capturing input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Capturing program selections
  const handleProgramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [name]: checked
      }
    });
  };

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
            <h1 className="text-5xl font-bold text-white mb-6">Training & Certification</h1>
            <p className="text-xl">
              Specialize in Atlassian products and take your career to the next level.
              Develop your knowledge and skills with our professional training programs, and document your expertise with internationally recognized certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-600">
              Comprehensive training programs from basic to advanced level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Jira Software</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Project management fundamentals</li>
                <li>• Agile & Scrum methodologies</li>
                <li>• Workflow management and automation</li>
                <li>• Reporting and analytics</li>
              </ul>
            </div>

            {/* Program 2 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Confluence</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Content management and creation</li>
                <li>• Team collaboration and knowledge sharing</li>
                <li>• Templates and macros</li>
                <li>• Integrations and customization</li>
              </ul>
            </div>

            {/* Program 3 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Jira Service Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ITSM fundamentals and ITIL compliance</li>
                <li>• Service desk management</li>
                <li>• SLA and reporting</li>
                <li>• Customer portal and automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certification Process</h2>
            <p className="text-xl text-gray-600">
              Document your expertise with Atlassian certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Training</h3>
              <p className="text-gray-600">Enhance your knowledge and skills with comprehensive training programs.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Practice</h3>
              <p className="text-gray-600">Gain practical experience with real-world scenarios.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Exam</h3>
              <p className="text-gray-600">Take the online or proctored certification exam.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">4</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Certification</h3>
              <p className="text-gray-600">Receive your official Atlassian certification and take your career to the next level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Benefits */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certification Benefits</h2>
            <p className="text-xl text-gray-600">
              The benefits you will gain from Atlassian certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">International Recognition</h3>
              <p className="text-gray-600">
                Gain access to global job opportunities with Atlassian certifications recognized worldwide.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Development</h3>
              <p className="text-gray-600">
                Increase your value in the industry and gain access to better positions and salaries.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitive Advantage</h3>
              <p className="text-gray-600">
                Stand out from other candidates and demonstrate your verified expertise to employers.
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
                <h2 className="text-3xl font-bold text-white mb-8">Training & Certification Application Form</h2>
                <p className="text-white/80 mb-10">
                  Fill out the form below for custom training and certification programs tailored to your needs.
                  Our expert team will contact you within 24 hours.
                </p>

                {/* Validation message */}
                {validationMsg && (
                  <div className="bg-red-500/10 border border-red-400 text-red-200 px-4 py-3 rounded-xl mb-6">
                    {validationMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
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
                        value={formData.fullName}
                        onChange={handleInputChange}
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
                        value={formData.companyName}
                        onChange={handleInputChange}
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
                        value={formData.email}
                        onChange={handleInputChange}
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
                              <span>{countryCodes.find(c => c.code === formData.countryCode)?.flag || "🇺🇸"}</span>
                              <span className="text-sm">{formData.countryCode}</span>
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
                                        formData.countryCode === country.code ? 'bg-blue-100' : ''
                                      }`}
                                    >
                                      <span className="text-lg mr-3">{country.flag}</span>
                                      <span className="font-medium text-gray-900 mr-2">{country.code}</span>
                                      <span className="text-gray-600 flex-1 text-left">{country.country}</span>
                                      {formData.countryCode === country.code && (
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
                          value={formData.phone}
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
                      <label htmlFor="position" className="block text-sm font-medium text-white/80 mb-2">
                        Position
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="Your position at the company"
                      />
                    </div>
                    <div>
                      <label htmlFor="currentExperience" className="block text-sm font-medium text-white/80 mb-2">
                        Atlassian Experience Level*
                      </label>
                      <select
                        id="currentExperience"
                        name="currentExperience"
                        value={formData.currentExperience}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.currentExperience 
                            ? 'border-red-400 bg-red-500/10' 
                            : 'border-white/10 bg-white/5'
                        } text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
                      >
                        <option value="" disabled>Select your experience level</option>
                        {experienceLevels.map(level => (
                          <option key={level} value={level} className="bg-blue-900 text-white">{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Interested Training Programs */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Training Programs You Are Interested In</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {programs.map(program => (
                        <div key={program.id} className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                          <input
                            type="checkbox"
                            id={program.id}
                            name={program.id}
                            checked={formData.interests[program.id as keyof typeof formData.interests]}
                            onChange={handleProgramChange}
                            className="mt-1 h-5 w-5 rounded border-white/30 text-blue-500 focus:ring-blue-400"
                          />
                          <div>
                            <label htmlFor={program.id} className="block font-medium text-white cursor-pointer">
                              {program.name}
                            </label>
                            <p className="text-sm text-white/60">{program.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Additional Information and Expectations
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message 
                          ? 'border-red-400 bg-red-500/10' 
                          : 'border-white/10 bg-white/5'
                      } text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm`}
                      placeholder="Please provide detailed information about your training and certification needs"
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
                      {loading ? "Sending..." : "Submit Application"}
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