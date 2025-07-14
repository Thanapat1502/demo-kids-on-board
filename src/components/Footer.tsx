"use client";

import { Link, Divider } from "@heroui/react";
import { FaCar, FaEnvelope, FaPhone, FaWhatsapp, FaLine } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FaCar className="text-blue-400 text-xl" />
              <h3 className="text-xl font-bold text-blue-400">
                Phuket Child Seat
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Professional travel services in Phuket with child seat safety. We
              use imported Britax child seats from Sweden for maximum safety and
              comfort.
            </p>
            <p className="text-sm text-gray-400">
              TAT License: 32/01713 | Operated by Kampanart Travel
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/airport-transfer"
                  className="text-gray-300 hover:text-blue-400">
                  Airport Transfer
                </Link>
              </li>
              <li>
                <Link
                  href="/day-trips"
                  className="text-gray-300 hover:text-blue-400">
                  Day Trips
                </Link>
              </li>
              <li>
                <Link
                  href="/house-for-rent"
                  className="text-gray-300 hover:text-blue-400">
                  House for Rent
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <span>kam.phuket@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-blue-400" />
                <span>+66 81 537 2657</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-400" />
                <span>WhatsApp: +66 81 537 2657</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLine className="text-green-400" />
                <span>Line ID: kampanart-travel</span>
              </div>
            </div>
          </div>
        </div>

        <Divider className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Phuket Child Seat. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">
              Safe • Reliable • Professional
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
