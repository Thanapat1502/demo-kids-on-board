'use client';

import Image from "next/image";

const FerryServiceSection = () => {
  return (
    <section id='ferry-service' className="py-0 pb-8 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full -translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content Section */}
          <div className="order-1">
            {/* Section Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-1 border border-gray-300 text-gray-600 text-xs font-medium uppercase tracking-widest">
                Ferry Services
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              Island Ferry Tickets
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8 max-w-lg">
              Seamless ferry booking service with safe transportation to the pier.
              Child seats included for your family&apos;s comfort and safety.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700 font-light">Phi Phi Island connections</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700 font-light">Speed boat options available</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700 font-light">Pier transportation included</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700 font-light">Child safety seats provided</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => window.location.href = '/contact'}
              className="group relative overflow-hidden bg-gray-900 text-white font-light text-sm uppercase tracking-wider px-10 py-4 transition-all duration-300 hover:bg-gray-800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Book Ferry Tickets</span>
            </button>
          </div>

          {/* Image Section */}
          <div className="order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/image/sections/ferry/image.jpg"
                  alt="Ferry Service to Islands"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Routes Card Overlay */}
              <div className="absolute top-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 border border-gray-200">
                <h3 className="text-lg font-light text-gray-900 mb-4 tracking-wide">
                  Popular Routes
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700 font-light">Phuket → Phi Phi</span>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Daily</span>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700 font-light">Phuket → Krabi</span>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Daily</span>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700 font-light">Phuket → Koh Lanta</span>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Seasonal</span>
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

export default FerryServiceSection;
