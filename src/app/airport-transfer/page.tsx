"use client";

import { Card, CardBody, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaPlane,
  FaMapMarkerAlt,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { ContactFooter } from "@/components/ContactFooter";
import ImageModal from "@/components/ImageModal";
import PageHeaderAnimation from "@/components/PageHeaderAnimation";

export default function AirportTransferPage() {
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
  const seatOptions = [
    {
      name: "Rear Facing Seat",
      image: "/image/airport-tranfer/seat-option/seat1.png",
      p1: "Britax rear facing car seat",
      p2: "0.6 - 6 years",
      p3: "Recommended until age 4",
    },
    {
      name: "Forward Facing",
      image: "/image/airport-tranfer/seat-option/seat2.png",
      p1: "Rear or forward car seat",
      p2: "1 - 6 years",
      p3: "Flexible positioning",
    },
    {
      name: "Baby Car Seat",
      image: "/image/airport-tranfer/seat-option/seat3.png",
      p1: "Baby car seat for newborns",
      p2: "Up to 12 months",
      p3: "Maximum safety",
    },
    {
      name: "Booster Seat",
      image: "/image/airport-tranfer/seat-option/seat4.png",
      p1: "Booster car seat for children",
      p2: "4 - 8 years",
      p3: "Comfort & safety",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
                  Premium Airport Transfer Service
                </div>
              </PageHeaderAnimation>

              <PageHeaderAnimation delay={600}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Airport Transfer with
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Child Seats
                  </span>
                  in Phuket
                </h1>
              </PageHeaderAnimation>

              <PageHeaderAnimation delay={900}>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Safe and comfortable airport transfers with imported Britax
                  child seats. Professional service from Phuket Airport to your
                  destination.
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
                      Book Transfer Now
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
                    href="#destinations"
                    size="lg"
                    variant="bordered"
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300">
                    View Destinations
                  </Button>
                </div>
              </PageHeaderAnimation>

              <PageHeaderAnimation delay={1500}>
                <div className="flex items-center gap-8 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">
                      24/7
                    </div>
                    <div className="text-sm text-blue-200">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">5★</div>
                    <div className="text-sm text-blue-200">Safety Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">
                      100%
                    </div>
                    <div className="text-sm text-blue-200">Reliable</div>
                  </div>
                </div>
              </PageHeaderAnimation>
            </div>

            {/* Right Content - Destination Cards */}
            <div className="relative">
              <PageHeaderAnimation delay={800}>
                <div className="grid grid-cols-1 gap-6">
                  {/* Main Destination Card */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                        <FaPlane className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Phuket Airport
                        </h3>
                        <p className="text-blue-200">Main Hub</p>
                      </div>
                    </div>
                    <p className="text-blue-100 leading-relaxed">
                      Direct transfers from Phuket International Airport to all
                      major destinations with professional child seat
                      installation.
                    </p>
                  </div>

                  {/* Secondary Destination Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                        <FaMapMarkerAlt className="text-xl text-blue-300" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">
                        Khao Lak
                      </h4>
                      <p className="text-sm text-blue-200">Beach Resort Area</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                        <FaUmbrellaBeach className="text-xl text-green-300" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">
                        Krabi & Islands
                      </h4>
                      <p className="text-sm text-blue-200">Island Paradise</p>
                    </div>
                  </div>
                </div>
              </PageHeaderAnimation>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Service Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Airport Transfer Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comfortable airport transfer with child seats, nice and
              safe. Experienced guide and driver to/from hotels in Phuket, Khao
              Lak, Krabi Ao-Nang, Koh Lanta or others on request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaShieldAlt className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Safety First
                </h3>
                <p className="text-gray-600 text-lg">
                  We recommend children travel rear facing until age 4. Imported
                  Britax &quot;Nordic Freeway&quot; seats from Sweden.
                </p>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaUsers className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Big Vehicles
                </h3>
                <p className="text-gray-600 text-lg">
                  We use large, comfortable vehicles for service and offer child
                  seats for children 0-6 years old in the car.
                </p>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaClock className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Professional Service
                </h3>
                <p className="text-gray-600 text-lg">
                  Experienced drivers and guides with proper child seat
                  installation and travel insurance included.
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Child Seat Types */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden mb-16">
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
                Child Seat{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Options
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Professional child seats for all ages - imported from Sweden for
                maximum safety and comfort during your airport transfer.
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
                          alt={`${item.name} - ${item.p1} for ${item.p2}`}
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

                        {/* Age Badge */}
                        <div className="absolute top-3 right-3">
                          <div className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            {item.p2}
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
                          {item.p1}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                          Age Range: {item.p2}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                          Safety: {item.p3}
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
                          Premium
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

        {/* Vehicle Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vehicle Fleet
            </h2>
            <p className="text-lg text-gray-600">
              Comfortable and spacious vehicles for families of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow !bg-white">
              <CardBody>
                <div
                  className="relative w-full h-64 mb-6 rounded-lg overflow-hidden group/image"
                  onClick={() =>
                    openImageModal(
                      "/image/airport-tranfer/car-option/car1.png",
                      "Comfortable Minivan - Perfect for families and groups"
                    )
                  }
                  title="Click to view full size image">
                  <Image
                    src="/image/airport-tranfer/car-option/car1.png"
                    alt="Comfortable Minivan"
                    fill
                    className="object-cover cursor-pointer transition-transform duration-500 group-hover/image:scale-110"
                  />

                  {/* Click to zoom indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
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
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Comfortable Minivan
                  </h3>
                  <p className="text-gray-600">
                    Perfect for families and groups
                  </p>
                </div>
                <ul className="text-gray-600 space-y-1">
                  <li>• Spacious interior for luggage</li>
                  <li>• Air conditioning</li>
                  <li>• Multiple child seat installation</li>
                  <li>• Professional driver</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow !bg-white">
              <CardBody>
                <div
                  className="relative w-full h-64 mb-6 rounded-lg overflow-hidden group/image"
                  onClick={() =>
                    openImageModal(
                      "/image/airport-tranfer/car-option/car2.png",
                      "Luxury SUV - Premium comfort for smaller families"
                    )
                  }
                  title="Click to view full size image">
                  <Image
                    src="/image/airport-tranfer/car-option/car2.png"
                    alt="Luxury SUV"
                    fill
                    className="object-cover cursor-pointer transition-transform duration-500 group-hover/image:scale-110"
                  />

                  {/* Click to zoom indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
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
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    Luxury SUV
                  </h3>
                  <p className="text-gray-600">
                    Premium comfort for smaller families
                  </p>
                </div>
                <ul className="text-gray-600 space-y-1">
                  <li>• Premium comfort and style</li>
                  <li>• Advanced safety features</li>
                  <li>• Child seat compatible</li>
                  <li>• Experienced driver</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Airport Transfer Rates
            </h2>
            <p className="text-lg text-gray-600">
              Taxi with child seat - From or to Phuket Airport
            </p>
          </div>

          <Card className="p-6 !bg-white">
            <CardBody>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-3 px-4 font-semibold text-gray-900">
                        Destination
                      </th>
                      <th className="py-3 px-4 font-semibold text-gray-900 text-center">
                        1-3 Persons
                      </th>
                      <th className="py-3 px-4 font-semibold text-gray-900 text-center">
                        4-7 Persons
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Maikhao Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,000 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,200 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Naithon Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        800 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,000 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Ao Por Pier</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,200 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,400 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Layan Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,200 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,400 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Phuket Town</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,200 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,400 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Rassada Pier</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,200 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,400 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Koh Sirey Bay</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,200 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,400 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Bang Tao Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,200 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,400 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Surin Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,200 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,400 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Kamala Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,200 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-blue-600">
                        1,400 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Chalong Bay</td>
                      <td className="py-3 px-4 text-center font-semibold text-orange-600">
                        1,400 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-orange-600">
                        1,600 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Patong Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-orange-600">
                        1,400 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-orange-600">
                        1,600 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Kata-Karon Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-orange-600">
                        1,400 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-orange-600">
                        1,600 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Rawai Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-orange-600">
                        1,400 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-orange-600">
                        1,600 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Tritrang Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-red-600">
                        1,500 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-red-600">
                        1,600 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">Nai Harn Beach</td>
                      <td className="py-3 px-4 text-center font-semibold text-red-600">
                        1,500 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-red-600">
                        1,600 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">
                        Ao Sane (Baan Krathing)
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-red-600">
                        1,600 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-red-600">
                        1,700 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-black">
                        NaTai Beach (Phang Nga)
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-red-600">
                        1,600 THB
                      </td>
                      <td className="py-3 px-4 text-center font-semibold text-red-600">
                        1,800 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 bg-yellow-50">
                      <td className="py-3 px-4 text-black">
                        Khao Lak (Phang Nga)
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-purple-600">
                        2,500 THB
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-purple-600">
                        2,700 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 bg-yellow-50">
                      <td className="py-3 px-4 text-black">
                        Koh Kho Khao (at Pier)
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-purple-600">
                        3,000 THB
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-purple-600">
                        3,500 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 bg-yellow-50">
                      <td className="py-3 px-4 text-black">
                        Khao Sok National Park
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-purple-600">
                        3,900 THB
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-purple-600">
                        4,200 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 bg-yellow-50">
                      <td className="py-3 px-4 text-black">
                        Ao Nang, Krabi Town
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-purple-600">
                        3,500 THB
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-purple-600">
                        3,900 THB
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 bg-yellow-50">
                      <td className="py-3 px-4 text-black">Koh Lanta</td>
                      <td className="py-3 px-4 text-center font-bold text-purple-600">
                        5,500 THB
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-purple-600">
                        5,900 THB
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-blue-900">
                  Pre-booking Information
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Rates are quoted per car / per way</li>
                  <li>• Includes everything such as fuel, VAT, airport fees</li>
                  <li>• For your (or your group) own use - no sharing</li>
                  <li>• Only valid for pre-booked transfers</li>
                  <li>• Child seats included at no extra charge</li>
                </ul>
              </div>

              <div className="mt-6 p-6 bg-green-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-green-900">
                  Other Services Available
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li>
                    • Private driver and guide for sightseeing (island city
                    tour)
                  </li>
                  <li>• Tours information and booking tickets</li>
                  <li>• Ferry or speed boat tickets</li>
                  <li>• Custom trips on request</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Contact CTA */}
        <ContactFooter
          title=" Ready to Book Your Airport Transfer?"
          description=" Contact us for pricing and availability. Price depends on hotel
            location."
          className="bg-blue-900 rounded-lg"
        />

        {/* Image Modal */}
        <ImageModal
          isOpen={modalImage !== null}
          onClose={closeImageModal}
          imageSrc={modalImage?.src || ""}
          imageAlt={modalImage?.alt || ""}
        />
      </div>
    </div>
  );
}
