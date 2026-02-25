(function () {
  const blogData = {
    meta: {
      title: "Blog — ABDLMNN",
      description: "Stories on life, sport, and building between worlds.",
    },
    hero: {
      title: "Between Worlds",
      subtitle: "Built in Motion",
      images: {
        image1: {
          src: "../../my-images/ball.jpg",
          alt: "Basketball moment in motion",
        },
        image2: {
          src: "../../my-images/code.jpg",
          alt: "Coding setup and project screen",
        },
        image3: {
          src: "../../my-images/plane window.jpg",
          alt: "View from a plane window between worlds",
        },
      },
    },
    subscribe: {
      kicker: "Stay in the Loop",
      title: "Catch the next scene.",
      note: "A short note each time a new story drops.",
    },
    post1: {
      status: "In Progress",
      category: "Origin",
      title: "Where It Begins",
      date: "Mar 1, 2026",
      description: "An opening chapter on why I started this blog, what I'm building, and the journey behind it.",
      readMore: "Read More",
      image: {
        src: "../../my-images/1.jpg",
        alt: "Back view at sunset, walking into a new chapter.",
      },
    },
  };

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (!el || typeof value !== "string") return;
    el.textContent = value;
  };

  const setImage = (id, imageData) => {
    const el = document.getElementById(id);
    if (!el || !imageData) return;
    if (typeof imageData.src === "string") el.setAttribute("src", imageData.src);
    if (typeof imageData.alt === "string") el.setAttribute("alt", imageData.alt);
  };

  const titleEl = document.getElementById("blogPageTitle");
  if (titleEl) titleEl.textContent = blogData.meta.title;
  const metaDescEl = document.getElementById("blogMetaDescription");
  if (metaDescEl) metaDescEl.setAttribute("content", blogData.meta.description);

  setText("blogHeroTitle", blogData.hero.title);
  setText("blogHeroSubtitle", blogData.hero.subtitle);

  setImage("blogHeroImg1", blogData.hero.images.image1);
  setImage("blogHeroImg2", blogData.hero.images.image2);
  setImage("blogHeroImg3", blogData.hero.images.image3);

  setText("blogSubscribeKicker", blogData.subscribe.kicker);
  setText("blogSubscribeTitle", blogData.subscribe.title);
  setText("blogSubscribeNote", blogData.subscribe.note);

  setText("post1Status", blogData.post1.status);
  setText("post1Category", blogData.post1.category);
  setText("post1Title", blogData.post1.title);
  setText("post1Date", blogData.post1.date);
  setText("post1Description", blogData.post1.description);
  setText("post1ReadMore", blogData.post1.readMore);

  setImage("post1Image", blogData.post1.image);
})();

(function () {
  const heroGrid = document.querySelector(".blog-hero-grid");
  if (!heroGrid) return;

  const slides = Array.from(heroGrid.querySelectorAll(".blog-grid-item"));
  if (!slides.length) return;

  let swipeModeTimer = null;
  let scrollDebounce = null;

  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

  const setActiveSlide = (index) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
  };

  const syncActiveFromScroll = () => {
    if (!isMobile()) return;

    const nearestIndex = slides.reduce((bestIndex, slide, slideIndex) => {
      const bestDistance = Math.abs(slides[bestIndex].offsetLeft - heroGrid.scrollLeft);
      const currentDistance = Math.abs(slide.offsetLeft - heroGrid.scrollLeft);
      return currentDistance < bestDistance ? slideIndex : bestIndex;
    }, 0);

    setActiveSlide(nearestIndex);
  };

  const startSwipeMode = () => {
    if (!isMobile()) return;
    clearTimeout(swipeModeTimer);
    heroGrid.classList.add("is-swiping");
  };

  const stopSwipeMode = () => {
    clearTimeout(swipeModeTimer);
    swipeModeTimer = setTimeout(() => {
      heroGrid.classList.remove("is-swiping");
    }, 260);
  };

  heroGrid.addEventListener("touchstart", startSwipeMode, { passive: true });
  heroGrid.addEventListener("touchend", stopSwipeMode, { passive: true });
  heroGrid.addEventListener(
    "scroll",
    () => {
      startSwipeMode();
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        syncActiveFromScroll();
        stopSwipeMode();
      }, 120);
    },
    { passive: true }
  );

  window.addEventListener("resize", syncActiveFromScroll);

  setActiveSlide(0);
  syncActiveFromScroll();
})();

(function () {
  const form = document.getElementById("blogSubscribeForm");
  const statusEl = document.getElementById("blogSubscribeStatus");

  if (!form || !statusEl) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    const formData = new FormData(form);

    statusEl.textContent = "Subscribing...";
    statusEl.classList.remove("is-error");
    statusEl.classList.add("is-loading");

    if (submitBtn) submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      statusEl.textContent = "Subscribed. You're in.";
      statusEl.classList.remove("is-loading", "is-error");
    } catch (_error) {
      statusEl.textContent = "Subscription failed. Try again.";
      statusEl.classList.remove("is-loading");
      statusEl.classList.add("is-error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
})();
