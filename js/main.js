'use strict';

function showMenu() {
  let menu = document.querySelector('.main-nav');
  let menuHamburguer = document.getElementById('hamburguer');

  menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  menu.childNodes.forEach(link => {
    link.addEventListener('click', () => {
      menuHamburguer.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  });
}

function scrollMenu() {
  let menu = document.querySelector('.fixed-header');
  let top = window.pageYOffset || document.documentElement.scrollTop;
  let wHeight = window.innerHeight;
  let navHeight = menu.offsetHeight;
  let vHeight = wHeight - navHeight;

  if (top > vHeight) {
    menu.classList.add('is-fixed');
  } else {
    menu.classList.remove('is-fixed');
  }
}

// window.onscroll = scrollMenu;
// window.onload = onLoad;
showMenu();
