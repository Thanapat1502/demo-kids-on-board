"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ContactFooter } from "@/components/ContactFooter";
import ImageModal from "@/components/ImageModal";
import PageHeaderAnimation from "@/components/PageHeaderAnimation";
import AboutUsSection from "@/components/AboutUsSection";
import CityTourSection from "@/components/CityTourSection";
import DestinationGallerySection from "@/components/DestinationGallerySection";
import FerryServiceSection from "@/components/FerryServiceSection";
import { SectionSeparator } from "@/components/SectionSeparatetor";
import OurFleetSection from "@/components/OurFleetSection";
import ChildSeatSection from "@/components/ChildSeatSection";

export default function Home() {
  const [loadedBanners, setLoadedBanners] = useState<Set<number>>(new Set());
  const [currentBanner, setCurrentBanner] = useState(0);
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openImageModal = (imageSrc: string, imageAlt: string) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  // Handle banner image loading
  const handleBannerLoad = (index: number) => {
    setLoadedBanners(prev => new Set([...prev, index]));
  };

  // Banner images for carousel
  const bannerImages = [
    {
      src: "/image/main-banner/banner6.jpg",
      alt: "Professional drivers with child safety expertise"
    },
    {
      src: "/image/main-banner/banner5.jpg",
      alt: "Premium child seat service - Safe family travel in Phuket"
    },
    {
      src: "/image/main-banner/banner7.jpg",
      alt: "Luxury vehicles equipped with premium child seats"
    },
    {
      src: "/image/main-banner/banner1.jpg",
      alt: "Premium child seat service - Safe family travel in Phuket"
    },
    {
      src: "/image/main-banner/banner2.jpg",
      alt: "Professional drivers with child safety expertise"
    },
    {
      src: "/image/main-banner/banner3.jpg",
      alt: "Luxury vehicles equipped with premium child seats"
    },
    {
      src: "/image/main-banner/banner4.jpg",
      alt: "Family-friendly transportation services in Thailand"
    },

  ];



  // Banner carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change banner every 5 seconds
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Fixed Hero with Fleet Section Overlay Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // Hero background images parallax - move upward (opposite to scroll)
      const heroElements = document.querySelectorAll('.parallax-bg');
      heroElements.forEach((element) => {
        const rate = scrolled * -0.3; // Negative for upward movement
        (element as HTMLElement).style.transform = `translateY(${rate}px) scale(1.1)`;
      });

      // Hero content moves upward slower for depth effect
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        const contentRate = scrolled * -0.2; // Negative for upward movement, slower than background
        (heroContent as HTMLElement).style.transform = `translateY(${contentRate}px)`;
      }

      // Fleet section slides up to overlay hero when scrolling
      const fleetSection = document.querySelector('.fleet-section');
      if (fleetSection) {
        // Fleet section starts below viewport and slides up to overlay
        const fleetStart = windowHeight * 0.7; // Start appearing at 70% scroll
        if (scrolled > fleetStart) {
          const progress = (scrolled - fleetStart) / (windowHeight * 0.3);
          const translateY = Math.max(-windowHeight * 0.3 * progress, -windowHeight * 0.3);
          (fleetSection as HTMLElement).style.transform = `translateY(${translateY}px)`;
        } else {
          // Keep fleet section below viewport when at top
          (fleetSection as HTMLElement).style.transform = 'translateY(0px)';
        }
      }

      // Fade effect for hero overlay as fleet section approaches
      const heroOverlay = document.querySelector('.hero-overlay');
      if (heroOverlay) {
        const fadeStart = windowHeight * 0.6;
        const fadeEnd = windowHeight * 1.0;
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
      {/* Hero Banner Section - Always Full Height */}
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

          {/* Dynamic Overlay for text readability */}
          <div className="hero-overlay absolute inset-0 bg-black/40 transition-all duration-300" />

          {/* Hero Content Overlay - Minimal Design */}
          <div className="hero-content absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-5xl mx-auto px-4 text-center">

              <PageHeaderAnimation delay={600}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-wide">
                  Phuket Family Transport
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-extralight mt-4 text-white/80">
                    Premium Child Seat Service
                  </span>
                </h1>
              </PageHeaderAnimation>

              <PageHeaderAnimation delay={900}>
                <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Safe, professional family transport with imported Britax child seats from Sweden
                </p>
              </PageHeaderAnimation>

              <PageHeaderAnimation delay={1200}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  {/* Primary Glossy Blur Button */}
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
                    <span className="relative z-10 text-lg tracking-wider uppercase">Book Now</span>
                  </button>

                  {/* Secondary Minimal Button */}
                  <button
                    className="group relative text-white/90 hover:text-white font-light text-lg tracking-wide transition-all duration-300"
                    onClick={() => window.location.href = '/airport-transfer'}
                  >
                    <span className="relative z-10">Airport Transfer</span>
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
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentBanner ? 'bg-white' : 'bg-white/50'
                  }`}
                onClick={() => setCurrentBanner(index)}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-16 z-20">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to account for fixed hero - Fleet section starts below viewport */}
      <div className="h-screen"></div>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Elegant Separator */}
      <SectionSeparator />

      {/* City Tour Service Section */}
      <CityTourSection openImageModal={openImageModal} />

      <SectionSeparator />

      {/* Our Fleet Section - Appears only when scrolling */}
      <OurFleetSection openImageModal={openImageModal} />

      <SectionSeparator />

      {/* Child Seats Section */}
      <ChildSeatSection openImageModal={openImageModal} />
      <SectionSeparator />
      {/* Destination Gallery */}
      <DestinationGallerySection
        openImageModal={openImageModal}
      />
      <SectionSeparator />

      {/* Ferry Services Section */}
      <FerryServiceSection />

      <SectionSeparator />
      {/* Contact CTA */}
      <ContactFooter
        title="Ready to Book Your Safe Journey?"
        description="Contact us for bookings and inquiries. Payment due in cash on site or transfer via Wise."
        className="relative bg-blue-900"
      />

      {/* Image Modal */}
      < ImageModal
        isOpen={modalImage !== null
        }
        onClose={closeImageModal}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />

      {/* Trust Indicators - MEKHE Style */}
      {/* <section className="py-20 bg-gray-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Licensed & Professional
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-full">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">TAT Licensed</h3>
              <p className="text-gray-600">License #32/01713</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-full">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Travel Insurance</h3>
              <p className="text-gray-600">Included with all services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-full">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Experienced</h3>
              <p className="text-gray-600">Professional drivers & guides</p>
            </div>
          </div>
        </div>
      </section> */}
    </main >
  );
}
