import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Virtual Riddle",
  description: "Read Virtual Riddle's Terms of Service. Learn about service usage, intellectual property rights, payment terms, liability limitations, and more.",
  keywords: "terms of service, terms and conditions, service agreement, Virtual Riddle, legal terms, user agreement",
  openGraph: {
    title: "Terms of Service - Virtual Riddle",
    description: "Read Virtual Riddle's Terms of Service and understand your rights and obligations.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Terms of Service</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Rules and conditions you must follow when using Virtual Riddle services
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Quick Navigation */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Quick Access
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="#service-use" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <span className="text-gray-700 font-medium">Service Usage</span>
                </Link>
                
                <Link href="#intellectual-property" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <span className="text-gray-700 font-medium">Intellectual Property</span>
                </Link>
                
                <Link href="#liability-limitations" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <span className="text-gray-700 font-medium">Liability Limitations</span>
                </Link>
                
                <Link href="#payment-terms" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">4</span>
                  </div>
                  <span className="text-gray-700 font-medium">Payment Terms</span>
                </Link>
                
                <Link href="#privacy" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">5</span>
                  </div>
                  <span className="text-gray-700 font-medium">Privacy</span>
                </Link>
                
                <Link href="#contract-modification" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">6</span>
                  </div>
                  <span className="text-gray-700 font-medium">Contract Modification</span>
                </Link>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Service Usage Section */}
              <section id="service-use" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3H21V8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 20L21 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 16V21H16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 15L3 3L3 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Service Usage</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle services are designed to help our users optimize their business processes and succeed in their digital transformation journey. When using our services, you must follow the rules below.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
                      <div className="bg-indigo-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Account Security</h3>
                        <ul className="space-y-3 text-indigo-700">
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            You are responsible for the security of your account information
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            It is recommended to use strong and unique passwords
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            Do not share your account access information with third parties
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            You must report suspicious activities immediately
                          </li>
                    </ul>
                      </div>
                      
                      <div className="bg-indigo-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Usage Restrictions</h3>
                        <ul className="space-y-3 text-indigo-700">
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            You may not use the services for illegal activities
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            Manipulating the system or bypassing security measures is prohibited
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            You may not engage in behavior that would prevent other users from using the service
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            You must comply with the resource limits in your subscription package
                          </li>
                    </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Acceptable Use Policy</h3>
                      <p className="text-gray-600 mb-4">
                        When using Virtual Riddle services, you are deemed to have accepted the following usage policy. If you violate these rules, we reserve our legal rights.
                      </p>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <p className="text-indigo-700 text-sm">
                          Virtual Riddle reserves the right to suspend, restrict, or completely terminate the accounts of users who violate the terms of use or misuse our services, at its sole discretion, without prior notice and without any obligation to compensate. In this case, we have no obligation to refund the fees you have paid.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Usage Responsibility</h3>
                      <p className="text-gray-600">
                        You are responsible for all content you share on the Virtual Riddle platform. You must not commit copyright infringement or share illegal or non-compliant content, respect the intellectual property rights of others, and ensure that the content you share on our platform complies with legal regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Intellectual Property Section */}
              <section id="intellectual-property" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 4L8.12 15.88" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.47 14.48L20 20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.12 8.12L4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Intellectual Property</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle places great importance on protecting our users' and our own intellectual property rights. This section explains the intellectual property rights related to content on our platform.
                    </p>
                    
                    <div className="bg-amber-50 p-6 rounded-xl mt-8 mb-8">
                      <h3 className="text-xl font-semibold text-amber-800 mb-4">Virtual Riddle's Intellectual Property</h3>
                      <p className="text-amber-700 mb-4">
                        The Virtual Riddle platform, its interface, logos, designs, texts, graphics, software, algorithms, and all other content are the intellectual property of Virtual Riddle and are protected by copyright, trademark, patent, and other intellectual property laws.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 flex items-center">
                          <svg className="w-5 h-5 text-amber-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          It is prohibited to copy, modify, distribute, or use this content without Virtual Riddle's prior written permission.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">License Usage</h3>
                        <p className="text-gray-600 mb-4">
                          Virtual Riddle grants its users a limited, non-exclusive, non-transferable license to use its services. This license only permits you to use the services in compliance with these terms of use.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            The license does not cover the resale of services for commercial purposes
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Reverse engineering the software or converting it to source code is prohibited
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Modifying any component of our services or creating derivative works is prohibited
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">User Content</h3>
                        <p className="text-gray-600 mb-4">
                          For all content you share or upload on our platform, you grant Virtual Riddle and its affiliates a worldwide, royalty-free, sublicensable, transferable, and non-exclusive right and license. This license may be used for providing, developing, improving, promoting, using, copying, adapting, modifying, analyzing, publishing, transferring, displaying, and distributing the content.
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <p className="text-amber-700 text-sm">
                            By uploading or submitting content to our platform, you declare and commit that you own all intellectual property rights to this content, that you have the right to use and publish it, and that the content does not violate the rights of third parties. Virtual Riddle reserves the right to remove your content at any time and for any reason.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Brand Usage</h3>
                      <p className="text-gray-600">
                        Virtual Riddle's name, logo, and product names are registered trademarks of Virtual Riddle. It is prohibited to use these trademarks for commercial purposes without prior written permission. For more information about Virtual Riddle's brand usage policy, please contact us.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Privacy Section */}
              <section id="privacy" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11V10C9 8.34 10.34 7 12 7C13.66 7 15 8.34 15 10V11" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14.6C12.3314 14.6 12.6 14.3314 12.6 14C12.6 13.6686 12.3314 13.4 12 13.4C11.6686 13.4 11.4 13.6686 11.4 14C11.4 14.3314 11.6686 14.6 12 14.6Z" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.5 17H9.5C7.5 17 7 16.5 7 14.5V13.5C7 11.5 7.5 11 9.5 11H14.5C16.5 11 17 11.5 17 13.5V14.5C17 16.5 16.5 17 14.5 17Z" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Privacy</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle places great importance on the privacy of our users. This section contains summary information about our platform's privacy practices and policies regarding the protection of personal data.
                    </p>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 mt-8 mb-6">
                      <h3 className="text-xl font-semibold text-purple-900 mb-4">Detailed Privacy Policy</h3>
                      <p className="text-purple-800 mb-4">
                        You can find detailed information about how your personal data is collected, processed, stored and shared in our Privacy Policy. Our Privacy Policy has been prepared in compliance with data protection laws.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-purple-600 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 11H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 16H12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <Link href="/privacy" className="text-purple-600 font-medium hover:text-purple-800 transition-colors">Click to read our Privacy Policy</Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-purple-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.49 2.23L5.50003 4.11C4.35003 4.54 3.41003 5.9 3.41003 7.12V14.55C3.41003 15.73 4.19003 17.28 5.14003 17.99L9.44003 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12C20.61 5.89 19.67 4.53 18.52 4.1L13.53 2.23C12.68 1.92 11.32 1.92 10.49 2.23Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Data Security
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Your data is protected with SSL/TLS encryption protocols
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Regular security scans and updates are performed
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Data access is limited to authorized personnel only
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            In case of a security breach, notification is made within the legal period
                          </li>
                    </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-purple-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          User Rights
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            You have the right to access and correct your personal data
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            You can request the deletion of your data
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            You have the right to restrict data processing activities
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            You can request data portability
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            You can object to automated decision-making processes regarding you
                          </li>
                    </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contract Modification Section */}
              <section id="contract-modification" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contract Modification</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      Virtual Riddle reserves the right to change these terms of service unilaterally at any time. Changes take effect when they are published on our website.
                    </p>
                    
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-6">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">Change Notifications</h3>
                      <p className="text-blue-700 mb-4">
                        Changes made to the terms will be considered effective upon publication on our website. Virtual Riddle is not obligated to notify changes, but may provide information on the website for important changes. Your continued use of our services means you accept the updated terms.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 flex items-center">
                          <svg className="w-5 h-5 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/>
                          </svg>
                          Last update date: <span className="font-medium">May 1, 2024</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Liability Limitations Section */}
              <section id="liability-limitations" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-rose-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9V14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 21.41H5.94C2.47 21.41 1.02 18.93 2.7 15.9L5.82 10.28L8.76 5.01C10.54 1.79 13.46 1.79 15.24 5.01L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.9941 17H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Liability Limitations</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      When using Virtual Riddle services, you are deemed to have accepted the following liability limitations. These limitations apply to the fullest extent permitted by applicable laws.
                    </p>
                    
                    <div className="bg-rose-50 p-6 rounded-xl mt-8 mb-8">
                      <h3 className="text-xl font-semibold text-rose-800 mb-4">Service Provision</h3>
                      <p className="text-rose-700 mb-4">
                        Virtual Riddle services are provided "as is" and "as available". We do not make any express or implied warranties or commitments regarding our services.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 text-sm flex items-start">
                          <svg className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9941 16H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Virtual Riddle reserves the right to change, suspend, or terminate its services with notice. We do not guarantee that our services will be uninterrupted, error-free, or secure, that they will meet your specific needs, or that any results will be obtained.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Disclaimer of Liability</h3>
                        <p className="text-gray-600 mb-4">
                          Virtual Riddle will not be liable under any circumstances, to the fullest extent permitted by applicable law, for the following:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Any direct, indirect, incidental, special, punitive, or consequential damages
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Loss of profits, business interruption, data loss, or system failure
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Any damage arising from the use or inability to use the service
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Issues arising from third-party software or services
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Unauthorized access, data modification, or input error
                          </li>
                    </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Liability Limit</h3>
                        <p className="text-gray-600 mb-4">
                          In cases where any liability applies, Virtual Riddle's total liability will not exceed the higher of the following amounts under any circumstances:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            The service fee paid by you in the last three (3) months prior to the event giving rise to the claim
                          </li>
                    </ul>
                        <div className="bg-rose-50 p-4 rounded-lg mt-4">
                          <p className="text-rose-700 text-sm">
                            These liability limitations apply even if Virtual Riddle has been notified of the possibility of a claim or damage, and apply under all legal theories (contract, tort, breach, or any other theory).
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Services</h3>
                      <p className="text-gray-600 mb-4">
                        Third-party applications, links, and services may be available on the Virtual Riddle platform. Virtual Riddle is in no way responsible for the use, content, privacy policies, practices, or any damage related to these third-party services.
                      </p>
                      <div className="bg-rose-50 p-4 rounded-lg">
                        <p className="text-rose-700 text-sm">
                          Some jurisdictions do not allow the exclusion of certain guarantees related to consumer rights or limitations of liability for certain damages. In such cases, the above limitations and exceptions may not apply to you, but will be applied to the fullest extent permitted by law.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment Terms Section */}
              <section id="payment-terms" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-teal-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.50488H22" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 16.5049H8" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.5 16.5049H14.5" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.44 3.50488H17.55C21.11 3.50488 22 4.38488 22 7.89488V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89488C2 4.38488 2.89 3.50488 6.44 3.50488Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Payment Terms</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      To access Virtual Riddle services, you must pay the applicable subscription fees. This section explains our payment terms and billing policies.
                    </p>
                    
                    <div className="bg-teal-50 p-6 rounded-xl mt-8 mb-8">
                      <h3 className="text-xl font-semibold text-teal-800 mb-4">Pricing and Subscription</h3>
                      <p className="text-teal-700 mb-4">
                        Virtual Riddle offers various subscription plans for different needs. All prices and plan features are clearly stated on our website. Subscription fees may vary depending on the plan you choose and the payment period.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 flex items-center">
                          <svg className="w-5 h-5 text-teal-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 13.5049H13.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Virtual Riddle reserves the right to make changes to pricing and subscription plans with prior notice. Price changes do not affect the current subscription period and take effect in the next renewal period.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h3>
                        <p className="text-gray-600 mb-4">
                          Virtual Riddle accepts various secure payment methods. Accepted payment methods include credit cards, debit cards, and corporate billing.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            All payments can be made in TRY, USD, or EUR
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Ensure that your billing information is current and accurate
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Payments are collected monthly or annually according to your subscription plan
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Automatic Renewal</h3>
                        <p className="text-gray-600 mb-4">
                          All subscriptions are automatically renewed unless otherwise stated. If you wish to cancel your subscription, you must complete the cancellation process from your account settings at least 7 days before the next billing date.
                        </p>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <p className="text-teal-700 text-sm">
                            Cancelled subscriptions remain active until the end of the current billing period. No refund will be made in case of subscription cancellation, but you can continue to use our services until the end of the current period.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Taxes and Additional Fees</h3>
                      <p className="text-gray-600 mb-4">
                        All stated prices exclude applicable taxes (including VAT). Additional taxes may apply depending on your country or region. These taxes will be reflected on your final invoice.
                      </p>
                      <p className="text-gray-600">
                        Some payment methods may incur additional fees due to transaction fees or foreign exchange rates. These additional fees are determined by your payment provider and are not controlled by Virtual Riddle.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Refund Policy</h3>
                      <p className="text-gray-600 mb-4">
                        Virtual Riddle, as a digital service provider, applies the following refund policy:
                      </p>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          Due to the nature of digital services, refunds are not made after the subscription has started and the service has been made available
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          Cancellation requests made before the service is used and within 48 hours after payment are evaluated at Virtual Riddle's discretion
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          In case of inability to provide service due to technical problems, Virtual Riddle may extend the service period or provide credit, but is not obligated to make a cash refund
                        </li>
                        <li className="flex items-start">
                          <span className="text-teal-500 mr-2">•</span>
                          A transaction fee of up to 10 TRY may be deducted when refund requests are evaluated
                        </li>
                      </ul>
                      <div className="bg-teal-50 p-4 rounded-lg mt-4">
                        <p className="text-teal-700 text-sm">
                          Virtual Riddle reserves the right to change the refund policy at any time. The evaluation of refund requests is entirely at Virtual Riddle's discretion, and each request is examined according to its own conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg">
                      If you have any questions about the terms of service or our services, there are multiple ways to contact us.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                              <p className="text-gray-600">info@virtualriddle.com</p>
                              <p className="text-gray-500 text-sm mt-1">For legal matters and contract questions</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 13.4299C14.7614 13.4299 17 11.7091 17 10.3099C17 8.58681 14.7614 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="currentColor" strokeWidth="1.5"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                              <p className="text-gray-600">
                                Maslak Neighborhood, AOS 55. Street, 42 Maslak B Block, Unit 4/542<br />
                                Sarıyer, Istanbul
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                          <div className="pb-4 border-b border-gray-100">
                            <h4 className="font-medium text-gray-900 mb-1">How often are the terms of service updated?</h4>
                            <p className="text-gray-600">Our terms of service are updated in case of service changes, legal regulations, or platform developments. You will be informed of all important updates.</p>
                          </div>
                          
                          <div className="pb-4 border-b border-gray-100">
                            <h4 className="font-medium text-gray-900 mb-1">Can I use the platform services without accepting the terms?</h4>
                            <p className="text-gray-600">No, you must accept the terms of service to use the Virtual Riddle platform and its services.</p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">How can I contact you with questions about the terms?</h4>
                            <p className="text-gray-600">You can send an email to info@virtualriddle.com for questions about terms of service.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 mt-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.9941 16H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Last Update Information
                      </h3>
                      <p className="text-green-700 mb-2">
                        These terms of service were last updated on <span className="font-semibold">May 1, 2024</span>.
                      </p>
                      <p className="text-green-700">
                        Virtual Riddle reserves the right to change these conditions at any time, subject to prior notice. We recommend that you regularly check the terms of service.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 