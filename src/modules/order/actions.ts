// modules/order/actions.ts
"use server";

import { orderPayloadSchema } from "./schema";
import { submitOrder } from "./service";
import { OrderResponse } from "./types";

export async function createOrderAction(formData: FormData): Promise<OrderResponse> {
  try {
    const raw = formData.get("payload") as string;
    const payload = JSON.parse(raw);

    const parsed = orderPayloadSchema.parse(payload);

    const response = await submitOrder(parsed);

    return response;
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Đã có lỗi xảy ra",
    };
  }
}
