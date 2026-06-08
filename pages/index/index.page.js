(function () {
  const pageData = {
    meta: {
      title: "ABDLMNN",
      description: "ABDLMNN portfolio - Between worlds, built in motion.",
    },
    introTagline: "Web & App Developer",
    heroName: "ABDLMNN",
    heroTagline: "CHASING LIGHT",
    // statement:
    //   "Every place holds a story waiting to unfold. I follow light as it moves across landscapes and cultures, preserving moments that might otherwise fade.",
    statement:
      "Every place has a story. I follow light across places and cultures, preserving moments before they fade.",
    visitorNotes: {
      kicker: "Visitor Notes",
      title: "A small place for words that stayed.",
      empty:
        "Approved feedback about this website will live here after I read it first.",
      notes: [
        {
          message:
            "This is a huge and impressive update. The dialogue parts were good, and I hope there will be more updates soon. Galeng!",
          name: "Liah",
          context: "Website feedback",
        },
      ],
    },
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

  const escapeHtml = (value) => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  setText("homePageTitle", pageData.meta.title);

  const metaDescription = document.getElementById("homeMetaDescription");
  if (metaDescription) {
    metaDescription.setAttribute("content", pageData.meta.description);
  }

  setText("homeIntroTagline", pageData.introTagline);
  setText("homeHeroName", pageData.heroName);
  setText("homeHeroTagline", pageData.heroTagline);
  setText("homeStatementText", pageData.statement);
  setText("visitorNotesKicker", pageData.visitorNotes.kicker);
  setText("visitorNotesTitle", pageData.visitorNotes.title);
  setText("homeSocialLabel", pageData.socialLabel);

  setImage("homeFeatureImg1", pageData.images.feature1);
  setImage("homeFeatureImg2", pageData.images.feature2);
  setImage("homeFeatureImg3", pageData.images.feature3);

  setText("homeFeatureLocation1", pageData.images.feature1.location);
  setText("homeFeatureLocation2", pageData.images.feature2.location);
  setText("homeFeatureLocation3", pageData.images.feature3.location);

  const visitorNotesList = document.getElementById("visitorNotesList");
  if (visitorNotesList) {
    const notes = Array.isArray(pageData.visitorNotes.notes)
      ? pageData.visitorNotes.notes
      : [];

    visitorNotesList.innerHTML = notes.length
      ? notes
          .map((note, index) => {
            const message = typeof note.message === "string" ? note.message : "";
            const name = typeof note.name === "string" ? note.name : "Visitor";
            const context = typeof note.context === "string" ? note.context : "Website feedback";
            const noteNumber = String(index + 1).padStart(2, "0");

            return `
              <article class="visitor-note">
                <p class="visitor-note-number">${noteNumber}</p>
                <blockquote class="visitor-note-message">${escapeHtml(message)}</blockquote>
                <p class="visitor-note-meta">${escapeHtml(name)} / ${escapeHtml(context)}</p>
              </article>
            `;
          })
          .join("")
      : `
        <article class="visitor-note visitor-note-empty">
          <p class="visitor-note-number">00</p>
          <p class="visitor-note-message">${escapeHtml(pageData.visitorNotes.empty)}</p>
        </article>
      `;
  }
})();
