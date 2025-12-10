import { BookingPayload, BookingResponse } from "./types";

export async function createBooking(
  data: BookingPayload
): Promise<BookingResponse> {
  console.log("📌 Booking: ", data);

  return {
    success: true,
    message: "Đặt bàn thành công! Chúng tôi sẽ liên hệ sớm.",
  };
}
