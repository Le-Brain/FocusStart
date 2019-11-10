function changeColor() {
    const elements = document.querySelectorAll("*");
    const red = Math.random()*256;
    const green = Math.random()*256;
    const blue = Math.random()*256;
    const id = Math.random()*elements.length;
    for (let i = 0; i < elements.length; i++) {
        if (id.toFixed() == i) {
            elements[i].setAttribute("style", `background-color: rgb(${red},${green},${blue})`);
        }
    }
}


function resetColor() {
    const elements = document.querySelectorAll("*");
    const id = Math.random()*elements.length;
    for (let i = 0; i < elements.length; i++) {
        if (id.toFixed() == i) {
            elements[i].removeAttribute("style");
        }
    }
}

window.onload = function() {
  console.log("Страница загружена");
  const timerIdFirst = setInterval(changeColor, 200);
  const timerIdSecond = setInterval(resetColor, 200);
};