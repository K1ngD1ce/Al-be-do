import Check from "../../../assets/image/svg/check.svg?react";
import Telegram from "../../../assets/image/svg/telegram.svg?react";
import Whatsapp from "../../../assets/image/svg/whatsapp.svg?react";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <section id="order" className="order">
      <div className="container">
        <h6 className="section__title">Заказать</h6>

        <div className="order__wrapper">
          <div className="form__wrapper">
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
                  type="tel"
                  id="phone"
                  required
                />
                <label htmlFor="phone">
                  Телефон<span>*</span>
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

              <div className="btns__wrapper">
                <a className="custom__btn from-left order__btn" href="#">
                  Оставить заявку
                </a>
                <label className="checkbox__label">
                  <input id="online" type="checkbox" className="checkbox" />
                  <span className="checkbox__item">
                    <Check width="10" height="7" />
                  </span>
                  <div className="checkbox__descr">
                    Принимаю{" "}
                    <Link to="/policy"> пользовательское соглашение</Link>
                  </div>
                </label>

                <ul className="list-reset media__list">
                  <li>
                    <a className="media__list-link telegram__link" href="#">
                      <Telegram />
                    </a>
                  </li>
                  <li>
                    <a className="media__list-link whatsapp__link" href="#">
                      <Whatsapp />
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>

          <div className="image__wrapper">
            <img src="src/assets/image/dragon.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
