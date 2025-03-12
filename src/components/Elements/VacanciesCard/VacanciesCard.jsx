export default function VacanciesCard({ key, title, description, img, color }) {
  return (
    <div id={key} className={`card ${color}`}>
      <div className="card__text">
        <div className="job__title">{title}</div>
        <p className="descr">{description}</p>
      </div>
      <div className="img__wrapper">
        <img src={img} alt={title} />
      </div>
      <div className="btn__wrapper">
        <a className="custom__btn from-left vacancies__btn" href="#">
          Откликнуться
        </a>
      </div>
    </div>
  );
}
