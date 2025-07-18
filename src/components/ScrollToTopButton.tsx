'use client';

import { useState, useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

/**
 * Scroll to top button component
 * Shows when user scrolls down and provides smooth scroll to top
 */
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollTop } = useSmoothScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    scrollTop({ duration: 600, easing: 'easeOut' });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
