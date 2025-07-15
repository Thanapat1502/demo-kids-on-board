"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { FaShieldAlt, FaClock, FaUsers } from "react-icons/fa";
import { ContactFooter } from "@/components/ContactFooter";
import ImageModal from "@/components/ImageModal";

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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Airport Transfer with Child Seats
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Safe and comfortable airport transfers with imported Britax child
            seats
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Chip color="warning" variant="solid" size="lg">
              Phuket Airport
            </Chip>
            <Chip color="warning" variant="solid" size="lg">
              Khao Lak
            </Chip>
            <Chip color="warning" variant="solid" size="lg">
              Krabi Ao-Nang
            </Chip>
            <Chip color="warning" variant="solid" size="lg">
              Koh Lanta
            </Chip>
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
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white">
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

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white">
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

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white">
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
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Child Seat Options
            </h2>
            <p className="text-lg text-gray-600">
              Professional child seats for all ages - imported from Sweden for
              maximum safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seatOptions.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                <CardBody className="p-0">
                  {/* Image Section with Overlay */}
                  <div
                    className="relative h-56 overflow-hidden cursor-pointer"
                    onClick={() => openImageModal(item.image, item.name)}
                    title="Click to view full size image">
                    <Image
                      src={item.image}
                      alt={`${item.name} - ${item.p1} for ${item.p2}`}
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

                    <div className="absolute top-4 right-4">
                      <div className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {item.p2}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.p1}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {item.p3}
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
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
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
              <CardBody>
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/image/airport-tranfer/car-option/car1.png"
                    alt="Comfortable Minivan"
                    fill
                    className="object-cover"
                  />
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

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
              <CardBody>
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/image/airport-tranfer/car-option/car2.png"
                    alt="Luxury SUV"
                    fill
                    className="object-cover"
                  />
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

          <Card className="p-6 bg-white">
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
