"use client";

import JobApplicationModal from "../components/JobApplicationModal";
import { useState } from "react";

export default function CareerPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const positions = [
    {
      title: "Jira Administrator (Remote)",
      tags: ["Full Time", "Remote", "Global"]
    },
    {
      title: "Atlassian Expert (Remote)",
      tags: ["Full Time", "Remote", "Global"]
    },
    {
      title: "Jr. Atlassian Consultant (Remote)",
      tags: ["Part Time", "Remote", "Global"]
    }
  ];

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Career</h1>
            <p className="text-xl">
              Shape the technologies of the future with us
            </p>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
              <img
                src="/images/office-illustration.jpeg"
                alt="Office and Team Work Illustration"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Join Our Team
              </h2>
              <p className="text-lg text-gray-600">
                Working at Virtual Riddle means shaping the technologies of the future and continuous learning. Become part of our dynamic team, let's grow together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Continuous Development</h3>
                    <p className="text-gray-600">Advance your career through training and development programs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Great Team</h3>
                    <p className="text-gray-600">Work with talented and passionate professionals</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Flexible Working</h3>
                    <p className="text-gray-600">Maintain your work-life balance</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a href="#open-positions" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Open Positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us? */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-blue-900 flex items-center justify-center gap-3">
              <span>✨</span> Why Virtual Riddle? <span>🚀</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Personal and Professional Development</h3>
                <p className="text-gray-700">We invest in both your technical and personal development through continuous training, certification and conference support.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Remote & Hybrid Work</h3>
                <p className="text-gray-700">You can work from where you want, with flexible hours; maintain your work-life balance.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">💙</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Respect & Support for Employees</h3>
                <p className="text-gray-700">An environment that respects your life and personal time, offering a healthy workload and psychological safety.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Team Spirit & Collaborative Success</h3>
                <p className="text-gray-700">We achieve success together through open communication, supportive team and a culture of learning together.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Benefits & Advantages</h3>
                <p className="text-gray-700">We increase your motivation with private health insurance, meal card, equipment support and surprise rewards.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Diversity & Inclusion</h3>
                <p className="text-gray-700">We offer an inclusive and egalitarian work environment that values differences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Open Positions</h2>
            <div className="space-y-6">
              {positions.map((pos) => (
                <div key={pos.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pos.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {pos.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{tag === "Türkiye" ? "Turkey" : tag}</span>
                        ))}
                      </div>
                    </div>
                    <button
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      onClick={() => handleApply(pos.title)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Application</h3>
                <p className="text-gray-700">
                  Submit your online application for the position you are interested in.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Initial Interview</h3>
                <p className="text-gray-700">
                  Conduct an online interview with our HR team.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Interview</h3>
                <p className="text-gray-700">
                  Conduct a detailed evaluation with our technical team.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Offer</h3>
                <p className="text-gray-700">
                  Receive the job offer after positive evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JobApplicationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        position={selectedPosition || ""}
      />
    </main>
  );
} 