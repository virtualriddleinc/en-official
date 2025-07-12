import { Link } from "../../components/Link";

export default function FavoriWikiAracimizConfluence() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 bg-gray-50">
      <article className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mx-auto mt-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">Atlassian</span>
            <span className="text-xs text-gray-400">5 Temmuz 2025</span>
            <span className="text-xs text-gray-400">• 4 dk okuma</span>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Favori Wiki Aracımız: Confluence!</h1>
          <div className="text-gray-600 text-base mb-4">Yazar: <span className="font-semibold">Virtual Riddle Blog Ekibi</span></div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mb-6">
            <div className="font-semibold text-blue-700 mb-1">TL;DR - Özetle</div>
            <p className="text-blue-900 text-sm leading-relaxed">
              Confluence, ekip içi bilgi paylaşımını kolaylaştıran ve kurumsal hafızayı dijitalde tutan güçlü bir araçtır. Belgeleri merkezi bir yerde saklamak, iş birliğini artırmak ve süreçleri hızlandırmak gibi birçok avantaj sunar. Hem küçük ekipler hem de büyük organizasyonlar için esneklik sağlar.
            </p>
          </div>
        </header>
        <section className="prose prose-lg max-w-none text-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Confluence Kullanmanın Avantajları 📘</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Yayın tarihi:</strong> 5 Temmuz 2025
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Tüm Bilgi Tek Yerde ✍️</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ekip içinde sık yaşanan "o doküman neredeydi ya?" sorusu artık tarihe karışıyor. Confluence sayesinde tüm belgeler, toplantı notları, stratejiler ve planlar tek bir yerde tutulabiliyor. 
            <strong>Arama fonksiyonu</strong> sayesinde eski bir belgeyi dakikalarca aramak zorunda kalmıyorsun — yaz, bul, tıkla.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Gerçek Zamanlı İş Birliği 🤝</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Confluence, Google Docs benzeri bir deneyim sunar: <em>aynı dokümanda birden fazla kişi aynı anda çalışabilir</em>. Her değişiklik anında kaydedilir. 
            Bu da "en güncel versiyon hangisiydi?" karmaşasını ortadan kaldırır. 
            Ayrıca yorum sistemiyle ekip üyeleri kolayca geri bildirim verebilir.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Şeffaflık ve Kurumsal Hafıza 🧾</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Herkesin erişebildiği ortak bir bilgi platformu, ekipler arası şeffaflığı artırır. Bir projede neler konuşuldu, kim hangi kararı aldı, hangi dokümana dayanılarak ilerleniyor — hepsi kayıt altındadır.
            <strong>Yıllar sonra bile bir konunun geçmişine ulaşmak mümkün.</strong>
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sayfa Şablonlarıyla Hız Kazan 📄⚡</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Toplantı notu, proje planı, sprint özeti… Her şeyi sıfırdan yazmaya gerek yok. Confluence, önceden hazırlanmış <strong>şablonlarla</strong> geliyor. 
            Bu da hem zaman kazandırıyor hem de dokümantasyonun belli bir standartta kalmasını sağlıyor.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Jira ile Mükemmel Uyum 🔄</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Atlassian ailesinin bir ürünü olarak, Confluence en çok da Jira kullanan ekipler için biçilmiş kaftan. 
            Jira'daki issue'ları doğrudan Confluence sayfalarına bağlayabilir, <strong>proje dokümantasyonu ile uygulama geliştirmeyi senkronize şekilde yürütebilirsin</strong>. 
            Bu entegrasyon, özellikle yazılım ekipleri için büyük avantaj.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Erişim ve Yetkilendirme Esnekliği 🔐</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Herkesin her şeyi görmesi gerekmez. Confluence ile sayfa veya alan bazında yetkilendirme yapabilirsin. 
            Yani <em>bazı sayfalar sadece yöneticilere açıkken</em>, diğerleri tüm ekibe açık olabilir. Bu da hem gizliliği korur hem de bilgiye erişimi kontrollü hale getirir.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Mobil Uygulama ile Her Yerden Erişim 📱</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Tatildeyken bile ekipten kopmamak mı istiyorsun? (Umarız zorunda kalmazsın 😅) Confluence'ın mobil uygulaması sayesinde, her an her yerden sayfalara erişebilir, güncellemeleri takip edebilirsin. 
            Uzaktan veya hibrit çalışan ekipler için harika bir çözüm.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Etkili Arama ve Etiketleme 🔍🏷️</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Sayfalara etiket ekleyerek belirli konularda içerik gruplamak mümkün. Ayrıca gelişmiş arama özelliği sayesinde, sadece başlığa değil <strong>sayfa içeriğine de göre arama yapılabiliyor</strong>. 
            Bu da "aramakla vakit kaybetmek" devrini kapatıyor.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sonuç: Sadece Bir Wiki Değil, Ekip Kültürünün Temeli 🎯</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Confluence, dokümantasyonu bir angarya olmaktan çıkarıyor. Onu bir ekip alışkanlığına dönüştürmek, iş süreçlerini sadeleştiriyor, bilgiye ulaşımı kolaylaştırıyor ve herkesin aynı sayfada olmasını sağlıyor.
            <strong>Verimli bir ekip çalışması için merkezi bir bilgi alanı şartsa, Confluence doğru seçim olabilir.</strong>
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mb-6">
            <p className="text-blue-900 text-sm leading-relaxed">
              📝 Yazıyı beğendiysen paylaşabilir ya da yorumlarını bizimle paylaşabilirsin!
            </p>
          </div>
        </section>
        <footer className="mt-12 border-t pt-8">
          <div className="mb-4 text-gray-700 font-semibold">Diğer Yazılar</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/2024-devops-trendleri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">DevOps & Cloud</div>
              <div className="font-bold text-gray-900">2024 DevOps Trendleri</div>
              <div className="text-xs text-gray-500 mt-1">5 Mart 2024</div>
            </Link>
            <Link href="/blog/cloud-native-performans" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">ITSM & Atlassian</div>
              <div className="font-bold text-gray-900">Jira Service Management ile IT Operasyonlarınızı Devrim Niteliğinde Dönüştürün</div>
              <div className="text-xs text-gray-500 mt-1">1 Mart 2024</div>
            </Link>
            <Link href="/blog/basarili-dijital-donusum-stratejileri" className="block bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 transition">
              <div className="text-blue-800 text-xs font-semibold mb-1">Dijital Dönüşüm</div>
              <div className="font-bold text-gray-900">Başarılı Dijital Dönüşüm Stratejileri</div>
              <div className="text-xs text-gray-500 mt-1">3 Mart 2024</div>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
} 