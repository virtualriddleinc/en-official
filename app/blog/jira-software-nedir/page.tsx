import { Link } from "../../components/Link";

export default function JiraSoftwareNedir() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 bg-gray-50">
      <article className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mx-auto mt-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">Atlassian</span>
            <span className="text-xs text-gray-400">20 Şubat 2024</span>
            <span className="text-xs text-gray-400">• 4 dk okuma</span>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Jira Software Nedir?</h1>
          <div className="text-gray-600 text-base mb-4">Yazar: <span className="font-semibold">Virtual Riddle Blog Ekibi</span></div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mb-6">
            <div className="font-semibold text-blue-700 mb-1">TL;DR - Özetle</div>
            <ul className="list-disc pl-5 text-blue-900 text-sm space-y-1">
              <li>Jira Software, Agile ve Scrum proje yönetimi için tasarlanmış güçlü bir platformdur.</li>
              <li>Issue tracking, sprint planning ve team collaboration özellikleri sunar.</li>
              <li>Yazılım geliştirme ekiplerinin verimliliğini artırmak için optimize edilmiştir.</li>
            </ul>
          </div>
        </header>
        <section className="prose prose-lg max-w-none text-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jira Software Nedir?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jira Software, Atlassian tarafından geliştirilen, özellikle yazılım geliştirme ekipleri için tasarlanmış kapsamlı bir proje yönetimi platformudur. Agile ve Scrum metodolojilerini destekleyen araçlar sunar.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Temel Özellikler</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Issue tracking, sprint planning, backlog management, burndown charts ve team collaboration gibi özellikler ile ekiplerin projelerini etkili bir şekilde yönetmesini sağlar.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Agile ve Scrum Desteği</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jira Software, Agile ve Scrum süreçlerini destekleyen özel araçlar sunar. Sprint planning, daily standups, retrospective ve release planning gibi aktiviteler için optimize edilmiştir.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Entegrasyon ve Ekosistem</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Confluence, Bitbucket, Slack gibi diğer Atlassian ürünleri ve üçüncü parti araçlarla güçlü entegrasyon imkanları sunar. Bu sayede tüm geliştirme süreci tek bir platformda yönetilebilir.
          </p>
          
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-lg text-gray-700 mb-6">
            "Jira Software, modern yazılım geliştirme ekiplerinin vazgeçilmez aracıdır."
          </blockquote>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sonuç</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Jira Software, yazılım geliştirme ekiplerinin projelerini daha etkili bir şekilde yönetmelerini sağlayan güçlü bir platformdur. Agile metodolojileri destekleyen özellikleri ile modern geliştirme süreçlerinin ihtiyaçlarını karşılar.
          </p>
        </section>
        <footer className="mt-12 border-t pt-8">
          <div className="mb-4 text-gray-700 font-semibold">Diğer Yazılar</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/jira-danismanligi-avantajlari" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Atlassian</div>
              <div className="font-bold text-gray-900">Jira Danışmanlığı Avantajları</div>
              <div className="text-xs text-gray-500 mt-1">25 Şubat 2024</div>
            </Link>
            <Link href="/blog/cloud-native-performans" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">ITSM & Atlassian</div>
              <div className="font-bold text-gray-900">Jira Service Management ile IT Operasyonlarınızı Devrim Niteliğinde Dönüştürün</div>
              <div className="text-xs text-gray-500 mt-1">1 Mart 2024</div>
            </Link>
            <Link href="/blog/favori-wiki-aracimiz-confluence" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Atlassian</div>
              <div className="font-bold text-gray-900">Favori Wiki Aracımız: Confluence!</div>
              <div className="text-xs text-gray-500 mt-1">5 Temmuz 2025</div>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}