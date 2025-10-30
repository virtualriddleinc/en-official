import Link from "next/link";
export { generateMetadata } from './metadata';

export default function StatuspagePage() {
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
              Build Trust in Every Incident
            </h1>
            <p className="text-xl mb-8">
              Provide your users with real-time status updates with Statuspage. 
              Professional status page solution used by companies like DigitalOcean and Dropbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-discovery" 
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all w-full sm:w-auto text-center"
              >
                Try Free
              </Link>
              <Link
                href="https://www.atlassian.com/software/statuspage" 
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
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Real-Time Status Updates</h3>
              <p className="text-blue-600/80">Provide your users with transparent and up-to-date information about your service status. Build trust and reduce support requests.</p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Incident Management</h3>
              <p className="text-blue-600/80">Keep users informed from 'Investigating' to 'Resolved'. Quick communication with pre-written templates.</p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600">Reliability Showcase</h3>
              <p className="text-blue-600/80">Display your past performance with Uptime Showcase. Prove your reliability to existing and potential customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Benefits */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Benefits for Every Team</h2>
            <p className="text-xl text-white/80">Provide customized solutions for different teams' needs with Statuspage.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Support & IT Teams</h4>
              <p className="text-white/80">Reduce support requests during incidents. Manage subscribers directly and send consistent messages.</p>
            </div>

            {/* Team 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">DevOps & IT Teams</h4>
              <p className="text-white/80">Show the status of every component of your service. 150+ third-party component integrations.</p>
            </div>

            {/* Team 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Incident Response Teams</h4>
              <p className="text-white/80">Facilitate incident communication. Provide fast response with integration to your favorite tools.</p>
            </div>

            {/* Team 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
              <h4 className="text-lg font-semibold text-white mb-2">Marketing & Sales Teams</h4>
              <p className="text-white/80">Transform your page into a sales and marketing tool. Display your historical uptime data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-blue-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Integration with Your Favorite Tools</h2>
            <p className="text-xl text-blue-600/80">Statuspage is the communication part of your incident management process.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Monitoring & Alerting Tools</h3>
                <p className="text-blue-600/80">Integrate with Nagios, Zabbix, Datadog, New Relic, and other monitoring tools. Receive automatic status updates.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Chat & Help Desk</h3>
                <p className="text-blue-600/80">Integration with Slack, Microsoft Teams, and Jira Service Management. For efficient response every time.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Third-Party Components</h3>
                <p className="text-blue-600/80">Show the status of your critical tools like Stripe, Mailgun, Shopify, and PagerDuty.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">Automatic Notifications</h3>
                <p className="text-blue-600/80">Automatically inform your users with email, SMS, webhook, and Slack notifications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands of Companies</h2>
            <p className="text-lg text-gray-600 mb-12">DigitalOcean, Dropbox, Reddit, and more use Statuspage</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              <div className="text-2xl font-bold text-gray-400">DigitalOcean</div>
              <div className="text-2xl font-bold text-gray-400">Dropbox</div>
              <div className="text-2xl font-bold text-gray-400">Reddit</div>
              <div className="text-2xl font-bold text-gray-400">Twilio</div>
              <div className="text-2xl font-bold text-gray-400">Coinbase</div>
              <div className="text-2xl font-bold text-gray-400">Shopify</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Try Statuspage for Free</h2>
            <p className="text-xl text-white/80 mb-8">Build trust with your users and reduce support requests.</p>
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