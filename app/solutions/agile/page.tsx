"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import { getSortedCountryCodes } from "../../lib/countryCodes";

// Country codes with flags (sorted by popularity, Palestine first)
const countryCodes = getSortedCountryCodes();

export default function AgilePage() {
  // Form state definitions
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    position: "",
    teamSize: "",
    message: ""
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const requiredFields = ["fullName", "companyName", "email", "message"];
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [validationMsg, setValidationMsg] = useState("");

  // Lambda-compatible field mapping function for AWS SES
  function mapFormToLambda(form) {
    return {
      page: "/solutions/agile",
      name: form.fullName || "",
      company: form.companyName || "",
      email: form.email || "",
      phone: form.countryCode && form.phone ? form.countryCode + form.phone : form.phone || "",
      countryCode: form.countryCode || "+1",
      position: form.position || "",
      teamSize: form.teamSize || "",
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
        message: ""
      });
      setErrors({});
      setCountrySearch("");
      setStatus("error");
    } finally {
      setLoading(false);
    }
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

  // Capturing input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Team size options
  const teamSizes = [
    "1-5 people",
    "6-15 people",
    "16-50 people",
    "51-200 people",
    "200+ people"
  ];

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
            <h1 className="text-5xl font-bold mb-6 text-white">Agile Transformation Services</h1>
            <p className="text-xl">
              Optimize your modern software development processes. Bring your projects to life faster and more efficiently with agile methodologies. Realize your organization's agile transformation with our expert Agile Coach team.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agile Transformation Process</h2>
            <p className="text-xl text-gray-600">
              The 4-step method we follow in your organization's transition to agile methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="relative overflow-hidden rounded-t-3xl h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">1</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600">
                  Analysis of your current processes and evaluation of your agile maturity level
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="relative overflow-hidden rounded-t-3xl h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">2</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Training</h3>
                <p className="text-gray-600">
                  Comprehensive training for your teams on Agile, Scrum, Kanban and related methodologies
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="relative overflow-hidden rounded-t-3xl h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">3</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
                <p className="text-gray-600">
                  Implementation of agile methodologies through pilot projects and establishment of processes
              </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="relative overflow-hidden rounded-t-3xl h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">4</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurement</h3>
                <p className="text-gray-600">
                  Measurement of agile transformation effects and continuous improvement cycle
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Agile Transformation</h2>
            <p className="text-xl text-gray-600">
              What agile methodologies will bring to your organization
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Delivery</h3>
              <p className="text-gray-600">
                Deliver working software at regular intervals with sprints, and respond quickly to customer feedback.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h3>
              <p className="text-gray-600">
                Strengthen internal team communication with Daily Scrum meetings and sprint planning to increase efficiency.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Value</h3>
              <p className="text-gray-600">
                Gain competitive advantage and improve your business results by providing faster value to your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agile Transformation Request Form */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-800 to-blue-950 rounded-3xl shadow-xl overflow-hidden">
              <div className="p-10 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-8">Agile Transformation Request</h2>
                <p className="text-white/80 mb-10">
                  Take the first step for your organization's agile transformation. You can request a free preliminary assessment by filling out the form below. Our expert Agile Coach team will share a custom agile transformation plan with you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Validation message */}
                  {validationMsg && (
                    <div className="bg-red-500/10 border border-red-400 text-red-200 px-4 py-3 rounded-xl">
                      {validationMsg}
                    </div>
                  )}

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
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
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
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
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
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
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
                      <label htmlFor="teamSize" className="block text-sm font-medium text-white/80 mb-2">
                        Team Size*
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="" disabled>Select team size</option>
                        {teamSizes.map(size => (
                          <option key={size} value={size} className="bg-blue-900 text-white">{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Current Agile Experience and Expectations
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="What is your current experience with agile methodologies and what are your expectations from the transformation?"
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
                      {loading ? 'Sending...' : 'Submit Agile Transformation Request'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Modal */}
      {showPopup && (
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
                  ? "Your agile transformation request has been successfully received. We will contact you as soon as possible." 
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
    </main>
  );
} 