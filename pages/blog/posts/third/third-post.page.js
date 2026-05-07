(function () {
  const postData = {
    meta: {
      title: "Coding in the Age of AI — ABDLMNN",
      description: "Coding in the Age of AI: a reflection on moving from copy-paste habits to real understanding through curiosity and fundamentals.",
    },
    header: {
      backText: "Back to Blog",
      kicker: "Third entry",
      titleLine: "The Turning Point",
      titleSubline: "Coding in the Age of AI",
      author: "Mohammad Abdulmanan",
      dateText: "June 6, 2026",
      dateTime: "2026-06-06",
    },
    comingSoonText: "Coming Soon",
    tags: ["#reflections", "#ai", "#coding", "#softwaredev", "#learning", "#studentdeveloper"],
  };

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (!el || typeof value !== "string") return;
    el.textContent = value;
  };

  setText("post3PageTitle", postData.meta.title);

  const metaDescription = document.getElementById("post3MetaDescription");
  if (metaDescription) {
    metaDescription.setAttribute("content", postData.meta.description);
  }

  setText("post3BackText", postData.header.backText);
  setText("post3Kicker", postData.header.kicker);
  setText("post3TitleLine", postData.header.titleLine);
  setText("post3TitleSubline", postData.header.titleSubline);
  setText("post3Author", postData.header.author);
  setText("post3Date", postData.header.dateText);

  const postDate = document.getElementById("post3Date");
  if (postDate) {
    postDate.setAttribute("datetime", postData.header.dateTime);
  }

  setText("post3ComingSoonText", postData.comingSoonText);

  postData.tags.forEach((tag, index) => {
    setText(`post3Tag${index + 1}`, tag);
  });
})();

(function () {
  const backToTopButton = document.getElementById("post3BackToTop");

  if (!backToTopButton) return;

  const toggleBackToTop = () => {
    backToTopButton.classList.toggle("is-visible", window.scrollY > 240);
  };

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
})();
