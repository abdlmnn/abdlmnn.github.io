(function () {
  const postData = {
    meta: {
      title: "Built in Motion: Why I Started This Blog",
      description: "First blog post on my journey of sharing thoughts, lessons, and projects between Saudi Arabia and the Philippines.",
    },
    header: {
      kicker: "First entry",
      titleLine: "Built in Motion",
      titleSubline: "Why I Started This Blog",
      author: "Mohammad Abdulmanan",
      dateText: "March 1, 2026",
      dateTime: "2026-03-01",
    },
    intro: {
      image: {
        src: "../../../my-images/Map&Me.jpg",
        alt: "Map and portrait image for the first blog post",
      },
      kicker: "A quiet note",
      title: "You don’t become a developer by just writing code.",
      text: "Programming trains how you think with discipline.",
    },
    opening: {
      label: "Opening Note",
      lead: "I used to think good code was enough.",
      body: "But good code still gets lost when context disappears. That is the problem I kept running into: unfinished parts, quick fixes, and decisions I forget a week later. This blog is where I document the build while I solve that problem in real time.",
      body: "But even good code can be hard to continue when context is lost. That happened to me a lot: unfinished tasks, quick fixes, and decisions I forgot after a few days. This blog is where I document my build process while solving that problem in real time.",
    },
    sections: {
      whoIAm: {
        heading: "Who I Am",
        text: "I grew up between Saudi Arabia and the Philippines. That shaped how I see discipline, identity, and progress.",
        developerText: "I’m a web and app developer building tools for everyday coding flow. Right now, I’m building Codbit in VS Code: a coding activity tracker and a workflow memory tool. Codbit came from my own routine. On busy weeks, I returned to unfinished work and spent too much time remembering what I was doing. I built Codbit to reduce that friction and move work forward with more clarity.",
        quote: "I built Codbit so I don’t waste time figuring out where I left off, and can focus on continuing the work.",
      },
      whyStarted: {
        heading: "Why I Started This Blog",
        text: "I started this blog to document what I’m building while it is still in progress. Not only the final result, but also the decisions, mistakes, and adjustments behind it. I want one place where the process stays visible and honest.",
      },
      whatYoullFind: {
        heading: "What You'll Find Here",
        text: "You’ll find project build logs, personal reflections, mindset notes, and thoughts on coding, AI, and growth. Some posts will focus on execution and workflow. Some will focus on lessons, perspective, and direction. Some will simply document what changed, what failed, and what improved.",
      },
      notes: [
        {
          label: "Building",
          text: "Projects, experiments, and lessons from turning ideas into practical systems.",
        },
        {
          label: "Becoming",
          text: "Discipline, identity, and consistency shaping the person behind the work.",
        },
      ],
      sport: {
        heading: "What Sport Taught Me About Building",
        paragraphs: [
          "Sport taught me about unity, communication, teamwork, and trust.",
          "In practice, you learn the movement. In the game, you apply it.",
          "Coding feels the same. I read documentation, study examples, learn proven patterns, and apply them in my own projects. Basketball gave me that mindset: study the move, practice it, then make it your own.",
          "That is one lesson I carry into building: practice gives skill, but application gives growth.",
        ],
      },
      builtInMotion: {
        heading: "Built in Motion",
        text: "If there is one thing I want this blog to stand for, it is this: progress is built in motion. You do not become ready first. You become ready by showing up consistently.",
      },
      closing: [
        "This is the beginning. More stories soon.",
        "If this connects with you, follow along for what comes next.",
      ],
    },
    tags: ["#introduction", "#buildinpublic", "#softwaredev", "#devjourney", "#workflow", "#codbit"],
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

  setText("postTitle", postData.meta.title);

  const metaDescription = document.getElementById("postMetaDescription");
  if (metaDescription) {
    metaDescription.setAttribute("content", postData.meta.description);
  }

  setText("postKicker", postData.header.kicker);
  setText("postTitleLine", postData.header.titleLine);
  setText("postTitleSubline", postData.header.titleSubline);
  setText("postAuthor", postData.header.author);
  setText("postDate", postData.header.dateText);

  const postDate = document.getElementById("postDate");
  if (postDate) {
    postDate.setAttribute("datetime", postData.header.dateTime);
  }

  setImage("postIntroImage", postData.intro.image);
  setText("postIntroKicker", postData.intro.kicker);
  setText("postIntroTitle", postData.intro.title);
  setText("postIntroText", postData.intro.text);

  setText("postOpeningLabel", postData.opening.label);
  setText("postLead", postData.opening.lead);
  setText("postBodyIntro", postData.opening.body);

  setText("whoIAmHeading", postData.sections.whoIAm.heading);
  setText("whoIAmText", postData.sections.whoIAm.text);
  setText("developerText", postData.sections.whoIAm.developerText);
  setText("postQuote", postData.sections.whoIAm.quote);

  setText("whyStartedHeading", postData.sections.whyStarted.heading);
  setText("whyStartedText", postData.sections.whyStarted.text);

  setText("whatYoullFindHeading", postData.sections.whatYoullFind.heading);
  setText("whatYoullFindText", postData.sections.whatYoullFind.text);

  postData.sections.notes.forEach((note, index) => {
    const number = index + 1;
    setText(`postNoteLabel${number}`, note.label);
    setText(`postNoteText${number}`, note.text);
  });

  setText("sportHeading", postData.sections.sport.heading);
  postData.sections.sport.paragraphs.forEach((paragraph, index) => {
    setText(`sportText${index + 1}`, paragraph);
  });

  setText("builtInMotionHeading", postData.sections.builtInMotion.heading);
  setText("builtInMotionText", postData.sections.builtInMotion.text);

  postData.sections.closing.forEach((paragraph, index) => {
    setText(`closingText${index + 1}`, paragraph);
  });

  postData.tags.forEach((tag, index) => {
    setText(`postTag${index + 1}`, tag);
  });
})();

(function () {
  const backToTopButton = document.getElementById("backToTop");

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
