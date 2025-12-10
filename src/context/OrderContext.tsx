"use client";

import { createContext, useContext, useState } from "react";
import { OrderItem } from "@/modules/order/types";

interface OrderContextType {
  items: OrderItem[];
  total: number;
  totalPrice: number;    // <-- alias
  totalItems: number;
  addItem: (item: OrderItem) => void;
  removeItem: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearOrder: () => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider = ({ children }: any) => {
  const [items, setItems] = useState<OrderItem[]>([]);

  const addItem = (item: OrderItem) => {
    setItems((prev) => {
      const exist = prev.find((i) => i.id === item.id);

      if (exist) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const increaseQty = (id: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };

  const decreaseQty = (id: string) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const clearOrder = () => setItems([]);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalPrice = total; // alias for compatibility
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <OrderContext.Provider
      value={{
        items,
        total,
        totalPrice,
        totalItems,
        addItem,
        removeItem,
        increaseQty,
        decreaseQty,
        clearOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// Hook an toàn
export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used inside <OrderProvider>");
  return ctx;
};

export const useOrderContext = useOrder;
export default OrderContext;
