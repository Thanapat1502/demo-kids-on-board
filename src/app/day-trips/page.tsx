"use client";

import { Button, Card, CardBody, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShip, FaSwimmer, FaCamera } from "react-icons/fa";
import { ContactFooter } from "@/components/ContactFooter";
import PageHeaderAnimation from "@/components/PageHeaderAnimation";
import ImageModal from "@/components/ImageModal";

export default function DayTripsPage() {
  const [currentExperience, setCurrentExperience] = useState(0);
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
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/day-trips/destinations/phi-phi-island1.png"
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
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tour Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Day Trips from Phuket
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the beauty of Thailand with our family-friendly tours. All
              tours include safe transportation with child seats, professional
              guides, and travel insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaShip className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Island Tours
                </h3>
                <p className="text-gray-600 text-lg">
                  Visit stunning islands like Phi Phi, James Bond Island, and
                  pristine beaches with crystal clear waters.
                </p>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaCamera className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Cultural Tours
                </h3>
                <p className="text-gray-600 text-lg">
                  {`Explore Phuket's rich culture with visits to Big Buddha,
                  temples, and historic Old Town.`}
                </p>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 !bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaSwimmer className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Adventure Tours
                </h3>
                <p className="text-gray-600 text-lg">
                  Family-friendly adventures including elephant sanctuaries,
                  water parks, and nature experiences.
                </p>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Phang Nga Bay Tour */}
        <section className="mb-20">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="/image/day-trips/destinations/phang-nga-bay1.png"
              alt="Phang Nga Bay"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Phang Nga Bay Day Trip
              </h2>
              <p className="text-xl text-gray-200">
                James Bond Island & Sea Gypsy Village
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Tour Highlights
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Visit famous James Bond Island (Koh Tapu)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Explore Koh Panyee floating village</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Long tail boat ride through mangroves</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cave exploration and scenic viewpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Traditional Thai lunch included</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Visit Sawan Kuha Temple cave</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Samet Nangshe Viewpoint panorama</span>
                </li>
              </ul>
            </div>
            <div>
              <div
                className="relative h-64 rounded-xl overflow-hidden mb-6 cursor-pointer group/image"
                onClick={() =>
                  openImageModal(
                    "/image/day-trips/destinations/phang-nga-bay2.png",
                    "Phang Nga Bay Tour - Stunning limestone karsts and emerald waters"
                  )
                }
                title="Click to view full size image">
                <Image
                  src="/image/day-trips/destinations/phang-nga-bay2.png"
                  alt="Phang Nga Bay Tour"
                  fill
                  className="object-cover transition-transform duration-500 group-hover/image:scale-110"
                />

                {/* Hover Overlay with Magnifying Glass */}
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
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Sample Itinerary
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-blue-600 text-lg w-16">
                    07:00
                  </span>
                  <span className="text-gray-700">
                    Hotel pickup with child seat equipped vehicle
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-blue-600 text-lg w-16">
                    08:30
                  </span>
                  <span className="text-gray-700">
                    Long tail boat ride to James Bond Island
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-blue-600 text-lg w-16">
                    12:00
                  </span>
                  <span className="text-gray-700">
                    Lunch at National Park restaurant
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-blue-600 text-lg w-16">
                    13:30
                  </span>
                  <span className="text-gray-700">
                    Visit Sawan Kuha Temple cave
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-blue-600 text-lg w-16">
                    14:30
                  </span>
                  <span className="text-gray-700">Samet Nangshe Viewpoint</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phi Phi Island Tour */}
        <section className="mb-20">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="/image/day-trips/destinations/phi-phi-island2.png"
              alt="Phi Phi Island"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Phi Phi Island Day Trip
              </h2>
              <p className="text-xl text-gray-200">
                Maya Bay & Crystal Clear Waters
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div
                className="relative h-64 rounded-xl overflow-hidden mb-6 cursor-pointer group/image"
                onClick={() =>
                  openImageModal(
                    "/image/day-trips/destinations/phi-phi-island3.png",
                    "Phi Phi Island Beach - Crystal clear waters and pristine beaches"
                  )
                }
                title="Click to view full size image">
                <Image
                  src="/image/day-trips/destinations/phi-phi-island3.png"
                  alt="Phi Phi Island Beach"
                  fill
                  className="object-cover transition-transform duration-500 group-hover/image:scale-110"
                />

                {/* Hover Overlay with Magnifying Glass */}
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
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                About Phi Phi Islands
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Koh Phi Phi islands are located 42 km from Phuket in the Andaman
                Sea. Part of Nopharat Thara Beach – Phi Phi Islands National
                Park, featuring stunning limestone cliffs and pristine beaches.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {`Maya Bay was featured in the Hollywood movie "The Beach" and
                epitomizes the stunning beauty of these islands with pellucid
                aquamarine water surrounded by towering limestone cliffs.`}
              </p>
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold mb-3 text-green-900">Key Tips:</h4>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Best time to visit: November to April</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Perfect for snorkeling and diving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Vibrant nightlife at Tonsai Beach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Exotic marine life including leopard sharks</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Tour Features
              </h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Visit Maya Bay (The Beach movie location)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Snorkeling in crystal clear waters</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Explore Phi Phi Don and Phi Phi Le</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Lunch at beachside restaurant</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Swimming and beach relaxation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional snorkeling equipment provided</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Safe transportation with child seats</span>
                </li>
              </ul>
              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-blue-800 leading-relaxed">
                  <strong className="text-blue-900">Family Friendly:</strong>{" "}
                  Suitable for all ages with shallow snorkeling areas and calm
                  beaches perfect for children.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Similan Islands Tour */}
        <section className="mb-20">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="/image/day-trips/destinations/similan-islands1.png"
              alt="Similan Islands"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Similan Islands
              </h2>
              <p className="text-xl text-gray-200">
                World-Class Diving & Pristine Nature
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                About Similan Islands
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Similan Islands are located in the Andaman Sea on the West
                Coast of Southern Thailand, in Phang-nga province. The
                archipelago consists of eleven islands within the Mu Koh Similan
                National Park, covering over 140 square kilometers.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                These islands are the perfect destination for tourists who like
                to dive and explore remote places full of wildlife. All islands
                are surrounded by crystal clear shallow waters with spectacular
                coral reefs and unmatched marine life.
              </p>
              <div className="bg-green-50 p-6 rounded-xl">
                <p className="text-green-800 leading-relaxed">
                  <strong className="text-green-900">Season:</strong> Similan
                  Islands are typically open from October to May. Best diving
                  conditions from November to April.
                </p>
              </div>
            </div>
            <div>
              <div
                className="relative h-64 rounded-xl overflow-hidden mb-6 cursor-pointer group/image"
                onClick={() =>
                  openImageModal(
                    "/image/day-trips/destinations/similan-islands2.png",
                    "Similan Islands Diving - World-class diving and pristine coral reefs"
                  )
                }
                title="Click to view full size image">
                <Image
                  src="/image/day-trips/destinations/similan-islands2.png"
                  alt="Similan Islands Diving"
                  fill
                  className="object-cover transition-transform duration-500 group-hover/image:scale-110"
                />

                {/* Hover Overlay with Magnifying Glass */}
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
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Tour Highlights
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>World-class diving and snorkeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Pristine coral reefs and marine life</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Crystal clear shallow waters</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Spectacular rock formations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Remote and unspoiled nature</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional diving equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Experienced dive guides</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Other Activities */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Popular Activities
            </h2>
            <p className="text-lg text-gray-600">
              More family-friendly attractions and experiences in Phuket
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shows & Entertainment */}
            <div
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group/image"
              onClick={() =>
                openImageModal(
                  "/image/home/destinations/3phuket-old-town.png",
                  "Shows & Entertainment - Phuket Fantasy, Carnival Magic, Cabaret shows"
                )
              }
              title="Click to view full size image">
              <Image
                src="/image/home/destinations/3phuket-old-town.png"
                alt="Shows & Entertainment - Phuket Fantasy, Carnival Magic, Cabaret shows"
                fill
                className="object-cover transition-transform duration-500 group-hover/image:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Hover Overlay with Magnifying Glass */}
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

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-900 bg-white/90 px-3 py-1 rounded-lg">
                  Shows & Entertainment
                </h3>
                <p className="text-white text-sm mb-3 px-3">
                  Phuket Fantasy, Carnival Magic, Cabaret shows
                </p>
              </div>
            </div>

            {/* Animal Experiences */}
            <div
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group/image"
              onClick={() =>
                openImageModal(
                  "/image/home/destinations/6mini-zoo -in-phuket.png",
                  "Animal Experiences - Elephant sanctuary, Tiger park, Mini zoo"
                )
              }
              title="Click to view full size image">
              <Image
                src="/image/home/destinations/6mini-zoo -in-phuket.png"
                alt="Animal Experiences - Elephant sanctuary, Tiger park, Mini zoo"
                fill
                className="object-cover transition-transform duration-500 group-hover/image:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Hover Overlay with Magnifying Glass */}
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

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-900 bg-white/90 px-3 py-1 rounded-lg">
                  Animal Experiences
                </h3>
                <p className="text-white text-sm mb-3 px-3">
                  Elephant sanctuary, Tiger park, Mini zoo
                </p>
              </div>
            </div>

            {/* Water Activities */}
            <div
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group/image"
              onClick={() =>
                openImageModal(
                  "/image/home/destinations/8view-point.png",
                  "Water Activities - Water parks, swimming, beach activities"
                )
              }
              title="Click to view full size image">
              <Image
                src="/image/home/destinations/8view-point.png"
                alt="Water Activities - Water parks, swimming, beach activities"
                fill
                className="object-cover transition-transform duration-500 group-hover/image:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Hover Overlay with Magnifying Glass */}
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

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-900 bg-white/90 px-3 py-1 rounded-lg">
                  Water Activities
                </h3>
                <p className="text-white text-sm mb-3 px-3">
                  Water parks, swimming, beach activities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Experience Parallax */}
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

            {/* Horizontal Scrolling Experience Images */}
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                {experiences.map((experience, index) => (
                  <div
                    key={experience.title}
                    className={`flex-shrink-0 w-96 h-80 relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                      index === currentExperience
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

        {/* Contact CTA */}
        <ContactFooter
          title="Ready to Explore Phuket?"
          description="Contact us for package day trips and tour bookings. All tours
            include safe transportation with child seats"
          className="bg-blue-900 rounded-lg mt-16"
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
