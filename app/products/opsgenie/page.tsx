import Link from "next/link";
export { generateMetadata } from './metadata';

export default function OpsgeniePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Alert and On-Call Management
            </h1>
            <p className="text-xl mb-8">
              Optimize your IT operations with Opsgenie. Automate and accelerate alert management, on-call rotations, 
              and incident response processes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Try Free
              </Link>
              <Link
                href="https://www.atlassian.com/software/opsgenie" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Smart Alert Management</h3>
              <p className="text-blue-600/80">Send notifications to the right person at the right time with advanced alert filtering and routing.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">On-Call Rotations</h3>
              <p className="text-blue-600/80">Distribute team workload evenly and ensure 24/7 coverage with automatic on-call rotations.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Fast Incident Response</h3>
              <p className="text-blue-600/80">Accelerate incident response processes, track SLAs, and reduce resolution times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Atlassian Platform Integration</h2>
            <p className="text-xl text-white/80">Optimize your workflows with Opsgenie's seamless integration into the Atlassian ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Jira Service Management</h4>
              <p className="text-white/80">Automatically convert Opsgenie alerts into Jira Service Management incidents.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Compass Integration</h4>
              <p className="text-white/80">Enhance developer experience and integrate Opsgenie alerts with Compass.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Automatic Migration</h4>
              <p className="text-white/80">Automatically migrate your existing Opsgenie data and configurations.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Seamless Business Continuity</h4>
              <p className="text-white/80">Manage your IT operations seamlessly and protect your critical systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Comprehensive Solution for IT Operations</h2>
            <p className="text-xl text-blue-600/80">Provide customized solutions for different IT operation needs with Opsgenie.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">DevOps Teams</h3>
                <p className="text-blue-600/80">Manage alerts from CI/CD pipelines, monitor deployment processes, and enable fast response.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Site Reliability Engineering</h3>
                <p className="text-blue-600/80">Monitor system health, track performance metrics, and provide proactive problem solving.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">IT Service Management</h3>
                <p className="text-blue-600/80">Optimize your ITSM processes, track SLAs, and improve customer experience.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Enterprise Security</h3>
                <p className="text-blue-600/80">Quickly detect security incidents, alert your security teams, and manage response processes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Notice */}
      <section className="py-24 bg-yellow-50 border-t border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-100 rounded-2xl p-8 border border-yellow-300">
              <h2 className="text-3xl font-bold text-yellow-800 mb-4">
                Opsgenie Migration Timeline
              </h2>
              <div className="space-y-4 mb-6">
                <p className="text-lg text-yellow-700">
                  Opsgenie's alert and on-call features are now available in Jira Service Management and Compass. 
                  Important migration dates:
                </p>
                <ul className="text-left text-yellow-700 space-y-2 max-w-2xl mx-auto">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">• March 4, 2025:</span>
                    <span>End of sales announced</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">• June 4, 2025:</span>
                    <span>New customer sign-ups and plan upgrades/downgrades disabled</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">• April 5, 2027:</span>
                    <span>Opsgenie will be fully shut down. All unmigrated customer data will be deleted.</span>
                  </li>
                </ul>
                <p className="text-lg text-yellow-700 mt-4">
                  Migrate your existing Opsgenie data and configurations using our automatic migration tool before April 5, 2027.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/free-discovery" 
                  className="px-8 py-4 bg-yellow-600 text-white rounded-xl font-semibold hover:bg-yellow-700 transition-all w-full sm:w-auto text-center"
                >
                  Get Migration Plan
                </Link>
                <Link 
                  href="https://www.atlassian.com/software/opsgenie" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-yellow-600 rounded-xl font-semibold hover:bg-yellow-50 transition-all w-full sm:w-auto text-center border border-yellow-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Discover Opsgenie</h2>
            <p className="text-xl text-white/80 mb-8">Optimize your IT operations and provide seamless service.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/free-discovery" 
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-white/90 transition-all w-full sm:w-auto text-center"
              >
                Start Free
              </Link>
              <Link 
                href="/solutions/consulting" 
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto text-center backdrop-blur-sm"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 