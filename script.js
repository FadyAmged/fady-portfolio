/* ============================================================
   EDITABLE CONFIG
   - SOCIAL.github: add your public GitHub URL or leave ""
   - PROJECTS[].liveUrl: hide View Live until a public URL is set
   - PROJECTS[].images: add/remove screenshot paths
   - TESTIMONIALS: add another object to show a new card
   Images live in assets/images/ — missing files show a fallback.
   ============================================================ */

const SOCIAL = {
  linkedin: "https://linkedin.com/in/fady-amged-4a26723b4",
  github: "https://github.com/FadyAmged",
};

const TYPING_PHRASES = [
  "Front-End Web Developer",
  "HTML • CSS • JavaScript",
  "Responsive interfaces",
  "UI implementation",
];

const PROJECTS = [
  {
    id: "health-empire",
    name: "Health Empire",
    thumb: "assets/images/health-empire-thumb.png",
    liveUrl: "",
    description:
      "Health Empire is an all-in-one health and wellness platform that combines healthy food shopping, doctor consultations, fitness coaching, and order tracking in one convenient experience.",
    features: [
      "Healthy food and product catalog with prices and calories",
      "Dynamic shopping cart with quantity controls and automatic calculations",
      "Secure payment interface supporting Visa",
      "Doctor and fitness trainer directory with specialties, ratings, and consultation prices",
      "Booking options",
      "Interactive delivery map and order tracking",
      "Estimated delivery time and driver information",
      "Sign In and Sign Up interfaces with social sign-in",
      "Responsive layouts",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "Google Maps"],
    images : [
      "assets/images/health-empire-01.png" ,
      "assets/images/health-empire-02.png",
      "assets/images/health-empire-03.png",
      "assets/images/health-empire-04.png",
      "assets/images/health-empire-05.png",
      "assets/images/health-empire-06.png",
      "assets/images/health-empire-07.png",
      "assets/images/health-empire-08.png",
      "assets/images/health-empire-09.png",
      // "assets/images/health-empire-10.png",
    ],
  },
  {
    id: "iron-peak",
    name: "Iron Peak Gym",
    thumb: "assets/images/iron-peak-thumb.png",
    liveUrl: "https://ironpeak-glow.lovable.app/",
    description:
      "Iron Peak Gym is a premium fitness web experience featuring a modern dark interface with vibrant green accents. The design focuses on strong visual presentation, clear information, and a smooth browsing experience.",
    features: [
      "Premium dark UI",
      "Green accents",
      "Hero section with CTA",
      "Gym features",
      "Membership plans and pricing presentation",
      "Facilities gallery",
      "Contact information",
      "Responsive layouts",
      "Consistent visual details",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
    images: [
      "assets/images/iron-peak-thumb.png",
      "assets/images/iron-peak-01.png",
      "assets/images/iron-peak-02.png",
      "assets/images/iron-peak-03.png",
      "assets/images/iron-peak-04.png",
      "assets/images/iron-peak-05.png",
    ],
  },
  {
    id: "coffee-shop",
    name: "Online Coffee Shop Website",
    thumb: "assets/images/coffee-shop-thumb.png",
    liveUrl: "",
    description:
      "A professional and responsive coffee shop website built with HTML, CSS, and JavaScript. It features an inviting design and organized sections that present the brand, products, customer feedback, and contact information.",
    features: [
      "Home",
      "About",
      "Products",
      "Testimonials",
      "Blog",
      "Contact Form",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    images: [
      "assets/images/coffee-shop-thumb.png",
      "assets/images/coffee-shop-01.png",
      "assets/images/coffee-shop-02.png",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Karima Bahieg",
    title: "Digital Marketing Instructor at ITI",
    avatar: "assets/images/avatar-karima.jpg",
    stars: 5,
    quote:
      "Fady was one of my most committed trainees. His professionalism, dedication, and quality of work truly stood out. I'm genuinely proud of his growth - a real whale with great potential!",
  },
  {
    name: "Rana Reda",
    title: "Digital Marketer",
    avatar: "assets/images/avatar-rana.jpg",
    stars: 5,
    quote:
      "I had a great experience working with Fady. He is a reliable and hardworking person who takes his responsibilities seriously. He is also easy to work with, supportive, and always open to learning new things. I truly appreciate his professionalism and wish him all the best in his future career.",
  },
  {
    name: "Fatma Atef",
    title: "IT Engineer",
    avatar: "assets/images/avatar-fatma.jpg",
    stars: 5,
    quote:
      "It was a pleasure working with Fady Amged. He's a creative and skilled web developer who always brings great ideas to the table. I really enjoyed collaborating with him and appreciated his dedication, teamwork, and passion for what he does. I'm glad I had the chance to work with him and would definitely recommend him.",
  },
];

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function bindImage(img) {
  if (!img || img.dataset.bound === "1") return;
  img.dataset.bound = "1";
  const fallback = img.parentElement.querySelector(".img-fallback");
  const markMissing = () => {
    img.classList.add("is-missing");
    img.style.display = "none";
    if (fallback) fallback.classList.add("is-on");
  };
  const markLoaded = () => {
    img.classList.remove("is-missing");
    img.style.display = "";
    if (fallback) fallback.classList.remove("is-on");
  };
  img.addEventListener("error", markMissing);
  img.addEventListener("load", markLoaded);
  if (img.complete && img.naturalWidth === 0) markMissing();
}

function applyGitHubLinks() {
  const links = document.querySelectorAll(".github-link");
  const url = SOCIAL.github.trim();
  links.forEach((link) => {
    link.classList.remove("is-hidden");
    if (!url) {
      link.href = "#";
      link.removeAttribute("target");
      link.setAttribute("aria-label", "GitHub — add SOCIAL.github in script.js");
      link.title = "Add your GitHub URL in SOCIAL.github inside script.js";
      link.addEventListener("click", (event) => event.preventDefault());
      return;
    }
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "GitHub");
  });
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  const links = [...document.querySelectorAll(".nav-link")];

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === id);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupTyping() {
  const el = document.getElementById("typed-text");
  if (!el || prefersReducedMotion) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const phrase = TYPING_PHRASES[phraseIndex];
    el.textContent = phrase.slice(0, charIndex);

    if (!deleting && charIndex < phrase.length) {
      charIndex += 1;
      setTimeout(tick, 70);
      return;
    }
    if (!deleting && charIndex === phrase.length) {
      deleting = true;
      setTimeout(tick, 1400);
      return;
    }
    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(tick, 36);
      return;
    }
    deleting = false;
    phraseIndex = (phraseIndex + 1) % TYPING_PHRASES.length;
    setTimeout(tick, 280);
  };

  tick();
}

