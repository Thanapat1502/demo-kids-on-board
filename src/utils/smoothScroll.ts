/**
 * Smooth scroll utility functions for website navigation
 */

export interface ScrollOptions {
  /** Duration of the scroll animation in milliseconds */
  duration?: number;
  /** Offset from the top of the target element in pixels */
  offset?: number;
  /** Easing function for the animation */
  easing?: 'linear' | 'easeInOut' | 'easeIn' | 'easeOut';
}

/**
 * Easing functions for smooth scrolling animations
 */
const easingFunctions = {
  linear: (t: number) => t,
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeIn: (t: number) => t * t,
  easeOut: (t: number) => t * (2 - t),
};

/**
 * Smooth scroll to a specific element by ID
 * @param elementId - The ID of the target element (without #)
 * @param options - Scroll options
 * @returns Promise that resolves when scroll is complete
 */
export const scrollToSection = (
  elementId: string,
  options: ScrollOptions = {}
): Promise<void> => {
  return new Promise((resolve) => {
    const {
      duration = 800,
      offset = 80, // Default offset for fixed navigation
      easing = 'easeInOut'
    } = options;

    const targetElement = document.getElementById(elementId);
    
    if (!targetElement) {
      console.warn(`Element with ID "${elementId}" not found`);
      resolve();
      return;
    }

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop - offset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const easingFunction = easingFunctions[easing];

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easingFunction(progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animateScroll);
  });
};

/**
 * Smooth scroll to top of the page
 * @param options - Scroll options
 * @returns Promise that resolves when scroll is complete
 */
export const scrollToTop = (options: ScrollOptions = {}): Promise<void> => {
  return new Promise((resolve) => {
    const {
      duration = 600,
      easing = 'easeOut'
    } = options;

    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const easingFunction = easingFunctions[easing];

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easingFunction(progress);
      
      window.scrollTo(0, startPosition * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animateScroll);
  });
};

/**
 * Smooth scroll to a specific Y position
 * @param targetY - Target Y position in pixels
 * @param options - Scroll options
 * @returns Promise that resolves when scroll is complete
 */
export const scrollToPosition = (
  targetY: number,
  options: ScrollOptions = {}
): Promise<void> => {
  return new Promise((resolve) => {
    const {
      duration = 800,
      easing = 'easeInOut'
    } = options;

    const startPosition = window.pageYOffset;
    const distance = targetY - startPosition;
    const startTime = performance.now();
    const easingFunction = easingFunctions[easing];

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easingFunction(progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animateScroll);
  });
};

/**
 * Create a click handler for smooth scrolling to a section
 * @param elementId - The ID of the target element
 * @param options - Scroll options
 * @returns Click handler function
 */
export const createScrollHandler = (
  elementId: string,
  options: ScrollOptions = {}
) => {
  return (event: React.MouseEvent | Event) => {
    event.preventDefault();
    scrollToSection(elementId, options);
  };
};

/**
 * Hook for smooth scrolling functionality
 * @param options - Default scroll options
 * @returns Object with scroll functions
 */
export const useSmoothScroll = (defaultOptions: ScrollOptions = {}) => {
  const scrollTo = (elementId: string, options?: ScrollOptions) => {
    return scrollToSection(elementId, { ...defaultOptions, ...options });
  };

  const scrollTop = (options?: ScrollOptions) => {
    return scrollToTop({ ...defaultOptions, ...options });
  };

  const scrollToY = (targetY: number, options?: ScrollOptions) => {
    return scrollToPosition(targetY, { ...defaultOptions, ...options });
  };

  const createHandler = (elementId: string, options?: ScrollOptions) => {
    return createScrollHandler(elementId, { ...defaultOptions, ...options });
  };

  return {
    scrollTo,
    scrollTop,
    scrollToY,
    createHandler,
  };
};

/**
 * Check if an element is in viewport
 * @param elementId - The ID of the element to check
 * @param threshold - Percentage of element that should be visible (0-1)
 * @returns Boolean indicating if element is in viewport
 */
export const isElementInViewport = (
  elementId: string,
  threshold: number = 0.1
): boolean => {
  const element = document.getElementById(elementId);
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const elementHeight = rect.bottom - rect.top;
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  
  return visibleHeight / elementHeight >= threshold;
};

/**
 * Get the currently visible section based on scroll position
 * @param sectionIds - Array of section IDs to check
 * @param offset - Offset from top for calculation
 * @returns ID of the currently visible section
 */
export const getCurrentSection = (
  sectionIds: string[],
  offset: number = 100
): string | null => {
  const scrollPosition = window.pageYOffset + offset;
  
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const element = document.getElementById(sectionIds[i]);
    if (element && element.offsetTop <= scrollPosition) {
      return sectionIds[i];
    }
  }
  
  return sectionIds[0] || null;
};
