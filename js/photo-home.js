/**
 * Photography Homepage - JavaScript
 * Minimalist interactions for the hero section
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const nav = document.getElementById('photoNav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const scrollIndicator = document.getElementById('scrollIndicator');

  // ===================================
  // Navigation Scroll Effect
  // ===================================

  let lastScrollY = 0;
  let ticking = false;

  const updateNav = () => {
    const scrollY = window.scrollY;

    // Add scrolled class when scrolled past hero
    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Hide/show scroll indicator
    if (scrollY > 100) {
      scrollIndicator.classList.add('hidden');
    } else {
      scrollIndicator.classList.remove('hidden');
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ===================================
  // Mobile Navigation Toggle
  // ===================================

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ===================================
  // Scroll Indicator Click - Navigate to Gallery
  // ===================================

  scrollIndicator.addEventListener('click', () => {
    // Navigate to gallery page
    window.location.href = 'gallery.html';
  });

  // ===================================
  // Intersection Observer for Animations
  // ===================================

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // ===================================
  // Initial State
  // ===================================

  updateNav();
});

// ===================================
// Helper: Add hero image dynamically
// ===================================

/**
 * To add a hero image dynamically, call this function:
 *
 * setHeroImage('path/to/your/image.jpg');
 */
function setHeroImage(imagePath) {
  const heroBg = document.querySelector('.photo-hero-bg');

  if (heroBg) {
    // Remove placeholder
    const placeholder = heroBg.querySelector('.placeholder-bg');
    if (placeholder) {
      placeholder.remove();
    }

    // Set background image
    heroBg.style.backgroundImage = `url('${imagePath}')`;
    heroBg.style.backgroundSize = 'cover';
    heroBg.style.backgroundPosition = 'center';
    heroBg.style.backgroundRepeat = 'no-repeat';
  }
}

// Make function available globally
window.setHeroImage = setHeroImage;
