"use client";

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const packages = [
  {
    id: 'dedicated',
    name: 'Dedike Danışmanlık Paketi',
    price: 11999,
    unit: 'gün',
    description: 'Haftaiçi 5 gün (Resmî Tatiller Hariç) 8 saatlik tam zamanlı danışmanlık hizmeti',
      features: [
      'DevOps ve Agile dönüşüm danışmanlığı',
      'CI/CD pipeline kurulumu ve optimizasyonu',
      'Atlassian araçları kurulum ve yapılandırma',
      'Ekip eğitimi ve mentorluk',
      'Süreç iyileştirme ve optimizasyon'
    ],
    popular: true
  },
  {
    id: 'on-demand',
    name: 'Talep Bazlı Danışmanlık',
    price: 2499,
    unit: 'saat',
    description: 'İhtiyaç duyduğunuzda, istediğiniz süre kadar danışmanlık',
      features: [
      'Esnek çalışma saatleri',
      'Teknik danışmanlık ve problem çözümü',
      'Performans optimizasyonu',
      'Güvenlik değerlendirmesi',
      'Özel eğitim seansları'
      ]
    },
  {
    id: 'training',
    name: 'Eğitim Paketi',
    price: 5000,
    unit: 'saat',
    description: 'Özel eğitim seansları ile ekibinizi geliştirin',
      features: [
      'DevOps ve Agile eğitimleri',
      'CI/CD pipeline eğitimleri',
      'Atlassian araçları eğitimleri',
      'Ekip eğitimi ve mentorluk',
      'Süreç iyileştirme ve optimizasyon eğitimleri'
      ]
    }
];

const PricingPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('dedicated');
  const [quantity, setQuantity] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const selected = packages.find((p) => p.id === selectedPackage);
  const totalPrice = selected ? Math.floor(selected.price * quantity) : 0;
  const kdvAmount = Math.floor(totalPrice * 0.18);
  const finalPrice = totalPrice + kdvAmount;

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#253858] mb-6">
            Danışmanlık Hizmetleri
          </h1>
          <p className="text-xl text-[#42526E] max-w-2xl mx-auto">
            İşletmenizin dijital dönüşüm sürecinde size özel çözümler sunuyoruz
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-12 flex-col md:flex-row">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => {
                setSelectedPackage(pkg.id);
                setQuantity(1);
              }}
              className={`relative w-full md:w-96 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 cursor-pointer flex flex-col border-2 ${
                selectedPackage === pkg.id
                  ? 'border-[#0066FF] ring-2 ring-[#0066FF] shadow-lg scale-105'
                  : 'border-transparent'
              }`}
              type="button"
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white px-4 py-1 rounded-full text-sm font-medium shadow">
                  En Popüler
                </span>
              )}
              <h3 className="text-2xl font-semibold text-[#253858] mb-4">{pkg.name}</h3>
            <div className="mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-bold text-[#0066FF]">₺{pkg.price.toLocaleString()}</span>
                  <span className="inline-block bg-[#E6F0FF] text-[#0066FF] px-2 py-1 rounded text-sm font-medium">+ KDV</span>
                </div>
                <div className="mt-1 text-center">
                  <span className="inline-block bg-[#0052CC] text-white px-3 py-1 rounded-full text-sm font-bold shadow">{pkg.unit.toUpperCase()}</span>
                </div>
            </div>
              <p className="text-[#42526E] mb-6">{pkg.description}</p>
              <ul className="space-y-3 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-[#42526E]">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                    {feature}
              </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#253858] mb-6 flex items-center gap-3">
            <svg className="w-8 h-8 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7a2 2 0 012-2h2m12 0h2a2 2 0 012 2v7c0 2.21-3.582 4-8 4z" />
                </svg>
            Sipariş Detayları
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <label className="block text-[#42526E] mb-2 font-medium">Miktar</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-[#0066FF] text-2xl font-bold hover:bg-[#E6F0FF] transition-colors"
                    type="button"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-12 bg-transparent text-center text-[#253858] text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-[#0066FF] text-2xl font-bold hover:bg-[#E6F0FF] transition-colors"
                    type="button"
                  >
                    +
                  </button>
          </div>
                <span className="inline-block bg-[#E6F0FF] text-[#0066FF] px-2 py-1 rounded text-sm font-medium">
                  {selected?.unit === 'gün' ? 'Danışman/Gün' : 'Danışman/Saat'}
              </span>
            </div>
            </div>
            <div className="bg-gradient-to-br from-[#E6F0FF] to-[#F4F5F7] rounded-xl p-6 shadow flex flex-col gap-3">
              <div className="flex justify-between items-center text-[#42526E]">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                </svg>
                  Ara Toplam:
                </span>
                <span className="font-semibold">₺{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-[#42526E]">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01" />
                </svg>
                  KDV (%18):
                </span>
                <span className="font-semibold">₺{kdvAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-[#253858] pt-3 border-t border-[#E6F0FF] mt-2">
                <span className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                  Toplam:
                </span>
                <span className="text-[#0066FF]">₺{finalPrice.toLocaleString()}</span>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(PricingPage), { ssr: false }); 