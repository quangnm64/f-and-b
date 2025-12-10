// app/api/bookings/route.ts
import { NextResponse } from "next/server";

// ===== IN-MEMORY STORAGE =====
// Lưu trong RAM -> reset khi reload server
let bookings: any[] = [];

export async function GET() {
  return NextResponse.json({ success: true, data: bookings });
}

export async function POST(req: Request) {
  const body = await req.json();

  const newBooking = {
    id: Date.now().toString(),
    customerName: body.customerName,
    phone: body.phone,
    people: body.people,
    date: body.date,
    time: body.time,
    note: body.note || "",
    createdAt: new Date(),
  };

  bookings.push(newBooking);

  return NextResponse.json({ success: true, data: newBooking });
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ success: false, message: "Missing id" }, { status: 400 });
  }

  bookings = bookings.filter((b) => b.id !== id);

  return NextResponse.json({ success: true, message: "Deleted" });
}
