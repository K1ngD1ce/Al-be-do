import { useEffect, useRef } from "react";
import gsap from "gsap";
import Close from "../../../../assets/image/svg/plus.svg?react";
import Check from "../../../../assets/image/svg/check.svg?react";

export default function RequestPrice({ closeModal }) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    const overlay = overlayRef.current;

    if (modal && overlay) {
      // Анимация появления (выезжает снизу)
      gsap.fromTo(
        modal,
        { y: "100%" },
        { y: "0%", duration: 0.5, ease: "power2.out" }
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
      gsap.to(modal, { y: "100%", duration: 0.5, ease: "power2.in" });

      // Скрытие фона
      gsap.to(overlay, { opacity: 0, duration: 0.5, ease: "power2.in" });
    };
  }, []);

  // Функция для закрытия с анимацией
  const handleClose = () => {
    gsap.to(modalRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        // После завершения анимации скрываем модалку
        closeModal();
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
      <div className="overlay" ref={overlayRef} onClick={handleClose} />
      <div className="modal requestPrice__modal" ref={modalRef}>
        <div className="content">
          <div className="modal__header">
            <div className="close" onClick={handleClose}>
              <button className="close-modal">
                <Close />
              </button>
            </div>
          </div>
          <div className="modal__img-wrapper">
            <img
              src="src/assets/image/modalRequestPrice.jpg"
              alt="Скульптуры"
            />
          </div>
          <div className="modal__text-wrapper container">
            <h2 className="section__title">Запросить стоимость</h2>
            <p className="modal__text-descr">
              Оставьте запрос, и мы свяжемся с вами для уточнения стоимости
              услуги.
            </p>
          </div>
          <div className="modal__form-wtrapper container">
            <form className="form" action="">
              <div className="input__group">
                <input
                  className="input__order"
                  type="text"
                  id="name"
                  required
                />
                <label htmlFor="name">
                  Ваше имя<span>*</span>
                </label>
              </div>

              <div className="input__group">
                <input
                  className="input__order"
                  type="email"
                  id="email"
                  required
                />
                <label htmlFor="email">
                  Email<span>*</span>
                </label>
              </div>

              <div className="input__group">
                <textarea
                  className="input__order"
                  type="text"
                  id="comment"
                  required
                />
                <label htmlFor="comment">
                  Комментарий<span>*</span>
                </label>
              </div>

              <div className="btns__wrapper">
                <a className="custom__btn from-left order__btn" href="#">
                  Оставить заявку
                </a>
                <label className="checkbox__label">
                  <input id="online" type="checkbox" className="checkbox" />
                  <span className="checkbox__item">
                    <Check />
                  </span>
                  <div className="checkbox__descr">
                    Принимаю <a href="/policy"> пользовательское соглашение</a>
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
