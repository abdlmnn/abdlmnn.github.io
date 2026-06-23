document.addEventListener("DOMContentLoaded", () => {
  const pageData = {
    meta: {
      title: "Work | ABDLMNN",
      description:
        "Selected work by Mohammad Abdulmanan across web systems, mobile-connected experiences, and interface-driven problem solving.",
    },
    hero: {
      kicker: "",
      title: "Systems I have built.",
      lead: "A concise record of what I worked on, what I contributed, and what each system was made to improve.",
      image: {
        src: "../../my-images/me_coding.jpg",
        alt: "Mohammad Abdulmanan coding on a laptop",
      },
    },
    tools: {
      items: [
        {
          label: "Frontend",
          value:
            "React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, CSS",
        },
        {
          label: "Backend",
          value: "Django, Django REST Framework, PHP, PostgreSQL, MySQL",
        },
        {
          label: "Mobile",
          value: "React Native, Expo",
        },
        {
          label: "DevOps & Tools",
          value: "GitHub, GitLab, Figma, Docker, Ubuntu",
        },
      ],
    },
    experience: {
      items: [
        /*
        {
          role: "Next Experience",
          company: "To be added",
          period: "Upcoming",
          details: [
            {
              label: "Focus",
              value:
                "A placeholder entry to preview how a newer experience will sit above older roles.",
            },
            {
              label: "Note",
              value:
                "Replace this once you have another role, freelance work, collaboration, or project-based experience.",
            },
          ],
        },
        */
        {
          role: "Intern Web Developer",
          company: "Iligan Light & Power, Inc.",
          period: "Dec 2025 to Apr 2026",
          details: [
            {
              label: "Built",
              value:
                "An HR management system for job postings, applications, and internship intake so the company could move away from slower manual processing.",
            },
            {
              label: "Contributed",
              value:
                "Worked on backend structure and API development with Django, while also helping design the web interface with Next.js.",
            },
            {
              label: "Collaboration",
              value:
                "GitLab workflow, code review, and backend leadership responsibilities.",
            },
            {
              label: "Deployment",
              value:
                "Production exposure with proxy setup, Proxmox, and Ubuntu.",
            },
          ],
        },
        {
          role: "Hello World",
          company: "Wrote my first line of code",
          period: "Aug 2022",
          details: [
            {
              label: "Started",
              value:
                "The first small step into programming, curiosity, and building things with code.",
            },
          ],
        },
      ],
    },
    projects: [
      {
        slug: "sarig",
        name: "Sarig",
        // type: "Logistics Super App / Delivery and Transport Platform",
        type: "Personal Product / Multi-service marketplace platform",
        status: "",
        summary:
          "A local logistics Super App for Marawi, built for trusted delivery and transport.",
        whatItSolved:
          // "Marawi has limited organized delivery and ride-hailing options. Sarig creates a clearer flow for food, medicine, groceries, and transport.",
          "Marawi lacks a unified digital system for everyday delivery and transport services. Sarig brings food, medicine, groceries, motorcycle taxi, and private car services into a clearer app-based flow.",
        whatIDid:
          "Designed the product direction, system architecture, user roles, service categories, frontend foundation, and geo-based delivery flow.",
        contribution:
          "Connected customers, merchants, riders, and admins through one model for delivery, transport, store discovery, and rider coordination.",
        accomplished:
          // "Built the core product foundation and MVP for food, grocery, pharmacy, motorcycle taxi, and private car services, with admin and merchant tools.",
          "Built the backend foundation for advanced delivery services, covering food, grocery, and pharmacy flows with geo-based store discovery, distance handling, and rider coordination logic, alongside the early admin and merchant dashboard structure.",
        role: "Founder / Product Builder / Full-stack Developer",
        stack:
          "Django, Django REST Framework, GeoDjango, Next.js, React, React Native, Expo, TypeScript, Tailwind CSS, PostgreSQL, PostGIS, Docker, Google Maps API",
        platforms: "Web + Mobile",
        visuals: {
          label: "View images",
          groups: [
            {
              label: "Main",
              items: [
                {
                  label: "Landing Page",
                  href: "../../my-images/projects/sarig/landing.svg",
                  image: "../../my-images/projects/sarig/landing.svg",
                },
              ],
            },
            {
              label: "Merchant",
              carousel: true,
              items: [
                {
                  label: "Landing Page",
                  href: "../../my-images/projects/sarig/landing merchant.svg",
                  image: "../../my-images/projects/sarig/landing merchant.svg",
                },
                {
                  label: "Business Sign Up Page",
                  href: "../../my-images/projects/sarig/sign up business.svg",
                  image: "../../my-images/projects/sarig/sign up business.svg",
                },
                {
                  label: "Sign In Page",
                  href: "../../my-images/projects/sarig/sign in merchant.svg",
                  image: "../../my-images/projects/sarig/sign in merchant.svg",
                },
                {
                  label: "Dashboard Page",
                  href: "../../my-images/projects/sarig/dashboard merchant.svg",
                  image:
                    "../../my-images/projects/sarig/dashboard merchant.svg",
                },
              ],
            },
            {
              label: "Rider",
              carousel: true,
              items: [
                {
                  label: "Landing Page",
                  href: "../../my-images/projects/sarig/landing rider.svg",
                  image: "../../my-images/projects/sarig/landing rider 2.svg",
                },
                {
                  label: "Sign Up Page",
                  href: "../../my-images/projects/sarig/sign up rider.svg",
                  image: "../../my-images/projects/sarig/sign up rider.svg",
                },
              ],
            },
            {
              label: "Admin",
              items: [
                {
                  label: "Dashboard Page",
                  href: "../../my-images/projects/sarig/dashboard admin.svg",
                  image: "../../my-images/projects/sarig/dashboard admin.svg",
                },
              ],
            },
            {
              label: "Mobile",
              items: [
                {
                  label: "Customer Home Page",
                  href: "../../my-images/projects/sarig/home page customer.svg",
                  image: "../../my-images/projects/sarig/home page customer.svg",
                },
              ],
            },
          ],
        },
      },
      {
        slug: "ilpi-hr-management",
        name: "HR Management System",
        type: "Internship Project / Human Resources Platform",
        status: "",
        summary:
          "An HR system for Iligan Light & Power, Inc. built for job posts, applications, and internship intake.",
        whatItSolved:
          "Manual hiring workflows, scattered applicant records, and slower processing for recruitment and internship applications.",
        whatIDid:
          "Worked on backend structure and API development with Django while helping shape the web interface with Next.js.",
        contribution:
          "Helped create a clearer digital workflow for HR teams to manage job posts, applicants, and internship submissions.",
        accomplished:
          "Delivered core system foundations during my internship at Iligan Light & Power, Inc.",
        role: "Intern Web Developer",
        stack:
          "Django, Django REST Framework, Next.js, Tailwind CSS, Redux, Docker, PostgreSQL",
        platforms: "Web",
      },
      {
        slug: "pharmago",
        name: "PharmaGo",
        type: "Capstone / Multi-Pharmacy On-Demand Medicine Platform",
        status: "",
        summary:
          "A centralized medicine ordering and delivery system for customers, pharmacies, riders, and admins in Iligan City.",
        whatItSolved:
          "Scattered pharmacy transactions, weak coordination, and unclear delivery flow.",
        whatIDid:
          "Planned the system structure, built the backend and frontend, designed user roles, and connected the core delivery flow.",
        contribution:
          "Turned a fragmented ordering process into one connected system with clearer operations.",
        accomplished:
          "Delivered a complete capstone platform across web and mobile with operational role coverage.",
        role: "Full-stack Developer / System Developer, Team Build",
        stack:
          "Django, Django REST Framework, ReactJS, Tailwind CSS, React Native, Expo, PostgreSQL, Docker, Google Maps API",
        platforms: "Web + Mobile",
        visuals: {
          label: "View images",
          groups: [
            {
              label: "Website",
              sections: [
                {
                  label: "Super Admin",
                  items: [
                    {
                      label: "Dashboard Page",
                      href:
                        "../../my-images/projects/pharmago/superadmin web/pharmacy management.svg",
                      image:
                        "../../my-images/projects/pharmago/superadmin web/pharmacy management.svg",
                    },
                  ],
                },
                {
                  label: "Admin",
                  items: [
                    {
                      label: "Dashboard Page",
                      href:
                        "../../my-images/projects/pharmago/admin web/all orders dashboard.svg",
                      image:
                        "../../my-images/projects/pharmago/admin web/all orders dashboard.svg",
                    },
                  ],
                },
              ],
            },
            {
              label: "Mobile",
              sections: [
                {
                  label: "Customer",
                  carousel: true,
                  items: [
                    {
                      label: "Home Page",
                      href:
                        "../../my-images/projects/pharmago/customer mobile/landing.svg",
                      image:
                        "../../my-images/projects/pharmago/customer mobile/landing.svg",
                    },
                  ],
                },
                {
                  label: "Rider",
                  items: [
                    {
                      label: "Home Page",
                      href:
                        "../../my-images/projects/pharmago/rider mobile/landing.svg",
                      image:
                        "../../my-images/projects/pharmago/rider mobile/landing.svg",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        slug: "puregold-grocery",
        name: "PureGold Grocery",
        type: "Academic Build / Inventory & Ordering Platform",
        status: "",
        summary:
          "A grocery management system built to organize products, stocks, orders, payments, reports, and administration in one web dashboard.",
        whatItSolved:
          "Limited inventory visibility, slow product updates, and the need for a clearer online grocery experience supported by better admin tracking.",
        whatIDid:
          "Studied how the existing grocery website could be improved, then built a Django-based web system with product browsing, customer access, admin controls, stock records, and transaction tracking.",
        contribution:
          "Created a more organized flow between the customer-facing pages and the admin side so products, stocks, orders, and payments could be easier to manage from one system.",
        accomplished:
          "Delivered a working web platform with a public landing experience, customer login, inventory dashboard, stock monitoring, order records, reports, and user administration.",
        role: "Full-stack Developer / System Developer",
        stack:
          "Django, Python, Django Templates, HTML, CSS, JavaScript, SQLite",
        platforms: "Web",
        visuals: {
          label: "View images",
          groups: [
            {
              label: "Website",
              sections: [
                {
                  label: "Customer",
                  carousel: true,
                  items: [
                    {
                      label: "Landing Page",
                      href: "../../my-images/projects/puregold/landing.svg",
                      image: "../../my-images/projects/puregold/landing.svg",
                    },
                    {
                      label: "Login Page",
                      href: "../../my-images/projects/puregold/login.svg",
                      image: "../../my-images/projects/puregold/login.svg",
                    },
                  ],
                },
                {
                  label: "Admin",
                  items: [
                    {
                      label: "Inventory Dashboard Page",
                      href:
                        "../../my-images/projects/puregold/admin/dashboard inventory.svg",
                      image:
                        "../../my-images/projects/puregold/admin/dashboard inventory.svg",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        slug: "stuart-boutique",
        name: "Stuart Boutique",
        type: "Academic Build / E-Commerce & Inventory Platform",
        status: "",
        summary:
          "A clothing ordering and inventory system built so customers could browse items and place orders through a dedicated website.",
        whatItSolved:
          "The business relied heavily on Facebook for product browsing and customer orders, which made order tracking, stock updates, and product organization harder to manage.",
        whatIDid:
          "Built the website structure, customer ordering flow, admin product management, inventory records, and order tracking features.",
        contribution:
          "Created a clearer bridge between the customer shopping experience and the admin workflow for managing clothes, orders, and available stock.",
        accomplished:
          "Delivered a working web platform for product browsing, customer orders, inventory management, and order records.",
        role: "Full-stack Developer / System Developer",
        stack: "PHP, MySQL, HTML, CSS, JavaScript, jQuery, AJAX",
        platforms: "Web",
        visuals: {
          label: "View images",
          groups: [
            {
              label: "Website",
              sections: [
                {
                  label: "Customer",
                  items: [
                    {
                      label: "Landing Page",
                      href:
                        "../../my-images/projects/stuart/landing product cart.svg",
                      image:
                        "../../my-images/projects/stuart/landing product cart.svg",
                    },
                  ],
                },
                {
                  label: "Admin",
                  items: [
                    {
                      label: "Dashboard Page",
                      href: "../../my-images/projects/stuart/admin/dashboard.svg",
                      image:
                        "../../my-images/projects/stuart/admin/dashboard.svg",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
    cta: {
      kicker: "",
      title:
        "Have an idea that needs structure, clarity, and a real path forward?",
      copy: "I care about building things that are useful, understandable, and made with intention. If you are hiring, planning a project, or exploring a collaboration, I would be glad to talk.",
      primaryLabel: "Start A Conversation",
      secondaryLabel: "Learn More",
    },
  };

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && typeof value === "string") {
      el.textContent = value;
    }
  };

  const titleEl = document.getElementById("workPageTitle");
  if (titleEl) titleEl.textContent = pageData.meta.title;

  const descEl = document.getElementById("workMetaDescription");
  if (descEl) descEl.setAttribute("content", pageData.meta.description);

  setText("workHeroKicker", pageData.hero.kicker);
  setText("workHeroTitle", pageData.hero.title);
  setText("workHeroLead", pageData.hero.lead);

  const heroImageEl = document.getElementById("workHeroImage");
  if (heroImageEl && pageData.hero.image) {
    heroImageEl.src = pageData.hero.image.src;
    heroImageEl.alt = pageData.hero.image.alt;
  }

  const toolsListEl = document.getElementById("workToolsList");
  if (toolsListEl) {
    toolsListEl.innerHTML = pageData.tools.items
      .map(
        (item) => `
          <article class="work-foundation-row">
            <p class="work-foundation-label">${item.label}</p>
            <p class="work-foundation-value">${item.value}</p>
          </article>
        `,
      )
      .join("");
  }

  const experienceListEl = document.getElementById("workExperienceList");
  if (experienceListEl) {
    experienceListEl.innerHTML = pageData.experience.items
      .map(
        (item) => `
          <article class="work-experience-item">
            <header class="work-experience-head">
              <h3 class="work-experience-role">${item.role}</h3>
              <p class="work-experience-company">${item.company}</p>
              <p class="work-experience-period">${item.period}</p>
            </header>
            <div class="work-experience-details">
              ${item.details
                .map(
                  (detail) => `
                    <div class="work-foundation-row">
                      <p class="work-foundation-label">${detail.label}</p>
                      <p class="work-foundation-value">${detail.value}</p>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </article>
        `,
      )
      .join("");
  }

  setText("workCtaKicker", pageData.cta.kicker);
  setText("workCtaTitle", pageData.cta.title);
  setText("workCtaCopy", pageData.cta.copy);
  setText("workCtaPrimary", pageData.cta.primaryLabel);
  setText("workCtaSecondary", pageData.cta.secondaryLabel);

  const projectLimit = pageData.projects.length;
  const projectsListEl = document.getElementById("workProjectsList");
  const viewAllProjectsBtn = document.getElementById("workViewAllProjects");
  const renderProjects = (projects) => {
    projectsListEl.innerHTML = projects
      .map((project, index) => {
        const projectNumber = String(index + 1).padStart(2, "0");
        const hasVisualAction =
          project.visuals && project.status !== "In Development";
        return `
          <article id="project-${project.slug}" class="work-chapter">
            <div class="work-chapter-marker">
              <p class="work-chapter-number">${projectNumber}</p>
            </div>

            <div class="work-chapter-main">
              <header class="work-chapter-header">
                <div class="work-chapter-meta">
                  <p class="work-chapter-type">${project.type}</p>
                  <div class="work-chapter-actions">
                    ${project.status ? `<p class="work-chapter-status">${project.status}</p>` : ""}
                    ${
                      hasVisualAction
                        ? `<button class="work-project-visual-link" type="button" data-project-visuals="${project.slug}">
                            ${project.visuals.label}
                          </button>`
                        : ""
                    }
                  </div>
                </div>
                <h3 class="work-project-title">${project.name}</h3>
                <p class="work-project-summary">${project.summary}</p>
                ${
                  hasVisualAction
                    ? `<button class="work-project-visual-link-mobile" type="button" data-project-visuals="${project.slug}">
                        ${project.visuals.label}
                      </button>`
                    : ""
                }
                <button
                  class="work-project-more"
                  type="button"
                  aria-expanded="false"
                  aria-controls="project-details-${project.slug}"
                  data-project-details="${project.slug}"
                >
                  Project details
                </button>
              </header>

              <div id="project-details-${project.slug}" class="work-chapter-body" hidden>
                <div class="work-project-details">
                  <div class="work-project-detail">
                    <p class="work-project-detail-label">What it solved</p>
                    <p class="work-project-detail-text">${project.whatItSolved}</p>
                  </div>
                  <div class="work-project-detail">
                    <p class="work-project-detail-label">What I did</p>
                    <p class="work-project-detail-text">${project.whatIDid}</p>
                  </div>
                  <div class="work-project-detail">
                    <p class="work-project-detail-label">Contribution</p>
                    <p class="work-project-detail-text">${project.contribution}</p>
                  </div>
                  <div class="work-project-detail">
                    <p class="work-project-detail-label">Accomplished</p>
                    <p class="work-project-detail-text">${project.accomplished}</p>
                  </div>
                </div>

                <div class="work-project-facts">
                  <div class="work-project-fact">
                    <p class="work-project-detail-label">Role</p>
                    <p class="work-project-detail-text">${project.role}</p>
                  </div>
                  <div class="work-project-fact">
                    <p class="work-project-detail-label">Platform</p>
                    <p class="work-project-detail-text">${project.platforms}</p>
                  </div>
                  <div class="work-project-fact">
                    <p class="work-project-detail-label">Stack</p>
                    <p class="work-project-detail-text">${project.stack}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  };

  if (projectsListEl) {
    const hasMoreProjects = pageData.projects.length > projectLimit;
    renderProjects(pageData.projects.slice(0, projectLimit));

    if (viewAllProjectsBtn && hasMoreProjects) {
      viewAllProjectsBtn.hidden = false;
      viewAllProjectsBtn.addEventListener("click", () => {
        renderProjects(pageData.projects);
        viewAllProjectsBtn.hidden = true;
      });
    }
  }

  const visualModal = document.getElementById("workVisualModal");
  const visualHeaderLabel = document.getElementById("workVisualHeaderLabel");
  const visualGallery = document.getElementById("workVisualGallery");
  const visualModalStorageKey = "workVisualModalProject";
  let activeVisualProject = null;
  let visualCarouselIndexes = {};

  const getRenderedVisualGroups = (project) => {
    if (project.slug !== "sarig") return project.visuals.groups;

    const websiteGroups = project.visuals.groups.filter(
      (group) => group.label !== "Mobile",
    );
    const mobileGroups = project.visuals.groups.filter(
      (group) => group.label === "Mobile",
    );

    return [
      {
        label: "Website",
        sections: websiteGroups.map((group) => ({
          ...group,
          label: group.label === "Main" ? "" : group.label,
        })),
      },
      {
        label: "Mobile",
        sections: mobileGroups.map((group) => ({
          ...group,
          label: "Customer",
          items: group.items.map((item) => ({
            ...item,
            label: item.label === "Customer Home Page" ? "Home Page" : item.label,
          })),
        })),
      },
    ];
  };

  const renderVisualGallery = (project) => {
    const visualGroups = getRenderedVisualGroups(project);

    visualGallery.innerHTML = visualGroups
      .map((group, groupIndex) => {
        const modifierClass =
          group.label.toLowerCase() === "mobile" ? " is-mobile-group" : "";
        const sections = group.sections || [group];
        const sectionMarkup = sections
          .map((section, sectionIndex) => {
            const carouselKey = `${groupIndex}-${sectionIndex}`;
            const isCarousel = section.carousel && section.items.length > 1;
            const activeItemIndex = Math.min(
              visualCarouselIndexes[carouselKey] || 0,
              section.items.length - 1,
            );
            const visibleItems = isCarousel
              ? [section.items[activeItemIndex]]
              : section.items;

            return `
              <div class="work-visual-section${isCarousel ? " is-carousel-section" : ""}" data-visual-section="${groupIndex}-${sectionIndex}">
                ${group.sections && section.label ? `<p class="work-visual-section-label">${section.label}</p>` : ""}
                ${visibleItems
                  .map(
                    (item) => `
                    <figure class="work-visual-shot">
                      <span class="work-visual-shot-label" data-visual-shot-label>${item.label}</span>
                      <img src="${item.image}" alt="${item.label} preview" loading="lazy" decoding="async" data-visual-shot-image>
                    </figure>
                  `,
                  )
                  .join("")}
                ${
                  isCarousel
                    ? `
                    <div class="work-visual-carousel-controls">
                      <button class="work-visual-carousel-step" type="button" data-visual-carousel-step="-1" data-visual-carousel-group="${groupIndex}" data-visual-carousel-section="${sectionIndex}">
                        Previous
                      </button>
                      <p class="work-visual-carousel-count" data-visual-carousel-count>${activeItemIndex + 1} / ${section.items.length}</p>
                      <button class="work-visual-carousel-step" type="button" data-visual-carousel-step="1" data-visual-carousel-group="${groupIndex}" data-visual-carousel-section="${sectionIndex}">
                        Next
                      </button>
                    </div>
                  `
                    : ""
                }
              </div>
            `;
          })
          .join("");

        return `
          <section class="work-visual-group${modifierClass}" data-visual-group="${groupIndex}">
            <p class="work-visual-group-label">${group.label}</p>
            <div class="work-visual-group-grid">
              ${sectionMarkup}
            </div>
          </section>
        `;
      })
      .join("");
  };

  const openVisualModal = (project) => {
    if (!visualModal || !visualGallery) return;
    activeVisualProject = project;
    visualCarouselIndexes = {};
    if (visualHeaderLabel) visualHeaderLabel.textContent = project.name;
    renderVisualGallery(project);
    visualModal.hidden = false;
    document.body.classList.add("is-visual-modal-open");
    sessionStorage.setItem(visualModalStorageKey, project.slug);
  };

  const closeVisualModal = () => {
    if (!visualModal) return;
    activeVisualProject = null;
    visualCarouselIndexes = {};
    visualModal.hidden = true;
    document.body.classList.remove("is-visual-modal-open");
    sessionStorage.removeItem(visualModalStorageKey);
  };

  const moveVisualCarousel = (groupIndex, sectionIndex, direction) => {
    if (!activeVisualProject) return;
    const group = getRenderedVisualGroups(activeVisualProject)[groupIndex];
    const section = group?.sections?.[sectionIndex] || group;
    if (!section?.items.length) return;

    const carouselKey = `${groupIndex}-${sectionIndex}`;
    const currentIndex = visualCarouselIndexes[carouselKey] || 0;
    visualCarouselIndexes[carouselKey] =
      (currentIndex + direction + section.items.length) % section.items.length;

    const nextIndex = visualCarouselIndexes[carouselKey];
    const nextItem = section.items[nextIndex];
    const sectionEl = visualGallery.querySelector(
      `[data-visual-section="${carouselKey}"]`,
    );
    const labelEl = sectionEl?.querySelector("[data-visual-shot-label]");
    const imageEl = sectionEl?.querySelector("[data-visual-shot-image]");
    const countEl = sectionEl?.querySelector("[data-visual-carousel-count]");

    if (!labelEl || !imageEl || !countEl) {
      renderVisualGallery(activeVisualProject);
      return;
    }

    labelEl.textContent = nextItem.label;
    imageEl.src = nextItem.image;
    imageEl.alt = `${nextItem.label} preview`;
    countEl.textContent = `${nextIndex + 1} / ${section.items.length}`;
  };

  const persistedVisualProjectSlug = sessionStorage.getItem(
    visualModalStorageKey,
  );
  if (persistedVisualProjectSlug) {
    const persistedProject = pageData.projects.find(
      (item) => item.slug === persistedVisualProjectSlug,
    );
    if (persistedProject?.visuals) openVisualModal(persistedProject);
  }

  document.addEventListener("click", (event) => {
    const visualTrigger = event.target.closest("[data-project-visuals]");
    if (visualTrigger) {
      const project = pageData.projects.find(
        (item) => item.slug === visualTrigger.dataset.projectVisuals,
      );
      if (project?.visuals) openVisualModal(project);
    }

    const detailsTrigger = event.target.closest("[data-project-details]");
    if (detailsTrigger) {
      const detailsEl = document.getElementById(
        `project-details-${detailsTrigger.dataset.projectDetails}`,
      );
      if (!detailsEl) return;

      const isOpening = detailsEl.hidden;
      detailsEl.hidden = !isOpening;
      detailsTrigger.setAttribute("aria-expanded", String(isOpening));
      detailsTrigger.textContent = isOpening
        ? "Hide details"
        : "Project details";
    }

    if (event.target.closest("[data-visual-close]")) {
      closeVisualModal();
    }

    const carouselTrigger = event.target.closest("[data-visual-carousel-step]");
    if (carouselTrigger) {
      moveVisualCarousel(
        Number(carouselTrigger.dataset.visualCarouselGroup),
        Number(carouselTrigger.dataset.visualCarouselSection || 0),
        Number(carouselTrigger.dataset.visualCarouselStep),
      );
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && visualModal && !visualModal.hidden) {
      closeVisualModal();
    }
  });
});
