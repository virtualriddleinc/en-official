"use client";

import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import StructuredData from '../components/StructuredData';

const packages = [
  {
    id: 'dedicated',
    name: 'Tam Zamanlı Danışmanlık Paketi',
    hourlyPrice: 1249,
    dailyPrice: 9999,
    oldPrice: 13999,
    discount: 29,
    unit: 'gün',
    minHours: 480,
    minDays: 60,
    description: 'Haftaiçi 5 gün (Resmî Tatiller Hariç) 8 saatlik tam zamanlı danışmanlık hizmetidir. Minimum 60 günlük sözleşmelerde geçerlidir.',
    features: [
      'DevOps ve Agile dönüşüm danışmanlığı',
      'Atlassian araçları kurulum ve yapılandırma',
      'Ekip eğitimi ve mentorluk',
      'Süreç iyileştirme ve optimizasyon'
    ]
  },
  {
    id: 'on-demand',
    name: 'Proje Bazlı Danışmanlık',
    hourlyPrice: 1999,
    dailyPrice: 15992,
    oldPrice: 23990,
    discount: 33,
    unit: 'gün',
    minHours: 1,
    minDays: 1,
    description: 'Proje gereksiniminize göre minimum 1 saatlik danışmanlık',
    features: [
      'Esnek çalışma saatleri',
      'Teknik danışmanlık ve problem çözümü',
      'Performans optimizasyonu',
      'Güvenlik değerlendirmesi'
    ],
    popular: true
  },
  {
    id: 'training',
    name: 'Eğitim Paketi',
    hourlyPrice: 3999,
    dailyPrice: 31992,
    oldPrice: 47990,
    discount: 33,
    unit: 'gün',
    minHours: 1,
    minDays: 1,
    description: 'Özel eğitim seansları ile ekibinizi geliştirin. Minimum 1 saatlik eğitim seansı',
    features: [
      'Atlassian araçları eğitimleri',
      'Agile raporlama eğitimleri',
      'Administrator eğitimleri',
      'Son kullanıcı eğitimleri',
      'Ekip eğitimi ve mentorluk'
    ]
  }
];

