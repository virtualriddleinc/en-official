import { Link } from "../../components/Link";

export default function FavoriteWikiToolConfluence() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 bg-gray-50">
      <article className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mx-auto mt-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">Confluence</span>
            <span className="text-xs text-gray-400">5 July 2025</span>
            <span className="text-xs text-gray-400">• 4 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Favorite Wiki Tool: Confluence!</h1>
          <div className="text-gray-600 text-base mb-4">Author: <span className="font-semibold">Virtual Riddle Blog Team</span></div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mb-6">
            <div className="font-semibold text-blue-700 mb-1">TL;DR - Summary</div>
            <p className="text-blue-900 text-sm leading-relaxed">
              Confluence is a powerful tool that facilitates internal knowledge sharing and keeps corporate memory digital. It offers many advantages such as storing documents in a central location, increasing collaboration and accelerating processes. It provides flexibility for both small teams and large organizations.
            </p>
          </div>
        </header>
        <section className="prose prose-lg max-w-none text-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Advantages of Using Confluence 📘</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Publication date:</strong> 5 July 2025
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. All Knowledge in One Place ✍️</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The frequently asked question "where was that document?" within the team is now a thing of the past. Thanks to Confluence, all documents, meeting notes, strategies and plans can be kept in one place. 
            With the <strong>search function</strong>, you don't have to search for an old document for minutes — type, find, click.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Real-Time Collaboration 🤝</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Confluence provides a Google Docs-like experience: <em>multiple people can work on the same document at the same time</em>. Every change is saved instantly. 
            This eliminates the confusion of "which was the latest version?". 
            Additionally, team members can easily provide feedback through the comment system.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Transparency and Corporate Memory 🧾</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A common knowledge platform accessible to everyone increases transparency between teams. What was discussed in one project, who made which decision, which document is being used — everything is recorded.
            <strong>It is possible to reach the history of a topic years later.</strong>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Gain Speed with Page Templates 📄⚡</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Meeting notes, project plan, sprint summary… You don't have to write everything from scratch. Confluence comes with pre-prepared <strong>templates</strong>. 
            This both saves time and ensures that documentation maintains a certain standard.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Perfect Integration with Jira 🔄</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            As a product of the Atlassian ecosystem, Confluence is tailor-made for teams using Jira. 
            You can directly link issues in Jira to Confluence pages, <strong>and run project documentation and application development in a synchronized way</strong>. 
            This integration is a great advantage, especially for software teams.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Access and Authorization Flexibility 🔐</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Not everyone needs to see everything. In Confluence, you can authorize by page or space. 
            So <em>while some pages are only accessible to managers</em>, others can be open to the entire team. This both protects privacy and makes access to knowledge controlled.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Mobile App and Access from Anywhere 📱</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Do you want to stay connected with the team even while on vacation? (We hope you don't have to 😅) Thanks to Confluence's mobile app, you can access pages from anywhere, anytime, and track updates. 
            It's a great solution for remote and hybrid working teams.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Advanced Search and Tagging 🔍🏷️</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            It's possible to group content on specific topics by adding tags to pages. Additionally, thanks to the advanced search feature, <strong>you can search not only by title but also by page content</strong>. 
            This closes the era of "wasting time searching".
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion: Not Just a Wiki, But the Foundation of Team Culture 🎯</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Confluence removes documentation from being a chore. Turning it into a team habit simplifies business processes, facilitates access to knowledge and ensures everyone is on the same page.
            <strong>If a central knowledge area is essential for efficient teamwork, Confluence may be the right choice.</strong>
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mb-6">
            <p className="text-blue-900 text-sm leading-relaxed">
              📝 If you liked the article, you can share it or share your comments with us!
            </p>
          </div>
  </section>
        <footer className="mt-12 border-t pt-8">
          <div className="mb-4 text-gray-700 font-semibold">Other Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/2024-devops-trendleri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">DevOps & Cloud</div>
              <div className="font-bold text-gray-900">2024 DevOps Trends</div>
              <div className="text-xs text-gray-500 mt-1">5 March 2024</div>
            </Link>
            <Link href="/blog/cloud-native-performans" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Jira Service Management</div>
              <div className="font-bold text-gray-900">Transform Your IT Operations Revolutionarily with Jira Service Management</div>
              <div className="text-xs text-gray-500 mt-1">7 April 2024</div>
            </Link>
            <Link href="/blog/basarili-dijital-donusum-stratejileri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Digital Transformation</div>
              <div className="font-bold text-gray-900">Successful Digital Transformation Strategies</div>
              <div className="text-xs text-gray-500 mt-1">3 March 2024</div>
            </Link>
          </div>
  </footer>
      </article>
    </main>
  );
} 