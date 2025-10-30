import StructuredData from '../components/StructuredData';
import OfficePhotoSlider from '../components/OfficePhotoSlider';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">About Us</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Your trusted technology partner adding value to your digital transformation journey and Atlassian products
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="relative w-full h-96 rounded-3xl shadow-lg overflow-hidden bg-gray-900">
                  <video
                    src="/images/welcome-video.mp4"
                    controls
                    className="w-full h-full object-contain"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="mb-2 text-blue-600 font-semibold tracking-wide">OUR STORY</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Innovative Approach Born from Expertise</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Virtual Riddle Technology Inc. was established in 2024 based on years of Atlassian consulting and support experience provided by our experienced team of Atlassian-certified experts to leading Turkish companies and internationally scaled organizations abroad. From our Istanbul headquarters in Maslak 42, we add value to our customers' digital transformation processes with the innovative approach we bring to the industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Life at Virtual Riddle */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/5">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Life at Virtual Riddle</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  As Virtual Riddle Technology Inc., we operate from our modern and dynamic working environment in Maslak 42, Istanbul's business and technology center.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We have created an ideal environment with innovative workspaces and state-of-the-art equipment in our office to provide the best service to our customers.
                </p>
                <div className="flex space-x-4">
                  <span className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-800 font-medium rounded-xl border border-gray-200">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Maslak 42, Istanbul</span>
                  </span>
                </div>
              </div>
              <div className="lg:w-3/5 mt-8 lg:mt-0">
                <OfficePhotoSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To help businesses manage their digital transformation processes in the most efficient way and 
                enable them to gain competitive advantage by using Atlassian technologies. Every customer's success is our success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be Turkey's leading Atlassian solution partner and digital transformation consulting company and 
                become a technology brand with a voice in the global market. To lead the industry with continuous development and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              The principles underlying our success, the values that make us who we are
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Open and Transparent Communication */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-blue-400 to-blue-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Open Communication</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We communicate transparently and honestly with our customers, informing them at every step. We openly discuss problems and search for solutions together.
                </p>
              </div>

              {/* Excellence */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-green-400 to-green-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We target the highest quality standards in every project and work for continuous improvement. We pay attention to details and work for excellence.
                </p>
              </div>

              {/* Simple and Focused */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-purple-400 to-purple-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Focused Approach</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We address complex problems with simple solutions and avoid unnecessary complexity. We set clear goals and offer focused solutions.
                </p>
              </div>

              {/* Strong Team Spirit */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-orange-400 to-orange-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Team Spirit</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We believe in the power of working together and find different perspectives valuable. We achieve success through team cooperation and mutual support.
                </p>
              </div>

              {/* Customer Focus */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-teal-400 to-teal-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Customer Focus</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We focus on our customers' needs and work for their success. We build long-term relationships and create continuous value.
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-indigo-400 to-indigo-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We support new ideas and develop creative solutions. We follow technological developments and work for continuous learning and growth.
                </p>
              </div>

              {/* Reliability */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-red-400 to-red-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Reliability</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We complete every job we promise on time and completely. Gaining and maintaining our customers' trust is our top priority.
                </p>
              </div>

              {/* Sustainable Growth */}
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100 relative group">
                <div className="absolute inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 top-0 rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Sustainable Growth</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We develop sustainable growth strategies for both our own company and our customers. We build strong foundations for long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-800 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-[url('/noise.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-full max-w-[600px] h-[600px] bg-gradient-radial from-blue-400/20 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Start Your Digital Transformation Journey Today</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Discover the power of Atlassian products with Virtual Riddle. Our expert team is by your side for custom solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Home', item: 'https://virtualriddle.com' },
          { name: 'About Us', item: 'https://virtualriddle.com/about' }
        ]}
      />
      
      <StructuredData
        type="faq"
        faqItems={[
          {
            question: 'When was Virtual Riddle founded?',
            answer: 'Virtual Riddle Technology Inc. was founded in 2024.'
          },
          {
            question: 'Where is Virtual Riddle located?',
            answer: 'Virtual Riddle is located in Maslak 42, Istanbul\'s business and technology center.'
          },
          {
            question: 'What services does Virtual Riddle offer?',
            answer: 'Virtual Riddle offers consulting, implementation, training, and support services for Atlassian products.'
          },
          {
            question: 'What is Virtual Riddle\'s mission?',
            answer: 'To help businesses manage their digital transformation processes in the most efficient way and enable them to gain competitive advantage by using Atlassian technologies.'
          }
        ]}
      />
    </main>
  );
} 