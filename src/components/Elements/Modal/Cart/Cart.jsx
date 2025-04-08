import Close from "../../../../assets/image/svg/plus.svg?react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProductCart from "../../ProductCart/ProductCart";
import { useCart } from "../../../../context/CartContext";

export default function Cart({ closeCart }) {
  const cartRef = useRef(null);
  const overlayRef = useRef(null);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
            <span className="cart__count--item">({totalItems})</span>
          </div>
          <div className="cart__body">
            {cartItems.length === 0 ? (
              <div className="empty-cart-message">
                <p>
                  Сейчас в корзине <br></br>ничего нет...
                </p>
                <span>
                  посмотрите наш каталог или воспользуйтесь поиском, если ищете
                  что-то конкретное
                </span>
              </div>
            ) : (
              cartItems.map((item) => (
                <ProductCart key={item.id} product={item} />
              ))
            )}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom--subtotal">
              <span>Итого</span>
              <span>{total} руб</span>
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
