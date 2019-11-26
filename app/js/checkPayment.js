import { basket } from '/js/classbasket.js';
import { userInformation } from '/js/informationPayment.js';
import { successPayment } from '/js/successPayment.js';

const templateCheckPayment = document.querySelector(".checkpayment"); // template of checkpaymentpage
const tableItemTemplate = document.querySelector(".itemofcheckpaymentpage"); //template of item table

class CheckPayment {
    constructor() {
        this._nameOnCard = "Daniel Hecker";
        this._cardNumber = "4121 4411 1414 9754";
        this._validTrough = "MM / DD";
        this._cvv = "eg. 201";
        this._email ="abc@xyz.com";
    }

    renderCheckPaymentPage() {
        window.location.hash = "#checkPayment";
        basket.renderSmallKorzina();
        let checkPaymentPage = document.importNode(templateCheckPayment.content, true);
        let maincontent = document.querySelector(".mainsectioncontent"); // template Main Section
        if (maincontent.lastChild != undefined) {
            maincontent.removeChild(maincontent.lastChild);
        }
        let section = checkPaymentPage.querySelector(".l-main");
        maincontent.appendChild(section);
        checkPayment.setInformation(section);
        let tableOfItems = section.querySelector(".l-maincontent__c-table");
        for(let i=0; i<basket._products.length; i++) {
            let tableItem = document.importNode(tableItemTemplate.content, true); // template of item table
            let pole1 = tableItem.querySelector(".table-cell-1");
            let pole2 = tableItem.querySelector(".table-cell-2");
            let pole3 = tableItem.querySelector(".table-cell-3");
            let pole4 = tableItem.querySelector(".table-cell-4");
            let countOfProduct = basket.getCountOfProductById(parseInt(basket._products[i].id, 10));
            pole1.setAttribute("style", `background-image: url('${basket._products[i].image}');`);
            pole2.innerText = basket._products[i].productname;
            pole3.innerText = basket._productsCounts[i].count;
            pole4.innerText = basket._products[i].price * countOfProduct + "$";
            tableOfItems.appendChild(tableItem);
        }
        let tableItem = document.importNode(tableItemTemplate.content, true);
        let pole1 = tableItem.querySelector(".table-cell-1");
        let pole2 = tableItem.querySelector(".table-cell-2");
        let pole3 = tableItem.querySelector(".table-cell-3");
        let pole4 = tableItem.querySelector(".table-cell-4");
        pole1.removeAttribute("class");
        pole2.innerText = "Shipping Charge";
        pole3.removeAttribute("class");
        pole4.innerText = "0.0$";
        tableOfItems.appendChild(tableItem);
        checkPayment.setInformation(section);
        let buttonBack = section.querySelector("#checkpaymentpageback");
        buttonBack.addEventListener("click", function() { checkPayment.saveInformation(section); } );
        buttonBack.addEventListener("click", userInformation.renderInformationPaymentPage);
        let payButton = section.querySelector("#checkpaymentpagepay");
        payButton.innerText = ("Pay ").concat(String(basket._totalPrice).concat(" $"));
        payButton.addEventListener("click", successPayment.renderSuccessPaymentPage);
        let inputBlocks = section.querySelectorAll(".o-input");
        inputBlocks.forEach((item) => {
            item.addEventListener("click", clearData);
        });
        let inputBlockCard = section.querySelector(".o-input-visa");
        inputBlockCard.addEventListener("click", clearData);
    };

    setInformation(section) {
        let inputBlocks = section.querySelectorAll(".o-input");
        inputBlocks.forEach((item) => {
            switch(item.getAttribute("id")){
                case "nameoncard" : {
                    item.setAttribute("value", this._nameOnCard);
                    break;
                }
                case "cardNumber" : {
                    item.setAttribute("value", this._cardNumber);
                    break;
                }
                case "validTrough" : {
                    item.setAttribute("value", this._validTrough);
                    break;
                }
                case "cvv" : {
                    item.setAttribute("value", this._cvv);
                    break;
                }
                case "emailCheck" : {
                    item.setAttribute("value", this._email);
                    break;
                }
                default : {
                    break;
                }
            }
        });
        let inputBlockCard = section.querySelector(".o-input-visa");
        inputBlockCard.setAttribute("value", this._cardNumber);
    };

    saveInformation(section) {
        let inputBlocks = section.querySelectorAll(".o-input");
        inputBlocks.forEach((item) => {
            switch(item.getAttribute("id")){
                case "nameoncard" : {
                    this._nameOnCard = item.value;
                    break;
                }
                case "cardNumber" : {
                    this._cardNumber = item.value;
                    break;
                }
                case "validTrough" : {
                    this._validTrough = item.value;
                    break;
                }
                case "cvv" : {
                    this._cvv = item.value;
                    break;
                }
                case "emailCheck" : {
                    this._email = item.value;
                    break;
                }
                default : {
                    break;
                }
            }
        });
        let inputBlockCard = section.querySelector(".o-input-visa");
        this._cardNumber = inputBlockCard.value;
    };
    
};

function clearData(event) {
    let element = event.target;
    element.value = "";
}

export const checkPayment = new CheckPayment();