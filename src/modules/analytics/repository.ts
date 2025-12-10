import {
  revenueDailyMock,
  bestSellerDishesMock,
  reservationStatsMock,
} from "./mock";

export const AnalyticsRepository = {
  getDailyRevenue: async () => {
    return revenueDailyMock;
  },

  getBestSellerDishes: async () => {
    return bestSellerDishesMock;
  },

  getReservationStats: async () => {
    return reservationStatsMock;
  },
};
