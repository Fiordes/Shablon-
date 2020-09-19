const burgerMenu = document.querySelector(".burger__menu");
const toggleBox = document.querySelector(".toggle__box");
const headerBody = document.querySelector(".header__mobile-body");
const searchButton = document.querySelector(".toggle__box-search");
const searchBox = document.querySelector(".search__box");
const searchResult = document.querySelector(".search__result");
const burgerSearch = document.querySelector(".burger__search");

const cartButton = document.querySelector(".toggle__box-cart");
const cartBox = document.querySelector(".cart__box");

const subTriggers = document.querySelectorAll(".have__sub");
const subMenus = document.querySelectorAll(".header__mobile-submenu");
const mobileHead = document.querySelector(".header__mobile-head");
const subMenusLinks = document.querySelectorAll(
  ".header__mobile-submenu .header__mobile-link"
);
const backButtons = document.querySelectorAll(".back");

function lockBody() {
  document.body.classList.toggle("locked");
}

// GSAP Functions

// Main Menu
let menuTrigger = new gsap.timeline();
menuTrigger.fromTo(
  headerBody,
  0.2, {
    y: "100%",
    position: "fixed",
  }, {
    y: "-3%",
    position: "relative",
  }
);
menuTrigger.pause();

// Search Box

let searchBoxTrigger = new gsap.timeline();
searchBoxTrigger.fromTo(
  searchBox,
  0.2, {
    x: "120%",
    display: "none",
  }, {
    x: "20%",
    display: "block",
  }
);
searchBoxTrigger.pause();

let searchResultTrigger = new gsap.timeline();
searchResultTrigger.fromTo(
  searchResult,
  0.2, {
    y: "100%",
    display: "none",
  }, {
    y: "12%",
    display: "block",
  }
);
searchResultTrigger.pause();

// Cart Box

let cartBoxTrigger = new gsap.timeline();
cartBoxTrigger.fromTo(
  cartBox,
  0.2, {
    y: "100%",
    display: "none",
  }, {
    y: "12%",
    display: "block",
  }
);
cartBoxTrigger.pause();

// Mobile header Move

let mobileHeaderMove = new gsap.timeline();

mobileHeaderMove.fromTo(
  mobileHead,
  0.2, {
    x: 0,
  }, {
    x: "-80%",
  }
);
mobileHeaderMove.pause();

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
  toggleBox.classList.toggle("switch");
  headerBody.classList.toggle("open");
  cartBox.classList.remove("visible");
  mobileHead.classList.toggle("open");

  // lockBody();
  menuTrigger.play();

  if (!headerBody.classList.contains("open")) {
    menuTrigger.reverse();
  }

  cartBoxTrigger.reverse();

  // Remove visible class from submenu
});

searchButton.addEventListener("click", function (el) {
  el.stopPropagation();
  searchBoxTrigger.play();
  menuTrigger.reverse();
  mobileHeaderMove.play();
  searchResultTrigger.play();

  burgerSearch.classList.toggle("active");
  burgerMenu.classList.remove("active");
  headerBody.classList.remove("open");
});

burgerSearch.addEventListener("click", function () {
  mobileHeaderMove.reverse();
  searchBoxTrigger.reverse();
  searchResultTrigger.reverse();
  toggleBox.classList.toggle("switch");
  burgerSearch.classList.toggle("active");
});

cartButton.addEventListener("click", function (el) {
  el.stopPropagation();
  menuTrigger.reverse();
  headerBody.classList.remove("open");
  cartBox.classList.toggle("open");

  cartBoxTrigger.play();

  if (!cartBox.classList.contains("open")) {
    cartBoxTrigger.reverse();
  }
});

subTriggers.forEach((trigger) => {
  let nextSub = trigger.lastChild.previousSibling;
  let parentDiv = trigger.parentNode;

  trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    nextSub.classList.add("visible");
    gsap.to(nextSub, 0.2, {
      display: "block",
    });

    parentDiv.classList.add("prev");
    gsap.to(parentDiv, 0.2, {
      x: "-112%",
    });
  });
  subMenus.forEach((menu) => {
    menu.classList.remove("visible");
  });
});

subMenusLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.stopPropagation();
    headerBody.classList.toggle("open");
    burgerMenu.classList.toggle("active");
    toggleBox.classList.toggle("switch");
    menuTrigger.reverse();
    // lockBody();
  });
});

backButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    let prevVisibleMenu = btn.closest(".visible");

    let parentDiv = btn.closest(".prev");
    gsap.to(parentDiv, 0.2, {
      x: 0,
    });
    parentDiv.classList.remove("prev");
    prevVisibleMenu.classList.remove("visible");
    gsap.to(prevVisibleMenu, 0.2, {
      display: "none",
    });
    // console.log(prevVisibleMenu);
  });
});