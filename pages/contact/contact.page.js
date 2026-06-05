document.addEventListener("DOMContentLoaded", () => {
  const pageData = {
    meta: {
      title: "Contact | ABDLMNN",
      description: "Get in touch with Mohammad Abdulmanan through a direct contact form and thoughtful channels.",
    },
    hero: {
      eyebrow: "",
      title: "Let's start with a message.",
      lead:
        "Hi there! Welcome to my website. I'm glad you found me and hope you enjoy your experience. If you have any questions or need some help, feel free to contact me via email or phone.",
      image: {
        src: "../../my-images/me_side.jpg",
        alt: "Portrait of Mohammad Abdulmanan",
      },
      imageNote: "A simple message is the best way to start a conversation.",
    },
    panel: {
      kicker: "Direct Contact",
      title: "Reach out in the way that feels easiest.",
      intro:
        "If you would rather not use the form, you can still write directly or find me through the channels below.",
      channels: [
        {
          label: "Email",
          value: "hello@abdlmnn.com",
          href: "mailto:hello@abdlmnn.com",
        },
        {
          label: "X",
          value: "@imitex24",
          href: "https://x.com/imitex24",
        },
        {
          label: "GitHub",
          value: "github.com/abdlmnn",
          href: "https://github.com/abdlmnn",
        },
        {
          label: "Location",
          value: "Lanao del Norte, Mindanao, Philippines",
        },
      ],
    },
    form: {
      kicker: "Send A Note",
      title: "Use the form if you want to reach me directly.",
      lead:
        "Leave your name, email, subject, and message below. I will read it carefully and get back to you as soon as I can.",
    },
  };

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && typeof value === "string") {
      el.textContent = value;
    }
  };

  const titleEl = document.getElementById("contactPageTitle");
  if (titleEl) titleEl.textContent = pageData.meta.title;

  const descriptionEl = document.getElementById("contactMetaDescription");
  if (descriptionEl) descriptionEl.setAttribute("content", pageData.meta.description);

  setText("contactEyebrow", pageData.hero.eyebrow);
  setText("contactTitle", pageData.hero.title);
  setText("contactLead", pageData.hero.lead);
  setText("contactImageNote", pageData.hero.imageNote);
  setText("contactPanelKicker", pageData.panel.kicker);
  setText("contactPanelTitle", pageData.panel.title);
  setText("contactPanelIntro", pageData.panel.intro);
  setText("contactFormKicker", pageData.form.kicker);
  setText("contactFormTitle", pageData.form.title);
  setText("contactFormLead", pageData.form.lead);
  const portraitEl = document.getElementById("contactPortrait");
  if (portraitEl) {
    if (!portraitEl.getAttribute("src")) {
      portraitEl.src = pageData.hero.image.src;
    }
    portraitEl.alt = pageData.hero.image.alt;
  }

  const channelsEl = document.getElementById("contactChannels");
  if (channelsEl) {
    channelsEl.innerHTML = pageData.panel.channels
      .map((item) => {
        const valueMarkup = item.href
          ? `<a class="contact-channel-value" href="${item.href}" target="_blank" rel="noopener noreferrer">${item.value}</a>`
          : `<span class="contact-channel-value">${item.value}</span>`;

        return `
          <article class="contact-channel-row">
            <p class="contact-channel-label">${item.label}</p>
            ${valueMarkup}
          </article>
        `;
      })
      .join("");
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
});
