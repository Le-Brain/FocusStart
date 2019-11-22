import { renderProducts } from '/js/script.js';

const xhr = new XMLHttpRequest();
const menu_block = document.querySelector(".menublock");

function refreshProducts(event) {
    let article = event.target;
    let elementLi = article.parentNode.parentNode.parentNode.parentNode.parentNode;
    let value = elementLi.innerText;
    elementLi.removeChild(elementLi.lastChild);
    if (elementLi.innerText == "") elementLi.innerText = value;
    renderProducts();
}

export const displayMenu = function(event) {
    let elementOfEvent = event.target;
    const categoryString = elementOfEvent.innerText;
    if (elementOfEvent.innerText.length < 20) {
    xhr.open("GET", `http://localhost:3000/api/${categoryString}.json`, true);
    xhr.error = function(e) {
        console.log(xhr.readyState);
    }
    xhr.send();
    xhr.onload = function(e) {
        let objectCategory = JSON.parse(xhr.responseText);
        let node = document.importNode(menu_block.content, true);
        let category = node.querySelector(".c-menu-dialog__o-title1");
        let countitems = node.querySelector(".c-menu-dialog__o-count-items");
        countitems.innerText = `${objectCategory.countitems}`;
        let titlenames = node.querySelectorAll(".c-menu-dialog-container__o-titlename");
        titlenames.forEach((item) => {
            item.innerText = `${objectCategory.articles[0]}`;
            item.addEventListener("click", refreshProducts);
        })
        category.innerText = `${objectCategory.category}`;
        let elem = document.createElement("div");
        elem.appendChild(node);
        elementOfEvent.appendChild(elem);
        }
    }
}

export const hideMenu = function(event) {
    let elem = event.currentTarget;
    let value = elem.innerText;
    let child = elem.lastChild;
    elem.removeChild(child);
    if (elem.innerText == "") elem.innerText = value;
}