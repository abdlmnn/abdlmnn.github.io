function inferPageType() {
  const pageFromData = document.body?.dataset?.page;
  if (pageFromData) return pageFromData;

  const path = window.location.pathname.replace(/\\/g, '/');
  return path.includes('/pages/blog/') ? 'blog' : 'index';
}

function getRootPrefix(pageType) {
  return pageType === 'blog' ? '../../' : '';
}

function toHref(pageType, rootPath) {
  return `${getRootPrefix(pageType)}${rootPath}`;
}

function normalizePathname(pathname) {
  if (!pathname) return '/';
  const normalized = pathname.replace(/\/+/g, '/');
  if (normalized !== '/' && normalized.endsWith('/')) {
    return normalized.slice(0, -1);
  }
  return normalized;
}

function shouldShowIntroModal(pageType) {
  if (pageType !== 'index') return false;

  const introSessionKey = 'abdlmnn_intro_shown';
  if (sessionStorage.getItem(introSessionKey) === '1') {
    return false;
  }

  const referrer = document.referrer;
  if (!referrer) return true;

  try {
    const refUrl = new URL(referrer);
    if (refUrl.origin !== window.location.origin) return true;

    const currentPath = normalizePathname(window.location.pathname);
    const refPath = normalizePathname(refUrl.pathname);
    return refPath === currentPath && sessionStorage.getItem(introSessionKey) !== '1';
  } catch (_error) {
    return true;
  }
}

function iconBlog() {
  return `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="1.5" />
      <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      <line x1="8" y1="16" x2="13" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  `;
}

function iconHome() {
  return `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
}

function iconGallery() {
  return `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
      <path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
}

function iconWork() {
  return `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5" />
      <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="currentColor" stroke-width="1.5" />
      <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      <line x1="10" y1="14" x2="14" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  `;
}

function iconAlbum() {
  return `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18H15C16.1046 18 17 17.1046 17 16V10C17 8.89543 16.1046 8 15 8H9C7.89543 8 7 8.89543 7 10V16C7 17.1046 7.89543 18 9 18Z" stroke="currentColor" stroke-width="1.5" />
      <path d="M12 8V6C12 4.89543 11.1046 4 10 4H8C6.89543 4 6 4.89543 6 6V8" stroke="currentColor" stroke-width="1.5" />
      <circle cx="12" cy="13" r="2" stroke="currentColor" stroke-width="1.5" />
    </svg>
  `;
}

function iconAbout() {
  return `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.5" />
      <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  `;
}

function renderDesktopNav(pageType) {
  const mount = document.getElementById('siteNavMount');
  if (!mount) return;

  const firstLink = pageType === 'blog'
    ? { label: 'Home', href: toHref(pageType, 'index.html') }
    : { label: 'Blog', href: toHref(pageType, 'pages/blog/blog.html') };

  const links = [
    firstLink,
    { label: 'Album', href: toHref(pageType, 'pages/album/album.html') },
    { label: 'Gallery', href: toHref(pageType, 'pages/gallery/gallery.html') },
    { label: 'Work', href: toHref(pageType, 'work.html') },
    { label: 'About', href: toHref(pageType, 'pages/about/about.html') },
    { label: 'Contact', href: toHref(pageType, 'pages/contact/contact.html') },
  ];

  mount.innerHTML = `
    <nav class="navigation" id="nav">
      <div class="nav-cont">
        <div class="nav-links" id="navLinks">
          ${links.map((item) => `<a href="${item.href}" class="nav-link">${item.label}</a>`).join('')}
        </div>

        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;
}

function renderContactFab(pageType) {
  const mount = document.getElementById('contactFabMount');
  if (!mount) return;

  mount.innerHTML = `
    <a href="${toHref(pageType, 'pages/contact/contact.html')}" class="contact-fab" aria-label="Contact">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a>
  `;
}
function renderMobileBottomNav(pageType) {
  const mount = document.getElementById('mobileNavMount');
  if (!mount) return;

  const first = pageType === 'blog'
    ? {
        label: 'Home',
        href: toHref(pageType, 'index.html'),
        icon: iconHome(),
      }
    : {
        label: 'Blog',
        href: toHref(pageType, 'pages/blog/blog.html'),
        icon: iconBlog(),
      };

  const items = [
    first,
    { label: 'Gallery', href: toHref(pageType, 'pages/gallery/gallery.html'), icon: iconGallery() },
    { label: 'Work', href: toHref(pageType, 'work.html'), icon: iconWork() },
    { label: 'Album', href: toHref(pageType, 'pages/album/album.html'), icon: iconAlbum() },
    { label: 'About', href: toHref(pageType, 'pages/about/about.html'), icon: iconAbout() },
  ];

  mount.innerHTML = `
    <nav class="mobile-bottom-nav" id="mobileBottomNav">
      ${items
        .map(
          (item) => `
            <a href="${item.href}" class="mobile-nav-item">
              ${item.icon}
              <span>${item.label}</span>
            </a>
          `
        )
        .join('')}
    </nav>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const pageType = inferPageType();
  renderDesktopNav(pageType);
  renderMobileBottomNav(pageType);
  renderContactFab(pageType);

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  const introModal = document.getElementById('introModal');
  const introWrapper = document.getElementById('introNameWrapper');

  if (introModal && introWrapper && shouldShowIntroModal(pageType)) {
    sessionStorage.setItem('abdlmnn_intro_shown', '1');
    document.body.classList.remove('no-intro');
    document.body.style.overflow = 'hidden';

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
    }, 1555);
  } else if (introModal) {
    document.body.classList.add('no-intro');
    introModal.remove();
  } else {
    document.body.classList.add('no-intro');
  }

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const scrollIndicator = document.getElementById('scrollIndicator');
  const mobileBottomNav = document.getElementById('mobileBottomNav');

  let ticking = false;

  const updateNav = () => {
    const scrollY = window.scrollY;

    if (nav) {
      if (scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    if (scrollIndicator) {
      if (scrollY > 100) {
        scrollIndicator.classList.add('hidden');
      } else {
        scrollIndicator.classList.remove('hidden');
      }
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');

      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach((link) => {
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

  if (mobileBottomNav) {
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const mobileNavItems = mobileBottomNav.querySelectorAll('.mobile-nav-item');

    mobileNavItems.forEach((item) => {
      const href = item.getAttribute('href');
      const normalizedHref = href?.replace(/^\.\//, '').replace(/\\/g, '/');
      if (normalizedHref && currentPath.endsWith(normalizedHref)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      window.location.href = toHref(pageType, 'pages/gallery/gallery.html');
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  updateNav();
});

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


