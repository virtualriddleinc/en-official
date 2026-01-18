import { Link } from "../../components/Link";

export default function DevOpsTrends2024() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 bg-gray-50 px-4">
      {/* New Card Section */}
      <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg px-4 md:px-8 py-6 md:py-8 mx-auto mt-8 mb-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">DevOps & Cloud</span>
            <span className="text-xs text-gray-400">5 March 2024</span>
            <span className="text-xs text-gray-400">• 6 min read</span>
          </div>
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4 break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>2024 DevOps Trends</h1>
          <div className="text-gray-600 text-base mb-4">Author: <span className="font-semibold">Virtual Riddle Blog Team</span></div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
            <div className="font-semibold text-blue-700 mb-1">TL;DR - Summary</div>
          <ul className="list-disc pl-5 text-blue-900 text-sm space-y-1 break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
              <li>AI-powered DevOps tools are on the rise.</li>
              <li>GitOps and Platform engineering are becoming mainstream.</li>
              <li>Automation, security, and cloud-native approaches are prominent.</li>
            </ul>
          </div>
      </section>
      
      {/* Article - Content Only */}
      <article className="max-w-4xl w-full bg-white rounded-2xl shadow-lg px-4 md:px-8 py-6 md:py-8 mx-auto mb-8 overflow-hidden">
        <section className="prose prose-lg max-w-none text-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered DevOps</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In 2024, artificial intelligence (AI) and machine learning (ML) integration in DevOps processes is accelerating. Smart automation, anomaly detection, and self-healing systems enable teams to deploy faster and more securely.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">GitOps and Platform Engineering</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            GitOps strengthens the central role of code in infrastructure management. Platform engineering, on the other hand, increases efficiency by providing developers with self-service environments. This way, teams can manage complex cloud infrastructures more easily.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Automation and Security</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The scope of automation in CI/CD processes is expanding. Security as Code and automated security tests are becoming an integral part of the software lifecycle.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cloud-Native Approaches</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Kubernetes and container technologies have become the standard for scalability and flexibility. In 2024, multi-cloud and hybrid cloud strategies are being adopted more widely.
          </p>
          
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-lg text-gray-700 mb-6">
            "The future of DevOps lies in the combination of automation and collaboration with smart technologies."
          </blockquote>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            2024 will be a year of innovation and transformation in the DevOps world. By embracing new technologies, teams will create more agile and secure software development processes.
          </p>
        </section>
        <footer className="mt-12 border-t pt-8">
          <div className="mb-4 text-gray-700 font-semibold">Other Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/basarili-dijital-donusum-stratejileri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Digital Transformation</div>
              <div className="font-bold text-gray-900">Successful Digital Transformation Strategies</div>
              <div className="text-xs text-gray-500 mt-1">3 March 2024</div>
            </Link>
            <Link href="/blog/cloud-native-performans" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Jira Service Management</div>
              <div className="font-bold text-gray-900">Transform Your IT Operations Revolutionarily with Jira Service Management</div>
              <div className="text-xs text-gray-500 mt-1">7 April 2024</div>
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