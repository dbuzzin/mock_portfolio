

/* Open and close nav menu and contact details*/

const getModal = document.querySelector(".modal");
const getContactBox = document.querySelector(".modal__box");
const getMenu = document.querySelector(".modal__menu");
const menuButton = document.querySelector(".navbar__menu-btn");
const contactButton = document.querySelector(".btn-navbar");
const closeButton = document.querySelector(".modal__close");

function open(e) {
    getModal.style.opacity = 1;
    getModal.style.zIndex = 1;

    if(e.target.className === "btn-navbar") {
        getContactBox.style.display = "flex";
    } else if(e.target.className.match((/navbar__menu/g))) {
        getMenu.style.display = "flex";
    }
}

function close() {
    getModal.style.opacity = 0;
    getModal.style.zIndex = -1;
    getContactBox.style.display = "none";
    getMenu.style.display = "none";
}

[menuButton, contactButton].forEach(btn => btn.addEventListener("click", open));

closeButton.addEventListener("click", close);