"use strict";

const sidemenu = document.querySelector("#sidemenu");
const navbar = document.querySelector("nav");
const navmenu = document.querySelector("nav ul");
const navlinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

function openMenu() {
  sidemenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
  sidemenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navbar.classList.add("bg-white/50", "backdrop-blur-lg", "shadow-sm");
    navmenu.classList.remove("bg-white/50", "shadow-sm");
  } else {
    navbar.classList.remove("bg-white/50", "backdrop-blur-lg", "shadow-sm");
    navmenu.classList.add("bg-white/50", "shadow-sm");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);

    entries.forEach((entry) => {
      const id = entry.target.id;
      const correspondingLinks = document.querySelectorAll(
        `.nav-link[href="#${id}"]`,
      );

      if (entry.isIntersecting) {
        navlinks.forEach((link) =>
          link.classList.remove(
            "bg-gradient-to-r",
            "from-purple-400",
            "to-pink-400",
            "bg-clip-text",
            "text-transparent",
          ),
        );
        correspondingLinks.forEach((link) =>
          link.classList.add(
            "bg-gradient-to-r",
            "from-purple-400",
            "to-pink-400",
            "bg-clip-text",
            "text-transparent",
          ),
        );
      }
    });
  },
  { threshold: 0, rootMargin: "-40% 0px -40% 0px" },
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("load", () => {
  sections.forEach((section) => {
    observer.unobserve(section);
    observer.observe(section);
  });
});
