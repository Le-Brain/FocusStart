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


export function render() {
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
};