(function () {
  const pageData = {
    meta: {
      title: "ABDLMNN",
      description: "ABDLMNN portfolio - Between worlds, built in motion.",
    },
    introTagline: "Web & Mobile Designer",
    heroName: "ABDLMNN",
    heroTagline: "CHASING LIGHT",
    statement:
      "Every place holds a story waiting to unfold. I follow light as it moves across landscapes and cultures, preserving moments that might otherwise fade.",
    socialLabel: "Where Light Leads",
    images: {
      feature1: {
        src: "my-images/2.jpg",
        alt: "Sunlit desert road scene",
        location: "Quiet Glow - personal moment",
      },
      feature2: {
        src: "my-images/frame.jpg",
        alt: "Framed urban moment in warm light",
        location: "A Wall of Becoming - growth and passion",
      },
      feature3: {
        src: "my-images/light.jpg",
        alt: "Mountain landscape in soft light",
        location: "Silent Illumination - calm presence",
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

  const titleEl = document.getElementById("homePageTitle");
  if (titleEl) titleEl.textContent = pageData.meta.title;
  const descEl = document.getElementById("homeMetaDescription");
  if (descEl) descEl.setAttribute("content", pageData.meta.description);

  setText("homeIntroTagline", pageData.introTagline);
  setText("homeHeroName", pageData.heroName);
  setText("homeHeroTagline", pageData.heroTagline);
  setText("homeStatementText", pageData.statement);
  setText("homeSocialLabel", pageData.socialLabel);

  setImage("homeFeatureImg1", pageData.images.feature1);
  setImage("homeFeatureImg2", pageData.images.feature2);
  setImage("homeFeatureImg3", pageData.images.feature3);

  setText("homeFeatureLocation1", pageData.images.feature1.location);
  setText("homeFeatureLocation2", pageData.images.feature2.location);
  setText("homeFeatureLocation3", pageData.images.feature3.location);
})();

