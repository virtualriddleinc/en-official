"use client";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  'IMG_20250702_155155.jpg',
  'IMG_20250702_183100.jpg',
  'IMG_20250702_183109.jpg',
  'IMG_20250702_183118.jpg',
  'IMG_20250702_183129.jpg',
  'IMG_20250702_183136.jpg',
  'IMG_20250702_183205.jpg',
  'IMG_20250702_211534.jpg',
];

export default function OfficePhotoSlider() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);
  if (!isClient) return null;

  return (
    <div className="w-full max-w-3xl mx-auto px-2">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'hidden',
        }}
        pagination={{ clickable: true }}
        className="rounded-2xl shadow-xl bg-white"
        style={{ minHeight: 220 }}
      >
        {officeImages.map((img, i) => (
          <SwiperSlide key={img}>
            <div className="flex items-center justify-center w-full h-[220px] md:h-[420px] bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={`/images/ofis/${img}`}
                alt={`Ofis Fotoğrafı ${i+1}`}
                className="object-contain w-full h-full"
                loading="lazy"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Navigation butonları sadece md ve üstü ekranda göster */}
        <div className="swiper-button-prev hidden md:flex" />
        <div className="swiper-button-next hidden md:flex" />
      </Swiper>
    </div>
  );
} 