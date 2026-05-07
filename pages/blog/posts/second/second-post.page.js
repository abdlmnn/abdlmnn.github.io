(function () {
  const postData = {
    meta: {
      title: "What I Started Building — ABDLMNN",
      description: "What I am building with Codbit, the workflow problem behind it, and why it matters for developers.",
    },
    header: {
      backText: "Back to Blog",
      kicker: "Second entry",
      titleLine: "Codbit",
      titleSubline: "What I Started Building",
      author: "Mohammad Abdulmanan",
      dateText: "May 3, 2026",
      dateTime: "2026-05-03",
    },
    leadText: "The problem was not coding. It was remembering where I left off.",
    richContent: `
      <article class="post2-section">
        <h2>Where It Started</h2>
        <p>I would leave a project, come back later, and spend too much time just figuring out what I was doing.</p>
        <p>There was unfinished work, jumping between tasks, and confusion after breaks. Even when I knew how to code the feature, momentum was already gone.</p>
        <p>I realized the problem was not code quality. It was losing track between sessions.</p>
      </article>

      <article class="post2-section">
        <h2>What I Started Building</h2>
        <p>I started thinking about a small system that tracks workflow flow, not just output. The goal was simple: continue work clearly without restarting mentally each time.</p>
        <p>That idea became Codbit, a lightweight VS Code workflow tool focused on coding activity and memory. It helps me keep track of work state while coding, not after everything is already forgotten.</p>
        <p>This is not only my issue. Developers lose flow when they jump between tasks and return without clear notes.</p>
        <p>Most tools are either disconnected from code or too heavy for everyday development rhythm.</p>
      </article>

      <article class="post2-section">
        <h2>Current Stage</h2>
        <p>This is still early. I am building and shaping it around my own real workflow first.</p>
        <p>I am testing what helps, removing what adds noise, and refining it step by step.</p>
      </article>

      <article class="post2-section">
        <h2>For the Community</h2>
        <p>I want this to help not only me, but also student developers and builders who keep losing momentum after breaks.</p>
        <p>If this workflow problem sounds familiar, this build is for you too, and I will keep sharing updates as it improves.</p>
      </article>

      <article class="post2-section">
        <h2>Focus Right Now</h2>
        <ul>
          <li>Track coding sessions and consistency</li>
          <li>Keep lightweight workflow memory near code</li>
          <li>Reduce confusion after breaks</li>
          <li>Continue tasks with clearer direction</li>
        </ul>
      </article>

      <article class="post2-section">
        <h2>Closing</h2>
        <p>I am building this in public through real work, not theory.</p>
        <p>The goal is simple: don’t lose track again.</p>
      </article>
    `,
    images: [
      {
        src: "../../../../my-images/code.jpg",
        alt: "Code editor during active work session",
        caption: "Where I usually lose track after breaks.",
      },
      {
        src: "../../../../my-images/terminal.jpg",
        alt: "Terminal used for development and testing",
        caption: "Early Codbit testing while shaping the workflow.",
      },
      {
        src: "../../../../my-images/1.1.jpg",
        alt: "Work session snapshot for activity and memory tracking concept",
        caption: "The idea: remember where work stopped.",
      },
      {
        src: "../../../../my-images/2.jpg",
        alt: "Current project progress image",
        caption: "Current direction while the system is still evolving.",
      },
    ],
    comingSoonText: "Coming Soon",
    tags: ["#building", "#workflow", "#softwaredev", "#buildinpublic", "#productivity", "#codbit"],
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
  const setHTML = (id, value) => {
    const el = document.getElementById(id);
    if (!el || typeof value !== "string") return;
    el.innerHTML = value;
  };

  setText("post2PageTitle", postData.meta.title);

  const metaDescription = document.getElementById("post2MetaDescription");
  if (metaDescription) {
    metaDescription.setAttribute("content", postData.meta.description);
  }

  setText("post2BackText", postData.header.backText);
  setText("post2Kicker", postData.header.kicker);
  setText("post2TitleLine", postData.header.titleLine);
  setText("post2TitleSubline", postData.header.titleSubline);
  setText("post2Author", postData.header.author);
  setText("post2Date", postData.header.dateText);

  const postDate = document.getElementById("post2Date");
  if (postDate) {
    postDate.setAttribute("datetime", postData.header.dateTime);
  }

  setText("post3ComingSoonText", postData.comingSoonText);

  setText("post2LeadText", postData.leadText);
  setHTML("post2RichContent", postData.richContent);


  postData.images.forEach((image, index) => {
    const n = index + 1;
    setImage(`post2Img${n}`, image);
    setText(`post2Cap${n}`, image.caption);
  });

  postData.tags.forEach((tag, index) => {
    setText(`post2Tag${index + 1}`, tag);
  });
})();

(function () {
  const backToTopButton = document.getElementById("post2BackToTop");

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
