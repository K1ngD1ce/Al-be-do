import Search from "../../../assets/image/svg/search.svg?react";
import Cart from "../../../assets/image/svg/shopping-cart.svg?react";
import Login from "../../../assets/image/svg/login.svg?react";

export default function Header({ logo }) {
  return (
    <header className="header">
      <div className="container container__header">
        <div className="header__left">
          <a href="/" className="header__logo">
            {logo}
          </a>
          <ul className="nav">
            <li className="nav__items">
              <a className="nav__items-link" href="#catalog">
                Каталог
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__items-link" href="#shops">
                Магазины
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__items-link" href="#gallerySlider">
                Галерея
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__items-link" href="#services">
                Услуги
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__items-link" href="#vacancies">
                Вакансии
              </a>
            </li>
            <li className="nav__items">
              <a className="nav__items-link" href="#order">
                Заказать
              </a>
            </li>
          </ul>
        </div>

        <div className="header__right-icons">
          <a className="header__right-icon" href="/">
            <Search width="24" height="24" />
          </a>
          <a className="header__right-icon" href="/">
            <Cart width="24" height="24" />
          </a>
          <a className="header__right-icon" href="/">
            <Login width="24" height="24" />
          </a>
        </div>
      </div>
    </header>
  );
}
