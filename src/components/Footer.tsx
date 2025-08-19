"use client";

import { Link } from "@heroui/react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaLine } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
              Phuket Childseat
            </h3>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              Professional family transport services with imported Britax child
              seats from Sweden. Maximum safety, premium comfort.
            </p>

            {/* Owner Section */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/image/contact/owner.png"
                  alt="Thanapath - Developer"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  Thanapath
                </h4>
                <p className="text-xs text-gray-500 font-light">Developer</p>
                <p className="text-xs text-gray-400 mt-1">
                  Your trusted developer
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 uppercase tracking-widest">
              DEMO License
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/airport-transfer"
                  className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                  Airport Transfer
                </Link>
              </li>
              <li>
                <Link
                  href="/day-trips"
                  className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                  Day Trips
                </Link>
              </li>
              <li>
                <Link
                  href="/house-for-rent"
                  className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                  House for Rent
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 font-light transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 uppercase tracking-widest mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400 text-sm" />
                <span className="text-gray-600 font-light">
                  thanapat15020@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-gray-400 text-sm" />
                <span className="text-gray-600 font-light">
                  +66 85 099 4775
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-gray-400 text-sm" />
                <span className="text-gray-600 font-light">WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLine className="text-gray-400 text-sm" />
                <span className="text-gray-600 font-light">Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-light">
            © 2025 Demo Travel. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-xs uppercase tracking-widest font-light">
              Safe • Reliable • Professional
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
