import { NextResponse } from "next/server";
import { createOrder } from "@/modules/order/service";

export async function POST(req: Request) {
  const data = await req.json();
  const res = await createOrder(data);
  return NextResponse.json(res);
}
