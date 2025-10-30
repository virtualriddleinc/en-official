"use client";
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import LazyImage from './LazyImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Add office photos automatically (instead of static import, file names may need to be written manually)
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
  // 'IMG_20250702_155155.jpg', // Photo 11 removed
  // 'IMG_20250702_183100.jpg', // Photo 12 removed
  'IMG_20250702_183109.jpg',
  'IMG_20250702_183118.jpg',
  'IMG_20250702_183129.jpg',
  'IMG_20250702_183136.jpg',
  'IMG_20250702_183205.jpg',
  'IMG_20250702_211534.jpg',
];

export default function OfficePhotoSlider() {
  const [isClient, setIsClient] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Intersection Observer for lazy loading - loads when component is visible
  useEffect(() => {
    if (!isClient || !containerRef.current || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Don't disconnect immediately to prevent content disappearing
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before it comes into view
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isClient, isInView]);

  if (!isClient) {
    return (
      <div className="w-full max-w-3xl mx-auto px-2">
        <div className="w-full h-[220px] md:h-[420px] bg-gray-100 rounded-2xl flex items-center justify-center">
          <div className="text-gray-500 text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full max-w-3xl mx-auto px-2">
      <div className="w-full h-[220px] md:h-[420px] bg-gray-100 rounded-2xl overflow-hidden">
        {!isInView ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <div className="animate-pulse">Loading photos...</div>
            </div>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'opacity-50 cursor-not-allowed',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="rounded-2xl shadow-xl bg-white w-full h-full"
            style={{ minHeight: '220px' }}
          >
            {[...officeImages].reverse().map((img, i) => (
              <SwiperSlide key={`${img}-${i}`}>
                <div className="flex items-center justify-center w-full h-[220px] md:h-[420px] bg-gray-100 rounded-2xl overflow-hidden">
                  <LazyImage
                    src={`/images/ofis/${img}`}
                    alt={`Office Photo ${i + 1}`}
                    width={800}
                    height={420}
                    className="object-contain w-full h-full"
                    quality={85}
                    placeholder="empty"
                  />
                </div>
              </SwiperSlide>
            ))}
            {/* Navigation buttons only visible on md and above */}
            <div className="swiper-button-prev hidden md:flex !text-blue-600 hover:!text-blue-800" />
            <div className="swiper-button-next hidden md:flex !text-blue-600 hover:!text-blue-800" />
          </Swiper>
        )}
      </div>
    </div>
  );
} 