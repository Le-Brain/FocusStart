import { basket } from '/js/classbasket.js'
import { checkPayment } from '/js/checkPayment.js';

const templateInformationPayment = document.querySelector(".informationpayment");;

class InformationPayment {
    constructor() {
        this._firstName = "";
        this._lastName = "";
        this._companyName = "";
        this._country = "";
        this._cityTown = "";
        this._postcode = "";
        this._address = "";
        this._email = "";
        this._phone = "";
    };

    renderInformationPaymentPage() {
        document.querySelector(".l-header__circle-2").innerText = basket.sumCount();
        document.querySelector(".l-header_o-total-price-article").innerText = basket.sumPrices() + " $";
        window.location.hash = "#informationPayment";
        let informationPaymentPage = document.importNode(templateInformationPayment.content, true);
        let maincontent = document.querySelector(".mainsectioncontent"); // template Main Section
        maincontent.removeChild(maincontent.lastChild);
        let section = informationPaymentPage.querySelector(".l-main");
        maincontent.appendChild(section);
        userInformation.setInformation(section);
        let nextButton = document.querySelector("#nexttopayment");
        let backButton = document.querySelector("#backtobasket");
        backButton.addEventListener("click", function() { userInformation.saveInformation(section); });
        backButton.addEventListener("click", basket.renderKorzina);
        nextButton.addEventListener("click", function() { userInformation.saveInformation(section); });
        nextButton.addEventListener("click", checkPayment.renderCheckPaymentPage);
    };

    setInformation(informationPaymentPage) {
        let inputBlocks = informationPaymentPage.querySelectorAll(".o-input");
        inputBlocks.forEach((item) => {
            switch(item.getAttribute("id")){
                case "firstname" : {
                    item.setAttribute("value", this._firstName);
                    break;
                }
                case "lastname" : {
                    item.setAttribute("value", this._lastName);
                    break;
                }
                case "companyname" : {
                    item.setAttribute("value", this._companyName);
                    break;
                }
                case "contry" : {
                    item.setAttribute("value", this._country);
                    break;
                }
                case "towncity" : {
                    item.setAttribute("value", this._cityTown);
                    break;
                }
                case "postcode" : {
                    item.setAttribute("value", this._postcode);
                    break;
                }
                case "address" : {
                    item.setAttribute("value", this._address);
                    break;
                }
                case "email" : {
                    item.setAttribute("value", this._email);
                    break;
                }
                case "phone" : {
                    item.setAttribute("value", this._phone);
                    break;
                }
                default : {
                    break;
                }
            }
        });
        let inputLongBlock = informationPaymentPage.querySelector(".o-input-long");
        inputLongBlock.setAttribute("value", this._address);
    };

    saveInformation(informationPaymentPage) {
        let inputBlocks = informationPaymentPage.querySelectorAll(".o-input");
        inputBlocks.forEach((item) => {
            switch(item.getAttribute("id")){
                case "firstname" : {
                    userInformation._firstName = item.value;
                    break;
                }
                case "lastname" : {
                    userInformation._lastName = item.value;
                    break;
                }
                case "companyname" : {
                    userInformation._companyName = item.value;
                    break;
                }
                case "contry" : {
                    userInformation._country = item.value;
                    break;
                }
                case "towncity" : {
                    userInformation._cityTown = item.value;
                    break;
                }
                case "postcode" : {
                    userInformation._postcode = item.value;
                    break;
                }
                case "address" : {
                    userInformation._address = item.value;
                    break;
                }
                case "email" : {
                    userInformation._email = item.value;
                    break;
                }
                case "phone" : {
                    userInformation._phone = item.value;
                    break;
                }
                default : {
                    break;
                }
            }
        });
        let inputLongBlock = informationPaymentPage.querySelector(".o-input-long");
        userInformation._address = inputLongBlock.value;
    };
};


export const userInformation = new InformationPayment();