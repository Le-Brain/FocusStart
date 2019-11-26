import { basket } from '/js/classbasket.js';
import { renderProducts } from '/js/script.js';

const templateSuccessPayment = document.querySelector(".successpayment"); // template of checkpaymentpage

class SuccessPayment {
    constructor() {

    };

    renderSuccessPaymentPage() {
        window.location.hash = "#successPayment";
        basket.renderSmallKorzina();
        let successPaymentPage = document.importNode(templateSuccessPayment.content, true);
        let maincontent = document.querySelector(".mainsectioncontent"); // template Main Section
        if (maincontent.lastChild != undefined) {
            maincontent.removeChild(maincontent.lastChild);
        }
        let section = successPaymentPage.querySelector(".l-main");
        maincontent.appendChild(section);
        let backToShopping = section.querySelector("#backtoshopping");
        backToShopping.addEventListener("click", renderProducts);
    };
}

export const successPayment = new SuccessPayment();