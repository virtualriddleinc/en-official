"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle, AlertTriangle, X } from "lucide-react";

export default function FreeDiscoveryPage() {
  // State definitions for form
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    position: "",
    teamSize: "",
    products: {
      jira: false,
      confluence: false,
      bitbucket: false,
      jiraServiceManagement: false,
      advanced: false
    },
    challenges: [],
    currentTools: "",
    message: ""
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const requiredFields = ["fullName", "companyName", "email", "phone", "message"];
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [validationMsg, setValidationMsg] = useState("");

  // Product list and descriptions
  const productList = [
    { id: "jira", name: "Jira Software", description: "Agile project management and planning" },
    { id: "confluence", name: "Confluence", description: "Document management and knowledge base" },
    { id: "bitbucket", name: "Bitbucket", description: "Git-based code management" },
    { id: "jiraServiceManagement", name: "Jira Service Management", description: "IT service management" },
    { id: "advanced", name: "Advanced Roadmaps", description: "Advanced project planning and management" }
  ];

  // Company sizes
  const teamSizes = [
    "1-20",
    "21-100",
    "101-500",
    "501-1000",
    "1000+"
  ];

  // Product labels visible to users
  const productLabels = {
    jira: "Jira Software",
    confluence: "Confluence",
    bitbucket: "Bitbucket",
    jiraServiceManagement: "Jira Service Management",
    advanced: "Advanced/Custom Solution"
  };

  function buildContent(form: typeof formData) {
    return [
      `Full Name: ${form.fullName}`,
      `Company Name: ${form.companyName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Position: ${form.position}`,
      `Number of Employees: ${form.teamSize}`,
      `Products of Interest: ${Object.entries(form.products).filter(([k,v])=>v).map(([k])=>k).join(", ")}`,
      `Tools Used: ${form.currentTools}`,
      `Challenges Faced: ${(form.challenges || []).join(", ")}`,
      `Message: ${form.message}`
    ].join("\n");
  }

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
    // Create subject and content
    const subject = `Free Discovery Request : ${formData.fullName || ""} - ${formData.companyName || ""}`;
    const content = buildContent(formData);
    const payload = { ...formData, subject, content };
    try {
      const res = await fetch("https://rvskttz2jh.execute-api.us-east-1.amazonaws.com/prod/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        position: "",
        teamSize: "",
        products: {
          jira: false,
          confluence: false,
          bitbucket: false,
          jiraServiceManagement: false,
          advanced: false
        },
        challenges: [],
        currentTools: "",
        message: ""
      });
      setErrors({});
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        position: "",
        teamSize: "",
        products: {
          jira: false,
          confluence: false,
          bitbucket: false,
          jiraServiceManagement: false,
          advanced: false
        },
        challenges: [],
        currentTools: "",
        message: ""
      });
      setErrors({});
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

  // Product selections capturing
  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      products: {
        ...formData.products,
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

  function mapFormToLambda(form) {
    return {
      page: "/solutions/free-discovery",
      name: form.fullName,
      company: form.companyName,
      email: form.email,
      phone: form.phone,
      position: form.position,
      industry: form.industry || "",
      companySize: form.companySize || "",
      currentChallenges: (form.challenges || []).join(", "),
      objectives: form.objectives || "",
      currentTools: form.currentTools || "",
      timeline: form.timeline || "",
      budget: form.budget || "",
      decisionMakers: form.decisionMakers || "",
      preferredMeetingTime: form.preferredMeetingTime || "",
      products: Object.entries(form.products)
        .filter(([k,v])=>v)
        .map(([k])=>productLabels[k] || k)
        .join(", "),
      message: form.message
    };
  }

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
            <h1 className="text-5xl font-bold mb-6 text-white">Free Discovery</h1>
            <p className="text-xl">
              Let's take your first step in your digital transformation journey together with Atlassian products. 
              Our expert team provides free preliminary analysis and reporting services for your corporate needs.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Discovery Process</h2>
            <p className="text-xl text-gray-600">
              We understand your needs, identify the most suitable Atlassian solutions, and present you with a customized roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Application</h3>
              <p className="text-gray-600">Fill out the form to share your needs and current situation.</p>
              <div className="mt-6">
                <img src="/images/form-icon.svg" alt="Application" className="w-16 h-16 mx-auto opacity-60" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Analysis</h3>
              <p className="text-gray-600">Our expert team evaluates your needs and analyzes your current processes.</p>
              <div className="mt-6">
                <img src="/images/analysis-icon.svg" alt="Analysis" className="w-16 h-16 mx-auto opacity-60" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Reporting</h3>
              <p className="text-gray-600">Receive a detailed evaluation report prepared specifically for your organization.</p>
              <div className="mt-6">
                <img src="/images/report-icon.svg" alt="Reporting" className="w-16 h-16 mx-auto opacity-60" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-blue-50 p-8 rounded-3xl relative group hover:shadow-lg transition-all">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform">4</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">Presentation</h3>
              <p className="text-gray-600">Presentation of the report containing findings and recommendations, and determination of the roadmap.</p>
              <div className="mt-6">
                <img src="/images/presentation-icon.svg" alt="Presentation" className="w-16 h-16 mx-auto opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Will You Gain?</h2>
            <p className="text-xl text-gray-600">
              Benefits you will gain from our free discovery service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Current State Analysis</h3>
              <p className="text-gray-600">
                Receive a detailed evaluation of your current business processes and discover improvement opportunities.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization Recommendations</h3>
              <p className="text-gray-600">
                Get expert recommendations on how to optimize your processes with Atlassian products.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Projection</h3>
              <p className="text-gray-600">
                Get a measurable assessment of the potential return on your investment in Atlassian solutions.
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
                <h2 className="text-3xl font-bold text-white mb-8">Free Discovery Application Form</h2>
                <p className="text-white/80 mb-10">
                  To better understand your needs, please complete the form below to submit your application.
                  Our expert team will contact you within 24 hours.
                </p>

                {/* Validation message */}
                {validationMsg && (
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-800 rounded-xl px-4 py-2 shadow transition-all animate-fade-in-up">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <span className="font-semibold">{validationMsg}</span>
                    </div>
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
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.fullName ? 'border-red-500 bg-red-50' : ''}`}
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
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.companyName ? 'border-red-500 bg-red-50' : ''}`}
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
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.email ? 'border-red-500 bg-red-50' : ''}`}
                        placeholder="example@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.phone ? 'border-red-500 bg-red-50' : ''}`}
                        placeholder="Phone number"
                      />
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
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.position ? 'border-red-500 bg-red-50' : ''}`}
                        placeholder="Your position in the company"
                      />
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-white/80 mb-2">
                        Company Size*
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.teamSize ? 'border-red-500 bg-red-50' : ''}`}
                      >
                        <option value="" disabled>Select number of employees</option>
                        {teamSizes.map(size => (
                          <option key={size} value={size} className="bg-blue-900 text-white">{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Products of Interest */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Atlassian Products You Need</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {productList.map(product => (
                        <div key={product.id} className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                          <input
                            type="checkbox"
                            id={product.id}
                            name={product.id}
                            checked={formData.products[product.id as keyof typeof formData.products]}
                            onChange={handleProductChange}
                            className="mt-1 h-5 w-5 rounded border-white/30 text-blue-500 focus:ring-blue-400"
                          />
                          <div>
                            <label htmlFor={product.id} className="block font-medium text-white cursor-pointer">
                              {product.name}
                            </label>
                            <p className="text-sm text-white/60">{product.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Current tools and description */}
                  <div>
                    <label htmlFor="currentTools" className="block text-sm font-medium text-white/80 mb-2">
                      Currently Used Tools
                    </label>
                    <input
                      type="text"
                      id="currentTools"
                      name="currentTools"
                      value={formData.currentTools}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.currentTools ? 'border-red-500 bg-red-50' : ''}`}
                      placeholder="Tools you currently use (e.g., Trello, Asana, GitLab)"
                    />
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
                      className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm ${errors.message ? 'border-red-500 bg-red-50' : ''}`}
                      placeholder="Tell us more about your projects and expectations"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row justify-end gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-3 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
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
                  ? "Your message has been successfully submitted. We will contact you as soon as possible."
                  : "An error occurred. You can send an email directly to info@virtualriddle.com."}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 