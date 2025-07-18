# Smooth Scroll Utility

A comprehensive smooth scrolling utility for the website that provides elegant navigation between sections.

## Features

- ✅ Smooth scrolling to any section by ID
- ✅ Customizable duration, offset, and easing
- ✅ React hook for easy component integration
- ✅ TypeScript support with full type safety
- ✅ Multiple easing functions (linear, easeInOut, easeIn, easeOut)
- ✅ Promise-based API for chaining actions
- ✅ Scroll spy functionality for navigation active states
- ✅ Viewport detection utilities

## Basic Usage

### 1. Using the React Hook (Recommended)

```tsx
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const MyComponent = () => {
  const { scrollTo, scrollTop, createScrollHandler } = useSmoothScroll();

  return (
    <div>
      {/* Button with click handler */}
      <button onClick={() => scrollTo('hero-section')}>
        Go to Hero
      </button>

      {/* Link with event handler */}
      <a href="#about" onClick={createScrollHandler('about-section')}>
        About Us
      </a>

      {/* Scroll to top */}
      <button onClick={() => scrollTop()}>
        Back to Top
      </button>
    </div>
  );
};
```

### 2. Using Direct Functions

```tsx
import { scrollToSection, scrollToTop } from '@/utils/smoothScroll';

// Scroll to section
scrollToSection('hero-section', {
  duration: 1000,
  offset: 100,
  easing: 'easeInOut'
});

// Scroll to top
scrollToTop({ duration: 600 });
```

## Navigation Menu Example

```tsx
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Navigation = () => {
  const { navigateToSection } = useSmoothScroll();

  const menuItems = [
    { label: 'Home', sectionId: 'hero-section' },
    { label: 'Services', sectionId: 'services-section' },
    { label: 'About', sectionId: 'about-section' },
    { label: 'Contact', sectionId: 'contact-section' },
  ];

  return (
    <nav>
      {menuItems.map((item) => (
        <button
          key={item.sectionId}
          onClick={() => navigateToSection(item.sectionId)}
          className="nav-link"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};
```

## Section IDs in the Website

Make sure your sections have proper IDs:

```tsx
// Landing Page
<section id="hero-section">Hero Content</section>
<section id="services-section">Services</section>
<section id="ferry-service">Ferry Services</section>
<section id="about-section">About Us</section>
<section id="contact-section">Contact</section>

// Airport Transfer Page
<section id="airport-hero">Airport Hero</section>
<section id="airport-transfer-destination">Transfer Rates</section>
<section id="fleet-section">Our Fleet</section>
```

## Advanced Options

```tsx
const { scrollTo } = useSmoothScroll({
  duration: 1200,    // Default duration
  offset: 80,        // Default offset for fixed navigation
  easing: 'easeInOut' // Default easing function
});

// Override defaults for specific scroll
scrollTo('section-id', {
  duration: 800,
  offset: 120,
  easing: 'easeOut'
});
```

## Scroll Spy for Active Navigation

```tsx
import { useScrollSpy } from '@/hooks/useSmoothScroll';

const Navigation = () => {
  const sectionIds = ['hero', 'services', 'about', 'contact'];
  const { getCurrentSection } = useScrollSpy(sectionIds);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(getCurrentSection());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [getCurrentSection]);

  return (
    <nav>
      {sectionIds.map((sectionId) => (
        <a
          key={sectionId}
          className={activeSection === sectionId ? 'active' : ''}
          onClick={() => scrollTo(sectionId)}
        >
          {sectionId}
        </a>
      ))}
    </nav>
  );
};
```

## Button Examples

```tsx
// CTA Button
<button
  onClick={() => scrollTo('contact-section')}
  className="cta-button"
>
  Get Started
</button>

// Navigation Link
<a
  href="#services"
  onClick={createScrollHandler('services-section')}
  className="nav-link"
>
  Our Services
</a>

// Custom offset for different sections
<button
  onClick={() => scrollTo('hero-section', { offset: 0 })}
  className="logo"
>
  Home
</button>
```

## Integration with Existing Components

Update your existing navigation and buttons to use smooth scrolling:

1. **Navigation Component**: Replace hash links with smooth scroll functions
2. **CTA Buttons**: Add smooth scrolling to contact sections
3. **Footer Links**: Smooth scroll to top or specific sections
4. **Mobile Menu**: Close menu and scroll to section

## Performance Notes

- Uses `requestAnimationFrame` for smooth 60fps animations
- Lightweight with no external dependencies
- Optimized easing functions for natural motion
- Promise-based API allows for action chaining
