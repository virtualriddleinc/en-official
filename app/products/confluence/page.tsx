import Link from "next/link";
export { generateMetadata } from './metadata';

export default function ConfluencePage() {
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
              Single Source for Team Knowledge
            </h1>
            <p className="text-xl mb-8">
              Collect, organize, and share all your team information on a centralized platform with Confluence. Work more efficiently with AI-powered knowledge base solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Try Free
              </Link>
              <Link
                href="https://www.atlassian.com/software/confluence" 
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
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Central Knowledge Base</h3>
              <p className="text-blue-600/80">Collect all your team information, projects, and documents in one place. Quickly access and share knowledge.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Collaboration Spaces</h3>
              <p className="text-blue-600/80">Create dedicated spaces for team collaboration. Work efficiently with real-time editing, commenting, and feedback features.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Seamless Integrations</h3>
              <p className="text-blue-600/80">Seamlessly integrate with Jira, Bitbucket, and other Atlassian products. Connect your project information and documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Documentation</h2>
            <p className="text-xl text-white/80">Accelerate content creation and knowledge discovery processes with Confluence's artificial intelligence features.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Content Summarization</h3>
              <p className="text-white/80">Enable team members to quickly access knowledge by creating automatic summaries in long documents.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Smart Search</h3>
              <p className="text-white/80">Find the information you need in documents within seconds with AI-powered search.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Content Assistant</h3>
              <p className="text-white/80">Accelerate documentation creation and improve writing quality with an AI assistant.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">Knowledge Linking</h3>
              <p className="text-white/80">Automatically link related documentation and prevent knowledge silos from forming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Solutions for Every Department</h2>
            <p className="text-xl text-blue-600/80">Confluence provides knowledge and collaboration solutions for every part of your organization.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Software Development</h3>
                <p className="text-blue-600/80">Record your technical documentation, architectural decisions, and development processes. Enrich with code views and diagrams.</p>
                </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Human Resources</h3>
                <p className="text-blue-600/80">Manage company policies, onboarding documents, and training materials centrally. Create employee handbooks.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Marketing</h3>
                <p className="text-blue-600/80">Manage marketing strategies, campaign plans, and content calendars. Strengthen collaboration among team members.</p>
            </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Project Management</h3>
                <p className="text-blue-600/80">Create a central repository for project plans, meeting notes, and work items. Increase project traceability by integrating with Jira.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Try Confluence for Free</h2>
            <p className="text-xl text-white/80 mb-8">Over 75,000 companies are improving knowledge management with Confluence. Join the team.</p>
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