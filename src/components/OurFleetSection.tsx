'use client';

import Image from 'next/image';

interface OurFleetSectionProps {
  openImageModal: (src: string, alt: string) => void;
}

const OurFleetSection = ({ openImageModal }: OurFleetSectionProps) => {
  return (
    <section className="bg-white relative z-20 pt-0 pb-8">
      <div className="pt-0 pb-0 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight text-center">
              Our Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer you an exclusive experience in perfectly maintained, comfortable vehicles.
              All of our automobiles are thoroughly equipped with the necessary security components and child seats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Luxury Minibus */}
            <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div
                className="relative h-48 cursor-pointer group"
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
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Capacity Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    8 Seats
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Luxury Minibus
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Spacious and comfortable minibus perfect for larger families and groups with multiple child seats
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Capacity</div>
                    <div className="font-semibold text-gray-900">6-8 People</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Child Seats</div>
                    <div className="font-semibold text-gray-900">Up to 4</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Air Conditioning</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Professional Driver</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Multiple Child Seats</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury SUV */}
            <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div
                className="relative h-48 cursor-pointer group"
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
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Capacity Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    5 Seats
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Luxury SUV
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Premium SUV with advanced safety features and comfortable seating for smaller families
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Capacity</div>
                    <div className="font-semibold text-gray-900">4-5 People</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Child Seats</div>
                    <div className="font-semibold text-gray-900">Up to 2</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Premium Comfort</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Advanced Safety</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Luxury Interior</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Children on Board */}
            <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div
                className="relative h-48 cursor-pointer group"
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
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Safety Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Safety First
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Children on Board
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Specially equipped vehicles with clear safety signage and child-friendly features for family travel
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Safety</div>
                    <div className="font-semibold text-gray-900">Premium</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Signage</div>
                    <div className="font-semibold text-gray-900">Visible</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Safety Signage</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Child-Friendly Features</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Family Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFleetSection;
