"use strict";

const generateFooter = () => {
  const footer = `
  <footer class="footer">
    <div class="footer__wrapper">
        <div class="footer__logo">
        <img src="./assets/img/footer/logo.svg" alt="Logo" />
        <h4 class="footer__title">
            Адаптивная тема дизайна для Webasyst ShopScript.
        </h4>
        <p class="footer__text">
            Адаптивная тема дизайна для Webasyst ShopScript.
        </p>

        <button href="#" class="btn text-dark border-violet footer__btn">
            Написать нам
        </button>
        </div>
        <div class="footer__nav">
        <ul class="footer__nav-list">
            <h6 class="footer__subtitle">Основное</h6>
            <li class="footer__nav-item"><a href="#">Поддержка</a></li>
            <li class="footer__nav-item"><a href="#">Блог</a></li>
            <li class="footer__nav-item"><a href="#">Сайт</a></li>
            <li class="footer__nav-item"><a href="#">Фотопоток</a></li>
            <li class="footer__nav-item"><a href="#">Магазин</a></li>
        </ul>
        <ul class="footer__nav-list">
            <h6 class="footer__subtitle">Информация</h6>
            <li class="footer__nav-item"><a href="#">Как сделать заказ</a></li>
            <li class="footer__nav-item"><a href="#">Условия доставки</a></li>
            <li class="footer__nav-item"><a href="#">Обмен и возврат</a></li>
            <li class="footer__nav-item">
            <a href="#">Условия использования</a>
            </li>
            <li class="footer__nav-item">
            <a href="#">Как получить скидку</a>
            </li>
        </ul>
        </div>
        <div class="footer__contacts">
        <h6 class="footer__subtitle">Контакты</h6>
        <a class="footer__phone" href="tel:+080095690099">0 800 956 900 99</a>
        <a class="footer__phone" href="tel:+080086590066">0 800 865 900 66</a>
        <div class="footer__address">
            <span>Пн, Вт, Чт, Пт <br />
            9:30—23:00
            </span>
            <span>Новопаствинск ул.Мира 96</span>
        </div>
        </div>
    </div>
    <div class="footer__social">
        <h6 class="footer__subtitle">Социальные сети</h6>
        <ul class="footer__social-list">
        <li class="footer__social-item">
            <a href=""><img src="./assets/img/footer/social/twitter.svg" alt="Twitter" /></a>
        </li>
        <li class="footer__social-item">
            <a href=""><img src="./assets/img/footer/social/facebook.svg" alt="Facebook" /></a>
        </li>
        <li class="footer__social-item">
            <a href=""><img src="./assets/img/footer/social/instagram.svg" alt="Instagram" /></a>
        </li>
        <li class="footer__social-item">
            <a href=""><img src="./assets/img/footer/social/youtube.svg" alt="YouTube" /></a>
        </li>
        <li class="footer__social-item">
            <a href=""><img src="./assets/img/footer/social/telega.svg" alt="Telegram" /></a>
        </li>
        <li class="footer__social-item">
            <a href=""><img src="./assets/img/footer/social/messenger.svg" alt="Messenger" /></a>
        </li>
        <li class="footer__social-item">
            <a href=""><img src="./assets/img/footer/social/whatsapp.svg" alt="Whatsapp" /></a>
        </li>
        <li class="footer__social-item">
            <a href=""><img src="./assets/img/footer/social/skype.svg" alt="Skype" /></a>
        </li>
        </ul>
    </div>
    <div class="footer__rights">
        <p>
        © 2017 - 2020 Epika 2.0 Все права защищены
        <a href="#">Условия использования</a>
        </p>
        <ul class="footer__colourpicker">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
    </div>
    </footer>
    `;

  document.querySelector("main").insertAdjacentHTML("afterend", footer);
};

generateFooter();
