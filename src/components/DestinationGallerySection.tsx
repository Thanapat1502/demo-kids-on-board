'use client';

import Image from 'next/image';

interface DestinationImage {
  src: string;
  alt: string;
  title: string;
}

interface DestinationGallerySectionProps {
  destinationImages?: DestinationImage[];
  openImageModal: (src: string, alt: string) => void;
}

const images: DestinationImage[] = [
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

const DestinationGallerySection = ({ destinationImages = images, openImageModal }: DestinationGallerySectionProps) => {


  // Split images into two rows (first 4 and last 4)
  const firstRowImages = destinationImages.slice(0, 4);
  const secondRowImages = destinationImages.slice(4, 8);

  // Render image component
  const renderImageCard = (image: DestinationImage, index: number) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-none aspect-square cursor-pointer"
      onClick={() => openImageModal(image.src, image.alt)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {image.title}
      </div>
    </div>
  );

  return (
    <section className="py-8 pt-0 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight leading-tight text-center">
          Discover Amazing Destinations
        </h2>

        {/* First Row - Main Destinations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-1">
          {firstRowImages.map((image, index) => renderImageCard(image, index))}
        </div>

        {/* Second Row - Activities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {secondRowImages.map((image, index) => renderImageCard(image, index + 4))}
        </div>
      </div>
    </section>
  );
};

export default DestinationGallerySection;
