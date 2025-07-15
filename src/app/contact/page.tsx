"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaWhatsapp, FaLine } from "react-icons/fa";

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-8 text-blue-100">
            {`Get in touch for bookings and inquiries - We're here to help!`}
          </p>
          <p className="text-lg text-blue-200">
            {`Don't hesitate to contact us with questions or booking requests`}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Information */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600">
              Choose your preferred method of communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaEnvelope className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Email</h3>
                <p className="text-gray-600 mb-4 text-lg">
                  kam.phuket@gmail.com
                </p>
                <Button
                  as="a"
                  href="mailto:kam.phuket@gmail.com"
                  color="primary"
                  variant="flat"
                  size="sm">
                  Send Email
                </Button>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaPhone className="text-3xl text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Mobile
                </h3>
                <p className="text-gray-600 mb-4 text-lg">+66 81 537 2657</p>
                <Button
                  as="a"
                  href="tel:+66815372657"
                  color="primary"
                  variant="flat"
                  size="sm">
                  Call Now
                </Button>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
                  <FaWhatsapp className="text-3xl text-green-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  WhatsApp
                </h3>
                <p className="text-gray-600 mb-4 text-lg">+66 81 537 2657</p>
                <Button
                  as="a"
                  href="https://wa.me/66815372657"
                  target="_blank"
                  color="success"
                  variant="flat"
                  size="sm">
                  WhatsApp
                </Button>
              </CardBody>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardBody className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
                  <FaLine className="text-3xl text-green-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Line</h3>
                <p className="text-gray-600 mb-4 text-lg">kampanart-travel</p>
                <Button color="success" variant="flat" size="sm">
                  Line ID
                </Button>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                {`Fill out the form below and we'll get back to you as soon as
                possible. Your message will be sent directly to our WhatsApp for
                quick response.`}
              </p>

              <Card className="p-6">
                <CardBody>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onValueChange={(value) =>
                          handleInputChange("name", value)
                        }
                        required
                      />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onValueChange={(value) =>
                          handleInputChange("email", value)
                        }
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Phone Number"
                        placeholder="Enter your phone"
                        value={formData.phone}
                        onValueChange={(value) =>
                          handleInputChange("phone", value)
                        }
                      />
                      <Input
                        label="Service Interested"
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
                      value={formData.message}
                      onValueChange={(value) =>
                        handleInputChange("message", value)
                      }
                      minRows={4}
                      required
                    />

                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      className="w-full font-semibold">
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meet Our Owner
              </h2>

              {/* Owner Image Section */}
              <Card className="p-6 mb-6">
                <CardBody>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/image/contact/owner.png"
                        alt="Mr. Kam - Owner"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Mr. Kam
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-3">
                      Owner & Operations Manager
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {`"Safety is our top priority. As a father myself, I
                      understand the importance of child safety during travel.
                      That's why we use only the best imported Britax child
                      seats and maintain the highest safety standards for all
                      our services."`}
                    </p>
                  </div>
                </CardBody>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Business Information
              </h2>

              <Card className="p-6 mb-6">
                <CardHeader className="pb-0">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Kampanart Travel
                  </h3>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="text-xl">🏆</div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          TAT Licensed
                        </p>
                        <p className="text-gray-600">License #32/01713</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-xl">👨‍💼</div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Operations Manager
                        </p>
                        <p className="text-gray-600">
                          Mr. Kam (Taxi and Tours)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="text-xl">🛡️</div>
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
                </CardBody>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-0">
                  <h3 className="text-xl font-semibold text-blue-900">
                    Our Services
                  </h3>
                </CardHeader>
                <CardBody>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Airport transfer with child seats</li>
                    <li>• Taxi with child seat services</li>
                    <li>• Island city tours with guide</li>
                    <li>• Car rental with driver and guide</li>
                    <li>• Ferry and boat ticket booking</li>
                    <li>• Package tours and excursions</li>
                    <li>• House rental arrangements</li>
                  </ul>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-6 text-blue-100">
            For urgent bookings or questions, contact us directly
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href="https://wa.me/66815372657"
              target="_blank"
              size="lg"
              color="success"
              variant="solid"
              className="font-semibold">
              WhatsApp Now
            </Button>
            <Button
              as="a"
              href="tel:+66815372657"
              size="lg"
              color="warning"
              variant="solid"
              className="font-semibold">
              Call Now
            </Button>
          </div>

          <p className="text-sm text-blue-200 mt-6">
            We typically respond within 1 hour during business hours
          </p>
        </section>
      </div>
    </div>
  );
}
