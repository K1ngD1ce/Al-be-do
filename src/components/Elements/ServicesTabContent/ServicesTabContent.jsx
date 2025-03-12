export default function ServicesTabContent({ img, title, text, isActive }) {
  if (!isActive) return null;

  return (
    <div className="accordion__tabs-content">
      <div className="img__wrapper">
        <img src={img} alt={title} />
      </div>
      <span className="title">{title}</span>
      <div className="text">{text}</div>

      <div className="btn__wrapper">
        <a className="custom__btn from-left accordion__tabs-btn" href="#">
          Запросить стоимость
        </a>
      </div>
    </div>
  );
}
