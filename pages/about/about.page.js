document.addEventListener("DOMContentLoaded", () => {
  const pageData = {
    meta: {
      title: "About | ABDLMNN",
      description: "Personal developer portfolio of Mohammad Abdulmanan, bringing together web systems, interfaces, writing, and images.",
    },
    socialLabel: "WHERE MY WORLDS MEET",
    valuesTitle: "What Matters to Me",
    values: [
      {
        title: "Clarity",
        description: "I want what I build to feel deliberate, useful, and honest.",
      },
      {
        title: "Discipline",
        description: "Repetition, endurance, and quiet consistency shape more than talent ever can.",
      },
      {
        title: "Attention",
        description: "The smallest details often carry the deepest meaning.",
      },
      {
        title: "Soul",
        description: "Precision matters, but it should still leave room for feeling.",
      },
    ],
    name: "Mohammad Abdulmanan",
    image: {
      src: "../../my-images/me_back.jpg",
      alt: "Portrait of Mohammad Abdulmanan",
    },
    paragraphs: [
      "I have never belonged to just one world. I move between code and image, discipline and instinct, motion and stillness. At the center of that is the work I do as a developer: building web systems, designing interfaces, and shaping digital experiences that feel clear, intentional, and human. Other parts of me are built through attention: the kind that comes from sport, from rhythm, from watching light, gesture, and silence closely enough that they begin to say something on their own.",
      "Growing up between places changed the way I understand identity, and it also shaped the way I work. I do not think of myself as one fixed thing. I am a builder, an athlete, a writer, and an observer, and none of those selves cancel the others out. They sharpen each other. Sport taught me repetition, endurance, and control. Writing taught me how to stay with a problem long enough to understand its shape. Images taught me that not everything meaningful can be measured, but it still has to be noticed.",
      "This site holds those worlds in one place. It is not only a journal, and not only a portfolio. It is a record of how I think, what I build, what I make, and what I keep returning to as a developer and as a person. If there is a thread running through all of it, it is this: I care about the meeting point between precision and feeling, where a digital experience can be functional, thoughtful, and still carry a soul.",
    ],
  };

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && typeof value === "string") {
      el.textContent = value;
    }
  };

  const titleEl = document.getElementById("aboutPageTitle");
  if (titleEl) titleEl.textContent = pageData.meta.title;

  const descriptionEl = document.getElementById("aboutMetaDescription");
  if (descriptionEl) descriptionEl.setAttribute("content", pageData.meta.description);

  setText("aboutSocialLabel", pageData.socialLabel);
  setText("aboutValuesTitle", pageData.valuesTitle);
  setText("aboutName", pageData.name);

  const portraitEl = document.getElementById("aboutPortrait");
  if (portraitEl) {
    if (!portraitEl.getAttribute("src")) {
      portraitEl.src = pageData.image.src;
    }
    portraitEl.alt = pageData.image.alt;
  }

  const copyEl = document.getElementById("aboutCopy");
  if (copyEl) {
    copyEl.innerHTML = pageData.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
  }

  const valuesEl = document.getElementById("aboutValuesRows");
  if (valuesEl) {
    valuesEl.innerHTML = pageData.values
      .map(
        (item) => `
          <article class="about-value-row">
            <h3 class="about-value-name">${item.title}</h3>
            <p class="about-value-description">${item.description}</p>
          </article>
        `,
      )
      .join("");
  }
});
