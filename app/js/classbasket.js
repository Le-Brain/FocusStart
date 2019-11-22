const korzinasection = document.querySelector(".korzinamaincontent"); // template Korzina
const tableItemSection = document.querySelector(".l-korzina-table-items"); // template table item

class Basket {
    constructor() {
        console.log("Корзина создана");
        this._products = [];
        this._templates = [];
        this._totalPrice = 0;
        this.showBasket();
    };

    sumPrices() {
        this._totalPrice = 0;
        this._products.forEach((item) => {
            this._totalPrice = this._totalPrice + item.price;
        })
        return this._totalPrice;
    };

    renderKorzina() {
        basket._templates.splice(0, basket._templates.length);
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
            let svgDelete = tableRowCell[0].querySelector(".o-icon-x");
            svgDelete.setAttribute("data-id", `${basket._products[i].id}`);
            svgDelete.addEventListener("click", deleteFromBasket);
            tableRowCell[1].setAttribute("style", `background-image: url('${basket._products[i].image}');`);
            tableRowCell[2].innerText = basket._products[i].productname;
            tableRowCell[3].innerText = basket._products[i].price + "$";
            tableRowCell[4].innerText = 1;
            tableRowCell[5].innerText = basket._products[i].price * 1 + "$";
            tableBasket.appendChild(tableRow);
            basket._templates.push(tableRow);
        }
        let totalPrice = document.querySelector("#totalprice");
        totalPrice.innerText = "$" + basket.sumPrices();
        let subTotal = document.querySelector("#subtotal");
        subTotal.innerText = "$" + basket.sumPrices();
    };

};

function deleteFromBasket(e) {
    if (e.target.tagName == "svg") {
        let svgDelete = e.target;
        let id = svgDelete.getAttribute("data-id");
        let index = basket.checkProduct(id);
        basket._products.splice(index, 1);
        basket._templates.splice(index, 1);
        basket.renderKorzina();
        basket.loadBasketToLS();
    }
    else if (e.target.tagName == "use") {
        let svgDelete = e.target.parentNode;      
        let id = svgDelete.getAttribute("data-id");
        let index = basket.checkProduct(id);
        basket._products.splice(index, 1);
        basket._templates.splice(index, 1);
        basket.renderKorzina();
        basket.loadBasketToLS();
    }
    else {
        alert("Ошибка удаления товара");
    }
}

Basket.prototype.addToBasket = function(object) {
    this._products.push(object);
    this.loadBasketToLS();
    console.log("Добавлено в корзину");
};

Basket.prototype.showBasket = function() {
    console.log(this._products);
    console.log(this._templates);
    console.log(this._totalPrice);
};

Basket.prototype.checkProduct = function(id) { // -1 - not contains
    return this._products.findIndex((element)=>{
        if (element.id == id) {
            return true;
        } else {
            return false;
        }
    });
};

Basket.prototype.loadBasketToLS = function() {
    localStorage.removeItem("basket");
    localStorage.setItem("basket", JSON.stringify(this));
};

Basket.prototype.getBasketFromLS = function() {
    let korzina = JSON.parse(localStorage.getItem("basket"));
    this._products = korzina._products;
    this._templates = korzina._templates;
    this._totalPrice = korzina._totalPrice;
    return basket;
};

export const basket = new Basket();