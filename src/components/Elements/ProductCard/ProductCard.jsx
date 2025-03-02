export default function ProductCard({ product }) {
  return (
    <div className="container">
      <div className=" card__wrapper">
        <div className="card__wrapper-img">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="card__wrapper-info">
          <div className="wrapper__info-name">{product.name}</div>

          <div className="wrapper__info-descr">
            <span>{product.size}</span>
            <span>Материал {product.material}</span>
          </div>

          <div className="wrapper__info-price">{product.price} руб</div>
        </div>

        <div className="card__wrapper-btn">
          <a className="custom__btn from-left productCard__btn" href="#">
            В корзину
          </a>
        </div>
      </div>
    </div>
  );
}
