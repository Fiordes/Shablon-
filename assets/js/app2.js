// Variables

const burgerMenu = document.querySelector(".burger__menu");
const toggleBox = document.querySelector(".toggle__box");
const headerBody = document.querySelector(".header__mobile-wraper");

const searchButton = document.querySelector('.toggle__box-search');
const cartButton = document.querySelector('.toggle__box-cart');

const cartBox = document.querySelector('.cart__box');
const searchBox = document.querySelector('.search__box');

const burgerSearch = document.querySelector('.burger__search');


// Open / close mobile menu

burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    toggleBox.classList.toggle("switch");
    headerBody.classList.toggle("open");
    cartBox.classList.remove("visible");

    // Remove visible class from submenu
    subMenus.forEach((menu) => {
        menu.classList.remove("visible");
    });
});











// SUBMENU

const subTriggers = document.querySelectorAll(".have__sub");
const subMenus = document.querySelectorAll(".header__mobile-submenu");
const subMenusLinks = document.querySelectorAll(
    ".header__mobile-submenu .header__mobile-link"
);
const backButtons = document.querySelectorAll(".back");

// Open menu when click on lins with class : "have__sub"

subTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        // trigger.nextElementSibling.classList.toggle('visible');
        trigger.lastChild.previousSibling.classList.toggle("visible");
        // console.log(trigger.lastChild.previousSibling);
    });
    subMenus.forEach((menu) => {
        menu.classList.remove("visible");
    });
});

// Hide menu when click on submenu's link

subMenusLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.stopPropagation();
        headerBody.classList.toggle("open");
        burgerMenu.classList.toggle("active");
        toggleBox.classList.toggle("switch");

        // Remove visible class from submenu
        subMenus.forEach((menu) => {
            menu.classList.remove("visible");
        });
    });
});

// Hide submenu when click on "back" btn

backButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        // btn.parentElement.parentElement.classList.remove("visible");
        btn.closest(".header__mobile-submenu").classList.remove("visible");
        // console.log(btn.closest(".header__mobile-submenu"));
    });
});