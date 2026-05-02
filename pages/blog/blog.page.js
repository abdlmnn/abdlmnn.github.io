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
    posts: [
      {
        id: "post-1",
        status: "Live",
        category: "Origin",
        title: "Where It Begins",
        date: "Mar 1, 2026",
        description: "An opening chapter on why I started this blog, what I'm building, and the journey behind it.",
        readMore: "Read More",
        image: {
          src: "../../my-images/1.jpg",
          alt: "Back view at sunset, walking into a new chapter.",
        },
      }
    ]
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
  setText("blogHeroTitle", blogData.hero.title);
  setText("blogHeroSubtitle", blogData.hero.subtitle);

  setImage("blogHeroImg1", blogData.hero.images.image1);
  setImage("blogHeroImg2", blogData.hero.images.image2);
  setImage("blogHeroImg3", blogData.hero.images.image3);

  setText("blogSubscribeKicker", blogData.subscribe.kicker);
  setText("blogSubscribeTitle", blogData.subscribe.title);
  setText("blogSubscribeNote", blogData.subscribe.note);

  // Render posts dynamically
  blogData.posts.forEach((post, index) => {
    const prefix = `post${index + 1}`;
    // Check if elements exist before setting them
    const statusEl = document.getElementById(`${prefix}Status`);
    if (statusEl) {
      setText(`${prefix}Status`, post.status);
      setText(`${prefix}Category`, post.category);
      setText(`${prefix}Title`, post.title);
      setText(`${prefix}Date`, post.date);
      setText(`${prefix}Description`, post.description);
      setText(`${prefix}ReadMore`, post.readMore);
      setImage(`${prefix}Image`, post.image);
    }
  });
})();

(function () {
  const heroGrid = document.querySelector(".blog-hero-grid");
  if (!heroGrid) return;

  const slides = Array.from(heroGrid.querySelectorAll(".blog-grid-item"));
  const dots = Array.from(document.querySelectorAll(".blog-hero-dot"));
  if (!slides.length) return;

  let swipeModeTimer = null;
  let scrollDebounce = null;

  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

  const getOrderedSlides = () => {
    if (!isMobile()) return slides;

    return [...slides].sort((slideA, slideB) => slideA.offsetLeft - slideB.offsetLeft);
  };

  const setActiveSlide = (index) => {
    const orderedSlides = getOrderedSlides();
    const activeSlide = orderedSlides[index];

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slide === activeSlide);
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === index;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const syncActiveFromScroll = () => {
    if (!isMobile()) return;

    const orderedSlides = getOrderedSlides();

    const nearestIndex = orderedSlides.reduce((bestIndex, slide, slideIndex) => {
      const bestDistance = Math.abs(orderedSlides[bestIndex].offsetLeft - heroGrid.scrollLeft);
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

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      if (!isMobile()) return;

      const slide = getOrderedSlides()[dotIndex];
      if (!slide) return;

      setActiveSlide(dotIndex);
      heroGrid.scrollTo({
        left: slide.offsetLeft,
        behavior: "smooth",
      });
    });
  });

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
