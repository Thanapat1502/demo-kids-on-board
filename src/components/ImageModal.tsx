"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ImageModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
      window.addEventListener("keydown", handleEscKey);
      setIsAnimating(true);
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when modal is closed
      setIsAnimating(false);
    }

    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is re-enabled on unmount
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`relative max-w-5xl w-full max-h-[90vh] transition-transform duration-300 ${
          isAnimating ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>

        {/* Image container */}
        <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>

        {/* Optional caption */}
        <div
          id="modal-title"
          className="mt-2 text-center text-white text-lg font-medium"
        >
          {imageAlt}
        </div>
      </div>
    </div>
  );
}
