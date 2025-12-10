'use server';

import { createBooking } from "./service";
import { bookingSchema } from "./schema";

export async function bookingAction(formData: any) {
  const parse = bookingSchema.safeParse(formData);
  
  if (!parse.success) {
    return { success: false, message: "Dữ liệu không hợp lệ" };
  }

  return await createBooking(parse.data);
  // return {
  //   success: true,
  //   message: "Đặt bàn thành công! Chúng tôi sẽ liên hệ sớm.",
  // };
}
