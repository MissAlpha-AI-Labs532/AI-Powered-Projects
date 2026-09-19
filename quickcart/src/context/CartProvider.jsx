import { useMemo, useState } from "react";
import { CartContext } from "./cart-context";

export function CartProvider({ children }) {
  const [items, setItems] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product) => {
    setItems((prev) => {
      const existing = prev[product.id];
      return {
        ...prev,
        [product.id]: {
          product,
          quantity: existing ? existing.quantity + 1 : 1,
        },
      };
    });
  };

  const removeItem = (productId) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  const clearCart = () => setItems({});

  const value = useMemo(() => {
    const list = Object.values(items);
    const count = list.reduce((sum, entry) => sum + entry.quantity, 0);
    const total = list.reduce(
      (sum, entry) => sum + entry.product.price * entry.quantity,
      0,
    );
    return {
      items: list,
      count,
      total,
      isOpen,
      setIsOpen,
      addItem,
      removeItem,
      clearCart,
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
