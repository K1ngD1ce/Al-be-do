export default function ProductCardsInfo() {
  return (
    <section className="productCardsInfo">
      <div className="container productCardsInfo__container">
        <div className="productCardsInfo__card blue">
          <div className="productCardsInfo__card-text">
            <span className="productCardsInfo__card-name">Бюст</span>
            <p className="productCardsInfo__card-descr">
              Высота от 20 см до 50 см <br></br>
              <span>(не считая постамент)</span>
            </p>
          </div>
          <div className="productCardsInfo__card-img">
            <img src="src/assets/image/bust1.png" alt="Бюст" />
            <img src="src/assets/image/bust2.png" alt="Бюст" />
          </div>
          <a className="custom__btn from-left productCardsInfo__btn" href="#">
            Ознакомиться
          </a>
        </div>
        <div className="productCardsInfo__card green">
          <div className="productCardsInfo__card-text">
            <span className="productCardsInfo__card-name">Ростовая фигура</span>
            <p className="productCardsInfo__card-descr">
              Высота от 40 см до 220 см <br></br>
              <span>(не считая постамент)</span>
            </p>
          </div>
          <div className="productCardsInfo__card-img">
            <img src="src/assets/image/sculpture1.png" alt="Скульптура" />
            <img src="src/assets/image/sculpture2.png" alt="Скульптура" />
            <img src="src/assets/image/sculpture3.png" alt="Скульптура" />
          </div>
          <a className="custom__btn from-left productCardsInfo__btn" href="#">
            Ознакомиться
          </a>
        </div>
        <div className="productCardsInfo__card pink">
          <div className="productCardsInfo__card-text">
            <span className="productCardsInfo__card-name">Другое</span>
            <p className="productCardsInfo__card-descr">
              Габариты скульптур варьируются{" "}
            </p>
          </div>
          <div className="productCardsInfo__card-img">
            <img src="src/assets/image/figure1.png" alt="Фигура" />
            <img src="src/assets/image/figure2.png" alt="Фигура" />
          </div>
          <a className="custom__btn from-left productCardsInfo__btn" href="#">
            Ознакомиться
          </a>
        </div>
      </div>
    </section>
  );
}
