import { userInformation } from '/js/informationPayment.js';

const korzinasection = document.querySelector(".korzinamaincontent"); // template Korzina
const tableItemSection = document.querySelector(".l-korzina-table-items"); // template table item

class Basket {
    constructor() {
        this._products = [];
        this._productsCounts = [];
        this._totalPrice = 0;
        this._totalCounts = 0;
    };

    sumPrices() {
        this._totalPrice = 0;
        this._products.forEach((item) => {
            this._totalPrice = this._totalPrice + (item.price * basket.getCountOfProductById(item.id));
        })
        return this._totalPrice;
    };

    sumCount() {
        this._totalCounts = 0;
        this._productsCounts.forEach((item) => {
            this._totalCounts = this._totalCounts + item.count;
        });
        return this._totalCounts;
    }

    getPriceOfProductById(id) {
        let price;
        this._products.forEach((item) => {
            if (item.id == id) price = item.price;
        });
        return price;
    }

    getCountOfProductById(id) {
        let count;
        this._productsCounts.forEach((item) => {
            if (parseInt(item.id, 10) == id) count = item.count;
        });
        return count;
    }

    renderKorzina() {
        window.location.hash = "#basket";
        document.querySelector(".l-header__circle-2").innerText = basket.sumCount();
        document.querySelector(".l-header_o-total-price-article").innerText = basket.sumPrices() + " $";
        let korzinaTemplate = document.importNode(korzinasection.content, true); // template Korzina
        let maincontent = document.querySelector(".mainsectioncontent"); // template Main Section
        maincontent.removeChild(maincontent.lastChild);
        let section = korzinaTemplate.querySelector(".l-main-korzina"); // Inner section of Template Korzina
        maincontent.appendChild(section);
        let tableBasket = document.querySelector(".l-korzina-table");
        for(let i=0; i< basket._products.length; i++) {
            let tableItemTemplate = document.importNode(tableItemSection.content, true); // Table item template
            let tableRow = tableItemTemplate.querySelector("tr");
            let tableRowCell = tableRow.querySelectorAll("td");
            let countItem = tableRow.querySelector(".table-cell-3-korzina");
            countItem.setAttribute("data-id", `${basket._products[i].id}`);
            countItem.addEventListener("click", incrementCount);
            countItem.addEventListener("contextmenu", decrementCount);
            let svgDelete = tableRowCell[0].querySelector(".o-icon-x");
            svgDelete.setAttribute("data-id", `${basket._products[i].id}`);
            svgDelete.addEventListener("click", deleteFromBasket);
            tableRowCell[1].setAttribute("style", `background-image: url('${basket._products[i].image}');`);
            tableRowCell[2].innerText = basket._products[i].productname;
            tableRowCell[3].innerText = basket._products[i].price + "$";
            let countOfProduct = basket.getCountOfProductById(parseInt(basket._products[i].id, 10));
            tableRowCell[4].innerText = countOfProduct;
            tableRowCell[5].innerText = basket._products[i].price * countOfProduct + "$";
            tableBasket.appendChild(tableRow);
        }
        let totalPrice = document.querySelector("#totalprice");
        totalPrice.innerText = "$" + basket.sumPrices();
        let subTotal = document.querySelector("#subtotal");
        subTotal.innerText = "$" + basket.sumPrices();
        let checkoutButton = document.querySelector("#processcheckout");
        checkoutButton.addEventListener("click", userInformation.renderInformationPaymentPage);
    };

    addToBasket(object) {
        let countOfProduct = {
            id : object.id,
            count : 1
        };
        this._productsCounts.push(countOfProduct);
        this._products.push(object);
        this.loadBasketToLS();
        console.log("Добавлено в корзину");
    };

    showBasket() {
        console.log(this._products);
        console.log(this._productsCounts);
        console.log(this._totalPrice);
        console.log(this._totalCounts);
    };

    checkProduct(id) { // -1 - not contains, esle return index object in _products
        return this._products.findIndex((element)=>{
            if (element.id == id) {
                return true;
            } else {
                return false;
            }
        });
    };

    loadBasketToLS() {
        localStorage.removeItem("basket");
        localStorage.setItem("basket", JSON.stringify(this));
    };

    getBasketFromLS() {
        let korzina = JSON.parse(localStorage.getItem("basket"));
        this._products = korzina._products;
        this._productsCounts = korzina._productsCounts;
        this._totalPrice = korzina._totalPrice;
        this._totalCounts = korzina._totalCounts;
        return basket;
    };
};

function deleteFromBasket(e) {
    if (e.target.tagName == "svg") {
        let svgDelete = e.target;
        let id = svgDelete.getAttribute("data-id");
        let index = basket.checkProduct(id);
        basket._products.splice(index, 1);
        basket._productsCounts.splice(index, 1);
        basket.renderKorzina();
        basket.loadBasketToLS();
    }
    else if (e.target.tagName == "use") {
        let svgDelete = e.target.parentNode;      
        let id = svgDelete.getAttribute("data-id");
        let index = basket.checkProduct(id);
        basket._products.splice(index, 1);
        basket._productsCounts.splice(index, 1);
        basket.renderKorzina();
        basket.loadBasketToLS();
    }
    else {
        alert("Ошибка удаления товара");
    }
}

function incrementCount(e) {
    let countOfProdElem = e.target;
    let id = countOfProdElem.getAttribute("data-id");
    let index = basket.checkProduct(id);
    let newCount = parseInt(basket.getCountOfProductById(basket._products[index].id), 10) + 1;
    countOfProdElem.innerText = newCount;
    basket._productsCounts[index].count = newCount;
    basket.loadBasketToLS();
    basket.sumPrices();
    basket.renderKorzina();
}

function decrementCount(e) {
    let countOfProdElem = e.target;
    let id = countOfProdElem.getAttribute("data-id");
    let index = basket.checkProduct(id);
    if (basket.getCountOfProductById(basket._products[index].id) > 1) {
        let newCount = parseInt(basket.getCountOfProductById(basket._products[index].id), 10) - 1;
        countOfProdElem.innerText = newCount;
        basket._productsCounts[index].count = newCount;
        basket.loadBasketToLS();
        basket.sumPrices();
        basket.renderKorzina();
    }
    e.returnValue = false;
}

export const basket = new Basket();