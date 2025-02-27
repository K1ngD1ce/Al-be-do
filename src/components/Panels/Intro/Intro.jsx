export default function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__wrapper">
          <div className="intro__wrapper-text">
            <h1 className="section__title intro__title">Лепная мастерская</h1>
            <p className="intro__descr">
              Создаем скульптуры. Для интерьера и экстерьера
            </p>
            <a className="custom__btn from-left intro__btn" href="#">
              Узнать больше
            </a>
          </div>

          <img src="src/assets/image/1.png" alt="Фигура Лошади" />
        </div>
      </div>
    </section>
  );
}
