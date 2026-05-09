document.addEventListener("DOMContentLoaded", () => {
  const pageData = {
    meta: {
      title: "Albums | Abdlmnn",
      description:
        "Abdlmnn - Albums. Photo collections organized by theme and location.",
    },
    heading: "Albums",
    subtitle: "Photo collections organized by theme and location",
    items: [
      {
        src: "../../images/KSA/1000027400 (2).jpg",
        alt: "Saudi Arabia 1",
        label: "Saudi Arabia 1",
      },
      {
        src: "../../images/KSA/1000027491.jpg",
        alt: "Desert sunset 3",
        label: "Desert Sunset 3",
      },
      {
        src: "../../images/KSA/1000027404.jpg",
        alt: "City lights 2",
        label: "City Lights 2",
      },
      // {
      //   src: "../../images/KSA/1000027527.jpg",
      //   alt: "Architecture 4",
      //   label: "Architecture 4",
      // },
      // {
      //   src: "../../images/KSA/1000027501.jpg",
      //   alt: "Saudi landscape",
      //   label: "Landscape 5",
      // },
      // {
      //   src: "../../images/KSA/1000027405.jpg",
      //   alt: "Desert view",
      //   label: "Desert View 6",
      // },
      // {
      //   src: "../../images/KSA/1000027401 (2).jpg",
      //   alt: "Saudi Arabia",
      //   label: "Saudi Arabia",
      // },
      // {
      //   src: "../../images/KSA/1000027402 (2).jpg",
      //   alt: "Saudi Arabia",
      //   label: "Saudi Arabia",
      // },
    ],
  };

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (!el || typeof value !== "string") return;
    el.textContent = value;
  };

  const titleEl = document.getElementById("albumPageTitle");
  if (titleEl) titleEl.textContent = pageData.meta.title;
  const descEl = document.getElementById("albumMetaDescription");
  if (descEl) descEl.setAttribute("content", pageData.meta.description);

  setText("albumsHeading", pageData.heading);
  setText("albumsSubtitle", pageData.subtitle);

  const gallery = document.getElementById("masonryGallery");
  if (!gallery) return;

  const getLayoutClass = (item) => {
    const label = String(item.label || "").trim();
    const alt = String(item.alt || "").trim();
    const combined = `${label} ${alt}`;
    if (/\b1\b/.test(combined)) return "layout-one";
    if (/\b2\b/.test(combined)) return "layout-two";
    if (/\b3\b/.test(combined)) return "layout-three";
    if (/\b4\b/.test(combined)) return "layout-four";
    if (/\b5\b/.test(combined)) return "layout-five";
    if (/\b6\b/.test(combined)) return "layout-six";
    return "";
  };

  const getLayoutSize = (item) => {
    const label = String(item.label || "").trim();
    const alt = String(item.alt || "").trim();
    const combined = `${label} ${alt}`;
    if (/\b3\b/.test(combined) || /\b6\b/.test(combined)) {
      return { width: 390, height: 520 };
    }
    return { width: 390, height: 260 };
  };

  gallery.innerHTML = pageData.items
    .map(
      (item, index) => {
        const size = getLayoutSize(item);
        const isPriority = index < 6;
        return `
      <article class="gallery-item ${getLayoutClass(item)}">
        <img
          src="${item.src}"
          alt="${item.alt}"
          width="${size.width}"
          height="${size.height}"
          loading="${isPriority ? "eager" : "lazy"}"
          fetchpriority="${isPriority ? "high" : "auto"}"
          decoding="async"
        >
        <div class="gallery-item-overlay">
          <span class="gallery-item-text">${item.label}</span>
        </div>
      </article>
    `;
      },
    )
    .join("");
});
