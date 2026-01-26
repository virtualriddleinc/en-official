"use client";

import Link from "next/link";

export default function DistanceSalesContractPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Distance Sales Contract</h1>
            <p className="text-xl text-blue-100">
              Virtual Riddle software services and subscription terms
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Quick Navigation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="#parties" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <span className="text-gray-700 font-medium">Parties</span>
                </Link>
                
                <Link href="#subject-scope" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <span className="text-gray-700 font-medium">Subject and Scope</span>
                </Link>
                
                <Link href="#price-payment" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <span className="text-gray-700 font-medium">Price and Payment</span>
                </Link>
                
                <Link href="#delivery" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">4</span>
                  </div>
                  <span className="text-gray-700 font-medium">Delivery</span>
                </Link>
                
                <Link href="#right-of-withdrawal" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">5</span>
                  </div>
                  <span className="text-gray-700 font-medium">Right of Withdrawal</span>
                </Link>
                
                <Link href="#warranty-liability" className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">6</span>
                  </div>
                  <span className="text-gray-700 font-medium">Warranty and Liability</span>
                </Link>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Parties section */}
              <section id="parties" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Parties</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-indigo-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">SELLER (Virtual Riddle)</h3>
                        <div className="space-y-3 text-indigo-700">
                          <p className="font-medium">Virtual Riddle Technology Inc.</p>
                          <p className="text-sm">
                            <strong>Address:</strong><br />
                            Maslak Neighborhood, AOS 55. Street<br />
                            42 Maslak B Block, Unit 4/542<br />
                            Sarıyer/ISTANBUL
                          </p>
                          <p className="text-sm">
                            <strong>Email:</strong> info@virtualriddle.com
                          </p>
                          <p className="text-sm">
                            <strong>Mersis No:</strong> 0925125672700001
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-indigo-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-4">BUYER (Customer)</h3>
                        <p className="text-indigo-700">
                          This contract covers individual or corporate customers who purchase software services or subscriptions through the Virtual Riddle website. By accepting the contract and making payment, the customer is deemed to have become a party to this contract.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Subject of the Contract</h3>
                      <p className="text-gray-600 mb-4">
                        This contract regulates the terms and conditions for the sale of software services, software subscriptions, and related digital services provided by Virtual Riddle through its website.
                      </p>
                      <p className="text-gray-600">
                        This contract is subject to the provisions of Law No. 6502 on the Protection of Consumers and the Distance Contracts Regulation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Subject and Scope section */}
              <section id="subject-scope" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5V5Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 12H15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 16H13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2. Subject and Scope</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-lg mb-6">
                      This contract relates to the sale of the following services provided by Virtual Riddle through its website:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-amber-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">Software Services</h3>
                        <ul className="space-y-3 text-amber-700">
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Atlassian products consulting services
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Software installation and configuration services
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Custom software development services
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Cloud infrastructure and migration services
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Training and certification services
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-amber-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">Software Subscriptions</h3>
                        <ul className="space-y-3 text-amber-700">
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Monthly or annual software subscription packages
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            SaaS (Software as a Service) services
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Cloud-based software access packages
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            Premium support and maintenance services
                          </li>
                          <li className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            API access and integration packages
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-amber-100 shadow-sm mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Features</h3>
                      <p className="text-gray-600 mb-4">
                        The features, price, usage period, and other technical details of the purchased service are clearly stated on the website during the purchase process. By completing the purchase, the customer is deemed to have accepted these features.
                      </p>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <p className="text-amber-700 text-sm">
                          Virtual Riddle reserves the right to update service features for improvement purposes. Customers will be notified in advance of significant changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Price and Payment section */}
              <section id="price-payment" className="scroll-mt-24">
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
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3. Price and Payment</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <div className="bg-teal-50 p-6 rounded-xl mb-8">
                      <h3 className="text-xl font-semibold text-teal-800 mb-4">Pricing</h3>
                      <p className="text-teal-700 mb-4">
                        All prices are stated on the website in Turkish Lira (TL), US Dollar (USD), or Euro (EUR). Prices are clearly shown including or excluding VAT. Prices are those valid at the time of purchase.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 text-sm">
                          Virtual Riddle reserves the right to change prices with prior notice. However, price changes for existing subscriptions will take effect in the next renewal period.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h3>
                        <p className="text-gray-600 mb-4">
                          The customer may choose one of the following payment methods:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Credit card (Visa, Mastercard, American Express)
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Debit card (BKM Express, Troy)
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Bank transfer/EFT
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Corporate invoicing (requires approval)
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Digital wallet payment systems
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Terms</h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Payment must be completed during the purchase process or within the specified period
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            For subscriptions, payment is collected at the beginning of the selected period (monthly/annual)
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            Service becomes active after payment confirmation
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-500 mr-2">•</span>
                            If payment fails, the service is suspended
                          </li>
                        </ul>
                        <div className="bg-teal-50 p-4 rounded-lg mt-4">
                          <p className="text-teal-700 text-sm">
                            All payments are processed through secure payment systems. Card information is not stored by Virtual Riddle.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Taxes and Additional Fees</h3>
                      <p className="text-gray-600 mb-4">
                        The stated prices may include or exclude VAT and other taxes according to applicable legislation. This is clearly stated on the price page.
                      </p>
                      <p className="text-gray-600">
                        Additional transaction fees may apply for some payment methods (especially international cards or foreign currency transactions). These fees are determined by the payment provider and are not under Virtual Riddle's control.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Invoice</h3>
                      <p className="text-gray-600 mb-4">
                        An electronic invoice is issued for each payment transaction. The invoice is sent to the email address specified by the customer. For corporate customers, invoice information is collected during purchase.
                      </p>
                      <p className="text-gray-600">
                        Invoice issuance and delivery processes are carried out in accordance with the legislation of the Republic of Turkey.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Delivery section */}
              <section id="delivery" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">4. Delivery</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <div className="bg-green-50 p-6 rounded-xl mb-8">
                      <h3 className="text-xl font-semibold text-green-800 mb-4">Digital Service Delivery</h3>
                      <p className="text-green-700 mb-4">
                        The software services and subscriptions provided by Virtual Riddle are digital in nature. Therefore, there is no physical delivery.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 text-sm">
                          Service activation is carried out as soon as possible after payment confirmation (usually within 24 hours). Activation information is sent to the email address specified by the customer.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Activation</h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            Service automatically becomes active after payment confirmation
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            Activation information (username, password, access link) is sent via email
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            For subscriptions, access continues throughout the subscription period
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            Additional setup time may be required for services requiring technical support
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Access and Usage</h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            The customer must meet the necessary technical requirements to access the service
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            Internet connection and compatible device/browser are required
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            Service usage is unlimited during the subscription period (within package limits)
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            Technical support is provided for access issues
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Delay Situations</h3>
                      <p className="text-gray-600 mb-4">
                        In case of delay in service activation due to technical reasons, the customer is informed and activation is completed as soon as possible. In case of delay, additional support or service period extension may be provided to the customer.
                      </p>
                      <p className="text-gray-600">
                        Virtual Riddle is exempt from delivery obligations in cases of force majeure (natural disasters, war, pandemic, internet interruption, etc.).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Right of Withdrawal section */}
              <section id="right-of-withdrawal" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 10H15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 14H15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 6H15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">5. Right of Withdrawal</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <div className="bg-purple-50 p-6 rounded-xl mb-8">
                      <h3 className="text-xl font-semibold text-purple-800 mb-4">Scope of Right of Withdrawal</h3>
                      <p className="text-purple-700 mb-4">
                        In accordance with Law No. 6502 on the Protection of Consumers and the Distance Contracts Regulation, the customer has the right to withdraw from the contract. However, for digital content and services, the right of withdrawal is limited by the service being made available and the customer's consent.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 text-sm">
                          <strong>Important:</strong> If the customer explicitly consents before the digital content/service is made available and the service is made available, the customer cannot exercise the right of withdrawal. This situation is valid in accordance with Article 15/g of the Distance Contracts Regulation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Withdrawal Period</h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <strong>Before service is made available:</strong> Right of withdrawal can be exercised within 14 days
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <strong>After service is made available:</strong> No right of withdrawal if customer has given explicit consent
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <strong>Subscriptions:</strong> Can be cancelled within 14 days after first payment (if service has not been used)
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Withdrawal Notice</h3>
                        <p className="text-gray-600 mb-4">
                          Customers who wish to exercise the right of withdrawal may notify through one of the following methods:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Email: info@virtualriddle.com
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            Creating a support request through the website
                          </li>
                        </ul>
                        <div className="bg-purple-50 p-4 rounded-lg mt-4">
                          <p className="text-purple-700 text-sm">
                            Withdrawal notice must be made together with the customer's identity information and order number.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Refund Procedures</h3>
                      <p className="text-gray-600 mb-4">
                        When the right of withdrawal is exercised and the service has not been made available, the paid amount is refunded to the customer within 14 business days. Refund is made through the payment method used (card refund, bank transfer, etc.).
                      </p>
                      <ul className="space-y-2 text-gray-600 mb-4">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          Credit card payments: Refunded to card account within 5-7 business days
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          Bank transfer/EFT: Transferred to account within 3-5 business days
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          No refund processing fee is deducted (if service has not been used)
                        </li>
                      </ul>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-purple-700 text-sm">
                          <strong>Warning:</strong> The right of withdrawal cannot be exercised after the service is made available. For subscriptions, the service can be used until the end of the current period, but automatic renewal for the next period is cancelled.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Warranty and Liability section */}
              <section id="warranty-liability" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-rose-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9V14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 21.41H5.94C2.47 21.41 1.02 18.93 2.7 15.9L5.82 10.28L8.76 5.01C10.54 1.79 13.46 1.79 15.24 5.01L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.9941 17H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">6. Warranty and Liability</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <div className="bg-rose-50 p-6 rounded-xl mb-8">
                      <h3 className="text-xl font-semibold text-rose-800 mb-4">Service Warranty</h3>
                      <p className="text-rose-700 mb-4">
                        Virtual Riddle undertakes to provide services in accordance with the features specified in the contract. Services are provided in accordance with industry standards.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-700 text-sm">
                          In case of technical problems with services, Virtual Riddle provides technical support to the customer and works to resolve the issue. However, no liability is accepted for problems arising from third-party services.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Liability Limitations</h3>
                        <p className="text-gray-600 mb-4">
                          To the extent permitted by applicable legislation, Virtual Riddle is not liable for the following situations:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Problems arising from customer's misuse of the service
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Internet connection or device problems
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Interruptions arising from third-party services
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Force majeure situations
                          </li>
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Data loss (backup is the customer's responsibility)
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Liability Amount</h3>
                        <p className="text-gray-600 mb-4">
                          In cases where any liability is involved, Virtual Riddle's total liability shall not exceed the higher of the following amounts under any circumstances:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="text-rose-500 mr-2">•</span>
                            Service fee paid in the last three (3) months before the incident in question
                          </li>
                        </ul>
                        <div className="bg-rose-50 p-4 rounded-lg mt-4">
                          <p className="text-rose-700 text-sm">
                            These limitations apply under all legal theories (contract, tort, breach, etc.).
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-rose-100 shadow-sm mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Security and Backup</h3>
                      <p className="text-gray-600 mb-4">
                        Virtual Riddle takes necessary technical measures to provide services securely. However, the responsibility for backing up the customer's own data belongs to the customer.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          Virtual Riddle uses SSL/TLS encryption for system security
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          Regular security updates are performed
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          Backing up customer data is the customer's responsibility
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          In case of security breach, notification is made within the legal period
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Subscription Cancellation and Renewal</h3>
                      <p className="text-gray-600 mb-4">
                        Subscriptions are automatically renewed unless otherwise stated. The customer can cancel the subscription at least 7 days before the next billing date.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          Cancelled subscriptions remain active until the end of the current period
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          No refund is made after cancellation (except during the withdrawal period)
                        </li>
                        <li className="flex items-start">
                          <span className="text-rose-500 mr-2">•</span>
                          Subscription renewal prices may change (prior notice will be given)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact and Dispute Resolution section */}
              <section id="contact-dispute" className="scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-5">
                      <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">7. Contact and Dispute Resolution</h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">Contact Information</h3>
                        <div className="space-y-4 text-green-700">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                              <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium text-green-900 mb-1">Email</h4>
                              <p className="text-sm">info@virtualriddle.com</p>
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
                              <h4 className="font-medium text-green-900 mb-1">Address</h4>
                              <p className="text-sm">
                                Maslak Neighborhood, AOS 55. Street<br />
                                42 Maslak B Block, Unit 4/542<br />
                                Sarıyer/ISTANBUL
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">Dispute Resolution</h3>
                        <p className="text-green-700 mb-4">
                          In resolving disputes arising from this contract, the parties first seek a solution through negotiation.
                        </p>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-gray-700 text-sm mb-3">
                            <strong>Dispute Resolution Methods:</strong>
                          </p>
                          <ul className="space-y-2 text-gray-600 text-sm">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">1.</span>
                              The customer first contacts Virtual Riddle to try to resolve the issue
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">2.</span>
                              If not resolved, Consumer Arbitration Committees can be applied to
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">3.</span>
                              Consumer Courts are authorized
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">4.</span>
                              Online Dispute Resolution Platform (ODR) can be used
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Consumer Rights</h3>
                      <p className="text-gray-600 mb-4">
                        This contract is subject to the provisions of Law No. 6502 on the Protection of Consumers and related legislation. The customer has been informed about consumer rights.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-700 text-sm">
                          For detailed information about consumer rights, you can visit the <a href="https://www.tuketici.gov.tr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">General Directorate of Consumer Protection and Competition</a> website.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Final Provisions</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          This contract is subject to the laws of the Republic of Turkey
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          If any provision of the contract is deemed invalid, the other provisions remain valid
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Virtual Riddle reserves the right to modify this contract with prior notice
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          Changes take effect from the date they are published on the website
                        </li>
                      </ul>
                      <div className="bg-green-50 p-4 rounded-lg mt-4">
                        <p className="text-green-700 text-sm">
                          <strong>Last Update:</strong> This distance sales contract was last updated on <span className="font-semibold">January 1, 2025</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
