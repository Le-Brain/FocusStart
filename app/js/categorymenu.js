const categories = [
    {
        "category" : "Home Decor",
        "countitems" : 1,
        "articles" : ["Home Decor1", "Home Decor2", "Home Decor3"]
    },
    {
        "category" : "Furniture",
        "countitems" : 2,
        "articles" : ["Furniture1", "Furniture2", "Furniture3"]
    },
    {
        "category" : "Lighting",
        "countitems" : 3,
        "articles" : ["Lighting1", "Lighting2", "Lighting3"]
    },
    {
        "category" : "Home Accents",
        "countitems" : 4,
        "articles" : ["Home Accents1", "Home Accents2", "Home Accents3"]
    },
    {
        "category" : "Rugs",
        "countitems" : 5,
        "articles" : ["Rugs1", "Rugs2", "Rugs3"]
    },
    {
        "category" : "Outdoors",
        "countitems" : 6,
        "articles" : ["Outdoors1", "Outdoors2", "Outdoors3"]
    },
    {
        "category" : "Holidays",
        "countitems" : 7,
        "articles" : ["Holiday1", "Holiday2", "Holiday3"]
    },
    {
        "category" : "Gifts",
        "countitems" : 8,
        "articles" : ["Gifts1", "Gifts2", "Gifts3"]
    },
    {
        "category" : "Events",
        "countitems" : 9,
        "articles" : ["Events1", "Events2", "Events3"]
    }
];

export const displayMenu = function(event) {
    let elementOfEvent = event.currentTarget;
    var objectCategory;
    categories.forEach((elem) => {
        if (elem.category == elementOfEvent.innerHTML) objectCategory = elem;
    })
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/api/categories.json", true);
    xhr.send();
    xhr.onload = function(e) {
        console.log(xhr.responseText);
    }
    let menu = document.getElementsByTagName("template")[0];
    let menuHTML = `<div class="c-menu-dialog" style="display: block;">
    <article class="c-menu-dialog__o-title1">${objectCategory.category}</article>
    <article class="c-menu-dialog__o-title2">Create & live your unique style</article>
    <article class="c-menu-dialog__o-count-items">${objectCategory.countitems} items</article>
    <div class="c-menu-dialog__o-line"></div>
    <div class="c-menu-dialog-container">
        <article class="c-menu-dialog-container__o-title3">${objectCategory.articles[0]}<br>${objectCategory.articles[0]}<br>${objectCategory.articles[0]}<br></article>
        <article class="c-menu-dialog-container__o-title3">${objectCategory.articles[1]}<br>${objectCategory.articles[1]}<br>${objectCategory.articles[1]}<br></article>
        <article class="c-menu-dialog-container__o-title3">${objectCategory.articles[2]}<br>${objectCategory.articles[2]}<br>${objectCategory.articles[2]}<br></article>
    </div>
    </div>`;
    let elem = document.createElement("div");
    elem.innerHTML = menuHTML;
    elementOfEvent.appendChild(elem);
}

export const hideMenu = function(event) {
    let elem = event.currentTarget;
    let child = elem.lastChild;
    elem.removeChild(child);
}