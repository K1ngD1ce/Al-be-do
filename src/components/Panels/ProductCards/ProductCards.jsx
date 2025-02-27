export default function ProductCards() {
  return (
    <section className="productCards">
      <div className="container productCards__container">
        <div className="productCards__card blue">
          <div className="productCards__card-text">
            <span className="productCards__card-name">Бюст</span>
            <p className="productCards__card-descr">
              Высота от 20 см до 50 см <br></br>
              <span>(не считая постамент)</span>
            </p>
          </div>
          <div className="productCards__card-img">
            <img src="src/assets/image/bust1.png" alt="Бюст" />
            <img src="src/assets/image/bust2.png" alt="Бюст" />
          </div>
          <a className="custom__btn from-left productCards__btn" href="#">
            Ознакомиться
          </a>
        </div>
        <div className="productCards__card green">
          <div className="productCards__card-text">
            <span className="productCards__card-name">Ростовая фигура</span>
            <p className="productCards__card-descr">
              Высота от 40 см до 220 см <br></br>
              <span>(не считая постамент)</span>
            </p>
          </div>
          <div className="productCards__card-img">
            <img src="src/assets/image/sculpture1.png" alt="Скульптура" />
            <img src="src/assets/image/sculpture2.png" alt="Скульптура" />
            <img src="src/assets/image/sculpture3.png" alt="Скульптура" />
          </div>
          <a className="custom__btn from-left productCards__btn" href="#">
            Ознакомиться
          </a>
        </div>
        <div className="productCards__card pink">
          <div className="productCards__card-text">
            <span className="productCards__card-name">Другое</span>
            <p className="productCards__card-descr">
              Габариты скульптур варьируются{" "}
            </p>
          </div>
          <div className="productCards__card-img">
            <img src="src/assets/image/figure1.png" alt="Фигура" />
            <img src="src/assets/image/figure2.png" alt="Фигура" />
          </div>
          <a className="custom__btn from-left productCards__btn" href="#">
            Ознакомиться
          </a>
        </div>
      </div>
    </section>
  );
}
