export const animationShow = function() {
    let maincontent = document.querySelector(".mainsectioncontent");
    maincontent.removeChild(maincontent.lastChild);
    let animationBlock = document.createElement("div");
    let animationElement = document.createElement("div");
    animationBlock.classList.add("loader-wrapper");
    animationElement.classList.add("loader");
    animationBlock.appendChild(animationElement);
    maincontent.appendChild(animationBlock);
}


export const animationHide = function() {
    let maincontent = document.querySelector(".mainsectioncontent");
    maincontent.removeChild(maincontent.querySelector(".loader-wrapper"));
}