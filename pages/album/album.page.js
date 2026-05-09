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
      { src: "../../images/KSA/1000027501.jpg", alt: "Saudi landscape", label: "Landscape 5" },
      { src: "../../images/KSA/1000027405.jpg", alt: "Desert view", label: "Desert View 6" },
      { src: "../../images/KSA/1000027401 (2).jpg", alt: "Saudi Arabia", label: "Saudi Arabia 7" },
      { src: "../../images/KSA/1000027402 (2).jpg", alt: "Saudi Arabia", label: "Saudi Arabia 8" },
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

  const setHoveredBackground = (imageSrc) => {
    if (imageSrc === activeBgSrc) return;
    activeBgSrc = imageSrc;

    if (!imageSrc) {
      document.body.style.removeProperty("--album-hover-bg");
      document.body.classList.remove("has-hover-bg");
      return;
    }

    document.body.style.setProperty("--album-hover-bg", `url("${imageSrc}")`);
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

    itemEl.addEventListener("pointerenter", () => {
      if (activeItem && activeItem !== itemEl) {
        activeItem.classList.remove("is-hovered");
      }
      itemEl.classList.add("is-hovered");
      activeItem = itemEl;
      if (hoverBgTimer) window.clearTimeout(hoverBgTimer);
      hoverBgTimer = window.setTimeout(() => {
        setHoveredBackground(imageEl.currentSrc || imageEl.src);
      }, 40);
    });

    itemEl.addEventListener("pointerleave", clearActiveHover);
  });

  track.addEventListener("pointerleave", clearActiveHover);
  window.addEventListener("blur", clearActiveHover);

  let maxTranslate = 0;
  let scrollDistance = 0;
  let endHoldDistance = 0;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const recalculateSlider = () => {
    const sliderWidth = slider.clientWidth;
    const trackWidth = track.scrollWidth;
    const sticky = slider.querySelector(".scroll-slider-sticky");
    const stickyHeight = sticky ? sticky.clientHeight : window.innerHeight;
    const stickyTop = sticky ? parseFloat(window.getComputedStyle(sticky).top || "0") : 0;

    maxTranslate = Math.max(0, trackWidth - sliderWidth);
    scrollDistance = maxTranslate;
    endHoldDistance = Math.round(stickyHeight * 0.35);
    slider.style.height = `${stickyHeight + stickyTop + scrollDistance + endHoldDistance}px`;

    updateSlider();
  };

  const updateSlider = () => {
    const start = slider.offsetTop;
    const current = window.scrollY - start;
    const progress = clamp(current / (scrollDistance || 1), 0, 1);
    const x = -maxTranslate * progress;
    track.style.transform = `translate3d(${x}px, 0, 0)`;
  };

  let scrollRaf = null;
  const onScroll = () => {
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

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });

  recalculateSlider();
});
