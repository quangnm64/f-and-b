// modules/order/service.ts

import { saveOrderToLocal } from "@/lib/localStorage";
import { OrderItem, OrderPayload, OrderResponse } from "./types";

export const calculateTotal = (items: OrderItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
};

export const buildOrderPayload = (items: OrderItem[], note: string, paymentMethod: "cash" | "momo" | "vnpay", userId?: string): OrderPayload => {
  return {
    items,
    totalPrice: calculateTotal(items),
    note,
    paymentMethod,
    userId,
    createdAt: new Date().toISOString(),
  };
};

export const submitOrder = async (payload: OrderPayload): Promise<OrderResponse> => {
  console.log("🔗 Đang gửi đơn hàng tới API...", payload);

  await new Promise((res) => setTimeout(res, 900));

  // Simulate success
  const fakeOrderId = "ORD" + new Date().getTime();

  saveOrderToLocal(fakeOrderId, payload);

  return {
    success: true,
    orderId: fakeOrderId,
    message: "Đặt đơn thành công!",
  };
};
