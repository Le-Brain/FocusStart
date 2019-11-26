import { basket } from '/js/classbasket.js'
import { checkPayment } from '/js/checkPayment.js';

const templateInformationPayment = document.querySelector(".informationpayment");;

class InformationPayment {
    constructor() {
        this._firstName = "Jhone";
        this._lastName = "Smith";
        this._companyName = "Rosuson Industries";
        this._country = "United Kingdom";
        this._cityTown = "e.g. New York";
        this._postcode = "e.g. 358745";
        this._address = "eg. 2nd steer, Costrica, Uk 354548";
        this._email = "abc@xyz.com";
        this._phone = "eg. 94 788 1221";
    };

    renderInformationPaymentPage() {
        window.location.hash = "#informationPayment";
        basket.renderSmallKorzina();
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
        let inputBlocks = section.querySelectorAll(".o-input");
        inputBlocks.forEach((item) => {
            item.addEventListener("click", clearData);
        });
        let inputLongBlock = section.querySelector(".o-input-long");
        inputLongBlock.addEventListener("click", clearData);
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


function clearData(event) {
    let element = event.target;
    element.value = "";
}

export const userInformation = new InformationPayment();