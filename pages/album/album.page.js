document.addEventListener("DOMContentLoaded", () => {
  const pageData = {
    meta: {
      title: "Albums - abdlmnn",
      description: "Abdlmnn - Albums. Photo collections organized by theme and location.",
    },
    heading: "Albums",
    subtitle: "Photo collections organized by theme and location",
    items: [
      { src: "../../images/KSA/1000027400 (2).jpg", alt: "Saudi Arabia 1", label: "Saudi Arabia 1" },
      { src: "../../images/KSA/1000027491.jpg", alt: "Desert sunset 3", label: "Desert Sunset 3" },
      { src: "../../images/KSA/1000027404.jpg", alt: "City lights 2", label: "City Lights 2" },
      { src: "../../images/KSA/1000027527.jpg", alt: "Architecture 4", label: "Architecture 4" },
      // { src: "../../images/KSA/1000027501.jpg", alt: "Saudi landscape", label: "Landscape 5" },
      // { src: "../../images/KSA/1000027405.jpg", alt: "Desert view", label: "Desert View 6" },
      // { src: "../../images/KSA/1000027401 (2).jpg", alt: "Saudi Arabia", label: "Saudi Arabia 7" },
      // { src: "../../images/KSA/1000027402 (2).jpg", alt: "Saudi Arabia", label: "Saudi Arabia 8" },
    ],
  };

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && typeof value === "string") el.textContent = value;
  };

  const titleEl = document.getElementById("albumPageTitle");
  if (titleEl) titleEl.textContent = pageData.meta.title;
  const descEl = document.getElementById("albumMetaDescription");
  if (descEl) descEl.setAttribute("content", pageData.meta.description);

  setText("albumsHeading", pageData.heading);
  setText("albumsSubtitle", pageData.subtitle);

  const track = document.getElementById("masonryGallery");
  const slider = document.getElementById("scrollSlider");
  if (!track || !slider) return;
  const sticky = slider.querySelector(".scroll-slider-sticky");
  const isMobileSwipeMode = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;

  track.innerHTML = pageData.items
    .map((item, index) => {
      const isPriority = index < 3;
      return `
        <article class="gallery-item">
          <img
            src="${item.src}"
            alt="${item.alt}"
            width="535"
            height="385"
            loading="${isPriority ? "eager" : "lazy"}"
            fetchpriority="${isPriority ? "high" : "auto"}"
            decoding="async"
          >
          <span class="image-darkener" aria-hidden="true"></span>
          <div class="gallery-item-overlay">
            <span class="gallery-item-text">${item.label}</span>
          </div>
        </article>
      `;
    })
    .join("");

  let hoverBgTimer = null;
  let activeBgSrc = "";
  let activeItem = null;
  let activeLayer = "a";
  const decodedHoverImages = new Set();
  const decodeTasks = new Map();

  const predecodeImage = (src) => {
    if (!src || decodedHoverImages.has(src)) return Promise.resolve();
    if (decodeTasks.has(src)) return decodeTasks.get(src);

    const task = new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
      const finish = () => {
        decodedHoverImages.add(src);
        decodeTasks.delete(src);
        resolve();
      };

      if (img.decode) {
        img.decode().then(finish).catch(finish);
      } else {
        img.onload = finish;
        img.onerror = finish;
      }
    });

    decodeTasks.set(src, task);
    return task;
  };

  const setHoveredBackground = (imageSrc) => {
    if (imageSrc === activeBgSrc) return;
    activeBgSrc = imageSrc;

    if (!imageSrc) {
      document.body.style.removeProperty("--album-hover-bg-a");
      document.body.style.removeProperty("--album-hover-bg-b");
      document.body.classList.remove("has-hover-bg");
      document.body.classList.remove("layer-a");
      document.body.classList.remove("layer-b");
      activeLayer = "a";
      return;
    }

    const nextLayer = activeLayer === "a" ? "b" : "a";
    document.body.style.setProperty(`--album-hover-bg-${nextLayer}`, `url("${imageSrc}")`);
    document.body.classList.remove(`layer-${activeLayer}`);
    document.body.classList.add(`layer-${nextLayer}`);
    activeLayer = nextLayer;
    document.body.classList.add("has-hover-bg");
  };

  const clearActiveHover = () => {
    if (activeItem) activeItem.classList.remove("is-hovered");
    activeItem = null;
    if (hoverBgTimer) window.clearTimeout(hoverBgTimer);
    hoverBgTimer = window.setTimeout(() => {
      setHoveredBackground("");
    }, 40);
  };

  track.querySelectorAll(".gallery-item").forEach((itemEl) => {
    const imageEl = itemEl.querySelector("img");
    if (!imageEl) return;

    const onEnter = () => {
      if (activeItem && activeItem !== itemEl) {
        activeItem.classList.remove("is-hovered");
      }
      itemEl.classList.add("is-hovered");
      activeItem = itemEl;
      const hoverSrc = imageEl.currentSrc || imageEl.src;
      if (hoverBgTimer) window.clearTimeout(hoverBgTimer);
      hoverBgTimer = window.setTimeout(() => {
        predecodeImage(hoverSrc).finally(() => {
          if (activeItem === itemEl) setHoveredBackground(hoverSrc);
        });
      }, 40);
    };

    itemEl.addEventListener("pointerenter", onEnter);
    itemEl.addEventListener("mouseenter", onEnter);
    itemEl.addEventListener("pointerleave", clearActiveHover);
    itemEl.addEventListener("mouseleave", clearActiveHover);
  });

  track.addEventListener("pointerleave", clearActiveHover);
  window.addEventListener("blur", clearActiveHover);

  const primeHoverBackgrounds = () => {
    const imageEls = track.querySelectorAll(".gallery-item img");
    imageEls.forEach((imgEl, index) => {
      const src = imgEl.currentSrc || imgEl.src;
      const delay = index * 60;
      window.setTimeout(() => {
        predecodeImage(src);
      }, delay);
    });
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(primeHoverBackgrounds, { timeout: 1200 });
  } else {
    window.setTimeout(primeHoverBackgrounds, 500);
  }

  let maxTranslate = 0;
  let scrollDistance = 0;
  let endHoldDistance = 0;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const recalculateSlider = () => {
    if (isMobileSwipeMode) {
      slider.style.height = "auto";
      track.style.transform = "none";
      return;
    }

    const sliderWidth = slider.clientWidth;
    const trackWidth = track.scrollWidth;
    const stickyHeight = sticky ? sticky.clientHeight : window.innerHeight;
    const stickyTop = sticky ? parseFloat(window.getComputedStyle(sticky).top || "0") : 0;

    maxTranslate = Math.max(0, trackWidth - sliderWidth);
    scrollDistance = maxTranslate;
    endHoldDistance = Math.round(stickyHeight * 0.35);
    slider.style.height = `${stickyHeight + stickyTop + scrollDistance + endHoldDistance}px`;

    updateSlider();
  };

  const updateSlider = () => {
    if (isMobileSwipeMode) return;
    const start = slider.offsetTop;
    const current = window.scrollY - start;
    const progress = clamp(current / (scrollDistance || 1), 0, 1);
    const x = -maxTranslate * progress;
    track.style.transform = `translate3d(${x}px, 0, 0)`;
  };

  let scrollRaf = null;
  const onScroll = () => {
    if (isMobileSwipeMode) return;
    if (scrollRaf) return;
    scrollRaf = window.requestAnimationFrame(() => {
      updateSlider();
      scrollRaf = null;
    });
  };

  let resizeTimer = null;
  const onResize = () => {
    if (resizeTimer) window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(recalculateSlider, 120);
  };

  if (!isMobileSwipeMode) {
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  window.addEventListener("resize", onResize, { passive: true });

  recalculateSlider();
});
