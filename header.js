// header effect on scroll
const header = document.querySelector("header");

window.onscroll = function () {
  const top = window.scrollY;

  if (top >= 100) {
    header.classList.add("header");
  } else {
    header.classList.remove("header");
  }
};

// menu bar display
const menuIcon = document.querySelector(".mobile-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => mobileMenu.classList.toggle("active"));
