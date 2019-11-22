import { renderProducts } from '/js/script.js';
import { displayMenu, hideMenu } from '/js/categorymenu.js';
import { basket } from '/js/classbasket.js';

window.onload = function() {
    if (localStorage.getItem("basket") == null) {
      basket.loadBasketToLS();
    }
    else {
      basket.getBasketFromLS();
    }
    console.log(basket);
    renderProducts();
    console.log("Страница загружена");
    const navArticles = document.querySelectorAll(".l-nav__o-title");
    navArticles.forEach((elem) => {
      elem.addEventListener("mouseenter", displayMenu);
      elem.addEventListener("mouseleave", hideMenu);
    });
    let svgBasket = document.querySelector(".l-header__o-icon-2");
    svgBasket.addEventListener("click", basket.renderKorzina);
    let svgHome = document.querySelector(".l-header__o-icon-1");
    svgHome.addEventListener("click", renderProducts);
};