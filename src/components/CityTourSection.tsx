'use client';

import Image from 'next/image';

interface CityTourSectionProps {
  openImageModal: (src: string, alt: string) => void;
}

interface DestinationImage {
  src: string;
  alt: string;
  title: string;
}

const CityTourSection = ({ openImageModal }: CityTourSectionProps) => {
  // Destination images data
  const destinationImages: DestinationImage[] = [
    {
      src: '/image/destinations/big-buddha/image.jpg',
      alt: 'Big Buddha Phuket',
      title: 'Big Buddha'
    },
    {
      src: '/image/destinations/chalong-temple/image.jpg',
      alt: 'Chalong Temple',
      title: 'Chalong Temple'
    },
    {
      src: '/image/destinations/phuket-old-town/image.jpg',
      alt: 'Phuket Old Town',
      title: 'Old Town'
    },
    {
      src: '/image/destinations/promthep-cape/image.jpg',
      alt: 'Promthep Cape',
      title: 'Promthep Cape'
    },
    {
      src: '/image/destinations/visit-elephants/image.jpg',
      alt: 'Elephant Feeding',
      title: 'Elephant Feeding'
    },
    {
      src: '/image/destinations/mini-zoo/image.jpg',
      alt: 'Mini Zoo',
      title: 'Mini Zoo'
    },
    {
      src: '/image/destinations/sunset-view-point/image.jpg',
      alt: 'Sunset Viewpoint',
      title: 'Sunset View'
    },
    {
      src: '/image/destinations/view-point/image.jpg',
      alt: 'Scenic Viewpoint',
      title: 'Scenic Views'
    }
  ];



  return (
    <section className="pt-4 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Minimal Professional Header */}
        <div className='flex flex-col md:flex-row gap-4'>
          {/* Left Grid Images */}
          <div className="xl:block mb-2 md:mx-0 left-0 top-0 w-full md:w-60">
            <div className="grid grid-cols-4 md:grid-cols-2 gap-1">
              {destinationImages.slice(0, 8).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden cursor-pointer group relative"
                  onClick={() => openImageModal(image.src, image.alt)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Right Content */}
          <div className='flex-1'>
            <div className="text-center mb-8">
              {/* Minimal Typography */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-light text-gray-900 tracking-tight">
                  Phuket Island City Tour
                </h2>

                <div className="w-16 h-px bg-gray-900 mx-auto"></div>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Discover Phuket&apos;s cultural heritage and natural beauty with our private driver and professional guide service.
                </p>
              </div>
            </div>

            {/* Minimal Tour Highlights */}
            <div className=" relative">
              {/* Simple Section Title */}
              <div className="mb-4">
                <h3 className="text-2xl font-light text-gray-900 text-center tracking-wide">
                  What&apos;s Included
                </h3>
              </div>

              {/* Desktop Layout with Left Images */}
              <div className="relative">
                {/* Left Image Grid - Desktop Only */}


                {/* Right Content */}
                <div >
                  <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Cultural Sightseeing */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-gray-600 text-sm">01</span>
                          </div>
                          <h4 className="text-xl font-light text-gray-900">Cultural Sightseeing</h4>
                        </div>

                        <div className="pl-12">
                          <p className="text-gray-600 leading-relaxed font-light">
                            Visit Big Buddha, Chalong Temple, Promthep Cape viewpoints, and Phuket Old Town.
                            Explore century-old Sino-Portuguese architecture showcasing the unique blend of
                            Thai-Chinese and Portuguese cultural influences.
                          </p>
                        </div>
                      </div>

                      {/* Optional Activities */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-gray-600 text-sm">02</span>
                          </div>
                          <h4 className="text-xl font-light text-gray-900">Optional Activities</h4>
                        </div>

                        <div className="pl-12">
                          <p className="text-gray-600 leading-relaxed font-light">
                            Enhance your experience with visits to local attractions including cashew nut factory,
                            pearl farm, elephant sanctuary, cultural shows, and adventure activities.
                            All activities are optional and can be customized to your preferences.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="text-center mb-0">
                        <h4 className="text-xl font-light text-gray-900 mb-8 tracking-wide">
                          Pricing (6 Hours)
                        </h4>

                        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                          <div className="border border-gray-200 rounded-lg p-6">
                            <div className="text-center">
                              <p className="text-xl text-gray-500 font-light mb-2">1-4 persons</p>
                              <p className="text-3xl font-light text-gray-900">2,900 <span className="text-lg text-gray-500">THB</span></p>
                            </div>
                          </div>

                          <div className="border border-gray-200 rounded-lg p-6">
                            <div className="text-center">
                              <p className="text-xl text-gray-500 font-light mb-2">5-10 persons</p>
                              <p className="text-3xl font-light text-gray-900">3,500 <span className="text-lg text-gray-500">THB</span></p>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-gray-500 font-light mt-6">
                          Overtime: 300 THB per hour
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-gray-500 font-light tracking-wide">
                          All tours include private transportation, professional guide, and travel insurance
                        </p>
                      </div>
                    </div>
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

export default CityTourSection;
