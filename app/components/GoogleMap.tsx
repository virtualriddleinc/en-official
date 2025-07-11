"use client";

import { useEffect, useRef, useState } from 'react';

// Google Maps tiplerini tanımlıyoruz
declare global {
  interface Window {
    google: {
      maps: {
        Map: any;
        Marker: any;
        Geocoder: any;
        Animation: {
          DROP: number;
        };
      };
    };
  }
}

interface GoogleMapProps {
  address: string;
  apiKey: string;
}

export default function GoogleMap({ address, apiKey }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey) {
      setError('Google Maps API anahtarı eksik.');
      return;
    }
    // Script daha önce yüklendi mi kontrol et
    const existingScript = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
    if (existingScript) {
      if ((window as any).google && (window as any).google.maps) {
        // Script zaten yüklü, haritayı başlat
        initializeMap();
      } else {
        existingScript.addEventListener('load', initializeMap);
      }
      return;
    }
    // Google Maps API'sini yükle
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = initializeMap;
    script.onerror = () => setError('Google Maps yüklenemedi. API anahtarı yanlış veya bağlantı sorunu olabilir.');
    document.head.appendChild(script);

    function initializeMap() {
      if (mapRef.current && !mapInstanceRef.current && (window as any).google && (window as any).google.maps) {
        // Geocoding servisi oluştur
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results: any, status: string) => {
          if (status === 'OK' && results && results[0]) {
            const location = results[0].geometry.location;
            // Harita oluştur
            const map = new window.google.maps.Map(mapRef.current, {
              center: location,
              zoom: 15,
              styles: [
                { featureType: "all", elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { featureType: "all", elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] }
              ]
            });
            // Marker ekle
            new window.google.maps.Marker({
              map,
              position: location,
              animation: window.google.maps.Animation.DROP
            });
            mapInstanceRef.current = map;
          } else {
            setError('Adres bulunamadı veya Google Maps geocoding başarısız oldu.');
          }
        });
      }
    }

    // Cleanup
    return () => {
      if (script) {
        script.onload = null;
        script.onerror = null;
      }
    };
  }, [address, apiKey]);

  if (error) {
    return (
      <div className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden flex items-center justify-center bg-gray-100 text-red-600 text-center p-4">
        {error}
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden"
      style={{ filter: 'grayscale(20%) contrast(110%)' }}
    />
  );
} 