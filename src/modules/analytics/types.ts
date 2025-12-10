export interface RevenueDaily {
  date: string;          // 2025-01-10
  totalRevenue: number;
  totalOrders: number;
}

export interface BestSellerDish {
  id: number;
  name: string;
  image: string;
  sold: number;
  revenue: number;
}

export interface ReservationStats {
  date: string;
  totalReservations: number;
}
