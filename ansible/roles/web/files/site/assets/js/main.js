function initNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  const navLinks = nav ? Array.from(nav.querySelectorAll("a")) : [];

  if (menuToggle && nav && !menuToggle.dataset.navReady) {
    menuToggle.dataset.navReady = "true";
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function initExternalLinks() {
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }

    const isExternal = href.startsWith("http") && !href.includes(window.location.hostname);
    if (isExternal) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal:not([data-reveal-ready])");

  if (!revealItems.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -30px 0px",
    },
  );

  revealItems.forEach((item) => {
    item.dataset.revealReady = "true";
    observer.observe(item);
  });
}

function initSite() {
  initNavigation();
  initExternalLinks();
  initReveal();
}

document.addEventListener("DOMContentLoaded", initSite);
document.addEventListener("layout:loaded", initSite);
