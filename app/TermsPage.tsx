{/* Hero Section */}
<div className="bg-gradient-to-br from-slate-50 via-indigo-50 to-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-slate-900 mb-4">Terms of Use</h1>
    <p className="subtitle text-slate-700 max-w-3xl">
      Rules and conditions you must follow when using Virtual Riddle services.
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
          <a href="#service-usage" className="text-blue-700 hover:text-blue-800 hover:underline">
            Service Usage
          </a>
        </li>
        <li>
          <a href="#intellectual-property" className="text-blue-700 hover:text-blue-800 hover:underline">
            Intellectual Property
          </a>
        </li>
        <li>
          <a href="#liability" className="text-blue-700 hover:text-blue-800 hover:underline">
            Limitation of Liability
          </a>
        </li>
        <li>
          <a href="#account-security" className="text-blue-700 hover:text-blue-800 hover:underline">
            Account Security
          </a>
        </li>
        <li>
          <a href="#payment-terms" className="text-blue-700 hover:text-blue-800 hover:underline">
            Payment Terms
          </a>
        </li>
      </ul>
    </nav>

    <div className="prose prose-slate max-w-none">
      <section id="service-usage" className="mb-12">
        <h2 className="text-slate-900">Service Usage</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <h3 className="text-slate-800 mb-2">Basic Rules:</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>You must use our services for legal purposes</li>
            <li>You must respect other users' rights</li>
            <li>You should avoid actions that will endanger the security of the system</li>
          </ul>
        </div>
      </section>

      <section id="intellectual-property" className="mb-12">
        <h2 className="text-slate-900">Intellectual Property</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            All content, logos and trademarks are the intellectual property of Virtual Riddle and cannot be used without permission.
          </p>
        </div>
      </section>

      <section id="liability" className="mb-12">
        <h2 className="text-slate-900">Limitation of Liability</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            We are not responsible for any direct or indirect damages that may arise from the use of our services.
          </p>
        </div>
      </section>

      <section id="account-security" className="mb-12">
        <h2 className="text-slate-900">Account Security</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            You are responsible for the security of your account. If you notice any suspicious activity, please notify us immediately.
          </p>
        </div>
      </section>

      <section id="payment-terms" className="mb-12">
        <h2 className="text-slate-900">Payment Terms</h2>
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <p className="text-slate-700">
            For detailed information about payment plans and conditions, visit our pricing page.
          </p>
        </div>
      </section>

      <section className="bg-indigo-50 rounded-lg p-6 mb-8">
        <h2 className="text-slate-900 mb-4">Have Questions?</h2>
        <p className="text-slate-700 mb-6">
          Contact us for questions about our terms of use:
        </p>
        <a
          href="mailto:info@virtualriddle.com"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium shadow-sm"
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
