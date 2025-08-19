"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHome, FaWifi, FaParking } from "react-icons/fa";
import ImageModal from "@/components/ImageModal";
import PageHeaderAnimation from "@/components/PageHeaderAnimation";

export default function HouseForRentPage() {
  const [currentHouseImage, setCurrentHouseImage] = useState(0);
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

  const houseImages = [
    // "/image/house-for-rent/house-example/house-paralex1.png",
    // "/image/house-for-rent/house-example/house-paralex2.png",
    // "/image/house-for-rent/house-example/house-paralex3.png",
    // "/image/house-for-rent/house-example/house-paralex4.png",
    // "/image/house-for-rent/house-example/house-paralex5.png",
    // "/image/house-for-rent/house-example/house-paralex6.png",
    "/image/house-for-rent/house-example/house-paralex7.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHouseImage((prev) => (prev + 1) % houseImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [houseImages.length]);

  // Parallax scrolling effect - SAME AS CONTACT AND DAY-TRIPS
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // Enhanced parallax effect for hero background images
      const parallaxElements = document.querySelectorAll(".parallax-bg");
      parallaxElements.forEach((element) => {
        const speed = 0.5; // Parallax speed
        const yPos = -(scrolled * speed); // NEGATIVE - moves up slower than scroll
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        (element as HTMLElement).style.willChange = "transform"; // Optimize for smooth animation
      });

      // Enhanced upward parallax effect for hero content (text moves upward when scrolling down)
      const heroContent = document.querySelector(".hero-content");
      if (heroContent) {
        const contentRate = scrolled * -0.3; // Increased rate for more noticeable effect
        (heroContent as HTMLElement).style.transform =
          `translateY(${contentRate}px)`;
        (heroContent as HTMLElement).style.willChange = "transform"; // Optimize for smooth animation
      }

      // Fade effect for hero overlay as user scrolls
      const heroOverlay = document.querySelector(".hero-overlay");
      if (heroOverlay) {
        const fadeStart = windowHeight * 0.3;
        const fadeEnd = windowHeight * 0.8;
        let opacity = 0.4;

        if (scrolled > fadeStart) {
          const fadeProgress = Math.min(
            (scrolled - fadeStart) / (fadeEnd - fadeStart),
            1
          );
          opacity = 0.4 + fadeProgress * 0.3; // Gradually darken
        }

        (heroOverlay as HTMLElement).style.backgroundColor =
          `rgba(0, 0, 0, ${opacity})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Fixed with Parallax - SAME AS CONTACT/DAY-TRIPS */}
      <section className="hero-section fixed inset-0 bg-white overflow-hidden z-0">
        {/* Background Image Carousel with Parallax */}
        <div className="absolute inset-0 h-screen overflow-hidden">
          <div className="parallax-bg absolute inset-0">
            {houseImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentHouseImage ? "opacity-100" : "opacity-0"
                }`}>
                <Image
                  src={image}
                  alt={`Garden House for Rent - View ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Overlay for text readability - SAME AS CONTACT/DAY-TRIPS */}
        <div className="hero-overlay absolute inset-0 bg-black/40 transition-all duration-300" />

        {/* Hero Content - Enhanced with Parallax */}
        <div
          className="hero-content absolute inset-0 flex items-center justify-center z-10"
          style={{ transform: "translateY(0px)", willChange: "transform" }}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <PageHeaderAnimation delay={600}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-wide">
                Garden House Rental
                <span className="block text-2xl md:text-3xl lg:text-4xl font-extralight mt-4 text-white/80">
                  Prime Thalang Location, Phuket
                </span>
              </h1>
            </PageHeaderAnimation>

            <PageHeaderAnimation delay={900}>
              <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Experience comfort and convenience in our beautiful garden
                house, perfectly located for exploring Phuket with premium
                amenities.
              </p>
            </PageHeaderAnimation>

            <PageHeaderAnimation delay={1200}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* Primary Glossy Button - Matching Homepage */}
                <button
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-md text-white hover:bg-white/20 font-medium px-12 py-4 transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl"
                  onClick={() => (window.location.href = "/contact")}>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent"></div>
                  <span className="relative z-10 text-lg tracking-wider uppercase">
                    Check Availability
                  </span>
                </button>

                {/* Secondary Button - Matching Homepage */}
                <button
                  className="group relative text-white/90 hover:text-white font-light text-lg tracking-wide transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("gallery")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }>
                  <span className="relative z-10">View Gallery</span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300"></div>
                </button>
              </div>
            </PageHeaderAnimation>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {houseImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentHouseImage ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrentHouseImage(index)}
            />
          ))}
        </div>
      </section>

      {/* Main Content - Positioned above hero - SAME AS CONTACT/DAY-TRIPS */}
      <main className="relative z-10 bg-gray-50" style={{ marginTop: "100vh" }}>
        {/* Property Overview - Minimal Style */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
                Garden House Style Resort
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Perfect accommodation for families and groups
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                  Property Features
                </h3>
                <ul className="space-y-4 text-gray-600 font-light">
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>Garden house style resort design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>Spacious family accommodation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>Private garden and outdoor space</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>Modern amenities included</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                  Rental Options
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-gray-200 pl-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      Daily Rental
                    </h4>
                    <p className="text-gray-600 font-light">
                      Perfect for short stays and vacation rentals
                    </p>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      Weekly Rental
                    </h4>
                    <p className="text-gray-600 font-light">
                      Ideal for extended holidays and longer stays
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Benefits - Minimal Style */}
        <section className="py-20 bg-gray-50 relative z-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
                Prime Thalang Location
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Strategically located for easy access to Phuket&apos;s best
                attractions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-full">
                    <FaHome className="text-lg text-gray-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-gray-900">
                    Beach Access
                  </h3>
                  <ul className="text-gray-600 font-light space-y-2 text-left">
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>5-10 minutes to Bangtao Beach</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Close to Surin Beach</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Near Layan Beach</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-full">
                    <FaWifi className="text-lg text-gray-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-gray-900">
                    Laguna Area
                  </h3>
                  <ul className="text-gray-600 font-light space-y-2 text-left">
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>5-10 minutes to Laguna complex</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Golf courses nearby</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Resort amenities access</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-full">
                    <FaParking className="text-lg text-gray-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-gray-900">
                    Shopping & Dining
                  </h3>
                  <ul className="text-gray-600 font-light space-y-2 text-left">
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Makro supermarket nearby</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Lotus shopping center</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>Robinson shopping center</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation - Minimal Style */}
        <section className="py-20 bg-white relative z-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
                Easy Transportation
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Convenient access to all of Phuket
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                  Travel Times
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-light text-gray-900">
                      Phuket Town
                    </span>
                    <span className="text-gray-600 font-light">20 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-light text-gray-900">
                      Phuket Airport
                    </span>
                    <span className="text-gray-600 font-light">25 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-light text-gray-900">
                      Patong Beach
                    </span>
                    <span className="text-gray-600 font-light">30 minutes</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                  Transportation Services
                </h3>
                <ul className="space-y-4 text-gray-600 font-light">
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>Airport transfer with child seats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>Daily beach transportation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>Tour pickup and drop-off</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* House Gallery - Minimal Style */}
        <section id="gallery" className="py-20 bg-gray-50 relative z-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
                House Gallery
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Explore our beautiful garden house and amenities
              </p>
            </div>

            {/* Gallery Grid - Minimal Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {houseImages.map((image, index) => {
                const imageTitle =
                  index === 0
                    ? "Garden View"
                    : index === 1
                      ? "Outdoor Space"
                      : index === 2
                        ? "Nature"
                        : index === 3
                          ? "Living Area"
                          : index === 4
                            ? "Bathroom"
                            : index === 5
                              ? "Bedroom"
                              : "Surroundings";

                return (
                  <div
                    key={image}
                    className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer group"
                    onClick={() =>
                      openImageModal(
                        image,
                        `${imageTitle} - Garden House Gallery`
                      )
                    }
                    title="Click to view full size image">
                    <div className="relative h-64">
                      <Image
                        src={image}
                        alt={`House Gallery ${index + 1} - ${imageTitle}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {imageTitle}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA - Minimal Style */}
        <section className="py-20 bg-white relative z-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">
              Interested in Our Garden House?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
              Contact us for availability, pricing, and booking information.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="bg-gray-900 text-white hover:bg-gray-800 font-light px-8 py-3 tracking-wide transition-colors duration-300"
                onClick={() => (window.location.href = "/contact")}>
                Check Availability
              </button>
              <button
                className="bg-white text-gray-900 hover:bg-gray-50 font-light px-8 py-3 tracking-wide border border-gray-200 transition-colors duration-300"
                onClick={() =>
                  window.open("https://wa.me/66850994775", "_blank")
                }>
                WhatsApp Now
              </button>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        <ImageModal
          isOpen={modalImage !== null}
          onClose={closeImageModal}
          imageSrc={modalImage?.src || ""}
          imageAlt={modalImage?.alt || ""}
        />
      </main>
    </div>
  );
}
