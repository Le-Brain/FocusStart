import { renderProducts, renderProductsByCategory } from '/js/script.js';
import { XHRwithPromise, HostName } from '/js/utils.js';

const menu_block = document.querySelector(".menublock");
const navArticles = document.querySelectorAll(".l-nav__o-title");

function refreshProducts(event) {
    let article = event.target;
    if (window.location.hash == "#productsCategory") {
        renderProductsByCategory(article); // Render по категории
    }
    else {
        window.location.hash = "#productsCategory";
    }
    let elementLi = article.parentNode.parentNode.parentNode.parentNode.parentNode;
    let value = elementLi.innerText;
    elementLi.removeChild(elementLi.lastChild);
    if (elementLi.innerText == "") elementLi.innerText = value;
}

export const displayMenu = function(event) {
    let elementOfEvent = event.target;
    const categoryString = elementOfEvent.innerText;
    if (elementOfEvent.innerText.length < 20) {
        XHRwithPromise(HostName.concat(`/api/categories/${categoryString}.json`), 'GET').then(function(result) {
            let objectCategory = result;
            let node = document.importNode(menu_block.content, true);
            let category = node.querySelector(".c-menu-dialog__o-title1");
            let countitems = node.querySelector(".c-menu-dialog__o-count-items");
            countitems.innerText = `${objectCategory.countitems}`;
            let titlenames = node.querySelectorAll(".c-menu-dialog-container__o-titlename");
            for(let i=0; i<titlenames.length; i++) {
                titlenames[i].innerText = `${objectCategory.subcategories[i]}`;
                titlenames[i].addEventListener("click", refreshProducts);
            }
            category.innerText = `${objectCategory.category}`;
            let elem = document.createElement("div");
            elem.appendChild(node);
            elementOfEvent.appendChild(elem);
        });
    }
}

export const hideMenu = function(event) {
    let elem = event.currentTarget;
    let value = elem.innerText;
    elem.removeChild(elem.lastChild);
    if (elem.innerText == "") elem.innerText = value;
}

export const removeAllMenu = function(event) {
    navArticles.forEach((item) =>{
        let value = item.innerText;
        item.removeChild(item.lastChild);
        if (item.innerText == "") item.innerText = value;
    })
}