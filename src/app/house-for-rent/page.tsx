"use client";

import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHome, FaWifi, FaParking } from "react-icons/fa";
import { ContactFooter } from "@/components/ContactFooter";
export default function HouseForRentPage() {
  const [currentHouseImage, setCurrentHouseImage] = useState(0);

  const houseImages = [
    "/image/house-for-rent/house-example/house-paralex1.png",
    "/image/house-for-rent/house-example/house-paralex2.png",
    "/image/house-for-rent/house-example/house-paralex3.png",
    "/image/house-for-rent/house-example/house-paralex4.png",
    "/image/house-for-rent/house-example/house-paralex5.png",
    "/image/house-for-rent/house-example/house-paralex6.png",
    "/image/house-for-rent/house-example/house-paralex7.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHouseImage((prev) => (prev + 1) % houseImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [houseImages.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/image/house-for-rent/mainhouse.png"
            alt="Garden House for Rent"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full pt-20">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Garden House
              <span className="block text-yellow-400">for Rent</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Garden house style resort in prime Thalang location, Phuket
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Chip color="warning" variant="solid" size="lg">
                Daily Rental
              </Chip>
              <Chip color="warning" variant="solid" size="lg">
                Weekly Rental
              </Chip>
              <Chip color="warning" variant="solid" size="lg">
                Prime Location
              </Chip>
              <Chip color="warning" variant="solid" size="lg">
                Family Friendly
              </Chip>
            </div>
            <Button
              as={Link}
              href="/contact"
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg">
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Property Overview */}
        <section className="mb-16">
          <Card className="p-8 bg-white">
            <CardHeader className="pb-0">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🏡</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Garden House Style Resort
                  </h2>
                  <p className="text-gray-600">
                    Perfect accommodation for families and groups
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Property Features
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Garden house style resort design</li>
                    <li>• Spacious accommodation for families</li>
                    <li>• Private garden and outdoor space</li>
                    <li>• Modern amenities and comfort</li>
                    <li>• Safe and secure environment</li>
                    <li>• Perfect for extended stays</li>
                    <li>• Family-friendly facilities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Rental Options
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">
                        Daily Rental
                      </h4>
                      <p className="text-green-700">
                        Perfect for short stays and vacation rentals
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800">
                        Weekly Rental
                      </h4>
                      <p className="text-blue-700">
                        Ideal for extended holidays and longer stays
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Location Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prime Thalang Location
            </h2>
            <p className="text-lg text-gray-600">
              {`Strategically located for easy access to Phuket's best attractions`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaHome className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Beach Access
                </h3>
                <ul className="text-gray-600 space-y-2 text-lg">
                  <li>• 5-10 minutes to Bangtao Beach</li>
                  <li>• Close to Surin Beach</li>
                  <li>• Near Layan Beach</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaWifi className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Laguna Area
                </h3>
                <ul className="text-gray-600 space-y-2 text-lg">
                  <li>• 5-10 minutes to Laguna complex</li>
                  <li>• Golf courses nearby</li>
                  <li>• Resort amenities access</li>
                </ul>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaParking className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Shopping & Dining
                </h3>
                <ul className="text-gray-600 space-y-2 text-lg">
                  <li>• Makro supermarket nearby</li>
                  <li>• Lotus shopping center</li>
                  <li>• Robinson shopping center</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Transportation */}
        <section className="mb-16">
          <Card className="p-8 bg-white">
            <CardHeader className="pb-0">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🚗</div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Easy Transportation
                  </h2>
                  <p className="text-gray-600">
                    Convenient access to all of Phuket
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Travel Times
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">
                        Phuket Town
                      </span>
                      <span className="text-blue-600 font-semibold">
                        20 minutes
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">
                        Phuket Airport
                      </span>
                      <span className="text-blue-600 font-semibold">
                        25 minutes
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">
                        Patong Beach
                      </span>
                      <span className="text-blue-600 font-semibold">
                        30 minutes
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">
                    Transportation Services
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Airport transfer with child seats available</li>
                    <li>• Daily transportation to beaches</li>
                    <li>• Tour pickup and drop-off</li>
                    <li>• Car rental with driver service</li>
                    <li>• Taxi services on request</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* House Gallery Parallax */}
        <section className="py-20 bg-gray-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                House Gallery
              </h2>
              <p className="text-xl text-gray-300">
                Explore our beautiful garden house and amenities
              </p>
            </div>

            {/* Horizontal Scrolling House Images */}
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                {houseImages.map((image, index) => (
                  <div
                    key={image}
                    className={`flex-shrink-0 w-96 h-80 relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                      index === currentHouseImage
                        ? "scale-105 shadow-2xl"
                        : "scale-100"
                    }`}>
                    <Image
                      src={image}
                      alt={`House Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {index === 0 && "Garden View"}
                        {index === 1 && "Living Area"}
                        {index === 2 && "Nature"}
                        {index === 3 && "Outdoor Space"}
                        {index === 4 && "Bathroom"}
                        {index === 5 && "Bedroom"}
                        {index === 6 && "Surroundings"}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    5★
                  </div>
                  <p className="text-gray-300">Guest Rating</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-300">Support Available</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    100%
                  </div>
                  <p className="text-gray-300">Clean & Safe</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactFooter
          title="Interested in Our Garden House?"
          description="Contact us for availability, pricing, and booking information."
          className="bg-teal-600 rounded-lg mt-16"
        />
      </div>
    </div>
  );
}
