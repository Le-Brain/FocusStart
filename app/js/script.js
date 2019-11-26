import { basket } from '/js/classbasket.js'
import { XHRwithPromise, HostName } from '/js/utils.js';

const mainsection = document.querySelector(".maincont"); // Template main page
const mainsectionCategoryPage = document.querySelector(".contentofcategory"); // Template category page
const categoryPageProduct = document.querySelector(".itemofcategorycontent");
export var products;
var listOfElements = [];

function inArray(arr, num){
    for (let item of arr) {
        if (num == item) return true;
    };
    return false;
}

function generateRandomNumbers(randLength, min, max) {
    var randArray = [], i = 0;
    if (randLength>(max-min+1)) {
        return null;
    }
    while (i < randLength) {
        var rand = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!(inArray(randArray,rand))) {
            i=i+1;
            randArray.unshift(rand);
        }
    };
    return randArray;
}

export function renderProducts() { 
    window.location.hash = "#products";
    basket.renderSmallKorzina();
    let maincontentTemplate = document.importNode(mainsection.content, true);
    let maincontent = document.querySelector(".mainsectioncontent");
    maincontent.removeChild(maincontent.lastChild);
    let section = maincontentTemplate.querySelector(".l-home-main");
    maincontent.appendChild(section);
    var elementFirstContainer = maincontent.querySelector(".l-home-first-type-container");
    var elementsColumnContainers = maincontent.querySelectorAll(".l-home-column-container");
    var elementsColumnStrings = maincontent.querySelectorAll(".l-home-column-container-string");
    var countOfElements = 17;
    var numberCategory = Math.floor(Math.random()*2)+1;
    XHRwithPromise(HostName.concat(`/api/products/objects${numberCategory}.json`), 'GET').then(function(result) {
        products = result;
        for (let i=0; i<countOfElements; i++) {
            let elementHTML = `<div class="${products[i].container}">
            <img src=${products[i].image} width="${products[i].width}" height="${products[i].height}">
            <div class="o-home-title-block" style="width: ${products[i].width}px;">
            <svg class="o-home-icon-arrow"><use xlink:href="#icon-arrow-block-right"></use></svg>
            <article class="o-home-title-first">${products[i].description}</article>
            <article class="o-home-title-second">${products[i].productname}</article>
            <article class="o-home-title-third">$${products[i].price}</article>
            </div>
            </div>`;
            let elem = document.createElement("div");
            elem.innerHTML = elementHTML;
            let svgIconArrow = elem.querySelector(".o-home-icon-arrow");
            svgIconArrow.setAttribute("data-id", `${products[i].id}`);
            svgIconArrow.addEventListener("click", addProductToBasket);
            listOfElements.push(elem);
        }
            for (let i = 0; i < 3; i++) {
                elementFirstContainer.appendChild(listOfElements.shift());
            }
            let firstChild = elementsColumnContainers[0].firstChild;
            elementsColumnContainers[0].insertBefore(listOfElements.shift(), firstChild);
            elementsColumnStrings[3].appendChild(listOfElements.shift());
            elementsColumnStrings[3].appendChild(listOfElements.shift());
            elementsColumnStrings[4].appendChild(listOfElements.shift());
            elementsColumnStrings[4].appendChild(listOfElements.shift());
            elementsColumnStrings[0].appendChild(listOfElements.shift());
            elementsColumnStrings[0].appendChild(listOfElements.shift());
            elementsColumnStrings[1].appendChild(listOfElements.shift());
            elementsColumnStrings[1].appendChild(listOfElements.shift());
            elementsColumnContainers[1].insertBefore(listOfElements.shift(), elementsColumnStrings[5]);
            elementsColumnStrings[2].appendChild(listOfElements.shift());;
            elementsColumnStrings[2].appendChild(listOfElements.shift());
            elementsColumnStrings[5].appendChild(listOfElements.shift());
            elementsColumnStrings[5].appendChild(listOfElements.shift()); 
      });
};

export function renderProductsByCategory(categoryString) { // CategoryString - render страницы по категории. Не используется, т.к всего 2 json'а объектов. Выбирается один рандомно
    window.location.hash = "#productsCategory";
    basket.renderSmallKorzina();
    let contentTemplate = document.importNode(mainsectionCategoryPage.content, true);
    let maincontent = document.querySelector(".mainsectioncontent");
    maincontent.removeChild(maincontent.lastChild);
    let section = contentTemplate.querySelector(".l-home-main");
    maincontent.appendChild(section);
    let containers = section.querySelectorAll(".l-home-first-type-container");
    var countOfElements = 17;
    var numberCategory = Math.floor(Math.random()*2)+1;
    XHRwithPromise(HostName.concat(`/api/products/objects${numberCategory}.json`), 'GET').then(function(result) {
        products = result;
        for (let i=0, j=0; i<countOfElements; i++) {
            if (i==4 || i==8 || i==12 || i==16 || i==20 ) j=j+1;
            let productTemplate = document.importNode(categoryPageProduct.content, true);
            let itemProduct = productTemplate.querySelector(".l-home-second-type-container__second-block");
            let imageOfProduct = itemProduct.querySelector("img");
            let descriptionProduct = itemProduct.querySelector(".o-home-title-first");
            let productName = itemProduct.querySelector(".o-home-title-second");
            let priceProduct = itemProduct.querySelector(".o-home-title-third");
            imageOfProduct.setAttribute("src", `${products[i].image}`);
            descriptionProduct.innerText = products[i].description;
            productName.innerText = products[i].productname;
            priceProduct.innerText = String(products[i].price).concat(" $");
            let svgIconArrow = itemProduct.querySelector(".o-home-icon-arrow");
            svgIconArrow.setAttribute("data-id", `${products[i].id}`);
            svgIconArrow.addEventListener("click", addProductToBasket);
            containers[j].appendChild(itemProduct);
        }
    });
};

function addProductToBasket(event) {
    let objectEvent = event.target;
    if (event.target.tagName == "svg") {
        let id = objectEvent.getAttribute("data-id");
        let product = getProduct(id);
        if (basket.checkProduct(product.id) == -1) { 
            basket.addToBasket(product);
            document.querySelector(".l-header__circle-2").innerText = basket.sumCount();
            document.querySelector(".l-header_o-total-price-article").innerText = basket.sumPrices() + " $";
            alert("Товар был добавлен в корзину");
        } else {
            alert("Товар уже в корзине");
        }; 
    }
    else if (event.target.tagName == "use") {
        let parent = objectEvent.parentNode;
        let id = parent.getAttribute("data-id");
        let product = getProduct(id);
        if (basket.checkProduct(product.id) == -1) { 
            basket.addToBasket(product);
            document.querySelector(".l-header__circle-2").innerText = basket.sumCount();
            document.querySelector(".l-header_o-total-price-article").innerText = basket.sumPrices() + " $";
            alert("Товар был добавлен в корзину");
        }
        else {
            alert("Товар уже в корзине");
        } 
    }
    else {
        alert("Ошибка добавления товара в корзину");
    }
}

function getProduct(id) {
    for(let i=0; i<products.length; i++) {
        if (products[i].id==id) return products[i];
    }
}