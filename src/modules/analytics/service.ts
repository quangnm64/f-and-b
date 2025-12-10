import { AnalyticsRepository } from "./repository";
import {
  calcTotalOrders,
  calcTotalRevenue,
  calcTopDish,
} from "./utils";

export const AnalyticsService = {
  async getDashboardSummary() {
    const daily = await AnalyticsRepository.getDailyRevenue();
    const bestSeller = await AnalyticsRepository.getBestSellerDishes();
    const reservations = await AnalyticsRepository.getReservationStats();

    return {
      dailyRevenue: daily,
      totalRevenue: calcTotalRevenue(daily),
      totalOrders: calcTotalOrders(daily),
      bestSellerDish: calcTopDish(bestSeller),
      reservationStats: reservations,
    };
  },

  async getDailyRevenue() {
    return await AnalyticsRepository.getDailyRevenue();
  },

  async getBestSellerDishes() {
    return await AnalyticsRepository.getBestSellerDishes();
  },

  async getReservationStats() {
    return await AnalyticsRepository.getReservationStats();
  },
};
