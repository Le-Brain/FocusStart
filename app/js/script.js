const createElements = function() {
    let List = [];
    let ListOfNumbers = generateRandomNumbers(17,1,17);
    for (let i = 0; i < 3; i++) {
        let firstBlock = document.createElement("div");
        firstBlock.innerHTML = `<div class="l-home-first-type-container__first-block">` +
            `<img src="assets/images/home/home-` + `${ListOfNumbers.shift()}` + `@3x.jpg"` + `width="380" height="278">` +
            '<div class="o-home-title-block">' +
            '<svg class="o-home-icon-arrow"><use xlink:href="#icon-arrow-block-right"></use></svg>' +
            '<article class="o-home-title-first">Supplier’s Name Here</article>' +
            '<article class="o-home-title-second">Product Name Here</article>' +
            '<article class="o-home-title-third">$29,354.75</article>' +
            '</div>' +
            '</div>';
        List.push(firstBlock);
    }
    let secondBlock = document.createElement("div");
    secondBlock.innerHTML = `<div class="l-home-second-type-container__first-block">` +
        `<img src="assets/images/home/home-` + `${ListOfNumbers.shift()}` + `@3x.jpg"` + `width="606" height="444">` +
        '<div class="o-home-title-block" style="width: 606px;">' +
        '<svg class="o-home-icon-arrow"><use xlink:href="#icon-arrow-block-right"></use></svg>' +
        '<article class="o-home-title-first">Supplier’s Name Here</article>' +
        '<article class="o-home-title-second">Product Name Here</article>' +
        '<article class="o-home-title-third">$29,354.75</article>' +
        '</div>' +
        '</div>';
    List.push(secondBlock);
    for (let i = 0; i < 8; i++) {
    let thirdBlock = document.createElement("div");
    thirdBlock.innerHTML = `<div class="l-home-second-type-container__second-block">` +
        `<img src="assets/images/home/home-` + `${ListOfNumbers.shift()}` + `@3x.jpg"` + `width="267" height="196">` +
        '<div class="o-home-title-block">' +
        '<svg class="o-home-icon-arrow"><use xlink:href="#icon-arrow-block-right"></use></svg>' +
        '<article class="o-home-title-first">Supplier’s Name Here</article>' +
        '<article class="o-home-title-second">Product Name Here</article>' +
        '<article class="o-home-title-third">$29,354.75</article>' +
        '</div>' +
        '</div>';
        List.push(thirdBlock);
    }
    secondBlock = document.createElement("div");
    secondBlock.innerHTML = `<div class="l-home-second-type-container__first-block">` +
        `<img src="assets/images/home/home-` + `${ListOfNumbers.shift()}` + `@3x.jpg"` + `width="606" height="444">` +
        '<div class="o-home-title-block" style="width: 606px;">' +
        '<svg class="o-home-icon-arrow"><use xlink:href="#icon-arrow-block-right"></use></svg>' +
        '<article class="o-home-title-first">Supplier’s Name Here</article>' +
        '<article class="o-home-title-second">Product Name Here</article>' +
        '<article class="o-home-title-third">$29,354.75</article>' +
        '</div>' +
        '</div>';
    List.push(secondBlock);
    for (let i = 0; i < 4; i++) {
        thirdBlock = document.createElement("div");
        thirdBlock.innerHTML = `<div class="l-home-second-type-container__second-block">` +
            `<img src="assets/images/home/home-` + `${ListOfNumbers.shift()}` + `@3x.jpg"` + `width="267" height="196">` +
            '<div class="o-home-title-block">' +
            '<svg class="o-home-icon-arrow"><use xlink:href="#icon-arrow-block-right"></use></svg>' +
            '<article class="o-home-title-first">Supplier’s Name Here</article>' +
            '<article class="o-home-title-second">Product Name Here</article>' +
            '<article class="o-home-title-third">$29,354.75</article>' +
            '</div>' +
            '</div>';
        List.push(thirdBlock);
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
    let elementFirstContainer = document.querySelector(".l-home-first-type-container");
    let elementsColumnContainers = document.querySelectorAll(".l-home-column-container");
    let elementsColumnStrings = document.querySelectorAll(".l-home-column-container-string");
    var countOfElements = (Math.random() * 17).toFixed();
    alert(countOfElements);
    if (countOfElements<3) {
        for (let i = 0; i < countOfElements; i++) {
            let block = listOfElements.shift();
            elementFirstContainer.appendChild(block);
        }
    }
    else {
        for (let i = 0; i < 3; i++) {
            let block = listOfElements.shift();
            elementFirstContainer.appendChild(block);
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            let firstChild = elementsColumnContainers[0].firstChild;
            elementsColumnContainers[0].insertBefore(listOfElements.shift(), firstChild);
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[3].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[3].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[4].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[4].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[0].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[0].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[1].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[1].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnContainers[1].insertBefore(listOfElements.shift(), elementsColumnStrings[5]);
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[2].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[2].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[5].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
        if (countOfElements!=0) {
            elementsColumnStrings[5].appendChild(listOfElements.shift());
            countOfElements = countOfElements-1;
        }
    }
}

window.onload = function() {
  console.log("Страница загружена");
  render();
};