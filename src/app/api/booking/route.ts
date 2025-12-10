import { NextResponse } from "next/server";
import { createBooking } from "@/modules/booking/service";

export async function POST(req: Request) {
  const data = await req.json();
  const result = await createBooking(data);

  return NextResponse.json(result);
}
