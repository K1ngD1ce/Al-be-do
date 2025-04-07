import { useEffect, useRef } from "react";
import gsap from "gsap";
import Close from "../../../assets/image/svg/plus.svg?react";
import CartLogo from "../../../assets/image/svg/shopping-cart.svg?react";

export default function CartNotification({ product, onClose }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: 300 }, // Начальная позиция: за пределами экрана справа
      { opacity: 1, x: 0, duration: 0.5 } // Конечное положение: на экране
    );

    // Убираем карточку через 3 секунды
    const timer = setTimeout(() => {
      gsap.to(cardRef.current, {
        opacity: 0,
        x: -300,
        duration: 0.5,
        onComplete: onClose,
      });
    }, 3000);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, [onClose]);

  return (
    <div className="notification" ref={cardRef}>
      <button className="close" onClick={onClose}>
        <Close />
      </button>

      <div className="notification__img--wrapper">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="notification__text--wrapper">
        <div className="notification__text--title">
          <CartLogo />
          добавлен в корзину
        </div>
        <div className="notification__text--nameProduct">{product.name}</div>
        <div className="notification__text--sizeProduct">{product.size}</div>
        <div className="notification__text--priceProduct">
          {product.price} руб
        </div>
      </div>
    </div>
  );
}
