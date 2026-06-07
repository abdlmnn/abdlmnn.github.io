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
          value: "React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML, CSS",
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
        role:
          "Founder / Product Builder / Full-stack Developer",
        stack:
          "Django, Django REST Framework, GeoDjango, Next.js, React, React Native, Expo, TypeScript, Tailwind CSS, PostgreSQL, PostGIS, Docker, Google Maps API",
        platforms: "Web + Mobile",
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
        role:
          "Intern Web Developer",
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
        role:
          "Full-stack Developer / System Developer, Team Build",
        stack:
          "Django, Django REST Framework, ReactJS, Tailwind CSS, React Native, Expo, PostgreSQL, Docker, Google Maps API",
        platforms: "Web + Mobile",
        visuals: {
          label: "View images",
          groups: [
            {
              label: "Website",
              items: [
                {
                  label: "Super Admin",
                  href: "../../my-images/projects/pharmago/superadmin web/pharmacy management.svg",
                  image: "../../my-images/projects/pharmago/superadmin web/pharmacy management.svg",
                },
                {
                  label: "Admin",
                  href: "../../my-images/projects/pharmago/admin web/all orders dashboard.svg",
                  image: "../../my-images/projects/pharmago/admin web/all orders dashboard.svg",
                },
              ],
            },
            {
              label: "Mobile",
              items: [
                {
                  label: "Customer",
                  href: "../../my-images/projects/pharmago/customer mobile/landing.svg",
                  image: "../../my-images/projects/pharmago/customer mobile/landing.svg",
                },
                {
                  label: "Rider",
                  href: "../../my-images/projects/pharmago/rider mobile/landing.svg",
                  image: "../../my-images/projects/pharmago/rider mobile/landing.svg",
                },
              ],
            },
          ],
        },
      },
      /*
      {
        slug: "codbit",
        name: "Codbit",
        type: "Developer Tool / Productivity Platform",
        status: "In Development",
        summary:
          "A coding-focused project built around making development work clearer, faster, and easier to organize.",
        whatItSolved:
          "Scattered development notes, project context, and workflow friction while building software.",
        whatIDid:
          "Worked on the product direction, interface flow, and core development experience.",
        contribution:
          "Created a more structured way to support coding work and keep project context close to the developer.",
        accomplished:
          "Built the foundation for a tool focused on practical development productivity.",
        role:
          "Product Builder / Full-stack Developer",
        stack:
          "JavaScript, TypeScript, React, Node.js",
        platforms: "Web",
      },
      {
        slug: "stuart-boutique",
        name: "Stuart Boutique",
        type: "Boutique Website / Online Storefront",
        status: "Completed Project",
        summary:
          "A boutique-focused web project designed to present products, brand identity, and customer-facing information clearly.",
        whatItSolved:
          "Limited online visibility and the need for a clearer digital storefront for boutique customers.",
        whatIDid:
          "Built the website structure, page flow, visual presentation, and customer-facing interface.",
        contribution:
          "Helped turn the boutique presence into a cleaner and more accessible online experience.",
        accomplished:
          "Delivered a polished storefront foundation for showcasing boutique products and brand details.",
        role:
          "Web Developer / Designer",
        stack:
          "HTML, CSS, JavaScript",
        platforms: "Web",
      },
      */
    ],
    cta: {
      kicker: "",
      title: "Have an idea that needs structure, clarity, and a real path forward?",
      copy:
        "I care about building things that are useful, understandable, and made with intention. If you are hiring, planning a project, or exploring a collaboration, I would be glad to talk.",
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

  const projectLimit = 3;
  const projectsListEl = document.getElementById("workProjectsList");
  const viewAllProjectsBtn = document.getElementById("workViewAllProjects");
  const renderProjects = (projects) => {
    projectsListEl.innerHTML = projects
      .map((project, index) => {
        const projectNumber = String(index + 1).padStart(2, "0");
        const hasVisualAction = project.visuals && project.status !== "In Development";
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

  const renderVisualGallery = (project) => {
    visualGallery.innerHTML = project.visuals.groups
      .map((group) => {
        const modifierClass = group.label.toLowerCase() === "mobile" ? " is-mobile-group" : "";

        return `
          <section class="work-visual-group${modifierClass}">
            <p class="work-visual-group-label">${group.label}</p>
            <div class="work-visual-group-grid">
              ${group.items
                .map(
                  (item) => `
                    <figure class="work-visual-shot">
                      <span class="work-visual-shot-label">${item.label}</span>
                      <img src="${item.image}" alt="${item.label} preview" loading="lazy" decoding="async">
                    </figure>
                  `,
                )
                .join("")}
            </div>
          </section>
        `;
      })
      .join("");
  };

  const openVisualModal = (project) => {
    if (!visualModal || !visualGallery) return;
    if (visualHeaderLabel) visualHeaderLabel.textContent = project.name;
    renderVisualGallery(project);
    visualModal.hidden = false;
    document.body.classList.add("is-visual-modal-open");
    sessionStorage.setItem(visualModalStorageKey, project.slug);
  };

  const closeVisualModal = () => {
    if (!visualModal) return;
    visualModal.hidden = true;
    document.body.classList.remove("is-visual-modal-open");
    sessionStorage.removeItem(visualModalStorageKey);
  };

  const persistedVisualProjectSlug = sessionStorage.getItem(visualModalStorageKey);
  if (persistedVisualProjectSlug) {
    const persistedProject = pageData.projects.find((item) => item.slug === persistedVisualProjectSlug);
    if (persistedProject?.visuals) openVisualModal(persistedProject);
  }

  document.addEventListener("click", (event) => {
    const visualTrigger = event.target.closest("[data-project-visuals]");
    if (visualTrigger) {
      const project = pageData.projects.find((item) => item.slug === visualTrigger.dataset.projectVisuals);
      if (project?.visuals) openVisualModal(project);
    }

    const detailsTrigger = event.target.closest("[data-project-details]");
    if (detailsTrigger) {
      const detailsEl = document.getElementById(`project-details-${detailsTrigger.dataset.projectDetails}`);
      if (!detailsEl) return;

      const isOpening = detailsEl.hidden;
      detailsEl.hidden = !isOpening;
      detailsTrigger.setAttribute("aria-expanded", String(isOpening));
      detailsTrigger.textContent = isOpening ? "Hide details" : "Project details";
    }

    if (event.target.closest("[data-visual-close]")) {
      closeVisualModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && visualModal && !visualModal.hidden) {
      closeVisualModal();
    }
  });
});
