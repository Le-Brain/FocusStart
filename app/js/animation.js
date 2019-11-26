export const animationShow = function() {
    let maincontent = document.querySelector(".mainsectioncontent");
    maincontent.removeChild(maincontent.lastChild);
    let animationBlock = document.createElement("div");
    let animationElement = document.createElement("div");
    animationBlock.classList.add("cssload-loader-block");
    animationElement.classList.add("cssload-loader-inner");
    animationBlock.appendChild(animationElement);
    maincontent.appendChild(animationBlock);
}


export const animationHide = function() {
    let maincontent = document.querySelector(".mainsectioncontent");
    maincontent.removeChild(maincontent.querySelector(".cssload-loader-block"));
}