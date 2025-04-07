import Close from "../../../assets/image/svg/plus.svg?react";
import Plus from "../../../assets/image/svg/plus.svg?react";
import Minus from "../../../assets/image/svg/minus.svg?react";
import { useCart } from "../../../context/CartContext";

export default function ProductCart({ product }) {
  const { increment, decrement, removeFromCart } = useCart();

  return (
    <div className="cart__product">
      <div
        onClick={() => removeFromCart(product.id)}
        className="product__delete--icon"
      >
        <Close />
      </div>
      <div className="product__img--wrapper">
        <img src={product.img} alt="Бюст А-315" />
      </div>

      <div className="product__info">
        <div className="product__descr">
          <span className="product__name">{product.name}</span>
          <span className="product__price">{product.price} руб</span>
        </div>

        <div className="product__quantity--wrapper">
          <button
            onClick={() => decrement(product.id)}
            disabled={product.quantity === 1}
            className="product__quantity--btn minus"
          >
            <Minus />
          </button>
          <span className="product__quantity">{product.quantity}</span>
          <button
            onClick={() => increment(product.id)}
            className="product__quantity--btn plus"
          >
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
}
