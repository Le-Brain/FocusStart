import { renderProducts } from '/js/script.js';
import { displayMenu, hideMenu } from '/js/categorymenu.js';
import { basket } from '/js/classbasket.js';
import { userInformation } from '/js/informationPayment.js';
import { checkPayment } from '/js/checkPayment.js';
import { successPayment } from '/js/successPayment.js';
import { animationShow, animationHide } from '/js/animation.js';
import { durationOfAnimation } from '/js/utils.js';

window.onload = function() {
    console.log(basket._productsCounts);
    if (localStorage.getItem("basket") == null) {
      basket.loadBasketToLS();
    }
    else {
      basket.getBasketFromLS();
    }
    if (window.location.hash == "") {
      window.location.hash = "#products";
    }
    document.querySelector(".l-header__circle-2").innerText = basket.sumCount();
    document.querySelector(".l-header_o-total-price-article").innerText = basket.sumPrices() + " $";
    let svgHome = document.querySelector(".l-header__o-icon-1");
    let svgBasket = document.querySelector(".l-header__o-icon-2");
    let shoppeIcon = document.querySelector(".l-header-main-image");
    svgHome.addEventListener("click", function() { window.location.hash = "#products"; });
    svgBasket.addEventListener("click", function() { window.location.hash = "#basket" });
    shoppeIcon.addEventListener("click", function() { window.location.hash = "#products" });
    const navArticles = document.querySelectorAll(".l-nav__o-title");
    navArticles.forEach((elem) => {
      elem.addEventListener("mouseenter", displayMenu);
      elem.addEventListener("mouseleave", hideMenu);
    });
    var loaded = sessionStorage.getItem('loaded');
    if(loaded) {
        Navigate(window.location.hash);
    } else {
        sessionStorage.setItem('loaded', true);
    }
};

window.onhashchange = function() { 
  Navigate(window.location.hash);
}

function Navigate(hash) { //Routing
  switch(hash) {
    case "": {
        window.location.hash = "#products";
        break;
    }
    case "#products": {
        renderProducts();
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
            console.log('Payment info proceeding: ', result);
            checkPayment.renderCheckPaymentPage();
        });
        break;
    }
    case "#successPayment" : {
        animationShow();
        durationOfAnimation()
        .then(result => {
            animationHide();
            console.log('Payment info proceeding: ', result);
            successPayment.renderSuccessPaymentPage();
        });
        break;
    }
    default: {
        break;
    }
  }
}