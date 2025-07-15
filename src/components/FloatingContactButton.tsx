"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLine,
  FaComments,
  FaTimes,
} from "react-icons/fa";

/**
 * FloatingContactButton - A reusable floating contact button component
 *
 * Features:
 * - Expandable contact options (Email, Phone, WhatsApp, Line)
 * - Smooth animations and hover effects
 * - Tooltips for better UX
 * - Responsive design
 * - Customizable styling via className prop
 *
 * Usage:
 * <FloatingContactButton className="custom-styles" />
 */
interface FloatingContactButtonProps {
  className?: string;
}

export default function FloatingContactButton({
  className = "",
}: FloatingContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:kam.phuket@gmail.com",
      bgColor: "bg-blue-500 hover:bg-blue-600",
      textColor: "text-white",
    },
    {
      icon: FaPhone,
      label: "Call",
      href: "tel:+66815372657",
      bgColor: "bg-green-500 hover:bg-green-600",
      textColor: "text-white",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/66815372657",
      bgColor: "bg-green-600 hover:bg-green-700",
      textColor: "text-white",
      target: "_blank",
    },
    {
      icon: FaLine,
      label: "Line",
      href: "https://line.me/ti/p/kampanart-travel",
      bgColor: "bg-green-400 hover:bg-green-500",
      textColor: "text-white",
      target: "_blank",
    },
  ];

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Contact Options */}
      <div
        className={`flex flex-col gap-3 mb-4 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}>
        {contactOptions.map((option, index) => {
          const IconComponent = option.icon;
          return (
            <div
              key={option.label}
              className={`relative transition-all duration-300`}
              style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}>
              <div className="group relative">
                <Button
                  as="a"
                  href={option.href}
                  target={option.target}
                  className={`${option.bgColor} ${option.textColor} shadow-lg hover:shadow-xl transition-all duration-300 min-w-0 w-14 h-14 rounded-full flex items-center justify-center`}
                  isIconOnly>
                  <IconComponent className="text-xl group-hover:scale-110 transition-transform duration-200" />
                </Button>

                {/* Tooltip */}
                <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <div className="bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap shadow-lg">
                    {option.label}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600 text-white rotate-180"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
        isIconOnly>
        {isOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaComments className="text-2xl" />
        )}
      </Button>
    </div>
  );
}
