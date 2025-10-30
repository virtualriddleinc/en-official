"use client";

import { useEffect, useRef, useState } from 'react';

interface GoogleMapProps {
  address: string;
  apiKey: string;
}

const DEFAULT_CENTER = { lat: 41.1140246, lng: 29.0209027 }; // Kolektif House Maslak
const DEFAULT_NAME = "Virtual Riddle Technology Inc.";

export default function GoogleMap({ address, apiKey }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey) {
      setError('Google Maps API key is missing.');
      return;
    }
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
    if (existingScript) {
      if ((window as any).google && (window as any).google.maps) {
        initializeMap();
      } else {
        existingScript.addEventListener('load', initializeMap);
      }
      return;
    }
    // Load Google Maps API
      const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
    script.onload = initializeMap;
    script.onerror = () => setError('Google Maps could not be loaded. The API key may be incorrect or there may be a connection issue.');
      document.head.appendChild(script);

    function initializeMap() {
      if (!mapRef.current || !(window as any).google || !(window as any).google.maps) return;
      const google = (window as any).google;
      const map = new google.maps.Map(mapRef.current, {
        center: DEFAULT_CENTER,
        zoom: 16,
        mapId: "f8b9e6163e48e501"
      });
      // Marker
      const marker = new google.maps.Marker({
        map,
        position: DEFAULT_CENTER,
        draggable: true,
        animation: google.maps.Animation.DROP
      });
      // InfoWindow
      const infoWindow = new google.maps.InfoWindow({
        content: `<div style='font-weight:bold;font-size:16px;'>${DEFAULT_NAME}</div>`
      });
      infoWindow.open(map, marker);
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
      // Autocomplete
      if (inputRef.current) {
        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
          fields: ['geometry', 'formatted_address', 'name']
        });
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (!place.geometry) return;
          map.setCenter(place.geometry.location);
          marker.setPosition(place.geometry.location);
          infoWindow.setContent(`<div style='font-weight:bold;font-size:16px;'>${place.name || DEFAULT_NAME}</div>`);
          infoWindow.open(map, marker);
        });
      }
      // Marker drag
      marker.addListener('dragend', () => {
        const pos = marker.getPosition();
        if (!pos) return;
        map.setCenter(pos);
        // Reverse geocode for address update
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: pos }, (results: any, status: string) => {
          if (status === 'OK' && results && results[0]) {
            infoWindow.setContent(`<div style='font-weight:bold;font-size:16px;'>${DEFAULT_NAME}</div><div style='font-size:13px;'>${results[0].formatted_address}</div>`);
            infoWindow.open(map, marker);
            if (inputRef.current) inputRef.current.value = results[0].formatted_address;
            }
          });
      });
    }

    // Cleanup
    return () => {
      if (script) {
        script.onload = null;
        script.onerror = null;
      }
    };
  }, [address, apiKey]);

  return (
    <div className="w-full">
      <div className="mb-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search address or location..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          defaultValue={address}
        />
      </div>
      {error ? (
        <div className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden flex items-center justify-center bg-gray-100 text-red-600 text-center p-4">
          {error}
        </div>
      ) : (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden [filter:grayscale(20%)_contrast(110%)]"
    />
      )}
    </div>
  );
} 