function setupReveals() {
  const nodes = document.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  nodes.forEach((node) => observer.observe(node));
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  PROJECTS.forEach((project, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "project-card reveal";
    button.setAttribute("aria-label", `Open ${project.name} details`);
    button.innerHTML = `
      <div class="project-thumb">
        <img src="${project.thumb}" alt="" data-fallback="${project.name}" />
        <div class="img-fallback">${project.name}</div>
      </div>
      <h3>${project.name}</h3>
    `;
    button.addEventListener("click", () => openProject(index));
    grid.appendChild(button);
    bindImage(button.querySelector("img"));
  });
}

let galleryIndex = 0;
let activeProject = null;

function hasPublicUrl(url) {
  if (!url || !url.trim()) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function openProject(index) {
  activeProject = PROJECTS[index];
  galleryIndex = 0;

  document.getElementById("modal-title").textContent = activeProject.name;
  document.getElementById("modal-description").textContent =
    activeProject.description;

  const features = document.getElementById("modal-features");
  features.innerHTML = "";
  activeProject.features.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    features.appendChild(li);
  });

  const tech = document.getElementById("modal-tech");
  tech.innerHTML = "";
  activeProject.technologies.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    tech.appendChild(li);
  });

  const live = document.getElementById("modal-live");
  if (hasPublicUrl(activeProject.liveUrl)) {
    live.href = activeProject.liveUrl;
    live.classList.remove("is-hidden");
  } else {
    live.classList.add("is-hidden");
    live.removeAttribute("href");
  }

  showGalleryImage();
  document.getElementById("project-modal").showModal();
}

