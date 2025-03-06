import Phone from "../../../assets/image/svg/phone.svg?react";
import Email from "../../../assets/image/svg/mail.svg?react";
import Map from "../../Elements/Map/Map";

export default function ShopsContent({ city }) {
  if (!city) {
    return <div>Loading...</div>; // Временно показываем "Загрузка", пока city не будет определен
  }

  return (
    <div className="shops__content-wrapper">
      <div className="img__wrapper">
        <img src={city.image} alt={`shop ${city.city}`} />
      </div>

      <div className="info__wrapper">
        <div className="info__wrapper-text">
          <h4 className="section__title shops__info-title">{city.title}</h4>
          <span className="shops__info-address">
            {city.address || "Не указано"} {/* Адрес можно добавить в JSON */}
          </span>
          <span className="shops__info-descr">{city.description}</span>
        </div>

        <div className="info__wrapper-map">
          <Map city={city} /> {/* Передаем данные о городе в Map */}
        </div>

        <div className="info__wrapper-contacts">
          <a className="phone" href={`tel:${city.phone}`}>
            <Phone />
            {city.phone}
          </a>
          <a className="email" href={`mailto:${city.email}`}>
            <Email />
            {city.email}
          </a>
        </div>
      </div>
    </div>
  );
}
