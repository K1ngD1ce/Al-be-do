import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Cart from "../Modal/Cart/Cart";
import SearchLogo from "../../../assets/image/svg/search.svg?react";
import CartLogo from "../../../assets/image/svg/shopping-cart.svg?react";
import LoginLogo from "../../../assets/image/svg/login.svg?react";
import { Link } from "react-router-dom";

export default function Header({ logo }) {
  const [scrolled, setScrolled] = useState();
  const [cart, setCart] = useState(false);
  const { totalQuantity } = useContext(CartContext);

  const showCart = () => setCart(true);
  const closeCart = () => setCart(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 50px — точка, после которой меняем класс
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "fixed" : ""}`}>
        <div className="container container__header">
          <div className="header__left">
            <Link to="/" className="header__logo">
              {logo}
            </Link>
            <ul className="nav">
              <li className="nav__items">
                <a
                  className="nav__items-link link__underline-centerSec"
                  href="#catalog"
                >
                  Каталог
                </a>
              </li>
              <li className="nav__items">
                <a
                  className="nav__items-link link__underline-centerSec"
                  href="#shops"
                >
                  Магазины
                </a>
              </li>
              <li className="nav__items">
                <a
                  className="nav__items-link link__underline-centerSec"
                  href="#gallerySlider"
                >
                  Галерея
                </a>
              </li>
              <li className="nav__items">
                <a
                  className="nav__items-link link__underline-centerSec"
                  href="#services"
                >
                  Услуги
                </a>
              </li>
              <li className="nav__items">
                <a
                  className="nav__items-link link__underline-centerSec"
                  href="#vacancies"
                >
                  Вакансии
                </a>
              </li>
              <li className="nav__items">
                <a
                  className="nav__items-link link__underline-centerSec"
                  href="#order"
                >
                  Заказать
                </a>
              </li>
            </ul>
          </div>

          <div className="header__right-icons">
            <div className="header__right-icon">
              <SearchLogo width="24" height="24" />
            </div>
            <div onClick={showCart} className="header__right-icon cart__icon">
              <CartLogo width="24" height="24" />
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </div>
            <div className="header__right-icon">
              <LoginLogo width="24" height="24" />
            </div>
          </div>
        </div>
      </header>
      {cart && <Cart closeCart={closeCart} />}
    </>
  );
}
