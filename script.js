"use strict";

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.addElement = function () {
        if (selector.split("")[0] === ".") {
            let className = selector.split("").splice(1).join("");
            let newDiv = document.createElement("div");
            newDiv.classList.add(className);
            newDiv.setAttribute(
                "style",
                `width: ${width}px; height: ${height}px; position: absolute; background-color: ${bg}; top: 0px; left: 0px;`,
            );
            newDiv.textContent = "Hello world div!";
            document.body.insertBefore(newDiv, null);
        } else if (selector.split("")[0] === "#") {
            let id = selector.split("").splice(1).join("");
            let newP = document.createElement("p");
            newP.setAttribute("id", id);
            newP.setAttribute(
                "style",
                `width: ${width}px; height: ${height}px; position: absolute; background-color: ${bg}; top: 0px; left: 0px`,
            );
            newP.textContent = "Hello world p!";
            document.body.insertBefore(newP, null);
        }
    };
};

document.addEventListener("DOMContentLoaded", () => {
    const element1 = new DomElement(".class", 100, 100, "red");
    element1.addElement();
    document.addEventListener("keydown", (event) => {
        let element = document.querySelector(element1.selector);

        switch (event.code) {
            case "ArrowUp":
                element.style.top = `${parseInt(element.style.top) - 10}px`;
                break;
            case "ArrowDown":
                element.style.top = `${parseInt(element.style.top) + 10}px`;
                break;
            case "ArrowRight":
                element.style.left = `${parseInt(element.style.left) + 10}px`;
                break;
            case "ArrowLeft":
                element.style.left = `${parseInt(element.style.left) - 10}px`;
                break;
        }
    });
});
