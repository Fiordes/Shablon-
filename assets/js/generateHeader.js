"use strict"


const generateHeader = () => {
    const header = `
      
  <header class="header">
  <nav class="header__mobile-nav">
    <div class="header__mobile-head">
      <div class="burger__menu">
        <span></span>
      </div>
      <div class="logo">
        <a href="#">
          <img src="./assets/img/mobile-nav/logo.png" alt="" />
        </a>
      </div>
      <div class="toggle__box">
        <a class="toggle__box-cart" href="#"><img src="./assets/img/mobile-nav/shopping-cart.svg" alt="" /></a>

        <a class="toggle__box-search" href="#"><img src="./assets/img/mobile-nav/search.svg" alt="" /></a>
      </div>
    </div>

    <div class="header__mobile-body">
      <ul class="header__mobile-list first__list">
        <h4 class="header__mobile-subtitle">Ассортимент</h4>

        <li class="header__mobile-item have__sub">
          <img src="./assets/img/mobile-nav/router.svg" alt="" />
          <a href="#" class="header__mobile-link trigger">Портативная Аккустика</a>
          <div class="header__mobile-submenu">
            <ul class="header__mobile-list">
              <h4>Портативная Аккустика</h4>

              <li class="header__mobile-item back">
                <img src="./assets/img/mobile-nav/arrow-left.svg" alt="" />
                назад
              </li>

              <li class="header__mobile-item have__sub">
                <a class="trigger" href="#">Bang & Olufsen</a>
                <div class="header__mobile-submenu">
                  <h4>Bang & Olufsen</h4>
                  <ul class="header__mobile-list">
                    <li class="header__mobile-item back">
                      <img src="./assets/img/mobile-nav/arrow-left.svg" alt="" />
                      назад
                    </li>

                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">Bang & Olufsen</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">JBL</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">Panasonic</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">SONLY</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">WOOM</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="header__mobile-item have__sub">
                <a class="trigger" href="#">JBL</a>
                <div class="header__mobile-submenu">
                  <h4>JBL</h4>
                  <ul class="header__mobile-list">
                    <li class="header__mobile-item back">
                      <img src="./assets/img/mobile-nav/arrow-left.svg" alt="" />
                      назад
                    </li>

                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">Bang & Olufsen</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">JBL</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">Panasonic</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">SONLY</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">WOOM</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="header__mobile-item have__sub">
                <a class="trigger" href="#">Panasonic</a>
                <div class="header__mobile-submenu">
                  <h4>Panasonic</h4>
                  <ul class="header__mobile-list">
                    <li class="header__mobile-item back">
                      <img src="./assets/img/mobile-nav/arrow-left.svg" alt="" />
                      назад
                    </li>

                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">Bang & Olufsen</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">JBL</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">Panasonic</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">SONLY</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">WOOM</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="header__mobile-item have__sub">
                <a class="trigger" href="#">SONLY</a>
                <div class="header__mobile-submenu">
                  <h4>SONLY</h4>
                  <ul class="header__mobile-list">
                    <li class="header__mobile-item back">
                      <img src="./assets/img/mobile-nav/arrow-left.svg" alt="" />
                      назад
                    </li>

                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">Bang & Olufsen</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">JBL</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">Panasonic</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">SONLY</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">WOOM</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="header__mobile-item have__sub">
                <a class="trigger" href="#">WOOM</a>
                <div class="header__mobile-submenu">
                  <h4>WOOM</h4>
                  <ul class="header__mobile-list">
                    <li class="header__mobile-item back">
                      <img src="./assets/img/mobile-nav/arrow-left.svg" alt="" />
                      назад
                    </li>

                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">Bang & Olufsen</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">JBL</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">Panasonic</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">SONLY</a>
                    </li>
                    <li class="header__mobile-item">
                      <a href="#" class="header__mobile-link">WOOM</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="header__mobile-item have__sub sale">
          <img src="./assets/img/mobile-nav/headphones.svg" alt="" />
          <a href="#" class="header__mobile-link trigger">Наушники
            <span class="badge badge__sale">РАСПРОДАЖА</span>
          </a>
          <div class="header__mobile-submenu">
            <h4>Наушники</h4>
            <ul class="header__mobile-list">
              <li class="header__mobile-item back">
                <img src="./assets/img/mobile-nav/arrow-left.svg" alt="" />
                назад
              </li>

              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">Bang & Olufsen</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">JBL</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">Panasonic</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">SONLY</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">WOOM</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="header__mobile-item have__sub">
          <img src="./assets/img/mobile-nav/laptop.svg" alt="" />
          <a href="#" class="header__mobile-link trigger">Ноутбуки</a>
          <div class="header__mobile-submenu">
            <h4>Ноутбуки</h4>
            <ul class="header__mobile-list">
              <li class="header__mobile-item back">
                <img src="./assets/img/mobile-nav/arrow-left.svg" alt="" />
                назад
              </li>

              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">Bang & Olufsen</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">JBL</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">Panasonic</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">SONLY</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">WOOM</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="header__mobile-item have__sub">
          <img src="./assets/img/mobile-nav/mobile.svg" alt="" />
          <a href="#" class="header__mobile-link trigger">Мобильные технологии</a>
          <div class="header__mobile-submenu">
            <h4>Мобильные технологии</h4>
            <ul class="header__mobile-list">
              <li class="header__mobile-item back">
                <img src="./assets/img/mobile-nav/arrow-left.svg" alt="" />
                назад
              </li>

              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">Bang & Olufsen</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">JBL</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">Panasonic</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">SONLY</a>
              </li>
              <li class="header__mobile-item">
                <a href="#" class="header__mobile-link">WOOM</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="header__mobile-item brands__trigger" data-placeholder='введите название бренда'>
          <img src="./assets/img/mobile-nav/star.svg" alt="" />
          <a href="#" class="header__mobile-link">Бренды</a>

        </li>
      </ul>

      <h4 class="header__mobile-subtitle">Доп-информация</h4>
      <ul class="header__mobile-list more__list">
        <li class="header__mobile-item">
          <a href="#" class="header__mobile-link">
            Тема дизайна для ShopScript
          </a>
          <img src="./assets/img/mobile-nav/more-horizontal.svg" alt="">

        </li>
        <li class="header__mobile-item">
          <a href="#" class="header__mobile-link"> Установка темы </a>
          <img src="./assets/img/mobile-nav/more-horizontal.svg" alt="">
        </li>
        <li class="header__mobile-item">
          <a href="#" class="header__mobile-link"> Типографика </a>
          <img src="./assets/img/mobile-nav/more-horizontal.svg" alt="">

        </li>
        <li class="header__mobile-item">
          <a href="#" class="header__mobile-link"> Контракт </a>
          <img src="./assets/img/mobile-nav/more-horizontal.svg" alt="">

        </li>
      </ul>

      <ul class="header__mobile-btns">
        <li><a href="#">поддержка</a></li>
        <li class="current"><a href="#">магазин</a></li>
        <li><a href="#">сайт</a></li>
        <li><a href="#">фото</a></li>
      </ul>

      <div class="header__mobile-user">
        <img src="./assets/img/user/1.png" alt="" class="user__icon" />
        <h6 class="user__name">Дональд Мамп</h6>
        <a href="#" class="user__logout">
          <img src="./assets/img/user/logout.svg" alt="" />
        </a>
      </div>
      <ul class="header__mobile-list more__list">
        <li class="header__mobile-item">
          <a href="#" class="header__mobile-link"> Мои заказы </a>
          <img src="./assets/img/mobile-nav/more-horizontal.svg" alt="">

        </li>
        <li class="header__mobile-item">
          <a href="#" class="header__mobile-link">
            Прогирамма лояльности
          </a>
          <img src="./assets/img/mobile-nav/more-horizontal.svg" alt="">

        </li>
        <li class="header__mobile-item">
          <a href="#" class="header__mobile-link"> Мой профиль </a>
          <img src="./assets/img/mobile-nav/more-horizontal.svg" alt="">

        </li>
      </ul>
      <div class="header__mobile-theme">
        <p>Режим</p>
        <a href="#">
          <img src="./assets/img/mobile-nav/sun.svg" alt="sun" />
          День
        </a>
      </div>
    </div>
  </nav>

  <div class="header__wide">
    <div class="header__wide-head">
      <ul class="header__wide-submenu">
        <li class="submenu-item active"><a href="#">Магазин</a></li>
        <li class="submenu-item"><a href="#">Об Epika 2.0</a></li>
        <li class="submenu-item"><a href="#">Сапорт</a></li>
        <li class="submenu-item"><a href="#">Блог</a></li>
        <li class="submenu-item"><a href="#">Фото</a></li>
      </ul>
      <ul class="header__wide-links">
        <li class="header__wide-compare">
          <a href="#">
            <img src="./assets/img/wide-nav/loop.svg" alt="" />
            Сравнить товары
          </a>
        </li>
        <li class="header__wide-auth">
          <a href="#">
            <img src="./assets/img/wide-nav/user-circle.svg" alt="" />
            Авторизация
          </a>
        </li>
      </ul>
    </div>
    <div class="header__wide-body">
      <div class="header__wide-logo">
        <img src="./assets/img/wide-nav/logo.svg" alt="Logo" />
      </div>
      <ul class="header__wide-menu">
        <li class="header__wide-item active">
          <a href="#" class="menu-link">Каталог товаров</a>
        </li>
        <li class="header__wide-item">
          <a href="#" class="menu-link">Бренды</a>
        </li>
        <li class="header__wide-item">
          <a href="#" class="menu-link">Оплата.доставка</a>
        </li>
        <li class="header__wide-item">
          <a href="#" class="menu-link">Контакты</a>
        </li>
      </ul>
      <div class="header__wide-btns">
        <a class="header__wide-phone" href="tel:+080095690099">0 800 956 900 99</a>
        <a href="#" class="header__wide-search">
          <img src="./assets/img/wide-nav/search.svg" alt="" />
        </a>
        <a href="#" class="header__wide-wishlist">
          <img src="./assets/img/wide-nav/heart.svg" alt="" />
        </a>
        <a href="#" class="header__wide-cart">
          <img src="./assets/img/wide-nav/shopping-cart.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</header>
    `

    document.body.insertAdjacentHTML('afterbegin', header)
}

generateHeader()