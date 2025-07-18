'use client';

import Image from 'next/image';

interface ChildSeatSectionProps {
  openImageModal: (src: string, alt: string) => void;
}

const seatOptions = [
  {
    name: "Britax Rear-facing Car Seat",
    image: "/image/home/childseat/childseat_option_1.png",
    description: "Support multiple positions",
    type: "NEWBORN READY",
    weight: "0-13kg",
    age: "0.6-6 years",
    helpText1: "✓ Rear-facing safety",
    helpText2: "✓ 0.6 - 6 years",
  },
  {
    name: "Forward Facing Car Seat",
    image: "/image/home/childseat/childseat_option2.png",
    description:
      "Support multiple positions",
    type: "CONVERTIBLE",
    weight: "9-18kg",
    age: "1-6 years",
    helpText1: "✓ Rear-facing safety",
    helpText2: "✓ For 1-6 years",
  },
  {
    name: "Baby Car Seat",
    image: "/image/home/childseat/childseat_option3.jpg",
    description:
      "Baby car seat for newborns",
    type: "BABY SEAT",
    weight: "15-25kg",
    age: "up to 12 months",
    helpText1: "✓ Maximum safety",
    helpText2: "✓ up to 12 months",
  },
  {
    name: "High Back",
    image: "/image/home/childseat/childseat_option4.jpg",
    description:
      "Booster car seat for children",
    type: "HIGH BACK",
    weight: "18-30kg",
    age: "4-8 years",
    helpText1: "✓ Confort & Safety",
    helpText2: "✓ 4-8 years",
  },
];

const ChildSeatSection = ({ openImageModal }: ChildSeatSectionProps) => {
  return (
    <section className="pb-8 pt-4 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6 tracking-tight leading-tight text-center">
            Premium Child Safety Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate in child safety with our premium imported Britax child seats from Sweden.
            Engineered for maximum protection and comfort for your little ones.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seatOptions.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden">
                {/* Image Section */}
                <div className="p-0">
                  <div
                    className="relative h-40  overflow-hidden cursor-pointer group bg-gray-50"
                    onClick={() => openImageModal(item.image, item.name)}
                    title="Click to view full size image">
                    <Image
                      src={item.image}
                      alt={`${item.name} - Britax child seat for ${item.age} (${item.weight})`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Weight Badge */}
                    <div className="absolute top-2 right-2">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {item.weight}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      Age: {item.age}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      Weight: {item.weight}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      Swedish Engineering
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      {/* {item.type} */}
                    </div>
                    <div className="text-right">
                      <div className="text-md text-gray-500">Britax</div>
                      <div className="text-md font-semibold text-blue-600">Sweden</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChildSeatSection;
