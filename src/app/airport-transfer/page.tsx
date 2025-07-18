"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ContactFooter } from "@/components/ContactFooter";
import ImageModal from "@/components/ImageModal";
import PageHeaderAnimation from "@/components/PageHeaderAnimation";
import OurFleetSection from "@/components/OurFleetSection";
import { SectionSeparator } from "@/components/SectionSeparatetor";
import ChildSeatSection from "@/components/ChildSeatSection";
import AirportTransferDestinationSection from "@/components/AirportTransferDestinationSection";
import { useSmoothScroll } from "@/utils/smoothScroll";

export default function AirportTransferPage() {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [loadedBanners, setLoadedBanners] = useState<Set<number>>(new Set());
  const [currentBanner, setCurrentBanner] = useState(0);
  const { scrollTo } = useSmoothScroll();

  const openImageModal = (imageSrc: string, imageAlt: string) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  // Banner images for airport transfer
  const bannerImages = [
    {
      src: "/image/sections/airport-transfer/3.jpg",
      alt: "Airport Transfer Service with Child Seats"
    },
    {
      src: "/image/sections/airport-transfer/1.jpg",
      alt: "Professional Airport Transfer Phuket"
    },
    {
      src: "/image/sections/airport-transfer/2.jpg",
      alt: "Safe Family Airport Transfer"
    }
  ];

  // Handle banner image loading
  const handleBannerLoad = (index: number) => {
    setLoadedBanners(prev => new Set([...prev, index]));
  };

  // Auto-rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // Parallax effect ONLY for hero background images
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((element) => {
        const speed = 0.5; // Parallax speed
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Upward parallax effect for hero content (text moves opposite direction)
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        const contentRate = scrolled * -0.2; // Negative for upward movement, slower than background
        (heroContent as HTMLElement).style.transform = `translateY(${contentRate}px)`;
      }

      // Fade effect for hero overlay as user scrolls
      const heroOverlay = document.querySelector('.hero-overlay');
      if (heroOverlay) {
        const fadeStart = windowHeight * 0.3;
        const fadeEnd = windowHeight * 0.8;
        let opacity = 0.4;

        if (scrolled > fadeStart) {
          const fadeProgress = Math.min((scrolled - fadeStart) / (fadeEnd - fadeStart), 1);
          opacity = 0.4 + (fadeProgress * 0.3); // Gradually darken
        }

        (heroOverlay as HTMLElement).style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Fixed with Parallax */}
      <section className="hero-section fixed inset-0 bg-white overflow-hidden z-0">
        {/* Hero Banner Carousel - Always Full Height */}
        <div className="absolute inset-0 h-screen overflow-hidden">
          {bannerImages.map((banner, index) => {
            const isLoaded = loadedBanners.has(index);
            const isActive = index === currentBanner;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
              >
                {/* Loading placeholder */}
                <div
                  className={`absolute inset-0 bg-gray-300 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>

                {/* Hero image with smooth loading */}
                <div className="parallax-bg absolute inset-0">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    className={`object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    priority={index === 0}
                    onLoad={() => handleBannerLoad(index)}
                    sizes="100vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Overlay for text readability */}
        <div className="hero-overlay absolute inset-0 bg-black/40 transition-all duration-300" />

        {/* Hero Content Overlay - Minimal Design */}
        <div className="hero-content absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-5xl mx-auto px-4 text-center">

            <PageHeaderAnimation delay={600}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-wide">
                Airport Transfer
                <span className="block text-2xl md:text-3xl lg:text-4xl font-extralight mt-4 text-white/80">
                  Experienced Guide And Driver
                </span>
              </h1>
            </PageHeaderAnimation>

            <PageHeaderAnimation delay={900}>
              <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Safe, professional airport transfers with imported Britax child seats from Sweden
              </p>
            </PageHeaderAnimation>

            <PageHeaderAnimation delay={1200}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* Primary Glossy Button */}
                <button
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-md text-white hover:bg-white/20 font-medium px-12 py-4 transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  {/* Glossy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10"></div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                  {/* Glass reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent"></div>
                  <span className="relative z-10 text-lg tracking-wider uppercase">Book Transfer Now</span>
                </button>

                {/* Secondary Minimal Button */}
                <button
                  className="group relative text-white/90 hover:text-white font-light text-lg tracking-wide transition-all duration-300"
                  onClick={() => { scrollTo('airport-transfer-destination') }}
                >
                  <span className="relative z-10">View Destinations</span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300"></div>
                </button>
              </div>
            </PageHeaderAnimation>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentBanner
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Spacer to push content below fixed hero */}
      <div className="h-screen"></div>

      {/* Main Content */}
      <div className="bg-white relative z-20 pt-8">
        <OurFleetSection openImageModal={openImageModal} />
      </div>
      <SectionSeparator />
      <ChildSeatSection openImageModal={openImageModal} />
      <SectionSeparator />
      <AirportTransferDestinationSection />
      <ContactFooter
        title=" Ready to Book Your Airport Transfer?"
        description=" Contact us for pricing and availability. Price depends on hotel
            location."
        className="relative bg-blue-900"
      />

      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage !== null}
        onClose={closeImageModal}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />
    </main>
  );
}
