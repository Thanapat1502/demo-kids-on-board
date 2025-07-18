'use client';

import Image from 'next/image';

const AboutUsSection = () => {

  return (
    <section className="py-8 pt-20 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Professional Header */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-6xl font-light text-gray-900 tracking-tight mb-2">
              Phuket Childseat <span className="text-blue-600 font-medium"></span>
            </h2>
            <div className="w-32 h-0.5 bg-blue-600 mx-auto mb-4"></div>
          </div>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional family transportation services with premium child safety seats
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-white border border-blue-100 rounded-lg p-4 text-center hover:border-blue-200 hover:shadow-sm transition-all duration-300 group">
              <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide group-hover:text-blue-600 transition-colors">Taxi with Child Seat</span>
            </div>
            <div className="bg-white border border-blue-100 rounded-lg p-4 text-center hover:border-blue-200 hover:shadow-sm transition-all duration-300 group">
              <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide group-hover:text-blue-600 transition-colors">Day Trips</span>
            </div>
            <div className="bg-white border border-blue-100 rounded-lg p-4 text-center hover:border-blue-200 hover:shadow-sm transition-all duration-300 group">
              <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide group-hover:text-blue-600 transition-colors">Tours Information</span>
            </div>
            <div className="bg-white border border-blue-100 rounded-lg p-4 text-center hover:border-blue-200 hover:shadow-sm transition-all duration-300 group">
              <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide group-hover:text-blue-600 transition-colors">Booking Tickets</span>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6 leading-relaxed max-w-4xl mx-auto">
            Welcome to your holiday in <span className="text-blue-600 font-medium">Phuket Thailand</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-1">
            <p className="text-gray-700 leading-relaxed text-lg">
              Safe taxis for young children in popular destinations. Travel safely to holidays with both infants and young kids for fun, sun, adventure or city holidays.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We offer rear facing or forward child seats for safety services transfer with children.
            </p>
          </div>
        </div>


        {/* Professional Contact Section */}
        <div className="bg-white rounded-sm border border-gray-200 p-8 lg:p-8 flex flex-col md:flex-row text-center">
          {/* Owner Image */}
          <div className="mb-4 md:mb-8 md:px-12">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src="/image/contact/owner.png"
                alt="Mr. Kam - Owner of Phuket Child Seat Services"
                fill
                className="object-cover rounded-full border-3 border-gray-200 shadow-md"
              />
            </div>
            <p className="text-gray-600 text-lg font-medium">Mr. Kam - Your Travel Expert</p>
          </div>

          <div className='flex-1'>
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to Book Your <span className="text-blue-600 font-medium">Safe Journey</span>?
            </h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t hesitate to contact us with questions or booking requests.
              Pricing depends on hotel location and specific requirements.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="mailto:kam.phuket@gmail.com"
                className="flex items-center justify-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <span className="text-white text-lg">✉️</span>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-600">Email us</div>
                  <div className="font-medium text-gray-900">kam.phuket@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/66815372657"
                className="flex items-center justify-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors">
                  <span className="text-white text-lg">💬</span>
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-600">WhatsApp</div>
                  <div className="font-medium text-gray-900">+66 81 537 2657</div>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Available 24/7 • Instant confirmation • Professional service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
