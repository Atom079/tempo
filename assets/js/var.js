"use strict";
window.addEventListener("scroll", ()=>{
    const navbar = document.querySelector(".navbar");
    const homeBtn = document.querySelector(".home-btn");
    navbar.classList.toggle("active", window.scrollY > 0)
    homeBtn.classList.toggle("active", window.scrollY > 0)
})