const PricingPage = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('on-demand');
  const [billingCycle, setBillingCycle] = useState<'hourly' | 'daily'>('daily');
  const [quantity, setQuantity] = useState(0);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [calculatedOldPrice, setCalculatedOldPrice] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && selectedPkg) {
      if (billingCycle === 'hourly') {
        setQuantity(selectedPkg.minHours);
      } else {
        setQuantity(selectedPkg.minDays);
      }
    }
  }, [mounted, selectedPackage, billingCycle, selectedPkg]);

  useEffect(() => {
    if (mounted && selectedPkg && quantity > 0) {
      const minValue = billingCycle === 'hourly' ? selectedPkg.minHours : selectedPkg.minDays;
      setShowWarning(quantity < minValue);
    } else {
      setShowWarning(false);
    }
  }, [mounted, selectedPkg, quantity, billingCycle]);

  useEffect(() => {
    if (mounted && selectedPkg && quantity > 0) {
      let finalQuantity = quantity;
      
      // TZDP için özel hesaplama - her zaman gün üzerinden hesapla
      if (selectedPkg.id === 'dedicated') {
        if (billingCycle === 'hourly') {
          finalQuantity = Math.ceil(quantity / 8); // Saatleri güne çevir, yukarı yuvarla
        }
        // Günlük seçili ise quantity zaten gün cinsinden
      } else {
        // Diğer paketler için normal hesaplama
        if (billingCycle === 'hourly') {
          finalQuantity = Math.round(quantity / 8); // Saatleri güne çevir, standart yuvarlama
        }
        // Günlük seçili ise quantity zaten gün cinsinden
      }
      
      const minValue = billingCycle === 'hourly' ? selectedPkg.minHours : selectedPkg.minDays;
      finalQuantity = Math.max(finalQuantity, minValue);
      
      if (billingCycle === 'hourly') {
        setCalculatedPrice(selectedPkg.hourlyPrice * quantity);
        setCalculatedOldPrice(selectedPkg.oldPrice * Math.ceil(quantity / 8));
      } else {
        setCalculatedPrice(selectedPkg.dailyPrice * quantity);
        setCalculatedOldPrice(selectedPkg.oldPrice * quantity);
      }
    } else {
      setCalculatedPrice(0);
      setCalculatedOldPrice(0);
    }
  }, [mounted, selectedPkg, quantity, billingCycle]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setQuantity(0);
    } else {
      const numValue = parseInt(value);
      if (!isNaN(numValue)) {
        setQuantity(numValue);
      }
    }
  };

  const handleBillingCycleChange = (newCycle: 'hourly' | 'daily') => {
    if (newCycle === billingCycle) return;
    
    setBillingCycle(newCycle);
    
    if (quantity > 0 && selectedPkg) {
      let newQuantity: number;
      
      if (newCycle === 'daily') {
        // Saatlikten günlüğe geçiş
        newQuantity = Math.round(quantity / 8);
      } else {
        // Günlükten saatliğe geçiş
        newQuantity = quantity * 8;
      }
      
      const minValue = newCycle === 'hourly' ? selectedPkg.minHours : selectedPkg.minDays;
      newQuantity = Math.max(newQuantity, minValue);
      
      setTimeout(() => {
        setQuantity(newQuantity);
      }, 0);
    }
  };

  const getQuantityLabel = () => {
    return billingCycle === 'hourly' ? 'Saat:' : 'Gün:';
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

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

        {/* Paket Seçimi */}
        <div className="flex justify-center gap-6 mb-16 flex-col md:flex-row">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => {
                setSelectedPackage(pkg.id);
                if (billingCycle === 'hourly') {
                  setQuantity(pkg.minHours);
                } else {
                  setQuantity(pkg.minDays);
                }
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
              
              <div className="min-h-[4rem] flex items-center justify-center mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-[#253858] text-center leading-tight">{pkg.name}</h2>
              </div>
              
              <div className="min-h-[8rem] flex flex-col justify-center mb-6">
                                  <div className="text-center mb-4">
                    <div className="text-sm md:text-base text-[#42526E] mb-3 font-bold">
                      {billingCycle === 'hourly' ? '🕐 Saatlik Fiyat:' : '📅 Günlük Fiyat (8 Saat):'}
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
                      <div className="text-2xl md:text-4xl font-bold text-[#0066FF]">
                        ₺{billingCycle === 'hourly' ? pkg.hourlyPrice.toLocaleString() : pkg.dailyPrice.toLocaleString()}
                      </div>
                      <span className="inline-flex items-center px-2 md:px-3 py-1 md:py-2 bg-blue-100 text-blue-800 text-xs md:text-sm font-bold rounded-full">
                        + KDV
                      </span>
                    </div>
                  </div>
                
                {pkg.discount && (
                  <div className="text-center">
                    <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm animate-pulse">
                      İndirim
                    </span>
                  </div>
                )}
              </div>
              
              <div className="min-h-[5rem] flex items-center mb-6">
                <p className="text-[#42526E] text-center leading-tight text-sm md:text-base">
                  {pkg.id === 'dedicated' ? (
                    <>
                      <strong>Haftaiçi 5 gün</strong> (Resmî Tatiller Hariç) <strong>8 saatlik tam zamanlı</strong> danışmanlık hizmetidir. <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border border-blue-200">Minimum 60 günlük</span> sözleşmelerde geçerlidir.
                    </>
                  ) : pkg.id === 'on-demand' ? (
                    <>
                      <strong>Proje gereksiniminize göre</strong> <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border border-blue-200">minimum 1 saatlik</span> danışmanlık
                    </>
                  ) : (
                    <>
                      <strong>Özel eğitim seansları</strong> ile <strong>ekibinizi geliştirin</strong>. <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border border-blue-200">minimum 1 saatlik</span> eğitim seansı
                    </>
                  )}
                </p>
              </div>
              
              <ul className="space-y-3 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-[#42526E]">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        {/* Ayraç */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent rounded-full"></div>
        </div>

        {/* Hesaplama Aracı */}
        <div className="w-full md:w-[1200px] mx-auto mb-12 relative overflow-hidden">
          {/* Arka plan dekoratif elementleri */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          
          {/* Ana kart */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-4 md:p-10">
            {/* Üst dekoratif çizgi */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            
            {/* Başlık */}
            <div className="text-center mb-6 md:mb-10 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-3xl mb-4 md:mb-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">
                Fiyat Hesaplama
              </h3>
              <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Paket ve miktar seçiminize göre anlık hesaplama yapın
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {/* Sol Taraf - Paket Seçimi */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 rounded-2xl p-4 md:p-6 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-3 md:mr-4 shadow-lg">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-slate-800">Paket Seçimi</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {packages.map((pkg) => (
                      <label
                        key={pkg.id}
                        className={`group relative block p-3 md:p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                          selectedPackage === pkg.id
                            ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl scale-[1.02] ring-4 ring-blue-100'
                            : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="package"
                          value={pkg.id}
                          checked={selectedPackage === pkg.id}
                          onChange={() => setSelectedPackage(pkg.id)}
                          className="sr-only"
                        />
                        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
                          <div className="flex-1">
                            <div className="font-bold text-slate-800 text-base md:text-lg">{pkg.name}</div>
                            <div className="text-xs md:text-sm text-slate-600 mt-1 flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0">
                              <span className="font-semibold">
                                {billingCycle === 'hourly' 
                                  ? `₺${pkg.hourlyPrice.toLocaleString()}/saat`
                                  : `₺${pkg.dailyPrice.toLocaleString()}/gün`
                                }
                              </span>
                              {pkg.discount && (
                                <span className="md:ml-3 inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-400 to-green-600 text-white shadow-sm">
                                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                  İndirim
                                </span>
                              )}
                            </div>
                          </div>
                          <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                            selectedPackage === pkg.id
                              ? 'border-blue-500 bg-blue-500 shadow-lg'
                              : 'border-gray-300 group-hover:border-blue-400'
                          }`}>
                            {selectedPackage === pkg.id && (
                              <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-white rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - Faturalandırma ve Miktar */}
              <div className="space-y-6">
                {/* Faturalandırma */}
                <div className="bg-gradient-to-br from-white via-green-50/50 to-emerald-50/50 rounded-2xl p-4 md:p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-3 md:mr-4 shadow-lg">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-slate-800">Ücret Gösterim Birimi</h4>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-1 mb-4 shadow-inner">
                    <div className="flex">
                      <button
                        onClick={() => handleBillingCycleChange('hourly')}
                        className={`flex-1 py-3 px-6 text-sm font-bold rounded-lg transition-all duration-300 ${
                          billingCycle === 'hourly'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl transform scale-105'
                            : 'text-slate-600 hover:text-blue-600 hover:bg-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Saatlik
                        </div>
                      </button>
                      <button
                        onClick={() => handleBillingCycleChange('daily')}
                        className={`flex-1 py-3 px-6 text-sm font-bold rounded-lg transition-all duration-300 ${
                          billingCycle === 'daily'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl transform scale-105'
                            : 'text-slate-600 hover:text-blue-600 hover:bg-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Günlük
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-emerald-700 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl px-4 py-3 text-center shadow-sm">
                    <div className="flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      1 gün = 8 saat olarak baz alınmıştır.
                    </div>
                  </div>
                </div>

                {/* Miktar */}
                <div className="bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 rounded-2xl p-4 md:p-6 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-3 md:mr-4 shadow-lg">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-slate-800">Miktar</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        placeholder="Miktar giriniz"
                        className="w-full px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 rounded-xl text-base md:text-lg font-semibold focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                      />
                      <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2">
                        <span className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
                          {billingCycle === 'hourly' ? 'Saat' : 'Gün'}
                        </span>
                      </div>
                    </div>
                    
                    {showWarning && selectedPkg && (
                      <div className="flex items-center p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl shadow-sm">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <span className="text-red-700 text-sm font-semibold">
                          Minimum {billingCycle === 'hourly' ? selectedPkg.minHours : selectedPkg.minDays} {billingCycle === 'hourly' ? 'saat' : 'gün'} girmelisiniz!
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sonuç */}
        <div className="w-full md:w-[1200px] mx-auto mb-12 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 rounded-2xl p-4 md:p-8 shadow-xl border border-blue-200/50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-3 md:mb-4 shadow-lg">
              <span className="text-white text-2xl md:text-3xl font-bold">₺</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-800">Hesaplanan Toplam Fiyat</h4>
            {quantity > 0 ? (
              <div className="space-y-3">
                {calculatedOldPrice > calculatedPrice && (
                  <div className="text-slate-600 mb-3">
                    <span className="text-2xl md:text-3xl font-bold line-through opacity-80 text-slate-700">₺{calculatedOldPrice.toLocaleString()}</span>
                    <span className="ml-2 md:ml-3 text-lg md:text-xl text-slate-600">yerine</span>
                  </div>
                )}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
                  <div className="text-3xl md:text-5xl font-bold text-slate-800">
                    ₺{calculatedPrice.toLocaleString()}
                  </div>
                  <span className="inline-flex items-center px-2 md:px-3 py-1.5 md:py-2 bg-blue-100 text-blue-800 text-xs md:text-sm font-semibold rounded-full border border-blue-200">
                    + KDV
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-slate-600 text-xl">
                Lütfen miktar giriniz
              </div>
            )}
          </div>
        </div>

        {/* Özel Talepler Bölümü */}
        <div className="w-full md:w-[1200px] mx-auto mb-12 relative overflow-hidden">
          {/* Arka plan dekoratif elementleri */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/40 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
          
          {/* Ana kart */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-4 md:p-10">
            {/* Üst dekoratif çizgi */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10">
              {/* Sol Taraf - İçerik */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mr-4 md:mr-6 shadow-xl">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
                      Özel Talepler
                    </h3>
                    <p className="text-emerald-600 font-semibold text-sm md:text-base">Kişiselleştirilmiş Çözümler</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Özel proje gereksinimleri</strong> için tamamen kişiselleştirilmiş danışmanlık hizmetleri
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Esnek çalışma saatleri</strong> ve <strong>özel sözleşme koşulları</strong>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Karmaşık teknik problemler</strong> için uzman çözümler ve <strong>sürekli destek</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - CTA */}
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200/50">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">Ücretsiz Danışmanlık</h4>
                    <p className="text-slate-600 text-sm">Proje gereksinimlerinizi değerlendirelim</p>
                  </div>
                  
                  <Link 
                    href="/solutions/consulting"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Özel Teklif Al
                  </Link>
                </div>
                

              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Sticky Kampanya Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl z-50 transform transition-transform duration-300 hover:translate-y-0">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div>
                <div className="font-bold text-base md:text-lg">Kampanya Hakkında</div>
                <div className="text-xs md:text-sm text-blue-100 leading-tight">
                  <strong>01.09.2025</strong> tarihine kadar yapılan alımlarda fiyatlar <strong>01.01.2026</strong> tarihine kadar korunur!
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="hidden md:block text-right">
                <div className="text-xs text-blue-100">Kampanya Bitiş:</div>
                <div className="font-bold">01.09.2025</div>
              </div>
              <Link href="/solutions/consulting" className="bg-white text-blue-600 px-4 md:px-6 py-1.5 md:py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base">
                Hemen Başla
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <StructuredData
        type="breadcrumb"
        breadcrumbItems={[
          { name: 'Ana Sayfa', item: 'https://virtualriddle.com' },
          { name: 'Fiyatlandırma', item: 'https://virtualriddle.com/pricing' }
        ]}
      />
      
      <StructuredData
        type="faq"
        faqItems={[
          {
            question: 'Virtual Riddle\'ın fiyatlandırma paketleri nelerdir?',
            answer: 'Virtual Riddle, Tam Zamanlı Danışmanlık Paketi, Proje Bazlı Danışmanlık ve Eğitim Paketi olmak üzere 3 farklı paket sunmaktadır.'
          },
          {
            question: 'En popüler paket hangisidir?',
            answer: 'Proje Bazlı Danışmanlık en popüler seçenektir ve esnek çalışma saatleri ile ihtiyaç duyduğunuzda danışmanlık hizmeti sunar.'
          },
          {
            question: 'Fiyatlara KDV dahil midir?',
            answer: 'Hayır, tüm fiyatlar KDV hariçtir. Fiyatlara %20 KDV eklenmektedir.'
          },
          {
            question: 'Paketler arasında geçiş yapabilir miyim?',
            answer: 'Evet, ihtiyaçlarınıza göre paketler arasında geçiş yapabilirsiniz. Esnek çözümler sunuyoruz.'
          },
          {
            question: 'Saatlik ve günlük fiyatlandırma arasındaki fark nedir?',
            answer: 'Saatlik fiyatlandırma daha esnek çalışma için, günlük fiyatlandırma ise tam gün danışmanlık hizmetleri için uygundur. Dinamik fiyat hesaplama sistemi ile anlık güncelleme yapılır.'
          },
          {
            question: 'Minimum sözleşme süreleri nelerdir?',
            answer: 'Tam Zamanlı Danışmanlık Paketi için minimum 60 gün (480 saat), diğer paketler için minimum 1 gün (1 saat) sözleşme süresi gereklidir.'
          },
          {
            question: '1 gün kaç saat olarak hesaplanır?',
            answer: 'Tüm paketler için 1 gün = 8 saat olarak hesaplanır. Faturalandırma türü değiştirildiğinde otomatik olarak dönüşüm yapılır.'
          },
          {
            question: 'Dinamik fiyat hesaplama sistemi nasıl çalışır?',
            answer: 'Kullanıcılar paket seçimi, faturalandırma türü (saatlik/günlük) ve miktar girişi yaparak anlık fiyat hesaplaması yapabilir. Sistem otomatik olarak 1 gün = 8 saat dönüşümü yapar.'
          },
          {
            question: 'Kampanya süresi ne kadardır?',
            answer: '01.09.2025 tarihine kadar yapılan alımlarda fiyatlar 01.01.2026 tarihine kadar korunur.'
          }
        ]}
      />
    </section>
  );
};

export default PricingPage; 