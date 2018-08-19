"use strict";

(function showMenu() {
  let menu = document.querySelector(".main-nav");
  let menuHamburguer = document.querySelectorAll(".hamburguer");
  menuHamburguer.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  });
})();

console.log("It's alive! :D");
