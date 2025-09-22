"use client";
import { useEffect, useState, lazy, Suspense } from 'react';
import LazyImage from './LazyImage';

// Lazy load Swiper components
const Swiper = lazy(() => import('swiper/react').then(module => ({ default: module.Swiper })));
const SwiperSlide = lazy(() => import('swiper/react').then(module => ({ default: module.SwiperSlide })));

// Ofis fotoğraflarını otomatik olarak ekle (statik import yerine, dosya isimlerini elle yazmak gerekebilir)
const officeImages = [
  'IMG_20250702_154835.jpg',
  'IMG_20250702_154854.jpg',
  'IMG_20250702_154912.jpg',
  'IMG_20250702_154919.jpg',
  'IMG_20250702_155011.jpg',
  'IMG_20250702_155026.jpg',
  'IMG_20250702_155028.jpg',
  'IMG_20250702_155056.jpg',
  'IMG_20250702_155058.jpg',
  'IMG_20250702_155140.jpg',
  // 'IMG_20250702_155155.jpg', // 11. fotoğraf kaldırıldı
  // 'IMG_20250702_183100.jpg', // 12. fotoğraf kaldırıldı
  'IMG_20250702_183109.jpg',
  'IMG_20250702_183118.jpg',
  'IMG_20250702_183129.jpg',
  'IMG_20250702_183136.jpg',
  'IMG_20250702_183205.jpg',
  'IMG_20250702_211534.jpg',
];

export default function OfficePhotoSlider() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [swiperModules, setSwiperModules] = useState(null);
  
  useEffect(() => { 
    setIsClient(true); 
  }, []);

  // Lazy load Swiper modules when component becomes visible
  useEffect(() => {
    if (isVisible && !swiperModules) {
      import('swiper/modules').then(modules => {
        setSwiperModules([modules.Navigation, modules.Pagination, modules.A11y]);
      });
    }
  }, [isVisible, swiperModules]);

  if (!isClient) return null;

  return (
    <div className="w-full max-w-3xl mx-auto px-2">
      <div 
        className="w-full h-[220px] md:h-[420px] bg-gray-100 rounded-2xl flex items-center justify-center"
        onMouseEnter={() => setIsVisible(true)}
        onTouchStart={() => setIsVisible(true)}
      >
        {!isVisible ? (
          <div className="text-gray-500 text-center">
            <div className="animate-pulse">Ofis fotoğraflarını görmek için tıklayın</div>
          </div>
        ) : (
          <Suspense fallback={
            <div className="flex items-center justify-center w-full h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          }>
            <Swiper
              modules={swiperModules}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                disabledClass: 'hidden',
              }}
              pagination={{ clickable: true }}
              className="rounded-2xl shadow-xl bg-white w-full h-full"
              style={{ minHeight: 220 }}
            >
              {[...officeImages].reverse().map((img, i) => (
                <SwiperSlide key={img}>
                  <div className="flex items-center justify-center w-full h-[220px] md:h-[420px] bg-gray-100 rounded-2xl overflow-hidden">
                    <LazyImage
                      src={`/images/ofis/${img}`}
                      alt={`Ofis Fotoğrafı ${i+1}`}
                      width={800}
                      height={420}
                      className="object-contain w-full h-full"
                      quality={85}
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
              ))}
              {/* Navigation butonları sadece md ve üstü ekranda göster */}
              <div className="swiper-button-prev hidden md:flex" />
              <div className="swiper-button-next hidden md:flex" />
            </Swiper>
          </Suspense>
        )}
      </div>
    </div>
  );
} 