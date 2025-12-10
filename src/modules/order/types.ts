// modules/order/types.ts

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderPayload {
  items: OrderItem[];
  totalPrice: number;
  note?: string;
  paymentMethod: "cash" | "momo" | "vnpay";
  createdAt: string;
  userId?: string;
}

export interface OrderResponse {
  success: boolean;
  orderId?: string;
  message?: string;
}
