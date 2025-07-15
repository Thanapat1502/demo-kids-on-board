"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Brief loading animation

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        {/* Main loading animation */}
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Pulsing background circle */}
        <div className="absolute inset-0 w-16 h-16 border-2 border-blue-100 rounded-full animate-pulse"></div>

        {/* Loading text */}
        <div className="mt-4 text-center">
          <p className="text-blue-600 font-semibold animate-pulse">
            Loading...
          </p>
        </div>
      </div>

      {/* Background overlay with fade animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
    </div>
  );
}
