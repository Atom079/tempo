"use strict";
window.addEventListener("scroll", ()=>{
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active", window.scrollY > 0)
})