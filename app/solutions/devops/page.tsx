"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import { getSortedCountryCodes } from "../../lib/countryCodes";

// Country codes with flags (sorted by popularity, Palestine first)
const countryCodes = getSortedCountryCodes();

export default function DevOpsPage() {
  // Form state definitions
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    position: "",
    currentTools: "",
    challenges: "",
    message: ""
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [validationMsg, setValidationMsg] = useState("");

  const requiredFields = ["fullName", "companyName", "email", "message"];

  // Lambda-compatible field mapping function for AWS SES
  function mapFormToLambda(form) {
    return {
      page: "/solutions/devops",
      name: form.fullName || "",
      company: form.companyName || "",
      email: form.email || "",
      phone: form.countryCode && form.phone ? form.countryCode + form.phone : form.phone || "",
      countryCode: form.countryCode || "+1",
      position: form.position || "",
      currentTools: form.currentTools || "",
      challenges: form.challenges || "",
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
        currentTools: "",
        challenges: "",
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
        currentTools: "",
        challenges: "",
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
            <h1 className="text-5xl font-bold mb-6 text-white">DevOps Solutions</h1>
            <p className="text-xl">
              Automate your software development and operations processes with modern DevOps practices.
              Accelerate your software delivery with CI/CD pipelines, containerization, and infrastructure automation.
            </p>
          </div>
        </div>
      </section>

      {/* DevOps Application Areas */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">DevOps Application Areas</h2>
            <p className="text-xl text-gray-600">
              Key areas we can transform with DevOps methodologies
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Continuous Integration</h3>
              <p className="text-gray-600">
                  Increase code quality and catch errors early with automatic build and test processes.
                </p>
              </div>

            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Continuous Deployment</h3>
              <p className="text-gray-600">
                  Quickly deploy your applications with secure and automated deployment processes.
                </p>
              </div>

            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Containerization</h3>
              <p className="text-gray-600">
                Containerize and scale your applications with Docker and Kubernetes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Tools */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">DevOps Toolset</h2>
            <p className="text-xl text-gray-600">
              Tools we use to optimize your DevOps processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tool 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure Automation</h3>
                  <p className="text-gray-600">
                    Manage your infrastructure as code with Terraform, Ansible, CloudFormation and Pulumi, eliminating manual processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring & Observability</h3>
                  <p className="text-gray-600">
                    Monitor system performance, analyze logs and quickly detect issues with Prometheus, Grafana, ELK Stack and Datadog.
                  </p>
                </div>
              </div>
            </div>

            {/* Tool 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Automation</h3>
                  <p className="text-gray-600">
                    Integrated security scans and code quality controls in your CI/CD pipelines with SonarQube, Snyk, OWASP ZAP and Trivy.
                  </p>
                </div>
              </div>
            </div>

            {/* Tool 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">GitOps</h3>
                  <p className="text-gray-600">
                    Manage your Kubernetes clusters via Git with ArgoCD, Flux and Jenkins X, simplifying your deployment processes with declarative configuration and automatic synchronization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Consulting Request Form */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-800 to-blue-950 rounded-3xl shadow-xl overflow-hidden">
              <div className="p-10 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-8">DevOps Consulting Request</h2>
                <p className="text-white/80 mb-10">
                  We are here to help you on your DevOps transformation journey. Let's create a customized DevOps strategy and roadmap for your organization by analyzing your current processes.
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
                        placeholder="Jenkins, GitLab, Docker, etc."
                      />
                    </div>
                  </div>

                  {/* DevOps Challenges */}
                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-white/80 mb-2">
                      Challenges You Want to Solve with DevOps
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      rows={3}
                      value={formData.challenges}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="What are the challenges in your current development and deployment processes?"
                    ></textarea>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Additional Information and Expectations*
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
                      placeholder="Your expectations from DevOps transformation and more information about your projects"
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
                      {loading ? "Sending..." : "Submit Consulting Request"}
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
                  ? "Your DevOps consulting request has been successfully received. We will contact you as soon as possible." 
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