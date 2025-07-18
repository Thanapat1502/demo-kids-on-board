'use client';

import { useState } from 'react';
import Image from 'next/image';

const DayTripActivitiesSection = () => {
  const [selectedActivity, setSelectedActivity] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const activities = [
    {
      id: 0,
      category: "Island Tours",
      title: "Explore Paradise Islands",
      description: "Discover stunning islands with crystal clear waters and pristine beaches. Experience the natural beauty of Thailand's most famous islands with professional guides and safe transportation.",
      items: [
        "Package tours",
        "Phi Phi Island",
        "James Bond Island",
        "Similan Island",
        "Racha & Coral Island",
        "Koh Yao Islands",
        "Coral Island",
        "And many others..."
      ],
      images: [
        { url: "/image/day-trips/island-tours/phi-phi.jpg", alt: "Phi Phi Island" },
        { url: "/image/day-trips/island-tours/james-bond.webp", alt: "James Bond Island" },
        { url: "/image/day-trips/island-tours/similan.jpg", alt: "Similan Island Crystal Waters" },
        { url: "/image/day-trips/island-tours/racha-coral.jpg", alt: "Racha Island Beach" },
        { url: "/image/day-trips/island-tours/phi-phi-3.jpg", alt: "Phi Phi Island" },
        { url: "/image/day-trips/island-tours/coral.jpg", alt: "Coral Island" },
        { url: "/image/day-trips/island-tours/koh-yao.jpg", alt: "Koh Yao Island" },
        { url: "/image/day-trips/island-tours/hong.jpg", alt: "Hong Island" }
      ]
    },
    {
      id: 1,
      category: "Entertainment Shows",
      title: "World-Class Performances",
      description: "Experience spectacular shows and cultural performances that showcase Thailand's rich heritage and modern entertainment. Perfect for families and culture enthusiasts.",
      items: [
        "Phuket Fantasy",
        "Carnival Magic",
        "Cabaret Show",
        "Cultural performances",
        "Traditional Thai shows",
        "Fire shows",
        "Dance performances",
        "And many others..."
      ],
      images: [
        { url: "/image/day-trips/shows/phuket-fantasy-2.jpg", alt: "Phuket FantaSea Show" },
        { url: "/image/day-trips/shows/phuket-fantasy-3.jpg", alt: "Traditional Thai Dance" },
        { url: "/image/day-trips/shows/carnival-magic.webp", alt: "Carnival Magic Performance" },
        { url: "/image/day-trips/shows/cabaret-show.jpg", alt: "Cabaret Show Performance" },
        { url: "/image/day-trips/shows/cabaret-show-2.jpg", alt: "Cabaret Show Performance" },
        { url: "/image/day-trips/shows/phuket-fantasy.webp", alt: "Cabaret Show Performance" },
        { url: "/image/day-trips/shows/fire-show.jpg", alt: "Fire Show Performance" },
        { url: "/image/day-trips/shows/fire-show-2.jpg", alt: "Fire Show Performance" },
      ]
    },
    {
      id: 2,
      category: "Wildlife & Adventure",
      title: "Nature & Wildlife Experiences",
      description: "Connect with nature and enjoy thrilling adventures in Phuket's natural settings. Family-friendly activities that combine education with excitement.",
      items: [
        "Elephant Sanctuary",
        "Tiger Park",
        "Water Park",
        "Zip-line adventures",
        "Jungle trekking",
        "ATV adventures",
        "Wildlife photography",
        "And many others..."
      ],
      images: [
        { url: "/image/day-trips/adventures/elephant.jpg", alt: "Elephant Sanctuary Experience" },
        { url: "/image/day-trips/adventures/elephant-2.jpg", alt: "Elephant Sanctuary Experience" },
        { url: "/image/day-trips/adventures/tiger-park.jpg", alt: "Tiger Park Interaction" },
        { url: "/image/day-trips/adventures/waterpark.jpg", alt: "Water Park Fun" },
        { url: "/image/day-trips/adventures/zipline.jpg", alt: "Zip-line Adventure" },
        { url: "/image/day-trips/adventures/jungle.jpg", alt: "Jungle Trekking" },
        { url: "/image/day-trips/adventures/atv.jpg", alt: "ATV Adventure Tour" },
        { url: "/image/day-trips/adventures/wildlife.jpg", alt: "Wildlife Photography" },
      ]
    }
  ];

  // Handle image loading
  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => new Set([...prev, imageUrl]));
  };

  return (
    <section className="py-4 pt-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full -translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-1 border border-gray-300 text-gray-600 text-xs font-medium uppercase tracking-widest">
              Day Trip Activities
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            Discover Phuket & Nearby
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Experience the best of Phuket and surrounding areas with our carefully curated day trips.
            From pristine islands to cultural shows and wildlife encounters.
          </p>
        </div>

        {/* Activity Selector and Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Left Side - Activity Selector */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {activities.map((activity, index) => (
                <button
                  key={activity.id}
                  onClick={() => setSelectedActivity(index)}
                  className={`w-full text-left p-4 border transition-all duration-300 ${selectedActivity === index
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                >
                  <div className="text-xs font-medium uppercase tracking-widest mb-1">
                    {activity.category}
                  </div>
                  <div className="font-light">
                    {activity.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Selected Activity Content */}
          <div className="lg:col-span-3">
            <div className="relative min-h-[850px] z-10">
              {activities.map((activity, index) => (
                <div
                  key={activity.id}
                  className={`absolute inset-0 transition-all duration-500 z-10 ${selectedActivity === index
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8 pointer-events-none'
                    }`}
                >
                  {/* Activity Content */}
                  <div className="bg-white border border-gray-200 p-8">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="inline-block mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wide">
                          {activity.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed text-lg">
                        {activity.description}
                      </p>
                    </div>

                    {/* Image Gallery - 4x2 Grid */}
                    <div className="mb-8">
                      <h4 className="text-lg font-light text-gray-900 mb-4 tracking-wide">
                        Gallery
                      </h4>
                      <div className="grid grid-cols-4 gap-2">
                        {activity.images.map((image, imageIndex) => {
                          const isLoaded = loadedImages.has(image.url);

                          return (
                            <div
                              key={imageIndex}
                              className="aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 text-xs relative overflow-hidden group"
                            >
                              {image.url ? (
                                <>
                                  {/* Loading placeholder with shimmer */}
                                  <div
                                    className={`absolute inset-0 bg-gray-200 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'
                                      }`}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                                  </div>

                                  {/* Main image with fade-in animation */}
                                  <Image
                                    src={image.url}
                                    alt={image.alt}
                                    fill
                                    className={`object-cover group-hover:scale-110 transition-all duration-700 ${isLoaded
                                      ? 'opacity-100 scale-100'
                                      : 'opacity-0 scale-105'
                                      }`}
                                    onLoad={() => handleImageLoad(image.url)}
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
                                  />

                                  {/* Hover overlay with alt text */}
                                  <div className={`absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${isLoaded ? '' : 'pointer-events-none'
                                    }`}>
                                    <span className="text-white text-xs font-light text-center px-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                      {image.alt}
                                    </span>
                                  </div>
                                </>
                              ) : (
                                <span className="text-center p-2">
                                  Image {imageIndex + 1}
                                  <br />
                                  <span className="text-xs opacity-70">{image.alt}</span>
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Activities List */}
                    <div>
                      <h4 className="text-lg font-light text-gray-900 mb-4 tracking-wide">
                        What&apos;s Included
                      </h4>
                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                        {activity.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                            <span className="text-gray-700 font-light">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 border border-gray-200 p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What's Included */}
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-6 tracking-wide">
                What&apos;s Included
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-gray-700 font-light">Professional English-speaking guide</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-gray-700 font-light">Transportation with child seats</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-gray-700 font-light">Hotel pickup and drop-off</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-gray-700 font-light">Travel insurance included</span>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-6 tracking-wide">
                Why Choose Our Day Trips
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-gray-700 font-light">Family-friendly with child safety priority</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-gray-700 font-light">Customizable itineraries</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-gray-700 font-light">Local expertise and insider knowledge</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-gray-700 font-light">24/7 customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={() => window.location.href = '/contact'}
            className="group relative overflow-hidden bg-gray-900 text-white font-light text-sm uppercase tracking-wider px-12 py-4 transition-all duration-300 hover:bg-gray-800"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Plan Your Day Trip</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DayTripActivitiesSection;
