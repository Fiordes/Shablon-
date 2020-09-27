const burgerMenu = document.querySelector(".burger__menu");
const toggleBox = document.querySelector(".toggle__box");
const headerBody = document.querySelector(".header__mobile-body");


const searchWideButton = document.querySelector('.header__wide-search')
const searchButton = document.querySelector(".toggle__box-search");
const searchBox = document.querySelector(".search__box");
const searchResult = document.querySelector(".search__result");
const burgerSearch = document.querySelector(".burger__search");

const cartButton = document.querySelector(".toggle__box-cart");
const cartWideButton = document.querySelector(".header__wide-cart");
const cartBox = document.querySelector(".cart__box");

const brandButton = document.querySelector(".brands__trigger");
const brandBox = document.querySelector(".brands__box");

const subTriggers = document.querySelectorAll(".have__sub");
const subMenus = document.querySelectorAll(".header__mobile-submenu");
const mobileHead = document.querySelector(".header__mobile-head");
const subMenusLinks = document.querySelectorAll(
  ".header__mobile-submenu .header__mobile-link"
);

const headSearchInput = document.querySelector("#search");

// Dark theme
const darkThemeTrigger = document.querySelector(".header__mobile-theme");
const darkThemeTriggerLink = document.querySelector(".header__mobile-theme a");

function changeTheme() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    darkThemeTriggerLink.innerHTML = ` <a href="#">
                                          <img src="./assets/img/mobile-nav/night.svg" alt="sun" />
                                          Ночь
                                        </a>`;
  } else {
    darkThemeTriggerLink.innerHTML = ` <a href="#">
                                          <img src="./assets/img/mobile-nav/sun.svg" alt="sun" />
                                          День
                                        </a>`;
  }
}

darkThemeTrigger.addEventListener("click", (e) => {
  e.preventDefault();
  changeTheme();
});

// FILTER INPUTS

const filterInputs = document.querySelectorAll(".filter__box input");

filterInputs.forEach((input) => {
  let label = input.parentNode;
  input.addEventListener("click", function () {
    label.classList.toggle("disabled");
  });
});

// FILTER ACCORDEON

const accordeonTrigger = document.querySelectorAll(".acordeon-trigger");
const accordeonBody = document.querySelectorAll(".acordeon-body");

accordeonTrigger.forEach((trigger) => {
  let nextBlock = trigger.nextElementSibling;
  trigger.classList.remove("sm");
  // accordeonBody.forEach(body => body.classList.remove('open'))

  trigger.addEventListener("click", function () {
    accordeonBody.forEach((body) => body.classList.remove("open"));

    trigger.classList.toggle("sm");
    nextBlock.classList.toggle("open");
  });
});

const backButtons = document.querySelectorAll(".back");

function lockBody() {
  document.body.classList.toggle("locked");
}

// GSAP Functions

// Main Menu
let menuTrigger = new gsap.timeline({
  defaults: {
    // ease: 'power1.out'
  }
});
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
    x: "22%",
    display: "block",
  }
);

searchBoxTrigger.pause();
// check window size



let searchResultTrigger = new gsap.timeline();
searchResultTrigger.fromTo(
  searchResult,
  0.2, {
    y: "100%",
    display: "none",
  }, {
    // y: percentage,
    y: () => {
      let percentage = '';
      if (window.innerWidth < 1024) {
        percentage = "16%"
      } else {
        percentage = '8%'
      }
      return percentage
    },

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
    y: "5%",
    display: "grid",
  }
);
cartBoxTrigger.pause();

// Brands box
let brandsBoxTrigger = new gsap.timeline();
brandsBoxTrigger.fromTo(
  brandBox,
  0.2, {
    y: "80%",
    display: "none",
  }, {
    y: "15%",
    display: "block",
  }
);
brandsBoxTrigger.pause();

// Mobile header Move

let mobileHeaderMove = new gsap.timeline();

