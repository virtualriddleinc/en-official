"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import StructuredData from '../../components/StructuredData';

// Country codes with flags (sorted by popularity, Palestine first)
const countryCodes = [
  { code: "+970", flag: "🇵🇸", country: "Palestine" },
  { code: "+1", flag: "🇺🇸", country: "United States" },
  { code: "+90", flag: "🇹🇷", country: "Turkey" },
  { code: "+44", flag: "🇬🇧", country: "United Kingdom" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+33", flag: "🇫🇷", country: "France" },
  { code: "+39", flag: "🇮🇹", country: "Italy" },
  { code: "+34", flag: "🇪🇸", country: "Spain" },
  { code: "+31", flag: "🇳🇱", country: "Netherlands" },
  { code: "+41", flag: "🇨🇭", country: "Switzerland" },
  { code: "+32", flag: "🇧🇪", country: "Belgium" },
  { code: "+43", flag: "🇦🇹", country: "Austria" },
  { code: "+46", flag: "🇸🇪", country: "Sweden" },
  { code: "+47", flag: "🇳🇴", country: "Norway" },
  { code: "+45", flag: "🇩🇰", country: "Denmark" },
  { code: "+358", flag: "🇫🇮", country: "Finland" },
  { code: "+971", flag: "🇦🇪", country: "UAE" },
  { code: "+966", flag: "🇸🇦", country: "Saudi Arabia" },
  { code: "+974", flag: "🇶🇦", country: "Qatar" },
  { code: "+81", flag: "🇯🇵", country: "Japan" },
  { code: "+86", flag: "🇨🇳", country: "China" },
  { code: "+91", flag: "🇮🇳", country: "India" },
  { code: "+82", flag: "🇰🇷", country: "South Korea" },
  { code: "+61", flag: "🇦🇺", country: "Australia" },
  { code: "+64", flag: "🇳🇿", country: "New Zealand" },
  { code: "+55", flag: "🇧🇷", country: "Brazil" },
  { code: "+52", flag: "🇲🇽", country: "Mexico" },
  { code: "+54", flag: "🇦🇷", country: "Argentina" },
  { code: "+57", flag: "🇨🇴", country: "Colombia" },
  { code: "+56", flag: "🇨🇱", country: "Chile" },
  { code: "+7", flag: "🇷🇺", country: "Russia" },
  { code: "+30", flag: "🇬🇷", country: "Greece" },
  { code: "+48", flag: "🇵🇱", country: "Poland" },
  { code: "+420", flag: "🇨🇿", country: "Czech Republic" },
  { code: "+36", flag: "🇭🇺", country: "Hungary" },
  { code: "+40", flag: "🇷🇴", country: "Romania" },
  { code: "+351", flag: "🇵🇹", country: "Portugal" },
  { code: "+27", flag: "🇿🇦", country: "South Africa" },
];

export default function ConsultingPage() {
  // Form state definitions
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    position: "",
    teamSize: "",
    services: {
      processAnalysis: false,
      productConsulting: false,
      projectManagement: false,
      agileTransformation: false,
      devopsConsulting: false,
      customConsulting: false
    },
    currentTools: "",
    projectScope: "",
    timeline: "",
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

  // Consulting services
  const serviceList = [
    { id: "processAnalysis", name: "Process Analysis", description: "Analysis and optimization of current business processes" },
    { id: "productConsulting", name: "Product Consulting", description: "Configuration and optimization of Atlassian products" },
    { id: "projectManagement", name: "Project Management", description: "Improvement of project management processes" },
    { id: "agileTransformation", name: "Agile Transformation", description: "Consulting for transition to agile methodologies" },
    { id: "devopsConsulting", name: "DevOps Consulting", description: "Establishment and optimization of DevOps processes" },
    { id: "customConsulting", name: "Custom Consulting", description: "Custom consulting services for your organization" }
  ];

  // Company sizes
  const teamSizes = [
    "1-20",
    "21-100",
    "101-500",
    "501-1000",
    "1000+"
  ];

  // Project scopes
  const projectScopes = [
    "Small Scale (1-3 months)",
    "Medium Scale (3-6 months)",
    "Large Scale (6-12 months)",
    "Enterprise Transformation (12+ months)"
  ];

  // Timelines
  const timelines = [
    "Urgent (within 1 month)",
    "Medium Term (within 3 months)",
    "Long Term (within 6 months)",
    "Planning Stage"
  ];

  // Service labels visible to users
  const serviceLabels = {
    processAnalysis: "Process Analysis",
    productConsulting: "Product Consulting",
    projectManagement: "Project Management",
    agileTransformation: "Agile Transformation",
    devopsConsulting: "DevOps Consulting",
    customConsulting: "Custom Consulting"
  };

  // Lambda-compatible field mapping function for AWS SES
  function mapFormToLambda(form) {
    const selectedServices = Object.entries(form.services)
      .filter(([k, v]) => v)
      .map(([k]) => serviceLabels[k] || k)
      .join(", ");

    return {
      page: "/solutions/consulting",
      name: form.fullName || "",
      company: form.companyName || "",
      email: form.email || "",
      phone: form.countryCode && form.phone ? form.countryCode + form.phone : form.phone || "",
      countryCode: form.countryCode || "+1",
      position: form.position || "",
      teamSize: form.teamSize || "",
      consultingServices: selectedServices || "",
      currentTools: form.currentTools || "",
      projectScope: form.projectScope || "",
      timeline: form.timeline || "",
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
        teamSize: "",
        services: {
          processAnalysis: false,
          productConsulting: false,
          projectManagement: false,
          agileTransformation: false,
          devopsConsulting: false,
          customConsulting: false
        },
        currentTools: "",
        projectScope: "",
        timeline: "",
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
        teamSize: "",
        services: {
          processAnalysis: false,
          productConsulting: false,
          projectManagement: false,
          agileTransformation: false,
          devopsConsulting: false,
          customConsulting: false
        },
        currentTools: "",
        projectScope: "",
        timeline: "",
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

  // Service selections capturing
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
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
            <h1 className="text-5xl font-bold mb-6 text-white">Atlassian Consulting</h1>
            <p className="text-xl">
              With our expert consulting services on Atlassian tools, optimize your corporate processes and increase your efficiency.
              Our expert team is here to provide customized solutions for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Areas of Expertise</h2>
            <p className="text-xl text-gray-600">
              Comprehensive Atlassian consulting services tailored to your corporate needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12H15M8 16H12M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Process Analysis</h3>
              <p className="text-gray-600">
                We offer detailed analysis of your current business processes and recommendations for optimization with Atlassian tools.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Product Consulting</h3>
              <p className="text-gray-600">
                Custom configuration and optimization of Jira, Confluence, Bitbucket and other Atlassian products for your organization.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Agile Transformation</h3>
              <p className="text-gray-600">
                Accelerate your organization's transition to agile methodologies and increase your efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Atlassian Consulting?</h2>
            <p className="text-xl text-gray-600">
              The gains you will achieve with our consulting services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Increased Efficiency</h3>
              <p className="text-gray-600">
                You can increase your team's efficiency by up to 40% through proper configuration and use of Atlassian tools.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Agility Development</h3>
              <p className="text-gray-600">
                Increase your project success rate by improving inter-team communication and collaboration.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Maximization</h3>
              <p className="text-gray-600">
                Maximize the return on your investment in Atlassian tools.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Request Form */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-800 to-blue-950 rounded-3xl shadow-xl overflow-hidden">
              <div className="p-10 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-8">Consulting Request</h2>
                <p className="text-white/80 mb-10">
                  Fill out the form below to provide customized consulting services by understanding your organization's needs.
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
                                  .filter(country => 
                                    country.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
                                    country.code.includes(countrySearch)
                                  )
                                  .map((country) => (
                                    <button
                                      key={country.code}
                                      type="button"
                                      onClick={() => handleCountryCodeChange(country.code)}
                                      className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center gap-3 ${
                                        formData.countryCode === country.code ? 'bg-blue-100' : ''
                                      }`}
                                    >
                                      <span className="text-xl">{country.flag}</span>
                                      <span className="text-gray-900 text-sm font-medium">{country.country}</span>
                                      <span className="text-gray-500 text-sm ml-auto">{country.code}</span>
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
                      <label htmlFor="teamSize" className="block text-sm font-medium text-white/80 mb-2">
                        Company Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Select number of employees</option>
                        {teamSizes.map(size => (
                          <option key={size} value={size} className="bg-blue-900 text-white">{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Required Consulting Services */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Consulting Services You Need</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {serviceList.map(service => (
                        <div key={service.id} className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                          <input
                            type="checkbox"
                            id={service.id}
                            name={service.id}
                            checked={formData.services[service.id as keyof typeof formData.services]}
                            onChange={handleServiceChange}
                            className="mt-1 h-5 w-5 rounded border-white/30 text-blue-500 focus:ring-blue-400"
                          />
                          <div>
                            <label htmlFor={service.id} className="block font-medium text-white cursor-pointer">
                              {service.name}
                            </label>
                            <p className="text-sm text-white/60">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectScope" className="block text-sm font-medium text-white/80 mb-2">
                        Project Scope
                      </label>
                      <select
                        id="projectScope"
                        name="projectScope"
                        value={formData.projectScope}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Select project scope</option>
                        {projectScopes.map(scope => (
                          <option key={scope} value={scope} className="bg-blue-900 text-white">{scope}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-white/80 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Select timeline</option>
                        {timelines.map(timeline => (
                          <option key={timeline} value={timeline} className="bg-blue-900 text-white">{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Current tools */}
                  <div>
                    <label htmlFor="currentTools" className="block text-sm font-medium text-white/80 mb-2">
                      Current Tools You Use
                    </label>
                    <input
                      type="text"
                      id="currentTools"
                      name="currentTools"
                      value={formData.currentTools}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="Tools and systems you are currently using"
                    />
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Your Consulting Needs and Expectations*
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
                      placeholder="Please provide detailed information about your consulting needs, projects and expectations"
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
                      {loading ? 'Sending...' : 'Submit Consulting Request'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Modal */}
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
                  ? "Your consulting request has been successfully received. We will contact you as soon as possible." 
                  : "An error occurred. Please try again."
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

      {/* Structured Data */}
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', item: 'https://virtualriddle.com' },
          { name: 'Solutions', item: 'https://virtualriddle.com/solutions' },
          { name: 'Consulting', item: 'https://virtualriddle.com/solutions/consulting' }
        ]}
      />
      
      <StructuredData
        type="faq"
        faqItems={[
          {
            question: 'What is Atlassian consulting?',
            answer: 'Atlassian consulting is consulting to optimize your corporate processes with Atlassian tools.'
          },
          {
            question: 'What services do you offer?',
            answer: 'We offer Jira, Confluence, Bitbucket consulting, Agile transformation, DevOps consulting and custom solutions.'
          },
          {
            question: 'How does the consulting process work?',
            answer: 'It consists of initial meeting, needs analysis, solution proposal, implementation and follow-up phases.'
          }
        ]}
      />
      
      <StructuredData
        type="service"
        serviceData={{
          name: 'Virtual Riddle Atlassian Consulting',
          description: 'With our expert consulting services on Atlassian tools, optimize your corporate processes',
          url: 'https://virtualriddle.com/solutions/consulting',
          offers: [
            {
              name: 'Jira Consulting',
              description: 'Jira installation, configuration and optimization'
            },
            {
              name: 'Confluence Consulting',
              description: 'Confluence installation and content management'
            },
            {
              name: 'Agile Transformation',
              description: 'Consulting for transition to agile methodologies'
            }
          ]
        }}
      />
    </main>
  );
} 