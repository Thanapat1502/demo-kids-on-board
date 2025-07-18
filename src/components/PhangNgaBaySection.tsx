'use client';

import { useState } from 'react';
import Image from "next/image";

const PhangNgaBaySection = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Handle image loading
  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => new Set([...prev, imageUrl]));
  };

  const galleryImages = [
    {
      src: "/image/day-trips/destinations/phang-nga4.jpg",
      alt: "Limestone karsts and emerald waters",
    },
    {
      src: "/image/day-trips/destinations/phang-nga1.jpg",
      alt: "James Bond Island scenic view",
    },
    {
      src: "/image/day-trips/destinations/phang-nga2.jpg",
      alt: "Traditional long tail boats",
    },
    {
      src: "/image/day-trips/destinations/phang-nga5.jpg",
      alt: "Phang Nga Bay panorama",
    },
    {
      src: "/image/day-trips/destinations/phang-nga3.jpg",
      alt: "Sea gypsy floating village",
    },
  ];

  return (
    <section className="py-4 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full -translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-1 border border-gray-300 text-gray-600 text-xs font-medium uppercase tracking-widest">
              Featured Destination
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            Phang Nga Bay Day Trip
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Discover the iconic James Bond Island and traditional sea gypsy villages
            in one of Thailand&apos;s most spectacular natural wonders.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Tour Information */}
          <div>
            {/* Tour Highlights */}
            <div className="mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">
                Tour Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">Visit famous James Bond Island (Koh Tapu)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">Explore Koh Panyee floating village</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">Long tail boat ride through mangroves</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">Cave exploration and scenic viewpoints</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">Traditional Thai lunch included</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">Visit Sawan Kuha Temple cave</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">Samet Nangshe Viewpoint panorama</span>
                </div>
              </div>
            </div>

            {/* Sample Itinerary */}
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">
                Sample Itinerary
              </h3>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <span className="font-medium text-gray-900 text-sm uppercase tracking-wider w-16 flex-shrink-0">
                    07:00
                  </span>
                  <span className="text-gray-700 font-light">
                    Hotel pickup with child seat equipped vehicle
                  </span>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="font-medium text-gray-900 text-sm uppercase tracking-wider w-16 flex-shrink-0">
                    08:30
                  </span>
                  <span className="text-gray-700 font-light">
                    Long tail boat ride to James Bond Island
                  </span>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="font-medium text-gray-900 text-sm uppercase tracking-wider w-16 flex-shrink-0">
                    12:00
                  </span>
                  <span className="text-gray-700 font-light">
                    Lunch at National Park restaurant
                  </span>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="font-medium text-gray-900 text-sm uppercase tracking-wider w-16 flex-shrink-0">
                    13:30
                  </span>
                  <span className="text-gray-700 font-light">
                    Visit Sawan Kuha Temple cave
                  </span>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="font-medium text-gray-900 text-sm uppercase tracking-wider w-16 flex-shrink-0">
                    14:30
                  </span>
                  <span className="text-gray-700 font-light">
                    Samet Nangshe Viewpoint panorama
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Image Gallery */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">
              Gallery
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-12">
              {galleryImages.map((image, index) => {
                const isLoaded = loadedImages.has(image.src);

                return (
                  <div
                    key={index}
                    className={`relative aspect-square overflow-hidden group ${index === 0 ? 'col-span-2 aspect-[2/1]' : ''
                      }`}
                  >
                    {/* Loading placeholder with shimmer */}
                    <div
                      className={`absolute inset-0 bg-gray-200 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                    </div>

                    {/* Main image with fade-in animation */}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={`object-cover group-hover:scale-110 transition-all duration-700 ${isLoaded
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                        }`}
                      onLoad={() => handleImageLoad(image.src)}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
                    />

                    {/* Hover overlay with alt text */}
                    <div className={`absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${isLoaded ? '' : 'pointer-events-none'
                      }`}>
                      <span className="text-white text-sm font-light text-center px-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {image.alt}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={() => window.location.href = '/contact'}
            className="group relative overflow-hidden bg-gray-900 text-white font-light text-sm uppercase tracking-wider px-12 py-4 transition-all duration-300 hover:bg-gray-800"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Book This Tour</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhangNgaBaySection;
