// modules/order/schema.ts
import { z } from "zod";

export const orderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().min(0),
  qty: z.number().min(1),
  image: z.string(),
});

export const orderPayloadSchema = z.object({
  items: z.array(orderItemSchema).nonempty("Giỏ hàng không được để trống"),
  totalPrice: z.number().min(1000),
  note: z.string().optional(),
  paymentMethod: z.enum(["cash", "momo", "vnpay"]),
  createdAt: z.string(),
  userId: z.string().optional(),
});
