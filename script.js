// Sticky nav
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);

document
  .querySelectorAll(
    ".tl-card, .cert-card, .edu-card, .about-photo-wrap, .about-body, .skill-group",
  )
  .forEach((el) => {
    el.classList.add("fade-up");
    observer.observe(el);
  });
