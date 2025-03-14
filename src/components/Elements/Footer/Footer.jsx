import Vkontakte from "../../../assets/image/svg/vk.svg?react";
import Instagram from "../../../assets/image/svg/instagram.svg?react";
import Facebook from "../../../assets/image/svg/fb.svg?react";
import Logo from "../../../assets/image/svg/footerLogo.svg?react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-container">
          <Link to="/" className="footer__logo">
            <Logo />
          </Link>

          <ul className="footer__media-list list-reset">
            <li className="media__list-item">
              <a className="list__item-link" href="/">
                <Vkontakte />
              </a>
            </li>
            <li className="media__list-item">
              <a className="list__item-link" href="/">
                <Instagram />
              </a>
            </li>
            <li className="media__list-item">
              <a className="list__item-link" href="/">
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">Albedo® | 2018-2025</div>
    </footer>
  );
}
