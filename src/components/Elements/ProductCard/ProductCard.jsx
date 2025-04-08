import { useCart } from "../../../context/CartContext";
import gsap from "gsap";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    animateFlyToCart(e);
    addToCart(product);
  };

  const animateFlyToCart = (e) => {
    const card = e.currentTarget.closest(".card__wrapper");
    const img = card.querySelector("img");
    const cartIcon = document.querySelector(".header__right-icon svg");

    if (!img || !cartIcon) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const clone = img.cloneNode(true);
    clone.style.position = "fixed";
    clone.style.left = `${imgRect.left}px`;
    clone.style.top = `${imgRect.top}px`;
    clone.style.width = `${imgRect.width}px`;
    clone.style.height = `${imgRect.height}px`;
    clone.style.zIndex = 9999;
    clone.style.borderRadius = "8px";
    clone.style.pointerEvents = "none";
    clone.style.objectFit = "contain";

    document.body.appendChild(clone);

    gsap.to(clone, {
      duration: 1,
      ease: "power2.inOut",
      left: cartRect.left + cartRect.width / 2 - imgRect.width / -5,
      top: cartRect.top + cartRect.height / 2 - imgRect.height / 30,
      width: 0,
      height: 0,
      opacity: 0.5,
      onComplete: () => {
        document.body.removeChild(clone);
      },
    });
  };

  return (
    <div className="container">
      <div className="card__wrapper">
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
          <button
            onClick={handleAdd}
            className="custom__btn from-left productCard__btn"
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
