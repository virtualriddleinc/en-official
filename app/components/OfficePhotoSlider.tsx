"use client";
import { useEffect, useState } from 'react';
import LazyImage from './LazyImage';

// Ofis fotoğraflarını otomatik olarak ekle
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
  'IMG_20250702_155144.jpg',
  'IMG_20250702_155150.jpg',
  'IMG_20250702_155152.jpg',
  'IMG_20250702_155154.jpg',
  'IMG_20250702_155156.jpg',
  'IMG_20250702_155158.jpg',
  'IMG_20250702_155200.jpg',
  'IMG_20250702_155202.jpg',
  'IMG_20250702_155204.jpg',
];

export default function OfficePhotoSlider() {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => { 
    setIsClient(true); 
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % officeImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + officeImages.length) % officeImages.length);
  };

  if (!isClient) return null;

  return (
    <div className="w-full max-w-3xl mx-auto px-2">
      <div 
        className="w-full h-[220px] md:h-[420px] bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden"
        onMouseEnter={() => setIsVisible(true)}
        onTouchStart={() => setIsVisible(true)}
      >
        {!isVisible ? (
          <div className="text-gray-500 text-center">
            <div className="animate-pulse">Ofis fotoğraflarını görmek için tıklayın</div>
          </div>
        ) : (
          <div className="relative w-full h-full bg-white rounded-2xl shadow-xl">
            <div className="flex items-center justify-center w-full h-full">
              <LazyImage
                src={`/images/ofis/${officeImages[currentIndex]}`}
                alt={`Ofis fotoğrafı ${currentIndex + 1}`}
                width={800}
                height={420}
                className="object-cover w-full h-full rounded-2xl"
                priority={currentIndex === 0}
              />
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Önceki fotoğraf"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Sonraki fotoğraf"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {officeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Fotoğraf ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}