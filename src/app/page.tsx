"use client";

"use client";

import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaShieldAlt, FaBaby, FaCar } from "react-icons/fa";
import { ContactFooter } from "@/components/ContactFooter";
import ImageModal from "@/components/ImageModal";
import PageHeaderAnimation from "@/components/PageHeaderAnimation";
export default function Home() {
  const [currentDestination, setCurrentDestination] = useState(0);
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

  const destinations = [
    {
      name: "Big Buddha Phuket",
      image: "/image/home/destinations/1big-buddha-phuket.png",
    },
    {
      name: "Chalong Temple",
      image: "/image/home/destinations/2chalong-temple.png",
    },
    {
      name: "Phuket Old Town",
      image: "/image/home/destinations/3phuket-old-town.png",
    },
    {
      name: "Promthep Cape",
      image: "/image/home/destinations/4promthep-cape.png",
    },
    {
      name: "Visit Elephants",
      image: "/image/home/destinations/5visit-elephants.png",
    },
    {
      name: "Mini Zoo In Phuket",
      image: "/image/home/destinations/6mini-zoo -in-phuket.png",
    },
    {
      name: "Sunset View Point",
      image: "/image/home/destinations/7sunset-view-point.png",
    },
    { name: "View Point", image: "/image/home/destinations/8view-point.png" },
  ];
  const seatOptions = [
    {
      name: "Infant Seat",
      image: "/image/home/childseat/childseat_option_1.png",
      description: "Premium Britax rear-facing seat for newborns to 15 months",
      type: "NEWBORN READY",
      weight: "0-13kg",
      age: "0-15m",
      helpText1: "✓ Rear-facing safety",
      helpText2: "✓ Newborn to 15 months",
    },
    {
      name: "Convertible Seat",
      image: "/image/home/childseat/childseat_option2.png",
      description:
        "Versatile seat that adapts as your toddler grows, with multiple positions",
      type: "CONVERTIBLE",
      weight: "9-18kg",
      age: "9m-4y",
      helpText1: "✓ Rear-facing safety",
      helpText2: "✓ 9 months to 4 years",
    },
    {
      name: "Baby Seat",
      image: "/image/home/childseat/childseat_option3.png",
      description:
        "Perfect positioning for proper seat belt fit and comfort for growing kids",
      type: "BOOSTER",
      weight: "15-25kg",
      age: "3-6y",
      helpText1: "✓ Rear-facing safety",
      helpText2: "✓ 3 to 6 years",
    },
    {
      name: "High Back",
      image: "/image/home/childseat/childseat_option4.png",
      description:
        "Advanced protection with high back design for older children's safety",
      type: "HIGH BACK",
      weight: "18-30kg",
      age: "4-6y",
      helpText1: "✓ Rear-facing safety",
      helpText2: "✓ 4 to 6 years",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [destinations.length]);

  return (
    <main className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <PageHeaderAnimation delay={300}>
                <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm rounded-full px-4 py-2 text-yellow-300 text-sm font-medium">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  #1 Child Seat Service in Phuket
                </div>
              </PageHeaderAnimation>

              <PageHeaderAnimation delay={600}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Safe Travel with
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Premium Child Seats
                  </span>
                  in Paradise
                </h1>
              </PageHeaderAnimation>

              <PageHeaderAnimation delay={900}>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Experience worry-free family travel with our imported Britax
                  child seats from Sweden. Professional service, maximum safety,
                  unforgettable memories.
                </p>
              </PageHeaderAnimation>

              <PageHeaderAnimation delay={1200}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    as={Link}
                    href="/contact"
                    size="lg"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      Book Your Journey
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </Button>
                  <Button
                    as={Link}
                    href="/airport-transfer"
                    size="lg"
                    variant="bordered"
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300">
                    Airport Transfer
                  </Button>
                </div>
              </PageHeaderAnimation>

              <PageHeaderAnimation delay={1500}>
                <div className="flex items-center gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">
                      500+
                    </div>
                    <div className="text-sm text-blue-200">Happy Families</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">5★</div>
                    <div className="text-sm text-blue-200">Safety Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">
                      100%
                    </div>
                    <div className="text-sm text-blue-200">Satisfaction</div>
                  </div>
                </div>
              </PageHeaderAnimation>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="relative">
              <PageHeaderAnimation delay={800}>
                <div className="grid grid-cols-1 gap-6">
                  {/* Main Feature Card */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                        <FaShieldAlt className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Premium Safety
                        </h3>
                        <p className="text-blue-200">Imported Britax Seats</p>
                      </div>
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      Swedish-engineered child seats meeting the highest
                      international safety standards for your peace of mind.
                    </p>
                  </div>

                  {/* Secondary Feature Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                        <FaCar className="text-xl text-blue-300" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">
                        Professional Drivers
                      </h4>
                      <p className="text-sm text-blue-200">
                        Licensed & experienced
                      </p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                        <FaBaby className="text-xl text-green-300" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">
                        All Ages
                      </h4>
                      <p className="text-sm text-blue-200">0-6 years covered</p>
                    </div>
                  </div>
                </div>
              </PageHeaderAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Child Seats Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-6 py-3 text-blue-700 font-medium mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Premium Child Safety Solutions
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Taxi with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rear-Facing
              </span>
              <br />
              Child Seats Available in Phuket!
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the ultimate in child safety with our premium imported
              Britax child seats from Sweden. Engineered for maximum protection
              and comfort for your little ones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seatOptions.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group relative bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/30 overflow-hidden">
                  {/* Image Section */}
                  <div className="p-6 pb-4">
                    <div
                      className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group/image bg-gray-50"
                      onClick={() => openImageModal(item.image, item.name)}
                      title="Click to view full size image">
                      <Image
                        src={item.image}
                        alt={`${item.name} - Britax child seat for ${item.age} (${item.weight})`}
                        fill
                        className="object-cover transition-all duration-500 group-hover/image:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover/image:scale-100 transition-transform duration-300">
                          <svg
                            className="w-6 h-6 text-white"
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

                      {/* Weight Badge */}
                      <div className="absolute top-3 right-3">
                        <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                          {item.weight}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="px-6 pb-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                        Age Range: {item.age}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                        Weight: {item.weight}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                        Swedish Engineering
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        {item.type}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-300">Britax</div>
                        <div className="text-sm font-bold text-white">
                          Sweden
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Car Options Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white/80 font-medium mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              Premium Fleet Services
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Private Transfer with
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Safety Child Seats
              </span>
              for Kids
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Choose from our premium fleet of comfortable and safe vehicles,
              all equipped with professional-grade child seats for the ultimate
              family travel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Luxury Minibus */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <div
                className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group/image mb-6"
                onClick={() =>
                  openImageModal(
                    "/image/home/car-option/luxury-minibus.png",
                    "Luxury Minibus - Spacious vehicle for larger families with multiple child seats"
                  )
                }
                title="Click to view full size image">
                <Image
                  src="/image/home/car-option/luxury-minibus.png"
                  alt="Luxury Minibus - Spacious vehicle for larger families with multiple child seats"
                  fill
                  className="object-cover transition-transform duration-500 group-hover/image:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover/image:scale-100 transition-transform duration-300">
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

                {/* Capacity Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    8 Seats
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  Luxury Minibus
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Spacious and comfortable minibus perfect for larger families
                  and groups with multiple child seats
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-gray-300 font-semibold text-sm">
                      Capacity
                    </div>
                    <div className="text-white text-lg font-bold">
                      6-8 People
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-gray-300 font-semibold text-sm">
                      Child Seats
                    </div>
                    <div className="text-white text-lg font-bold">Up to 4</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Air Conditioning</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Professional Driver</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Multiple Child Seats</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury SUV */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <div
                className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group/image mb-6"
                onClick={() =>
                  openImageModal(
                    "/image/home/car-option/luxury-suv.png",
                    "Luxury SUV - Premium vehicle with advanced safety features for families"
                  )
                }
                title="Click to view full size image">
                <Image
                  src="/image/home/car-option/luxury-suv.png"
                  alt="Luxury SUV - Premium vehicle with advanced safety features for families"
                  fill
                  className="object-cover transition-transform duration-500 group-hover/image:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover/image:scale-100 transition-transform duration-300">
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

                {/* Capacity Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    5 Seats
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  Luxury SUV
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Premium SUV with advanced safety features and comfortable
                  seating for smaller families
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-gray-300 font-semibold text-sm">
                      Capacity
                    </div>
                    <div className="text-white text-lg font-bold">
                      4-5 People
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-gray-300 font-semibold text-sm">
                      Child Seats
                    </div>
                    <div className="text-white text-lg font-bold">Up to 2</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Premium Comfort</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Advanced Safety</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Luxury Interior</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Children on Board */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <div
                className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group/image mb-6"
                onClick={() =>
                  openImageModal(
                    "/image/home/car-option/childrenonboard.png",
                    "Children on Board Vehicle - Specially equipped for family travel with child seats"
                  )
                }
                title="Click to view full size image">
                <Image
                  src="/image/home/car-option/childrenonboard.png"
                  alt="Children on Board Vehicle - Specially equipped for family travel with child seats"
                  fill
                  className="object-cover transition-transform duration-500 group-hover/image:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover/image:scale-100 transition-transform duration-300">
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

                {/* Safety Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Safety First
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  Children on Board
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Specially equipped vehicles with clear safety signage and
                  child-friendly features for family travel
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-gray-300 font-semibold text-sm">
                      Safety
                    </div>
                    <div className="text-white text-lg font-bold">Premium</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="text-gray-300 font-semibold text-sm">
                      Signage
                    </div>
                    <div className="text-white text-lg font-bold">Visible</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Safety Signage</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Child-Friendly Features</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Family Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features - Why Choose Our Child Seat Service */}
      <section className="py-16 !bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Child Seat Service?
            </h2>
            <p className="text-lg text-gray-600">
              Safety and convenience for your family vacation in Phuket
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaShieldAlt className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Imported Britax Seats
                </h3>
                <p className="text-gray-600 text-lg">
                  We use premium Britax child seats imported from Sweden for
                  maximum safety and comfort
                </p>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaBaby className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  All Ages Covered
                </h3>
                <p className="text-gray-600 text-lg">
                  Child seats available for newborns to 6 years old, including
                  rear-facing options
                </p>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaCar className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Professional Service
                </h3>
                <p className="text-gray-600 text-lg">
                  Experienced drivers with proper child seat installation and
                  travel insurance included
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Destinations - Moved to 3rd section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Top Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the beauty of Thailand with our family-friendly tours and
              safe transportation
            </p>
          </div>

          {/* Auto-sliding Destinations */}
          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentDestination * (320 + 24)}px)`,
                width: `${destinations.length * (320 + 24)}px`,
              }}>
              {destinations.map((destination) => (
                <div
                  key={destination.name}
                  className="flex-shrink-0 w-80 h-96 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={destination.image}
                    alt={`${destination.name} - Popular Phuket destination with child seat transport`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold mb-2 text-blue-900 bg-white/90 px-3 py-1 rounded-lg">
                      {destination.name}
                    </h3>
                    <Button
                      as={Link}
                      href="/day-trips"
                      size="sm"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                      aria-label="Book tours to this destination with child seat safety">
                      Book Tour
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentDestination ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentDestination(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phuket Ferry Tickets Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/home/phuket-ferry.png"
            alt="Phuket Ferry Services - Island hopping with child seat safety"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Phuket Ferry Tickets
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Book your ferry tickets to nearby islands with our convenient
                booking service. Safe transportation to the pier with child
                seats included.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-lg">
                    Ferry tickets to Phi Phi Island
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-lg">Speed boat tickets available</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-lg">
                    Transportation to pier included
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-lg">Child seats for safe travel</span>
                </li>
              </ul>
              <Button
                as={Link}
                href="/contact"
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3">
                Book Ferry Tickets
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Popular Ferry Routes
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <span className="font-semibold">
                      Phuket → Phi Phi Island
                    </span>
                    <span className="text-yellow-400">Available Daily</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <span className="font-semibold">Phuket → Krabi</span>
                    <span className="text-yellow-400">Available Daily</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <span className="font-semibold">Phuket → Koh Lanta</span>
                    <span className="text-yellow-400">Seasonal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete travel solutions for families visiting Phuket
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow !bg-white">
              <CardHeader className="pb-0 text-blue-900">
                <h3 className="text-xl font-semibold">Airport Transfer</h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">
                  Safe airport transfers to/from hotels in Phuket, Khao Lak,
                  Krabi, and Koh Lanta with child seats
                </p>
                <Button
                  as={Link}
                  href="/airport-transfer"
                  color="primary"
                  variant="flat"
                  size="sm"
                  aria-label="Learn more about airport transfer services with child seats">
                  Airport Transfer Details
                </Button>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow !bg-white">
              <CardHeader className="pb-0">
                <h3 className="text-xl font-semibold text-blue-900">
                  Day Trips & Tours
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">
                  Family-friendly tours to Phi Phi Island, Phang Nga Bay,
                  Similan Islands with safe transportation
                </p>
                <Button
                  as={Link}
                  href="/day-trips"
                  color="primary"
                  variant="flat"
                  size="sm"
                  aria-label="Explore day trips and tours with child seat safety">
                  Explore Day Trips
                </Button>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow !bg-white">
              <CardHeader className="pb-0">
                <h3 className="text-xl font-semibold text-blue-900">
                  Phuket City Tour
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">
                  Private driver and guide for Big Buddha, Chalong Temple, Old
                  Town, and scenic viewpoints
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    6 hours: 1-4 persons = 2,900 THB
                  </p>
                  <p className="text-sm text-gray-500">
                    6 hours: 5-10 persons = 3,500 THB
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactFooter
        title="Ready to Book Your Safe Journey?"
        description="Contact us for bookings and inquiries. Payment due in cash on site or transfer via Wise."
        className="bg-blue-900"
      />

      {/* Image Modal */}
      <ImageModal
        isOpen={modalImage !== null}
        onClose={closeImageModal}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Licensed & Professional
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🏆</div>
              <div>
                <p className="font-semibold text-gray-900">TAT Licensed</p>
                <p className="text-gray-600">License #32/01713</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-3xl">🛡️</div>
              <div>
                <p className="font-semibold text-gray-900">Travel Insurance</p>
                <p className="text-gray-600">Included with all services</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-3xl">⭐</div>
              <div>
                <p className="font-semibold text-gray-900">Experienced</p>
                <p className="text-gray-600">Professional drivers & guides</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
