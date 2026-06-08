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
            "This is a huge and impressive update! What motivated you to get back and continue this website 'cause it has been so long since you worked on this???? Honestly I don't know how the updates look like in desktop especially the album part (if it has some kind of transitions and such..) since I'm only viewing it now on my phone. The dialogue parts were good (I hope hindi galing sa AI😅) Pwede ka nang maging philosopher haha. My question is, will there be more updates soon or this is it na??? I hope meron pa. Iyon lang!! Galeng!",
          name: "Liah",
          date: "04 June 2026",
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
          .map((note) => {
            const message = typeof note.message === "string" ? note.message : "";
            const name = typeof note.name === "string" ? note.name : "Visitor";
            const date = typeof note.date === "string" ? note.date : "";

            return `
              <article class="visitor-note" data-visitor-note>
                <blockquote class="visitor-note-message" data-visitor-note-message>${escapeHtml(message)}</blockquote>
                <button class="visitor-note-expand" type="button" data-visitor-note-toggle aria-expanded="false">... more</button>
                <p class="visitor-note-meta">${escapeHtml(name)}${date ? ` / ${escapeHtml(date)}` : ""}</p>
              </article>
            `;
          })
          .join("")
      : `
        <article class="visitor-note visitor-note-empty">
          <p class="visitor-note-message">${escapeHtml(pageData.visitorNotes.empty)}</p>
        </article>
      `;

    requestAnimationFrame(() => {
      visitorNotesList
        .querySelectorAll("[data-visitor-note]")
        .forEach((note) => {
          const message = note.querySelector("[data-visitor-note-message]");
          const toggle = note.querySelector("[data-visitor-note-toggle]");
          if (!message || !toggle) return;

          toggle.hidden = message.scrollHeight <= message.clientHeight + 1;

          toggle.addEventListener("click", () => {
            const isExpanded = note.classList.toggle("is-expanded");
            toggle.textContent = isExpanded ? "less" : "... more";
            toggle.setAttribute("aria-expanded", String(isExpanded));
          });
        });
    });
  }
})();
