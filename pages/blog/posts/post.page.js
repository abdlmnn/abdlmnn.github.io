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
      dateText: "March 1, 2025",
      dateTime: "2025-03-01",
    },
    intro: {
      image: {
        src: "../../../my-images/Map&Me.jpg",
        alt: "Map and portrait image for the first blog post",
      },
      kicker: "A quiet note",
      title: "You leave places.",
      text: "Some places never leave you.",
    },
    opening: {
      label: "Opening Note",
      lead: "Some moments pass too quickly to hold, so I write them.",
      body: "This blog is my place to keep track of the journey while it is still unfolding: the work, lessons, failures, and small wins before the finished results.",
    },
    sections: {
      whoIAm: {
        heading: "Who I Am",
        text: "I am someone growing between different worlds. Saudi Arabia is part of my story, and the Philippines is part of who I am too. Those experiences shaped how I see life, discipline, identity, and progress.",
        developerText: "As a web and app developer, I care about more than making things look good and work well. I want to build with reason: for people, for problems, and for the small ways technology can make everyday life better.",
        quote: "The result matters, but I do not want to forget what it took to get there.",
      },
      whyStarted: {
        heading: "Why I Started This Blog",
        text: "I started this blog because I wanted one place to be honest about what I am building. That includes my ideas, my projects, my growth, and the mindset behind them.",
      },
      whatYoullFind: {
        heading: "What You'll Find Here",
        text: "This space will hold thoughts on sport, coding, personal growth, and life between places. Some posts will be about lessons. Some will be about building. Some will simply be reflections from the journey.",
      },
      notes: [
        {
          label: "Building",
          text: "Projects, experiments, and lessons from trying to make ideas real.",
        },
        {
          label: "Becoming",
          text: "Discipline, identity, and quiet progress between Saudi Arabia and the Philippines.",
        },
      ],
      sport: {
        heading: "What Sport Taught Me About Building",
        paragraphs: [
          "Sport taught me about unity, communication, teamwork, and trust.",
          "In practice, you learn the movement. In the game, you apply it.",
          "Coding feels the same. I read documentation, study examples, copy good patterns, and apply them in my own projects. Basketball gave me that mindset: study the move, practice it, then make it your own.",
          "That is one lesson I carry from sport into building: practice gives you the skill, but application gives you the growth.",
        ],
      },
      builtInMotion: {
        heading: "Built in Motion",
        text: "If there is one thing I want this blog to stand for, it is this: progress is built in motion. You do not become ready first. You become ready by showing up consistently.",
      },
      closing: [
        "This is the beginning. More stories soon.",
        "If this connects with you, I hope you follow along for the next chapter.",
      ],
    },
    tags: ["#introduction", "#journey", "#developer", "#building"],
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
