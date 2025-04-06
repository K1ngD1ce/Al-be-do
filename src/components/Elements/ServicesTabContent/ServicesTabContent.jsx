import { useState } from "react";
import RequestPrice from "../../Elements/Modal/RequestPrice/RequestPrice";

export default function ServicesTabContent({ img, title, text, isActive }) {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  if (!isActive) return null;

  return (
    <div className="accordion__tabs-content">
      <div className="img__wrapper">
        <img src={img} alt={title} />
      </div>
      <span className="title">{title}</span>
      <div className="text">{text}</div>

      <div className="btn__wrapper">
        <button
          className="custom__btn from-left accordion__tabs-btn"
          onClick={openModal}
        >
          Запросить стоимость
        </button>
      </div>
      {modal && <RequestPrice closeModal={closeModal} />}
    </div>
  );
}
