import Image from 'next/image';

const ChildSeats = () => {
  const seatTypes = [
    {
      name: "Infant Seat",
      image: "/image/home/childseat/childseat_option_1.png",
      description: "Premium Britax rear-facing seat for newborns to 15 months",
      type: "NEWBORN READY",
      weight: "0-13kg",
      age: "0-15m",
      capacity: "Newborn",
      childSeats: "Rear-facing",
      features: ["5-point harness", "Side impact protection", "Easy installation"]
    },
    {
      name: "Convertible Seat",
      image: "/image/home/childseat/childseat_option2.png",
      description: "Versatile seat that adapts as your toddler grows, with multiple positions",
      type: "CONVERTIBLE",
      weight: "9-18kg",
      age: "9m-4y",
      capacity: "Toddler",
      childSeats: "Multi-position",
      features: ["Adjustable headrest", "Machine washable", "ISOFIX compatible"]
    },
    {
      name: "Baby Seat",
      image: "/image/home/childseat/childseat_option3.png",
      description: "Perfect positioning for proper seat belt fit and comfort for growing kids",
      type: "BABY SEAT",
      weight: "15-25kg",
      age: "3-6y",
      capacity: "Child",
      childSeats: "Forward-facing",
      features: ["High-back design", "Cup holders", "Armrest support"]
    },
    {
      name: "High Back Booster",
      image: "/image/home/childseat/childseat_option4.png",
      description: "Advanced protection with high back design for older children's safety",
      type: "HIGH BACK",
      weight: "18-30kg",
      age: "4-6y",
      capacity: "Big Kid",
      childSeats: "Booster style",
      features: ["Seat belt guide", "Extra padding", "Safety certified"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Child Safety Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate in child safety with our premium imported Britax child seats from Sweden.
            Engineered for maximum protection and comfort for your little ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seatTypes.map((seat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="relative h-48 cursor-pointer group">
                <Image
                  src={seat.image}
                  alt={`${seat.name} - Britax child seat for ${seat.age} (${seat.weight})`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Weight Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {seat.weight}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {seat.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {seat.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Age Range</div>
                    <div className="font-semibold text-gray-900">{seat.age}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-500">Type</div>
                    <div className="font-semibold text-gray-900">{seat.capacity}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {seat.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Safety First
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
            All our child seats are regularly inspected, professionally cleaned, and meet international safety standards.
            Our drivers are trained in proper installation and child safety protocols.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-white px-4 py-2 rounded-full">ECE R44/04 Certified</span>
            <span className="bg-white px-4 py-2 rounded-full">Professional Installation</span>
            <span className="bg-white px-4 py-2 rounded-full">Regular Safety Checks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSeats;
