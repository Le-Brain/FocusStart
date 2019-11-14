function createObject(container, imageNumber, width, height) {
    var objectElement = {
        "container" : container,
        "image" : imageNumber,
        "width" : width,
        "height" : height,
        "description" : "Supplier’s Name Here",
        "productname" : "Product Name Here",
        "price" : "$29,354.75"
    };
    return objectElement;
}

const createElements = function() {
    let List = [];
    let ListOfNumbers = generateRandomNumbers(17,1,17);
    var object;
    for (let i = 0; i < 3; i++) {
        object = createObject("l-home-first-type-container__first-block", ListOfNumbers.shift(), 380, 278);
        List.push(object);
    }
    object = createObject("l-home-second-type-container__first-block", ListOfNumbers.shift(), 606, 444);
    List.push(object);
    for (let i = 0; i < 8; i++) {
        object = createObject("l-home-second-type-container__second-block", ListOfNumbers.shift(), 267, 196);
        List.push(object);
    }
    object = createObject("l-home-second-type-container__first-block", ListOfNumbers.shift(), 606, 444);
    List.push(object);
    for (let i = 0; i < 4; i++) {
        object = createObject("l-home-second-type-container__second-block", ListOfNumbers.shift(), 267, 196);
        List.push(object);
    }
    return List;
}

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


function render() {
    let listOfElements = createElements();
    let listOfTags = [];
    let elementFirstContainer = document.querySelector(".l-home-first-type-container");
    let elementsColumnContainers = document.querySelectorAll(".l-home-column-container");
    let elementsColumnStrings = document.querySelectorAll(".l-home-column-container-string");
    var countOfElements = (Math.random() * 17).toFixed();
    alert(countOfElements);
    listOfElements.forEach((item) => {
        let element = document.createElement("div");
        element.innerHTML = `<div class="${item.container}">
             <img src="assets/images/home/home-${item.image}@3x.jpg" width="${item.width}" height="${item.height}">
                <div class="o-home-title-block" style="width: ${item.width}px;">
                <svg class="o-home-icon-arrow"><use xlink:href="#icon-arrow-block-right"></use></svg>
                <article class="o-home-title-first">${item.description}</article>
                <article class="o-home-title-second">${item.productname}</article>
                <article class="o-home-title-third">${item.price}</article>
            </div>
        </div>`;
        listOfTags.push(element);
    })
    if (countOfElements<3) {
        for (let i = 0; i < countOfElements; i++) {
            let block = listOfTags.shift();
            elementFirstContainer.appendChild(block);
        }
    }
    else {
        for (let i = 0; i < 3; i++) {
            let block = listOfTags.shift();
            elementFirstContainer.appendChild(block);
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            let firstChild = elementsColumnContainers[0].firstChild;
            elementsColumnContainers[0].insertBefore(listOfTags.shift(), firstChild);
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[3].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[3].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[4].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[4].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[0].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[0].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[1].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[1].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnContainers[1].insertBefore(listOfTags.shift(), elementsColumnStrings[5]);
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[2].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[2].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[5].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[5].appendChild(listOfTags.shift());
            countOfElements = countOfElements-1;
        }
    }
}

var categories = [
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

const displayMenu = function(event) {
    let elementOfEvent = event.currentTarget;
    var objectCategory;
    categories.forEach((elem) => {
        if (elem.category == elementOfEvent.innerHTML) objectCategory = elem;
    })
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

const hideMenu = function(event) {
    let elem = event.currentTarget;
    let child = elem.lastChild;
    elem.removeChild(child);
}

window.onload = function() {
  console.log("Страница загружена");
  render();
  const navArticles = document.querySelectorAll(".l-nav__o-title");
  navArticles.forEach((elem) => {
    elem.addEventListener("mouseenter", displayMenu);
    elem.addEventListener("mouseleave", hideMenu);
  });
};