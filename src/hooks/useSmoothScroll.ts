'use client';

import { useCallback } from 'react';
import { scrollToSection, scrollToTop, scrollToPosition, ScrollOptions } from '@/utils/smoothScroll';

/**
 * React hook for smooth scrolling functionality
 * Provides easy-to-use functions for smooth scrolling in React components
 */
export const useSmoothScroll = (defaultOptions: ScrollOptions = {}) => {
  // Default options with navigation offset
  const options = {
    duration: 800,
    offset: 80,
    easing: 'easeInOut' as const,
    ...defaultOptions,
  };

  /**
   * Scroll to a section by ID
   */
  const scrollTo = useCallback((elementId: string, customOptions?: ScrollOptions) => {
    return scrollToSection(elementId, { ...options, ...customOptions });
  }, [options]);

  /**
   * Scroll to top of page
   */
  const scrollTop = useCallback((customOptions?: ScrollOptions) => {
    return scrollToTop({ ...options, ...customOptions });
  }, [options]);

  /**
   * Scroll to specific Y position
   */
  const scrollToY = useCallback((targetY: number, customOptions?: ScrollOptions) => {
    return scrollToPosition(targetY, { ...options, ...customOptions });
  }, [options]);

  /**
   * Create a click handler for buttons/links
   */
  const createScrollHandler = useCallback((elementId: string, customOptions?: ScrollOptions) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      scrollTo(elementId, customOptions);
    };
  }, [scrollTo]);

  /**
   * Navigate to a section (for navigation menus)
   */
  const navigateToSection = useCallback((sectionId: string) => {
    // Close mobile menu if it exists
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
    
    return scrollTo(sectionId);
  }, [scrollTo]);

  return {
    scrollTo,
    scrollTop,
    scrollToY,
    createScrollHandler,
    navigateToSection,
  };
};

/**
 * Hook for navigation active state based on scroll position
 */
export const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const getCurrentSection = useCallback(() => {
    const scrollPosition = window.pageYOffset + offset;
    
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const element = document.getElementById(sectionIds[i]);
      if (element && element.offsetTop <= scrollPosition) {
        return sectionIds[i];
      }
    }
    
    return sectionIds[0] || null;
  }, [sectionIds, offset]);

  return { getCurrentSection };
};
