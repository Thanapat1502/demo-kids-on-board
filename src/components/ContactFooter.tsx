import { FaEnvelope, FaPhone, FaWhatsapp, FaLine } from "react-icons/fa";

export const ContactFooter = (props: {
  title: string;
  description: string;
  className?: string;
}) => {
  const { title, description, className } = props;
  return (
    <section className={`py-8 bg-gray-50 ${className}`}>
      <div className="max-w-5xl mx-auto px-4">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-gray-300 rounded-full group-hover:border-gray-400 transition-colors duration-300">
              <FaEnvelope className="text-gray-600 text-lg" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-widest mb-2">Email</h3>
            <p className="text-gray-600 font-light">kam.phuket@gmail.com</p>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-gray-300 rounded-full group-hover:border-gray-400 transition-colors duration-300">
              <FaPhone className="text-gray-600 text-lg" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-widest mb-2">Mobile</h3>
            <p className="text-gray-600 font-light">+66 81 537 2657</p>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-gray-300 rounded-full group-hover:border-gray-400 transition-colors duration-300">
              <FaWhatsapp className="text-gray-600 text-lg" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-widest mb-2">WhatsApp</h3>
            <p className="text-gray-600 font-light">+66 81 537 2657</p>
          </div>

          <div className="text-center group">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-gray-300 rounded-full group-hover:border-gray-400 transition-colors duration-300">
              <FaLine className="text-gray-600 text-lg" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 uppercase tracking-widest mb-2">Line ID</h3>
            <p className="text-gray-600 font-light">kampanart-travel</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={() => window.location.href = '/contact'}
            className="group relative overflow-hidden bg-gray-900 text-white font-light text-sm uppercase tracking-wider px-12 py-4 transition-all duration-300 hover:bg-gray-800"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Contact Us Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};
