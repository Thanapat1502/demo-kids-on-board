"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import GalleryModal from "./GalleryModal";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryParallaxProps {
  images: GalleryImage[];
  title: string;
  description?: string;
  className?: string;
}

export default function GalleryParallax({
  images,
  title,
  description,
  className = "",
}: GalleryParallaxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialIndex, setModalInitialIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    goToSlide(newIndex);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const openGalleryModal = (imageIndex: number) => {
    setModalInitialIndex(imageIndex);
    setIsModalOpen(true);
    setIsAutoPlaying(false); // Pause auto-play when modal opens
  };

  const closeGalleryModal = () => {
    setIsModalOpen(false);
    setIsAutoPlaying(true); // Resume auto-play when modal closes
  };

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Main Image Container with Parallax Effect */}
      <div
        className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => openGalleryModal(currentIndex)}>
        {/* Background Images with Parallax */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Click to expand hint - appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end pointer-events-none">
          <div className="p-8 text-white w-full">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              {title}
            </h3>
            {description && (
              <p className="text-lg md:text-xl text-gray-200 drop-shadow-lg max-w-2xl">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
              aria-label="Previous image">
              <ChevronLeftIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
              aria-label="Next image">
              <ChevronRightIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        <GalleryModal
          isOpen={isModalOpen}
          onClose={closeGalleryModal}
          images={images}
          initialIndex={modalInitialIndex}
          title={title}
        />
      </div>
    </div>
  );
}
