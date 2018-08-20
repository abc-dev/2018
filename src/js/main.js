"use strict";

(function showMenu() {
  let menu = document.querySelector(".main-nav");
  let menuHamburguer = document.getElementById("hamburguer");

  menuHamburguer.addEventListener("click", () => {
    menuHamburguer.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });

  menu.childNodes.forEach(link => {
    link.addEventListener("click", () => {
      menuHamburguer.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  });
})();

console.log("It's alive! :D");
