let themeFlag = true;
const darkTheme = {
    icon: "./assets/images/icon-moon.svg",
    logo: "./assets/images/logo.svg"
};
const lightTheme = {
    icon: "./assets/images/icon-sun.svg",
    logo: "./assets/images/logo.svg",
};

const _icon = document.getElementById("theme-icon");
const _logo = document.getElementById("logo");
const grid = document.querySelector(".list");

const arrayElements = [
    document.getElementsByClassName("card"),
    document.getElementsByTagName("h2"),
    document.querySelectorAll(".card"),
    document.querySelectorAll("button"),
    document.querySelectorAll(".slider"),
]

const elementList = [
    document.body,
    document.getElementById("theme-btn"),
    document.getElementById("header"),
    document.getElementById("list-name"),
]

function toggleTheme() {
    themeFlag = !themeFlag;
    if (themeFlag == false) {       //light theme
        _icon.setAttribute("src", lightTheme.icon);
        _logo.setAttribute("src", lightTheme.logo);
        elementList.forEach(element => element.classList.add("dark"));
        arrayElements.forEach(element => {
            [...element].forEach(el => el.classList.add("dark"));
        });
    } else {                        //dark theme
        _icon.setAttribute("src", darkTheme.icon);
        _logo.setAttribute("src", darkTheme.logo);
        elementList.forEach(element => element.classList.remove("dark"));
        arrayElements.forEach(element => {
            [...element].forEach(el => el.classList.remove("dark"));
        });
    }
}

function removeExtension(cardId) {
    document.getElementById(cardId).remove();
}

function selectAll() {
    document.querySelector("#all").classList.add("focus");
    [...grid.children].forEach(el => {
        el.style.display = "flex";
    });
}

function selectActive() {
    document.querySelector("#all").classList.remove("all-btn");
    document.querySelector("#active").classList.add("focus");
    [...grid.children].forEach(el => {
        if (el.querySelector("#myToggle").checked) {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    });
}

function selectInactive() {
    document.querySelector("#all").classList.remove("all-btn");
    document.querySelector("#inactive").classList.add("focus");
    [...grid.children].forEach(el => {
        el.style.display = "none";
        if (!el.querySelector("#myToggle").checked) {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    });
}
