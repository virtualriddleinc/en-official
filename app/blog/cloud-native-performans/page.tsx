import { Link } from "../../components/Link";

export default function JiraServiceManagement() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 bg-gray-50">
      <article className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mx-auto mt-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">ITSM & Atlassian</span>
            <span className="text-xs text-gray-400">7 Nisan 2024</span>
            <span className="text-xs text-gray-400">• 8 dk okuma</span>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Jira Service Management ile IT Operasyonlarınızı Devrim Niteliğinde Dönüştürün</h1>
          <div className="text-gray-600 text-base mb-4">Yazar: <span className="font-semibold">Virtual Riddle Blog Ekibi</span></div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mb-6">
            <div className="font-semibold text-blue-700 mb-1">TL;DR - Özetle</div>
            <p className="text-blue-900 text-sm leading-relaxed">
              Jira Service Management (JSM), Atlassian'ın modern IT ekipleri için geliştirdiği kapsamlı ITSM platformudur. Otomatikleştirme özellikleri ile manuel işlemleri %60-70 oranında azaltır, AI destekli çözüm önerileri ile first-call resolution oranını %30-40 artırır. Cloud ve Data Center deployment seçenekleri ile her büyüklükteki organizasyona uygun, REST API entegrasyonu ile üçüncü taraf sistemlerle sorunsuz çalışır.
            </p>
          </div>
        </header>
        <section className="prose prose-lg max-w-none text-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jira Service Management Nedir?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jira Service Management (JSM), Atlassian tarafından geliştirilen ve IT Service Management (ITSM) süreçlerini destekleyen güçlü bir platform. 2020 yılında Jira Service Desk'in yeniden markalandırılması ile ortaya çıkan bu çözüm, modern IT ekiplerinin ihtiyaçlarına göre tasarlanmış kapsamlı bir hizmet yönetimi aracıdır.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">1. Olay Yönetimi (Incident Management)</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JSM'in olay yönetimi sistemi, IT sorunlarının hızlı tespit edilmesi ve çözülmesi için optimize edilmiştir. Sistem, otomatik eskalasyon kuralları ile kritik sorunların gözden kaçmasını engeller. Özellikle büyük ölçekli sistemlerde yaşanan kesintilerde, öncelik tabanlı sıralama algoritması sayesinde en kritik sorunlar öncelikle ele alınır.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">2. Değişiklik Yönetimi (Change Management)</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Değişiklik yönetimi modülü, IT altyapısında yapılacak değişikliklerin risk değerlendirmesini ve onay süreçlerini yönetir. CAB (Change Advisory Board) entegrasyonu ile değişiklik taleplerinin sistematik olarak değerlendirilmesi sağlanır. Otomatik rollback mekanizmaları ile başarısız değişikliklerin geri alınması da mümkündür.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">3. Hizmet Kataloğu (Service Catalog)</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Self-servis portalı üzerinden sunulan hizmet kataloğu, son kullanıcıların ihtiyaç duydukları hizmetlere kolay erişim sağlar. Şablon tabanlı talep formları ile standardizasyon sağlanır ve manuel hata riski minimize edilir.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">4. Bilgi Yönetimi (Knowledge Management)</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Entegre bilgi tabanı, çözüm süreçlerini hızlandıran akıllı öneriler sunar. Makine öğrenmesi algoritmaları ile benzer sorunlar için otomatik çözüm önerileri sunulur. Bu özellik, first-call resolution oranlarını %30-40 oranında artırabilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jira Service Management'ın Teknik Mimarisi</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-3">API Entegrasyonu</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JSM, REST API'ler aracılığıyla üçüncü taraf sistemlerle entegre olabilir. API rate limiting ile sistem performansı korunur ve webhook desteği ile gerçek zamanlı veri senkronizasyonu sağlanır.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Automation Engine</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Yerleşik automation engine, iş süreçlerini otomatikleştiren güçlü bir araçtır. If-then-else mantığı ile karmaşık iş akışları oluşturulabilir. Özellikle rutin görevlerin otomatikleştirilmesi ile operasyonel verimlilik %50'ye kadar artırılabilir.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Raporlama ve Analitik</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Gerçek zamanlı dashboard'lar ile SLA performansı, çözüm süreleri ve ekip verimliliği takip edilir. Özelleştirilebilir KPI'lar ile işletme hedefleri ile uyumlu metrikler tanımlanabilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jira Service Management'ın Avantajları</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Operasyonel Verimlilik</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JSM'in otomatikleştirme özellikleri, manuel işlemleri %60-70 oranında azaltabilir. Özellikle Tier 1 destek süreçlerinde otomatik çözümler ile agent workload'u önemli ölçüde azalır.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Maliyet Optimizasyonu</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Lisanslama modelinin esnek yapısı, organizasyonların büyüklüğüne göre maliyet optimizasyonu sağlar. Cloud ve Data Center deployment seçenekleri ile infrastructure maliyetleri kontrol altında tutulur.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Ölçeklenebilirlik</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Mikro-servis mimarisi ile yatay ölçeklendirme desteklenir. Büyük enterprise ortamlarında 50.000+ kullanıcıya kadar destek sağlanabilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jira Service Management Nasıl Kurulur?</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Deployment</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Cloud versiyonu için setup süreci oldukça basittir:
          </p>
          <ol className="list-decimal pl-6 mb-6 text-lg text-gray-700 leading-relaxed">
            <li>Atlassian hesabı oluşturma</li>
            <li>JSM instance'ı yapılandırma</li>
            <li>Kullanıcı ve grup tanımlamaları</li>
            <li>Servis projelerinin kurulumu</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 mb-3">On-Premise Kurulum</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Data Center versiyonu için sistem gereksinimleri:
          </p>
          <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 leading-relaxed">
            <li>CPU: 4 core minimum (8 core önerilen)</li>
            <li>RAM: 8GB minimum (16GB önerilen)</li>
            <li>Disk: 50GB minimum SSD storage</li>
            <li>Network: 1Gbps bağlantı</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jira Service Management'ın Alternatifleri</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-3">ServiceNow</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Enterprise seviyede güçlü özellikler sunar ancak lisans maliyeti yüksektir. Küçük-orta ölçekli organizasyonlar için maliyet-etkin değildir.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Freshservice</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Kullanıcı dostu arayüz ve rekabetçi avantajı vardır. Ancak enterprise özellikler açısından JSM'den geridedir.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">ManageEngine ServiceDesk Plus</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Uygun alternatif ancak modernizasyon ve API entegrasyonu konularında sınırlıdır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jira Service Management'ın Geleceği</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Atlassian'ın AI/ML yatırımları ile JSM'in gelecekteki versiyonlarında predictive analytics, natural language processing ve automated incident response özellikleri güçlendirilecek. Özellikle AIOps (Artificial Intelligence for IT Operations) entegrasyonu ile proaktif problem çözme yetenekleri artırılacak.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sonuç</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jira Service Management, modern IT operasyonları için gerekli olan ITSM süreçlerini etkin bir şekilde yönetebilen kapsamlı bir platform. Özellikle Atlassian ekosistemine entegre çalışan organizasyonlar için mükemmel bir seçim. Automation özellikleri, API entegrasyonu ve ölçeklenebilir mimarisi ile hem küçük takımlar hem de büyük enterprise ortamları için uygun çözümler sunuyor.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Platform seçiminde organizasyonun büyüklüğü, teknik gereksinimleri ve bütçe kısıtları göz önünde bulundurulmalı. JSM'in sunduğu değer propositionı, özellikle DevOps ve Agile metodolojileri benimseyen organizasyonlar için oldukça cazip. Fiyatlandırma bilgileri için Atlassian'ın resmi web sitesinden güncel tarifeleri inceleyebilirsiniz.
          </p>
        </section>
        <footer className="mt-12 border-t pt-8">
          <div className="mb-4 text-gray-700 font-semibold">Diğer Yazılar</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/2024-devops-trendleri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">DevOps & Cloud</div>
              <div className="font-bold text-gray-900">2024 DevOps Trendleri</div>
              <div className="text-xs text-gray-500 mt-1">5 Mart 2024</div>
            </Link>
            <Link href="/blog/basarili-dijital-donusum-stratejileri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Dijital Dönüşüm</div>
              <div className="font-bold text-gray-900">Başarılı Dijital Dönüşüm Stratejileri</div>
              <div className="text-xs text-gray-500 mt-1">3 Mart 2024</div>
            </Link>
            <Link href="/blog/multi-cloud-stratejileri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Cloud Computing</div>
              <div className="font-bold text-gray-900">Multi-Cloud Stratejileri</div>
              <div className="text-xs text-gray-500 mt-1">28 Şubat 2024</div>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
} 