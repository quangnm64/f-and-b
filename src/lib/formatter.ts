// lib/formatter.ts

// =========================
// Format tiền VNĐ
// =========================
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);
};

// =========================
// Format ngày dd/mm/yyyy
// =========================
export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleDateString("vi-VN");
};

// =========================
// Format giờ HH:mm
// =========================
export const formatTime = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
};

// =========================
// Format ngày + giờ
// =========================
export const formatDateTime = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

// =========================
// Format số lượng (1,234)
// =========================
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("vi-VN").format(value);
};