function showGalleryImage() {
  const img = document.getElementById("gallery-image");
  const fallback = document.querySelector(".gallery-fallback");
  const count = document.getElementById("gallery-count");
  const sources = activeProject.images;
  const src = sources[galleryIndex];

  img.classList.add("is-swap");
  window.setTimeout(() => {
    img.style.display = "";
    img.classList.remove("is-missing");
    fallback.classList.remove("is-on");
    img.alt = `${activeProject.name} screenshot ${galleryIndex + 1}`;
    img.src = src;
    bindImage(img);
    img.classList.remove("is-swap");
  }, prefersReducedMotion ? 0 : 160);

  count.textContent = `${galleryIndex + 1} / ${sources.length}`;
}

function setupModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.querySelector(".modal-close");
  const prev = document.querySelector(".gallery-nav.prev");
  const next = document.querySelector(".gallery-nav.next");

  closeBtn.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });

  prev.addEventListener("click", () => {
    if (!activeProject) return;
    galleryIndex =
      (galleryIndex - 1 + activeProject.images.length) %
      activeProject.images.length;
    showGalleryImage();
  });

  next.addEventListener("click", () => {
    if (!activeProject) return;
    galleryIndex = (galleryIndex + 1) % activeProject.images.length;
    showGalleryImage();
  });

  document.addEventListener("keydown", (event) => {
    if (!modal.open || !activeProject) return;
    if (event.key === "ArrowLeft") prev.click();
    if (event.key === "ArrowRight") next.click();
  });
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  grid.innerHTML = "";

  TESTIMONIALS.forEach((item) => {
    const card = document.createElement("article");
    card.className = "testimonial-card reveal";
    card.innerHTML = `
      <div class="person">
        <div class="avatar">
          <img src="${item.avatar}" alt="" />
          <div class="img-fallback">${initials(item.name)}</div>
        </div>
        <div>
          <h3>${item.name}</h3>
          <p>${item.title}</p>
        </div>
      </div>
      <p class="stars" aria-label="${item.stars} out of 5 stars">${"★".repeat(item.stars)}</p>
      <blockquote>${item.quote}</blockquote>
    `;
    grid.appendChild(card);
    bindImage(card.querySelector("img"));
  });
}

function setupForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    let valid = true;

    const setError = (name, message) => {
      const node = form.querySelector(`[data-error-for="${name}"]`);
      if (node) node.textContent = message;
      if (message) valid = false;
    };

    setError("name", data.name.trim() ? "" : "Please enter your full name.");
    setError(
      "email",
      emailPattern.test(data.email.trim())
        ? ""
        : "Please enter a valid email address."
    );
    setError("subject", data.subject.trim() ? "" : "Please add a subject.");
    setError(
      "message",
      data.message.trim().length >= 10
        ? ""
        : "Please write a message of at least 10 characters."
    );

    feedback.classList.remove("is-ok", "is-err");
    if (!valid) {
      feedback.classList.add("is-err");
      feedback.textContent = "Check the highlighted fields and try again.";
      return;
    }

    feedback.classList.add("is-ok");
    feedback.textContent =
      "Thanks, Fady can connect this form to an email service next. Your message was validated locally and was not sent yet.";
    form.reset();
  });
}

function setupMatrix() {
  const canvas = document.getElementById("matrix-bg");
  if (!canvas || prefersReducedMotion) {
    if (canvas) canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  const glyphs = "01<>/{}[]$#FADY";
  let columns = [];
  let width = 0;
  let height = 0;
  const fontSize = 14;

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Array.from({ length: Math.floor(width / fontSize) }, () =>
      Math.random() * -40
    );
  };

  const draw = () => {
    ctx.fillStyle = "rgba(8, 11, 10, 0.18)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "rgba(0, 255, 136, 0.55)";
    ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;
    columns.forEach((y, i) => {
      const text = glyphs[Math.floor(Math.random() * glyphs.length)];
      ctx.fillText(text, i * fontSize, y * fontSize);
      columns[i] = y * fontSize > height && Math.random() > 0.975 ? 0 : y + 0.65;
    });
    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);
  draw();
}

document.querySelectorAll("img[data-fallback]").forEach(bindImage);
document.getElementById("year").textContent = String(new Date().getFullYear());
applyGitHubLinks();
setupNav();
setupTyping();
renderProjects();
renderTestimonials();
setupReveals();
setupModal();
setupForm();
setupMatrix();
