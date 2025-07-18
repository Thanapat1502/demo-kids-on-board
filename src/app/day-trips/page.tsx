"use client";

import { Button, Card, CardBody, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShip, FaSwimmer, FaCamera } from "react-icons/fa";
import { ContactFooter } from "@/components/ContactFooter";
import PageHeaderAnimation from "@/components/PageHeaderAnimation";
import ImageModal from "@/components/ImageModal";
import GalleryParallax from "@/components/GalleryParallax";
import DayTripActivitiesSection from "@/components/DayTripActivitiesSection";
import { useSmoothScroll } from "@/utils/smoothScroll";
import PhiPhiIslandSection from "@/components/PhiPhiIslandSection";
import SimilanIslandSection from "@/components/SimilanIslandSection";
import PhangNgaBaySection from "@/components/PhangNgaBaySection";
import { SectionSeparator } from "@/components/SectionSeparatetor";

const bannerImages = [
  {
    src: "/image/day-trips/destinations/phang-nga4.jpg",
    alt: "Phang Nga Bay - Limestone karsts and emerald waters",
  },
  {
    src: "/image/day-trips/destinations/phang-nga1.jpg",
    alt: "Phang Nga Bay ",
  },
  {
    src: "/image/day-trips/destinations/phang-nga2.jpg",
    alt: "Phang Nga Bay ",
  },
  {
    src: "/image/day-trips/destinations/phang-nga5.jpg",
    alt: "Phang Nga Bay ",
  },
  {
    src: "/image/day-trips/destinations/phang-nga3.jpg",
    alt: "Phang Nga Bay ",
  },
];

export default function DayTripsPage() {
  const [currentExperience, setCurrentExperience] = useState(0);
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

  const experiences = [
    {
      image: "/image/day-trips/example-parallex/daytrip-parallex1.png",
      title: "Amazing Phi Phi Experience",
    },
    {
      image: "/image/day-trips/example-parallex/daytrip-parallex2.png",
      title: "Phang Nga Adventure",
    },
    {
      image: "/image/day-trips/example-parallex/daytrip-parallex3.png",
      title: "Similan Diving Paradise",
    },
    {
      image: "/image/day-trips/example-parallex/daytrip-parallex4.png",
      title: "Family Fun Tours",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperience((prev) => (prev + 1) % experiences.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  return (
    <div className="min-h-screen bg-gray-50">
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
                Discover Amazing Islands
                <span className="block text-2xl md:text-3xl lg:text-4xl font-extralight mt-4 text-white/80">
                  Family-friendly tours and excursions with safe transportation and child seats
                </span>
              </h1>
            </PageHeaderAnimation>

            {/* <PageHeaderAnimation delay={900}>
              <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Safe, professional airport transfers with imported Britax child seats from Sweden
              </p>
            </PageHeaderAnimation> */}

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
                  <span className="relative z-10 text-lg tracking-wider uppercase">Book Your Advanture</span>
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
      {/* Hero Section */}
      {/* <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/day-trips/destinations/phi-phi1.jpg"
            alt="Day Trips Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full pt-20">
          <div className="text-center text-white px-4 max-w-4xl">
            <PageHeaderAnimation delay={300}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Discover
                <span className="block text-yellow-400">Amazing Islands</span>&
                Adventures
              </h1>
            </PageHeaderAnimation>

            <PageHeaderAnimation delay={600}>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Family-friendly tours and excursions with safe transportation
                and child seats
              </p>
            </PageHeaderAnimation>

            <PageHeaderAnimation delay={900}>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Chip color="warning" variant="solid" size="lg">
                  Phi Phi Island
                </Chip>
                <Chip color="warning" variant="solid" size="lg">
                  Phang Nga Bay
                </Chip>
                <Chip color="warning" variant="solid" size="lg">
                  Similan Islands
                </Chip>
              </div>
            </PageHeaderAnimation>

            <PageHeaderAnimation delay={1200}>
              <Button
                as={Link}
                href="/contact"
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg">
                Book Your Adventure
              </Button>
            </PageHeaderAnimation>
          </div>
        </div>
      </section> */}
      <DayTripActivitiesSection />
      <SectionSeparator />
      <PhangNgaBaySection />
      <SectionSeparator />
      <PhiPhiIslandSection openImageModal={openImageModal} />
      <SectionSeparator />
      <SimilanIslandSection openImageModal={openImageModal} />
      <ContactFooter
        title="Ready to Explore Phuket?"
        description="Contact us for package day trips and tour bookings. All tours
            include safe transportation with child seats"
        className="relative bg-blue-900 rounded-lg"
      />
      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage !== null}
        onClose={closeImageModal}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />

      {/* <div className="relative max-w-7xl mx-auto px-4 py-12">
        <section className="py-20 bg-gray-900 text-white overflow-hidden rounded-3xl mx-4 my-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Client Experiences
              </h2>
              <p className="text-xl text-gray-300">
                See what our happy families say about their adventures
              </p>
            </div>

            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                {experiences.map((experience, index) => (
                  <div
                    key={experience.title}
                    className={`flex-shrink-0 w-96 h-80 relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${index === currentExperience
                      ? "scale-105 shadow-2xl"
                      : "scale-100"
                      }`}>
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {`"Amazing experience with professional service and childsafety as priority"`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    500+
                  </div>
                  <p className="text-gray-300">Happy Families</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    100%
                  </div>
                  <p className="text-gray-300">Safety Record</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    5★
                  </div>
                  <p className="text-gray-300">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
}
