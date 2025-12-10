"use client";

import { OrderItem } from "@/modules/order/types";
import { createContext, useContext, useState } from "react";

interface OrderContextType {
  items: OrderItem[];
  total: number;
  addItem: (item: OrderItem) => void;
  clearOrder: () => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider = ({ children }: any) => {
  const [items, setItems] = useState<OrderItem[]>([]);

  const addItem = (item: OrderItem) => {
    setItems((prev) => [...prev, item]);
  };

  const clearOrder = () => setItems([]);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <OrderContext.Provider value={{ items, total, addItem, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
export default OrderContext;