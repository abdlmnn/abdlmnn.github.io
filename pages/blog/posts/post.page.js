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
      title: "You leave places.",
      text: "Some places stay with you.",
    },
    opening: {
      label: "Opening Note",
      lead: "Some moments pass too fast to hold, so I write them down.",
      body: "This blog is where I track my journey while it is still happening: the work, lessons, failures, and small wins before everything is finished.",
    },
    sections: {
      whoIAm: {
        heading: "Who I Am",
        text: "I am someone growing between different worlds. Saudi Arabia is part of my story, and the Philippines is part of who I am too. Those experiences shaped how I see discipline, identity, and progress.",
        developerText: "I’m a web and app developer. I care about more than just how things look or work. I build with purpose for people, real problems, and small ways technology can make everyday life easier.",
        quote: "The result matters, but I do not want to forget what it took to get there.",
      },
      whyStarted: {
        heading: "Why I Started This Blog",
        text: "I started this blog because I wanted one place to be honest about what I’m building. It includes my ideas, my projects, my growth, and how I think while building them.",
      },
      whatYoullFind: {
        heading: "What You'll Find Here",
        text: "This space holds thoughts on sport, coding, personal growth, and life between places. Some posts are lessons. Some are builds. Some are simple reflections from the journey.",
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
          "Sport taught me unity, communication, teamwork, and trust.",
          "In practice, you learn the movement. In the game, you apply it.",
          "Coding feels the same. I read documentation, study examples, and learn patterns. Then I apply them in my own projects. Basketball gave me that mindset: study the move, practice it, then use it when it matters.",
          "That is one lesson I carry from sport into building: practice gives you the skill, but application gives you the growth.",
        ],
      },
      builtInMotion: {
        heading: "Built in Motion",
        text: "If there is one idea this blog stands on, it is this: progress is built in motion. You don’t become ready first. You become ready by showing up consistently.",
      },
      closing: [
        "This is the beginning. More stories soon.",
        "If this connects with you, follow along for the next chapter.",
      ],
    },
    tags: ["#introduction", "#journey", "#developer"],
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
