{/* Hero Section */}
<div className="bg-gradient-to-br from-slate-50 via-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-slate-900 mb-4">Privacy Policy</h1>
    <p className="subtitle text-slate-700 max-w-3xl">
      The security of your personal data is important to us. This policy explains how your data is collected and protected.
    </p>
  </div>
</div>

{/* Content Section */}
<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
    <nav className="mb-8 p-4 bg-slate-50 rounded-lg">
      <h2 className="text-slate-900 mb-4 text-lg font-medium">Quick Navigation</h2>
      <ul className="space-y-2">
        <li>
          <a href="#data-collection" className="text-blue-700 hover:text-blue-800 hover:underline">
            Data Collection and Use
          </a>
        </li>
        <li>
          <a href="#data-security" className="text-blue-700 hover:text-blue-800 hover:underline">
            Data Security
          </a>
        </li>
        <li>
          <a href="#cookies" className="text-blue-700 hover:text-blue-800 hover:underline">
            Cookies and Tracking
          </a>
        </li>
        <li>
          <a href="#third-party" className="text-blue-700 hover:text-blue-800 hover:underline">
            Third Party Services
          </a>
        </li>
      </ul>
    </nav>

    <div className="prose prose-slate max-w-none">
      <section id="data-collection" className="mb-12">
        <h2 className="text-slate-900">Data Collection and Use</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <h3 className="text-slate-800 mb-2">Personal Information We Collect:</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Your first and last name</li>
            <li>Your email address</li>
            <li>Your company information</li>
          </ul>
        </div>
      </section>

      <section id="data-security" className="mb-12">
        <h2 className="text-slate-900">Data Security</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            We use industry-standard security measures such as SSL encryption and regular security audits to protect your data.
          </p>
        </div>
      </section>

      <section id="cookies" className="mb-12">
        <h2 className="text-slate-900">Cookies and Tracking</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            We use cookies for session management, remembering your site preferences, and analytics purposes.
          </p>
        </div>
      </section>

      <section id="third-party" className="mb-12">
        <h2 className="text-slate-900">Third Party Services</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            We work with trusted third-party service providers such as Atlassian, AWS and Google Analytics.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-slate-900 mb-4">Have Questions?</h2>
        <p className="text-slate-700 mb-6">
          Contact us for questions about our privacy policy:
        </p>
        <a
          href="mailto:info@virtualriddle.com"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm"
        >
          <svg
            className="mr-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Send Email
        </a>
      </section>

      <div className="text-sm text-slate-500">
        Last updated: January 1, 2024
      </div>
    </div>
  </div>
</div> 
