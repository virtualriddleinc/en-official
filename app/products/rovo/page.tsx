import Link from "next/link";
export { generateMetadata } from './metadata';

export default function RovoPage() {

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Transform Teamwork with AI Teammates
            </h1>
            <p className="text-xl mb-8">
              AI-powered search, chat, studio, and agents – powered by your team's information. Accurate, personalized AI insights powered by Teamwork Graph – over 1 million users leverage the power of AI in Atlassian applications every day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Try Free
              </Link>
              <Link
                href="https://www.atlassian.com/software/rovo" 
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
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">AI-Powered Search</h3>
              <p className="text-blue-600/80">Rovo Search is connected and personalized, so you can instantly find the most important information across all your connected applications. Get personalized search results based on your team's information.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Smart Chat</h3>
              <p className="text-blue-600/80">Rovo Chat enhances learning with customized insights and responses, providing exactly the information you need in your business context. Maximize your team's knowledge accumulation with real-time learning and discovery.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">AI Agents</h3>
              <p className="text-blue-600/80">Rovo Agents are ready to work, built into the Atlassian cloud platform, and include specialized capabilities that help every team work not only faster but smarter. AI agents ready for any task.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Powered by Teamwork Graph</h2>
            <p className="text-xl text-white/80">Rovo uses Teamwork Graph to provide accurate, personalized AI insights across teams, work, goals, and knowledge. An AI experience that supercharges your organization's information.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Personalized Search</h4>
              <p className="text-white/80">Get personalized search results based on your team's information. Instantly find important information across all your connected applications.</p>
            </div>

            {/* AI Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Smart Agents</h4>
              <p className="text-white/80">AI agents with specialized skills ready for any task. Create automation and applications without writing code.</p>
            </div>

            {/* AI Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Real-Time Insights</h4>
              <p className="text-white/80">Get instant knowledge and suggestions in your business context. Smart suggestions that optimize teamwork.</p>
            </div>

            {/* AI Feature 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Rovo Studio</h4>
              <p className="text-white/80">Create AI agents, automation and applications without writing code. Bring your best ideas to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Connect Your Favorite SaaS Applications</h2>
            <p className="text-xl text-blue-600/80">Discover, learn, and take action in real time across all your connected applications from a single place. Seamless integrations optimize your workflows.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Atlassian Ecosystem</h3>
                <p className="text-blue-600/80">Create a complete work environment with seamless integration with Jira, Confluence, Bitbucket, and other Atlassian products. An experience powered by Teamwork Graph.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Third-Party Integrations</h3>
                <p className="text-blue-600/80">Set up seamless integrations with Slack, Teams, GitHub, and other popular tools. Manage all your favorite SaaS applications from one place.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Secure and Custom</h3>
                <p className="text-blue-600/80">Built on our trusted platform that keeps your data secure and respects your permissions. Privacy by design approach ensures data security.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">API and Webhook Support</h3>
                <p className="text-blue-600/80">Create custom integrations with powerful API and webhook support and customize Rovo exactly to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Try Rovo for Free</h2>
            <p className="text-xl text-white/80 mb-8">Over 1 million users leverage the power of AI in Atlassian applications. Join the team and transform your teamwork.</p>
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