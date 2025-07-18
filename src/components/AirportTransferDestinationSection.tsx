'use client';

const destinations = [
  { destination: "Maikhao Beach", price1: 1000, price2: 1200 },
  { destination: "Naithon Beach", price1: 800, price2: 1000 },
  { destination: "Ao Por Pier", price1: 1200, price2: 1400 },
  { destination: "Layan Beach", price1: 1200, price2: 1400 },
  { destination: "Phuket Town", price1: 1200, price2: 1400 },
  { destination: "Rassada Pier", price1: 1200, price2: 1400 },
  { destination: "Koh sirey bay", price1: 1200, price2: 1400 },
  { destination: "Bang tao Beach", price1: 1200, price2: 1400 },
  { destination: "Surin Beach", price1: 1200, price2: 1400 },
  { destination: "Kamala Beach", price1: 1200, price2: 1400 },
  { destination: "Chalong Bay", price1: 1400, price2: 1600 },
  { destination: "Patong Beach", price1: 1400, price2: 1600 },
  { destination: "Kata-Karon Beach", price1: 1400, price2: 1600 },
  { destination: "Rawai Beach", price1: 1400, price2: 1600 },
  { destination: "Tritrang Beach", price1: 1500, price2: 1600 },
  { destination: "Nai Harn Beach", price1: 1500, price2: 1600 },
  { destination: "Ao sane ( Baan krathing )", price1: 1600, price2: 1700 },
  { destination: "NaTai Beach ( Phang Nga )", price1: 1600, price2: 1800 },
  { destination: "Khao lak (phang nga )", price1: 2500, price2: 2700 },
  { destination: "Koh kho khao ( at Pier )", price1: 3000, price2: 3500 },
  { destination: "Khao Sok national park", price1: 3900, price2: 4200 },
  { destination: "Ao nang , Krabi town", price1: 3500, price2: 3900 },
  { destination: "Koh lanta", price1: 5500, price2: 5900 },
];


const AirportTransferDestinationSection = () => {
  return (
    <section id='airport-transfer-destination' className="py-4 pb-8 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full -translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Section Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-1 border border-gray-300 text-gray-600 text-xs font-medium uppercase tracking-widest">
              Transfer Rates
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            Airport Transfer Pricing
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Professional airport transfers with child seats included.
            Transparent pricing from Phuket Airport to your destination.
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Pre-booking Information */}
          <div className="bg-white border border-gray-200 p-8">
            <h3 className="text-xl font-light text-gray-900 mb-6 tracking-wide">
              What&apos;s Included
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                <span className="text-gray-700 font-light">Rates quoted per car, per way</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                <span className="text-gray-700 font-light">All fees included (fuel, VAT, airport fees)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                <span className="text-gray-700 font-light">Private use - no sharing with others</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                <span className="text-gray-700 font-light">Child seats provided free of charge</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                <span className="text-gray-700 font-light">Professional English-speaking drivers</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                <span className="text-gray-700 font-light">24/7 customer support available</span>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-white border border-gray-200 p-8">
            <h3 className="text-xl font-light text-gray-900 mb-6 tracking-wide">
              Additional Services
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                <span className="text-gray-700 font-light">Private driver and guide for sightseeing</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                <span className="text-gray-700 font-light">Tours information and booking</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                <span className="text-gray-700 font-light">Ferry and speed boat tickets</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                <span className="text-gray-700 font-light">Custom trips on request</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <section id='airport-transfer-destination' className="bg-white border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
            <h3 className="text-xl font-light text-gray-900 tracking-wide">
              Destination Pricing
            </h3>
            <p className="text-sm text-gray-600 font-light mt-1">
              All prices in Thai Baht (THB)
            </p>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-8 text-left font-medium text-gray-900 text-sm uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="py-4 px-8 text-center font-medium text-gray-900 text-sm uppercase tracking-wider">
                    1-3 Persons
                  </th>
                  <th className="py-4 px-8 text-center font-medium text-gray-900 text-sm uppercase tracking-wider">
                    4-7 Persons
                  </th>
                </tr>
              </thead>
              <tbody>
                {destinations.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <td className="py-4 px-8 text-gray-700 font-light">
                      {item.destination}
                    </td>
                    <td className="py-4 px-8 text-center font-medium text-gray-900">
                      {item.price1.toLocaleString()} ฿
                    </td>
                    <td className="py-4 px-8 text-center font-medium text-gray-900">
                      {item.price2.toLocaleString()} ฿
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.location.href = '/contact'}
            className="group relative overflow-hidden bg-gray-900 text-white font-light text-sm uppercase tracking-wider px-12 py-4 transition-all duration-300 hover:bg-gray-800"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Book Your Transfer</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AirportTransferDestinationSection;
