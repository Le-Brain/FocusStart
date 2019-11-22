import { basket } from '/js/classbasket.js'

const xhr = new XMLHttpRequest();
const mainsection = document.querySelector(".maincont");
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
    listOfElements = [];
    let ListOfNumbers = generateRandomNumbers(17,1,17);
    let maincontentTemplate = document.importNode(mainsection.content, true);
    let maincontent = document.querySelector(".mainsectioncontent");
    maincontent.removeChild(maincontent.lastChild);
    let section = maincontentTemplate.querySelector(".l-home-main");
    maincontent.appendChild(section);
    var elementFirstContainer = maincontent.querySelector(".l-home-first-type-container");
    var elementsColumnContainers = maincontent.querySelectorAll(".l-home-column-container");
    var elementsColumnStrings = maincontent.querySelectorAll(".l-home-column-container-string");
    var countOfElements = 17;
    xhr.open("GET", `http://localhost:3000/api/objects.json`, true);
    xhr.error = function(e) {
        console.log(xhr.readyState);
    }
    xhr.send();
    xhr.onload = function(e) {
        products = JSON.parse(xhr.responseText);
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
            listOfElements.push(elem);
        }
        if (countOfElements<3) {
            for (let i = 0; i < countOfElements; i++) {
                let element = listOfElements.shift();
                elementFirstContainer.appendChild(element);
                listOfElements.push(element);
            }
        }
        else {
            for (let i = 0; i < 3; i++) {
                let element = listOfElements.shift();
                elementFirstContainer.appendChild(element);
                countOfElements = countOfElements-1;
                listOfElements.push(element);
            }
            if (countOfElements!=0) {
                let firstChild = elementsColumnContainers[0].firstChild;
                let element = listOfElements.shift();
                elementsColumnContainers[0].insertBefore(element, firstChild);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[3].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[3].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[4].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[4].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[0].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[0].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[1].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[1].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnContainers[1].insertBefore(element, elementsColumnStrings[5]);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[2].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[2].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[5].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
            if (countOfElements!=0) {
                let element = listOfElements.shift();
                elementsColumnStrings[5].appendChild(element);
                listOfElements.push(element);
                countOfElements = countOfElements-1;
            }
        }
        listOfElements.forEach((item) => {
            let svgIconTagUse = item.querySelector(".o-home-icon-arrow");
            svgIconTagUse.addEventListener("click", addProductToBasket);
        })      
    }
};

function addProductToBasket(event) {
    let objectEvent = event.target;
    if (event.target.tagName == "svg") {
        let parent = objectEvent.parentNode.parentNode.parentNode;
        let index = listOfElements.indexOf(parent);
        if (basket.checkProduct(products[index].id) == -1) { 
            basket.addToBasket(products[index]);
            alert("Товар был добавлен в корзину");
        } else {
            alert("Товар уже был добавлен в корзину");
        }; 
    }
    else if (event.target.tagName == "use") {
        let parent = objectEvent.parentNode.parentNode.parentNode.parentNode;
        let index = listOfElements.indexOf(parent);
        if (basket.checkProduct(products[index].id) == -1) { 
            basket.addToBasket(products[index]);
            alert("Товар был добавлен в корзину");
        }
        else {
            alert("Товар уже был добавлен в корзину");
        } 
    }
    else {
        alert("Ошибка добавления товара в корзину");
    }
}