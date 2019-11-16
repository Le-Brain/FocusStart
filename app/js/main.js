import { render } from '/js/script.js';
import { displayMenu, hideMenu } from '/js/categorymenu.js';

window.onload = function() {
    console.log("Страница загружена");
    // render();
    const navArticles = document.querySelectorAll(".l-nav__o-title");
    navArticles.forEach((elem) => {
      elem.addEventListener("mouseenter", displayMenu);
      elem.addEventListener("mouseleave", hideMenu);
    });
};