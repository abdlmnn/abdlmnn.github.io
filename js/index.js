document.addEventListener('DOMContentLoaded', () => {
  const introModal = document.getElementById('introModal');
  const introWrapper = document.getElementById('introNameWrapper');

  if (introModal && introWrapper) {
    document.body.style.overflow = 'hidden';

    // Array of letters: ABDULMANAN
    // Indices:          0123456789
    // Remove:           U(3), A(6), A(8)

    const letters = ['A', 'B', 'D', 'U', 'L', 'M', 'A', 'N', 'A', 'N'];
    const indicesToRemove = [3, 6, 8];

    letters.forEach((char, index) => {
      const span = document.createElement('span');
      span.className = 'intro-letter';
      span.textContent = char;
      span.dataset.originalIndex = index;

      if (indicesToRemove.includes(index)) {
        span.classList.add('to-remove');
      }

      introWrapper.appendChild(span);
    });

    const fadeOutElements = introWrapper.querySelectorAll('.to-remove');

    setTimeout(() => {
      fadeOutElements.forEach((el, i) => {
        setTimeout(() => {
          const width = el.offsetWidth;
          el.style.width = width + 'px';
          el.style.maxWidth = width + 'px';

          el.classList.add('fading');

          setTimeout(() => {
            el.style.width = '0px';
            el.style.maxWidth = '0px';
            el.style.margin = '0';
            el.style.padding = '0';
          }, 300);
        }, i * 300);
      });

      setTimeout(() => {
        introModal.classList.add('hidden');

        setTimeout(() => {
          introModal.remove();
          document.body.style.overflow = '';
        }, 1000);
      }, fadeOutElements.length * 300 + 1000);

      // 1150
      // 1335
      // 1550
    }, 1555);
  }

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const scrollIndicator = document.getElementById('scrollIndicator');
  const mobileBottomNav = document.getElementById('mobileBottomNav');

  let lastScrollY = 0;
  let ticking = false;

  const updateNav = () => {
    const scrollY = window.scrollY;

    // Only update desktop nav if it exists
    if (nav) {
      if (scrollY > 50) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    }

    if (scrollY > 100) {
      scrollIndicator.classList.add('hidden');
    } else {
      scrollIndicator.classList.remove('hidden');
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateNav();
        ticking = false;
      });
      ticking = true;
    }
  })

  // Desktop navigation toggle (only for desktop)
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');

      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Mobile bottom navigation - set active state based on current page
  if (mobileBottomNav) {
    const currentPath = window.location.pathname;
    const mobileNavItems = mobileBottomNav.querySelectorAll('.mobile-nav-item');

    mobileNavItems.forEach(item => {
      const href = item.getAttribute('href');
      // Check if the current path matches the nav item href
      if (currentPath.includes(href) || (currentPath === '/' && href === 'index.html')) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  scrollIndicator.addEventListener('click', () => {
    window.location.href = 'gallery.html';
  });

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

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  updateNav();
})

function setHeroImage(imagePath) {
  const heroBg = document.querySelector('.photo-hero-bg');

  if (heroBg) {
    const placeholder = heroBg.querySelector('.placeholder-bg');

    if (placeholder) {
      placeholder.remove();
    }

    heroBg.style.backgroundImage = `url('${imagePath}')`;
    heroBg.style.backgroundSize = 'cover';
    heroBg.style.backgroundPosition = 'center';
    heroBg.style.backgroundRepeat = 'no-repeat';
  }
}

window.setHeroImage = setHeroImage;
