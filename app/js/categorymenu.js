const xhr = new XMLHttpRequest();

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
    }
}

export const hideMenu = function(event) {
    let elem = event.currentTarget;
    let value = elem.innerText;
    let child = elem.lastChild;
    elem.removeChild(child);
    if (elem.innerText == "") elem.innerText = value;
}