mobileHeaderMove.fromTo(
  mobileHead,
  0.2, {
    x: 0,
  }, {
    x: "-78%",
  }, "-=2"
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

  searchButton.style.pointerEvents = 'none';

  burgerSearch.classList.toggle("active");
  burgerMenu.classList.remove("active");
  headerBody.classList.remove("open");
});

searchWideButton.addEventListener("click", function (el) {
  el.stopPropagation();
  // searchBoxTrigger.play();
  menuTrigger.reverse();
  // mobileHeaderMove.play();
  searchResultTrigger.play();

  burgerSearch.classList.toggle("active");
  burgerMenu.classList.remove("active");
  headerBody.classList.remove("open");
});

burgerSearch.addEventListener("click", function () {
  searchButton.style.pointerEvents = 'all';

  mobileHeaderMove.reverse();
  searchBoxTrigger.reverse();
  searchResultTrigger.reverse();
  toggleBox.classList.toggle("switch");
  burgerSearch.classList.toggle("active");
  brandsBoxTrigger.reverse();
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

cartWideButton.addEventListener("click", function (el) {
  el.stopPropagation();
  cartBoxTrigger.play();
});

if (brandButton) {
  brandButton.addEventListener("click", function (el) {
    el.stopPropagation();
    brandsBoxTrigger.play();
    mobileHeaderMove.play();
    searchBoxTrigger.play();
    menuTrigger.reverse();

    // let elPlaceholder = brandButton.dataset.placeholder;
    // let inputPlaceholder = headSearchInput.dataset.placeholder;

    // if (inputPlaceholder === elPlaceholder) {
    //   headSearchInput.placeholder = inputPlaceholder

    // } else {
    //   headSearchInput.placeholder = elPlaceholder;
    // }

    burgerSearch.classList.toggle("active");
    burgerMenu.classList.remove("active");
    headerBody.classList.remove("open");
  });
}

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

const categoryMenu = document.querySelectorAll(".have__dropdown");
const categoryDropdown = document.querySelectorAll(
  ".categories__menu-dropdown"
);
const categoryTotalItem = document.querySelector(".categories__total");

if (categoryTotalItem) {
  categoryTotalItem.addEventListener("click", () => {
    categoryTotalItem.nextElementSibling.classList.toggle("open");
  });
}
categoryMenu.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    categoryDropdown.forEach((dropdown) => {
      dropdown.classList.remove("open");
    });

    // if (item.classList.contains('rotate')) {
    //   item.classList.remove('rotate')
    // } else {
    //   item.classList.add('rotate')

    // }

    let closeUl = item.lastElementChild;

    if (closeUl.classList.contains("categories__menu-dropdown")) {
      closeUl.classList.toggle("open");
    }
  });
});

// Tabs in cart

const newTab = document.querySelector(".tab__new");
const newTabTrigger = document.querySelector("#new-tab-trigger");

const authTab = document.querySelector(".tab__auth");
const authTabTrigger = document.querySelector("#auth-tab-trigger");

let newTabSwitch = new gsap.timeline();

newTabSwitch.fromTo(
  newTab,
  0.2, {
    x: 0,
    opacity: 1,
    // display: 'block'
  }, {
    x: "-100%",
    opacity: 0,
    // display: 'none'
  }
);
newTabSwitch.pause();

let authTabSwitch = new gsap.timeline();

authTabSwitch.fromTo(
  authTab,
  0.2, {
    x: 0,
    opacity: 0,
    // display: 'none'
  }, {
    x: "-100%",
    opacity: 1,
    // display: 'block'
  }
);
authTabSwitch.pause();

if (newTab) {
  newTabTrigger.addEventListener("click", function (e) {
    newTabTrigger.classList.add("current");
    authTabTrigger.classList.remove("current");
    e.preventDefault();
    newTabSwitch.reverse();
    authTabSwitch.reverse();
  });

  authTabTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    newTabTrigger.classList.remove("current");
    authTabTrigger.classList.add("current");
    newTabSwitch.play();
    authTabSwitch.play();
  });
}