import Close from "../../../../assets/image/svg/plus.svg?react";
import Plus from "../../../../assets/image/svg/plus.svg?react";
import Minus from "../../../../assets/image/svg/minus.svg?react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cart({ closeCart }) {
  const [count, setCount] = useState(1);
  const cartRef = useRef(null);
  const overlayRef = useRef(null);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const deccrement = () => setCount((prevCount) => prevCount - 1);

  useEffect(() => {
    const cart = cartRef.current;
    const overlay = overlayRef.current;

    if (cart && overlay) {
      // Анимация появления (выезжает снизу)
      gsap.fromTo(
        cart,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power2.out" }
      );

      // Плавное затемнение фона
      gsap.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }

    return () => {
      // Анимация скрытия модалки (уходит вниз)
      gsap.to(cart, { y: "100%", duration: 0.5, ease: "power2.in" });

      // Скрытие фона
      gsap.to(overlay, { opacity: 0, duration: 0.5, ease: "power2.in" });
    };
  }, []);

  // Функция для закрытия с анимацией
  const handleClose = () => {
    gsap.to(cartRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        // После завершения анимации скрываем модалку
        closeCart();
      },
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    });
  };

  return (
    <>
      <div onClick={handleClose} className="overlay" ref={overlayRef}></div>
      <div className="cart" ref={cartRef}>
        <div className="close">
          <button onClick={handleClose} className="close-modal">
            <Close />
          </button>
        </div>
        <div className="content">
          <div className="cart__header">
            <h2>Корзина</h2>
            <span className="cart__count--item">(1)</span>
          </div>
          <div className="cart__body">
            <div className="cart__product">
              <div className="product__delete--icon">
                <Close />
              </div>
              <div className="product__img--wrapper">
                <img
                  src="/src/assets/image/products/busts/1.png"
                  alt="Бюст А-315"
                />
              </div>

              <div className="product__info">
                <div className="product__descr">
                  <span className="product__name">Бюст А-315</span>
                  <span className="product__price">1600 руб</span>
                </div>

                <div className="product__quantity--wrapper">
                  <button
                    onClick={deccrement}
                    className="product__quantity--btn minus"
                    disabled={count === 1}
                  >
                    <Minus />
                  </button>
                  <span className="product__quantity">{count}</span>
                  <button
                    onClick={increment}
                    className="product__quantity--btn plus"
                  >
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom--subtotal">
              <span>Итого</span>
              <span>3 800 руб</span>
            </div>
            <div className="cart__bottom--btn">
              <button className="custom__btn from-left checkout__btn">
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
