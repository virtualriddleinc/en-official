import { Link } from "../../components/Link";

export default function JiraServiceManagement() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 bg-gray-50 px-4">
      {/* New Card Section */}
      <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg px-4 md:px-8 py-6 md:py-8 mx-auto mt-8 mb-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">Jira Service Management</span>
            <span className="text-xs text-gray-400">7 April 2024</span>
            <span className="text-xs text-gray-400">• 8 min read</span>
          </div>
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>Transform Your IT Operations Revolutionarily with Jira Service Management</h1>
          <div className="text-gray-600 text-base mb-4">Author: <span className="font-semibold">Virtual Riddle Blog Team</span></div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
            <div className="font-semibold text-blue-700 mb-1">TL;DR - Summary</div>
          <p className="text-blue-900 text-sm leading-relaxed break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
              Jira Service Management (JSM) is Atlassian's comprehensive ITSM platform developed for modern IT teams. Automation features reduce manual processes by 60-70%, and AI-powered solution recommendations increase first-call resolution rates by 30-40%. Cloud and Data Center deployment options are suitable for organizations of all sizes, and REST API integration works seamlessly with third-party systems.
            </p>
          </div>
      </section>
      
      {/* Article - Content Only */}
      <article className="max-w-4xl w-full bg-white rounded-2xl shadow-lg px-4 md:px-8 py-6 md:py-8 mx-auto mb-8 overflow-hidden">
        <section className="prose prose-lg max-w-none text-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Jira Service Management?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jira Service Management (JSM) is a powerful platform developed by Atlassian that supports IT Service Management (ITSM) processes. This solution, which emerged from the rebranding of Jira Service Desk in 2020, is a comprehensive service management tool designed for the needs of modern IT teams.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">1. Incident Management</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JSM's incident management system is optimized for rapid detection and resolution of IT issues. The system prevents critical issues from being overlooked with automatic escalation rules. Especially in outages experienced in large-scale systems, the priority-based sorting algorithm ensures that the most critical issues are addressed first.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">2. Change Management</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The change management module manages risk assessment and approval processes for changes to be made in IT infrastructure. CAB (Change Advisory Board) integration ensures systematic evaluation of change requests. Automatic rollback mechanisms also allow failed changes to be reverted.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">3. Service Catalog</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The service catalog offered through the self-service portal provides end users with easy access to the services they need. Template-based request forms ensure standardization and minimize manual error risk.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">4. Knowledge Management</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Integrated knowledge base provides intelligent suggestions that accelerate resolution processes. Machine learning algorithms offer automatic solution suggestions for similar problems. This feature can increase first-call resolution rates by 30-40%.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jira Service Management's Technical Architecture</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-3">API Integration</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JSM can integrate with third-party systems through REST APIs. API rate limiting protects system performance and webhook support enables real-time data synchronization.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Automation Engine</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The built-in automation engine is a powerful tool that automates business processes. Complex workflows can be created with if-then-else logic. Especially automating routine tasks can increase operational efficiency by up to 50%.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Reporting and Analytics</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Real-time dashboards track SLA performance, resolution times, and team efficiency. Customizable KPIs allow defining metrics aligned with business goals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Advantages of Jira Service Management</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Operational Efficiency</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JSM's automation features can reduce manual processes by 60-70%. Especially in Tier 1 support processes, automatic solutions significantly reduce agent workload.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Optimization</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The flexible structure of the licensing model provides cost optimization according to the size of organizations. Cloud and Data Center deployment options keep infrastructure costs under control.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Scalability</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Micro-service architecture and horizontal scaling are supported. Support can be provided for up to 50,000+ users in large enterprise environments.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Install Jira Service Management?</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Deployment</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The setup process for cloud deployment is quite simple:
          </p>
          <ol className="list-decimal pl-6 mb-6 text-lg text-gray-700 leading-relaxed">
            <li>Create Atlassian account</li>
            <li>Configure JSM instance</li>
            <li>User and group definitions</li>
            <li>Service project setup</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 mb-3">On-Premise Installation</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            System requirements for Data Center deployment:
          </p>
          <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed">
            <li>CPU: 4 core minimum (8 core recommended)</li>
            <li>RAM: 8GB minimum (16GB recommended)</li>
            <li>Disk: 50GB minimum SSD storage</li>
            <li>Network: 1Gbps connection</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Alternatives to Jira Service Management</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-3">ServiceNow</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Provides powerful features at the enterprise level but has high licensing costs. It is not cost-effective for small to medium-sized organizations.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Freshservice</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Has a user-friendly interface and competitive advantage. However, it lags behind JSM in terms of enterprise features.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">ManageEngine ServiceDesk Plus</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            An affordable alternative but is limited in modernization and API integration.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Future of Jira Service Management</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Atlassian's AI/ML investments will strengthen features such as predictive analytics, natural language processing, and automated incident response in future versions of JSM. Especially AIOps (Artificial Intelligence for IT Operations) integration will enhance proactive problem-solving capabilities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jira Service Management is a comprehensive platform that effectively manages ITSM processes necessary for modern IT operations. It's an excellent choice especially for organizations working integrated with the Atlassian ecosystem. With automation features, API integration, and scalable architecture, it offers solutions suitable for both small teams and large enterprise environments.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When choosing a platform, the organization's size, technical requirements, and budget constraints should be considered. The value proposition offered by JSM is quite attractive, especially for organizations adopting DevOps and Agile methodologies. For pricing information, you can review current rates from Atlassian's official website.
          </p>
        </section>
        <footer className="mt-12 border-t pt-8">
          <div className="mb-4 text-gray-700 font-semibold">Other Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/2024-devops-trendleri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">DevOps & Cloud</div>
              <div className="font-bold text-gray-900">2024 DevOps Trends</div>
              <div className="text-xs text-gray-500 mt-1">5 March 2024</div>
            </Link>
            <Link href="/blog/basarili-dijital-donusum-stratejileri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Digital Transformation</div>
              <div className="font-bold text-gray-900">Successful Digital Transformation Strategies</div>
              <div className="text-xs text-gray-500 mt-1">3 March 2024</div>
            </Link>
            <Link href="/blog/multi-cloud-stratejileri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Cloud Computing</div>
              <div className="font-bold text-gray-900">Multi-Cloud Strategies</div>
              <div className="text-xs text-gray-500 mt-1">28 February 2024</div>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
} 