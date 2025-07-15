"use client";

"use client";

import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaShieldAlt, FaBaby, FaCar } from "react-icons/fa";
import { ContactFooter } from "@/components/ContactFooter";
import ImageModal from "@/components/ImageModal";
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
      <section
        className="relative h-1/2 overflow-hidden"
        aria-label="Hero banner for Phuket Child Seat services">
        <div className="absolute inset-0">
          <Image
            src="/image/home/banner.png"
            alt="Phuket Child Seat - Safe Family Travel Services with Imported Britax Child Seats from Sweden"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mt-24 mb-6 leading-tight">
              Safe Travel with
              <span className="block text-yellow-400">Child Seats</span>
              in Phuket
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 px-4 py-2 bg-black/40 rounded-full shadow-sm backdrop-blur-sm">
              Professional travel services with imported Britax child seats from
              Sweden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                as={Link}
                href="/contact"
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg">
                Book Now
              </Button>
              <Button
                as={Link}
                href="/airport-transfer"
                size="lg"
                variant="bordered"
                className="bg-black/40 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 text-lg">
                Airport Transfer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Child Seats Section */}
      <section className="py-20 bg-white" aria-labelledby="child-seats-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="text-center mb-16">
            <h2
              id="child-seats-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Taxi with rear facing child seats available in phuket !
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium imported Britax child seats from Sweden for maximum safety
              and comfort
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seatOptions.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 !bg-white">
                <CardBody className="p-0">
                  {/* Image Section with Overlay */}
                  <div
                    className="relative h-56 overflow-hidden cursor-pointer"
                    onClick={() => openImageModal(item.image, item.name)}
                    title="Click to view full size image">
                    <Image
                      src={item.image}
                      alt={`${item.name} - Britax child seat for ${item.age} (${item.weight})`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Click to zoom indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <p className="text-sm text-gray-700 font-medium">
                          {item.helpText1}
                        </p>
                        <p className="text-sm text-gray-700 font-medium">
                          {item.helpText2}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="mb-3 flex flex-row justify-between">
                      <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                        {item.name}
                      </h3>

                      <div className="flex-shrink-0 h-fit bg-blue-700 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {item.weight}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {item.type}
                      </span>
                      <span className="text-lg font-bold text-blue-900">
                        {item.age}
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Car Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We offer private transfer with safety child seats for kids
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our fleet of comfortable and safe vehicles equipped
              with child seats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div
                  className="relative w-full h-64 mb-6 rounded-lg overflow-hidden group/image"
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
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Luxury Minibus
                </h3>
                <p className="text-gray-600 text-lg">
                  Spacious and comfortable minibus perfect for larger families
                  and groups with multiple child seats
                </p>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div
                  className="relative w-full h-64 mb-6 rounded-lg overflow-hidden group/image"
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
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Luxury SUV
                </h3>
                <p className="text-gray-600 text-lg">
                  Premium SUV with advanced safety features and comfortable
                  seating for smaller families
                </p>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div
                  className="relative w-full h-64 mb-6 rounded-lg overflow-hidden group/image"
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
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Children on Board
                </h3>
                <p className="text-gray-600 text-lg">
                  Specially equipped vehicles with clear safety signage and
                  child-friendly features for family travel
                </p>
              </CardBody>
            </Card>
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
