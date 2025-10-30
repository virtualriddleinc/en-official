import { Link } from "../../components/Link";

export default function WhatIsJiraSoftware() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 bg-gray-50">
      <article className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mx-auto mt-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">Jira</span>
            <span className="text-xs text-gray-400">10 June 2024</span>
            <span className="text-xs text-gray-400">• 4 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">What is Jira Software?</h1>
          <div className="text-gray-600 text-base mb-4">Author: <span className="font-semibold">Virtual Riddle Blog Team</span></div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mb-6">
            <div className="font-semibold text-blue-700 mb-1">TL;DR - Summary</div>
            <ul className="list-disc pl-5 text-blue-900 text-sm space-y-1">
              <li>Jira Software is a powerful platform designed for Agile and Scrum project management.</li>
              <li>It provides issue tracking, sprint planning, and team collaboration features.</li>
              <li>Optimized to increase the efficiency of software development teams.</li>
            </ul>
          </div>
        </header>
        <section className="prose prose-lg max-w-none text-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Jira Software?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jira Software is a comprehensive project management platform developed by Atlassian, specifically designed for software development teams. It provides tools that support Agile and Scrum methodologies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Features</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Features such as issue tracking, sprint planning, backlog management, burndown charts, and team collaboration enable teams to manage their projects effectively.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Agile and Scrum Support</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jira Software provides specialized tools that support Agile and Scrum processes. It is optimized for activities such as sprint planning, daily standups, retrospectives, and release planning.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration and Ecosystem</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            It provides strong integration capabilities with other Atlassian products such as Confluence, Bitbucket, and Slack, as well as third-party tools. This way, you can manage the entire development process on a single platform.
          </p>
          
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-lg text-gray-700 mb-6">
            "Jira Software is an indispensable tool for modern software development teams."
          </blockquote>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Jira Software is a powerful platform that enables software development teams to manage their projects more effectively. Its features that support Agile methodologies meet the needs of modern development processes.
          </p>
        </section>
        <footer className="mt-12 border-t pt-8">
          <div className="mb-4 text-gray-700 font-semibold">Other Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/jira-danismanligi-avantajlari" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Consulting</div>
              <div className="font-bold text-gray-900">8 Critical Advantages of Jira Consulting for Your Business</div>
              <div className="text-xs text-gray-500 mt-1">15 March 2024</div>
            </Link>
            <Link href="/blog/cloud-native-performans" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Jira Service Management</div>
              <div className="font-bold text-gray-900">Transform Your IT Operations Revolutionarily with Jira Service Management</div>
              <div className="text-xs text-gray-500 mt-1">7 April 2024</div>
            </Link>
            <Link href="/blog/favori-wiki-aracimiz-confluence" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Confluence</div>
              <div className="font-bold text-gray-900">Our Favorite Wiki Tool: Confluence!</div>
              <div className="text-xs text-gray-500 mt-1">5 July 2025</div>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}