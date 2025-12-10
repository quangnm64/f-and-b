// lib/localStorage.ts

export const saveOrderToLocal = (orderId: string, data: any) => {
  if (typeof window === "undefined") return;

  const existing = localStorage.getItem("orders");
  const orders = existing ? JSON.parse(existing) : [];

  orders.push({ orderId, ...data });

  localStorage.setItem("orders", JSON.stringify(orders));
};

export const getOrdersFromLocal = () => {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem("orders") || "[]");
};
