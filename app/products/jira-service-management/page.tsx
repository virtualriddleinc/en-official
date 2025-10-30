import Link from "next/link";
export { generateMetadata } from './metadata';

export default function JiraServiceManagementPage() {
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
              The Future of ITSM is Here
            </h1>
            <p className="text-xl mb-8">
              Accelerate your IT teams with Jira Service Management, manage incidents, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Try Free
              </Link>
              <Link
                href="https://www.atlassian.com/software/jira/service-management" 
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
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Customer Service Excellence</h3>
              <p className="text-blue-600/80">Increase service quality with easy-to-use self-service portals, knowledge bases, and automation for your customers.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Advanced Incident Management</h3>
              <p className="text-blue-600/80">Quickly detect and resolve major incidents. Manage incidents effectively with automatic classification and prioritization.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Real-Time Reporting</h3>
              <p className="text-blue-600/80">Real-time reports and dashboards for service level agreements (SLA), performance metrics, and team efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Service Management</h2>
            <p className="text-xl text-white/80">Reduce request resolution times and increase team efficiency with Jira Service Management's artificial intelligence features.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Smart Ticket Classification</h3>
              <p className="text-white/80">Artificial intelligence automatically analyzes requests and routes them to the correct department.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Solution Recommendations</h3>
              <p className="text-white/80">Based on solutions to similar issues, AI suggests quick resolution paths.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h3>
              <p className="text-white/80">Detect potential issues in advance and enable IT teams to take proactive measures.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Virtual Assistants</h3>
              <p className="text-white/80">Provide 24/7 service to users with chatbots and automatically resolve recurring requests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Various Use Cases</h2>
            <p className="text-xl text-blue-600/80">Meet all service management needs of your different teams and departments with Jira Service Management.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">IT Service Desk</h3>
                <p className="text-blue-600/80">Request management, issue resolution, and asset management for your IT help desk teams. ITIL-compliant processes and automation.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Customer Services</h3>
                <p className="text-blue-600/80">Manage customer requests on a single platform. Increase customer satisfaction with personalized responses and automatic notifications.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">HR Service Management</h3>
                <p className="text-blue-600/80">Manage and track recruitment processes, onboarding requests, and employee questions efficiently.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">DevOps</h3>
                <p className="text-blue-600/80">Seamless collaboration between development and operations teams. Change management and automated deployment processes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Extensive Integration Network</h2>
            <p className="text-xl text-gray-600">Seamlessly integrate Jira Service Management with your existing IT infrastructure.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {/* Integration Logos */}
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">Slack</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">Microsoft Teams</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">Confluence</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">ServiceNow</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">Zendesk</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-6 w-full h-24">
              <p className="text-gray-500 font-medium">+200 Integrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Try Jira Service Management for Free</h2>
            <p className="text-xl text-white/80 mb-8">Over 35,000 companies trust Jira Service Management for their IT service management processes.</p>
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