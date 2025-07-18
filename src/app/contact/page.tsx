"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLine,
  FaTrophy,
  FaUser,
  FaShieldAlt,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hello! I'm interested in your services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/66815372657?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section - Matching Homepage Style */}
      <section className="relative overflow-hidden bg-white h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image/main-banner/banner5.jpg"
            alt="Contact Us - Premium Child Seat Service"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability - matching homepage */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content - Matching Homepage Style */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-wide">
              Contact Us
              <span className="block text-2xl md:text-3xl lg:text-4xl font-extralight mt-4 text-white/80">
                Premium Child Seat Service
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to ensure your family&apos;s safety? Get in touch for
              premium child seat services and professional transportation in
              Phuket.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary Glossy Button - Matching Homepage */}
              <button
                className="group relative overflow-hidden bg-white/10 backdrop-blur-md text-white hover:bg-white/20 font-medium px-12 py-4 transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent"></div>
                <span className="relative z-10 text-lg tracking-wider uppercase">
                  Send Message
                </span>
              </button>

              {/* Secondary Button - Matching Homepage */}
              <button
                className="group relative text-white/90 hover:text-white font-light text-lg tracking-wide transition-all duration-300"
                onClick={() =>
                  window.open("https://wa.me/66815372657", "_blank")
                }>
                <span className="relative z-10">WhatsApp Now</span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section - Minimal Style */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Choose your preferred method of communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email Card - Minimal Style */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-full">
                  <FaEnvelope className="text-lg text-gray-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Email
                </h3>
                <p className="text-gray-600 mb-4 text-sm font-light">
                  kam.phuket@gmail.com
                </p>
                <Button
                  as="a"
                  href="mailto:kam.phuket@gmail.com"
                  className="bg-gray-900 text-white hover:bg-gray-800 font-light px-6 py-2 transition-colors duration-300"
                  size="sm">
                  Send Email
                </Button>
              </div>
            </div>

            {/* Mobile Card - Minimal Style */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-full">
                  <FaPhone className="text-lg text-gray-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  Mobile
                </h3>
                <p className="text-gray-600 mb-4 text-sm font-light">
                  +66 81 537 2657
                </p>
                <Button
                  as="a"
                  href="tel:+66815372657"
                  className="bg-gray-900 text-white hover:bg-gray-800 font-light px-6 py-2 transition-colors duration-300"
                  size="sm">
                  Call Now
                </Button>
              </div>
            </div>

            {/* WhatsApp Card - Minimal Style */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-full">
                  <FaWhatsapp className="text-lg text-gray-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-900">
                  WhatsApp
                </h3>
                <p className="text-gray-600 mb-4 text-sm font-light">
                  +66 81 537 2657
                </p>
                <Button
                  as="a"
                  href="https://wa.me/66815372657"
                  target="_blank"
                  className="bg-gray-900 text-white hover:bg-gray-800 font-light px-6 py-2 transition-colors duration-300"
                  size="sm">
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Line Card - Minimal Style */}
            <div className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-full">
                  <FaLine className="text-lg text-gray-600" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-900">Line</h3>
                <p className="text-gray-600 mb-4 text-sm font-light">
                  kampanart-travel
                </p>
                <Button
                  className="bg-gray-900 text-white hover:bg-gray-800 font-light px-6 py-2 transition-colors duration-300"
                  size="sm">
                  Line ID
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Minimal Style */}
      <section id="contact-form" className="py-20 bg-gray-50 relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible. Your message will be sent directly to our WhatsApp for
              quick response.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-white border border-gray-200 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    classNames={{
                      inputWrapper: "bg-white",
                    }}
                    placeholder="Enter your name"
                    value={formData.name}
                    onValueChange={(value) => handleInputChange("name", value)}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    classNames={{
                      inputWrapper: "bg-white",
                    }}
                    placeholder="Enter your email"
                    value={formData.email}
                    onValueChange={(value) => handleInputChange("email", value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    classNames={{
                      inputWrapper: "bg-white",
                    }}
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onValueChange={(value) => handleInputChange("phone", value)}
                    className=""
                  />
                  <Input
                    label="Service Interested"
                    classNames={{
                      inputWrapper: "bg-white",
                    }}
                    placeholder="Airport transfer, Day trips, etc."
                    value={formData.service}
                    onValueChange={(value) =>
                      handleInputChange("service", value)
                    }
                  />
                </div>

                <Textarea
                  label="Message"
                  placeholder="Tell us about your requirements, dates, number of passengers, etc."
                  classNames={{
                    inputWrapper: "bg-white",
                  }}
                  value={formData.message}
                  onValueChange={(value) => handleInputChange("message", value)}
                  minRows={4}
                  required
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 font-light tracking-wide transition-colors duration-300">
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wide">
                Business Information
              </h2>

              {/* Owner Section - Minimal Style */}
              <div className="bg-white border border-gray-200 p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/image/contact/owner.png"
                      alt="Mr. Kam - Owner"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Mr. Kam
                    </h3>
                    <p className="text-gray-600 text-sm font-light mb-3">
                      Owner & Operations Manager
                    </p>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      &quot;Safety is our top priority. As a father myself, I
                      understand the importance of child safety during travel.
                      That&apos;s why we use only the best imported Britax child
                      seats.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Kampanart Travel
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full">
                      <FaTrophy className="text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        TAT Licensed
                      </p>
                      <p className="text-gray-600">License #32/01713</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
                      <FaUser className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Operations Manager
                      </p>
                      <p className="text-gray-600">Mr. Kam (Taxi and Tours)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                      <FaShieldAlt className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Travel Insurance
                      </p>
                      <p className="text-gray-600">
                        Included with all services
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="text-xl">💳</div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Payment Methods
                      </p>
                      <p className="text-gray-600">
                        Cash on site or transfer via Wise
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Our Services
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Airport transfer with child seats</li>
                  <li>• Taxi with child seat services</li>
                  <li>• Island city tours with guide</li>
                  <li>• Car rental with driver and guide</li>
                  <li>• Ferry and boat ticket booking</li>
                  <li>• Package tours and excursions</li>
                  <li>• House rental arrangements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA - Minimal Style */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
            For urgent bookings or questions, contact us directly
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              as="a"
              href="https://wa.me/66815372657"
              target="_blank"
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800 font-light px-8 py-3 tracking-wide transition-colors duration-300">
              WhatsApp Now
            </Button>
            <Button
              as="a"
              href="tel:+66815372657"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-50 font-light px-8 py-3 tracking-wide border border-gray-200 transition-colors duration-300">
              Call Now
            </Button>
          </div>

          <p className="text-sm text-gray-500 font-light mt-8">
            We typically respond within 1 hour during business hours
          </p>
        </div>
      </section>
    </main>
  );
}
