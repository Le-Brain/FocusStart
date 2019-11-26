import { renderProducts, renderProductsByCategory } from '/js/script.js';
import { displayMenu, hideMenu, removeAllMenu } from '/js/categorymenu.js';
import { basket } from '/js/classbasket.js';
import { userInformation } from '/js/informationPayment.js';
import { checkPayment } from '/js/checkPayment.js';
import { successPayment } from '/js/successPayment.js';
import { animationShow, animationHide } from '/js/animation.js';
import { durationOfAnimation } from '/js/utils.js';

window.onload = function() {
    if (localStorage.getItem("basket") == null) {
      basket.loadBasketToLS();
    }
    else {
      basket.getBasketFromLS();
    }
    if (window.location.hash == "") {
      window.location.hash = "#products";
    }
    basket.renderSmallKorzina();
    let svgHome = document.querySelector(".l-header__o-icon-1");
    let svgBasket = document.querySelector(".l-header__o-icon-2");
    let shoppeIcon = document.querySelector(".l-header-main-image");
    svgHome.addEventListener("click", function() { window.location.hash = "#products"; });
    svgBasket.addEventListener("click", function() { window.location.hash = "#basket" });
    shoppeIcon.addEventListener("click", function() { window.location.hash = "#products" });
    const navArticles = document.querySelectorAll(".l-nav__o-title");
    navArticles.forEach((elem) => {
      elem.addEventListener("mouseenter", removeAllMenu);
      elem.addEventListener("mouseenter", displayMenu);
      elem.addEventListener("mouseleave", hideMenu);
    });
    let navBar = document.querySelector(".l-nav");
    navBar.addEventListener("mouseleave", removeAllMenu);
    let nav = document.querySelector(".l-nav").parentNode;
    nav.addEventListener("mouseenter", removeAllMenu);
    var loaded = sessionStorage.getItem('loaded');
    if(loaded) {
        ReloadPage(window.location.hash);
    } else {
        sessionStorage.setItem('loaded', true);
    }
};

window.addEventListener("hashchange", Navigate);

function ReloadPage(hash) { // Reload current page
  switch(hash) {
    case "": {
        window.location.hash = "#products";
        break;
    }
    case "#products": {
        renderProducts();
        break;
    }
    case "#productsCategory" : {
        renderProductsByCategory();
        break;
    }
    case "#basket": {
        basket.renderKorzina();
        break;
    }
    case "#informationPayment": {
        userInformation.renderInformationPaymentPage();
        break;
    }
    case "#checkPayment": {
        animationShow();
        durationOfAnimation()
        .then(result => {
            animationHide();
            console.log('Loading: ', result);
            checkPayment.renderCheckPaymentPage();
        });
        break;
    }
    case "#successPayment" : {
        animationShow();
        durationOfAnimation()
        .then(result => {
            animationHide();
            basket.clearBasket();
            console.log('Loading: ', result);
            successPayment.renderSuccessPaymentPage();
        });
        break;
    }
    default: {
        break;
    }
  }
}

function Navigate(hash) {   //Routing
  let URLStringNewURL = hash.newURL.split("#")
  let hashStringNewURL = ("#").concat(URLStringNewURL[1]);
  let URLStringOldURL = hash.oldURL.split("#");
  let hashStringOldURL = ("#").concat(URLStringOldURL[1]);
  switch(hashStringNewURL) {
    case "": {
        window.location.hash = "#products";
        break;
    }
    case "#products": {
        renderProducts();
        break;
    }
    case "#productsCategory" : {
        renderProductsByCategory();
        break;
    }
    case "#basket": {
        basket.renderKorzina();
        break;
    }
    case "#informationPayment": {
        userInformation.renderInformationPaymentPage();
        break;
    }
    case "#checkPayment": {
        animationShow();
        durationOfAnimation()
        .then(result => {
            animationHide();
            console.log('Loading: ', result);
            checkPayment.renderCheckPaymentPage();
        });
        break;
    }
    case "#successPayment" : {
      if (hashStringOldURL != "#products") {
          animationShow();
          durationOfAnimation()
          .then(result => {
              animationHide();
              basket.clearBasket();
              console.log('Loading: ', result);
              successPayment.renderSuccessPaymentPage();
          });
        }
        break;
    }
    default: {
        break;
    }
  }
}