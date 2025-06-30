"use client";

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const packages = [
  {
    id: 'dedicated',
    name: 'Dedike Danışmanlık Paketi',
    price: 9999,
    oldPrice: 13999,
    discount: 29,
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
    price: 1999,
    oldPrice: 2999,
    discount: 33,
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
    price: 3999,
    oldPrice: 5999,
    discount: 33,
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

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#253858] mb-6">
            Danışmanlık Hizmetleri
          </h1>
          <div className="flex flex-col items-center gap-2">
            <span className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-base font-semibold shadow-md tracking-wide mb-2">Şeffaf Fiyatlandırma</span>
            <p className="text-xl text-[#42526E] max-w-2xl mx-auto">
              İşletmenizin dijital dönüşüm sürecinde size özel çözümler sunuyoruz
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-6 mb-12 flex-col md:flex-row">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => {
                setSelectedPackage(pkg.id);
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
                {pkg.oldPrice && (
                  <div className="flex justify-center mb-1">
                    <span className="text-lg md:text-xl font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-lg line-through shadow-sm border border-gray-200">₺{pkg.oldPrice.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-4xl md:text-5xl font-bold text-[#0066FF]">₺{pkg.price.toLocaleString()}</span>
                  <span className="inline-block bg-[#E6F0FF] text-[#0066FF] px-2 py-1 rounded text-sm font-medium">+ KDV</span>
                  {pkg.discount && (
                    <span className="ml-2 inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm animate-pulse">%{pkg.discount} İndirim</span>
                  )}
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
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(PricingPage), { ssr: false }); 