"use strict";
const navbar = document.querySelector(".navbar");
const homeBtn = document.querySelector(".home-btn");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("active", window.scrollY > 0);
  homeBtn.classList.toggle("active", window.scrollY > 0);
});
const NavLinks = document.querySelectorAll(".navbar-nav li");
NavLinks.forEach((item) => {
  item.addEventListener("click", () => {});
});
