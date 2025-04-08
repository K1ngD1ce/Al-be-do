import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useState,
} from "react";
import CartNotification from "../components/Elements/CartNotification/CartNofifiation";

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    case "INCREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREMENT_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  const [notification, setNotification] = useState(null);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });

    setNotification({ product: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const increment = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
  };

  const decrement = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
  };

  const totalQuantity = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        totalQuantity,
      }}
    >
      {children}
      {notification && (
        <CartNotification
          product={notification.product}
          onClose={closeNotification}
        />
      )}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
