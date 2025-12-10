export const calcTotalRevenue = (items: { totalRevenue: number }[]) => {
  return items.reduce((sum, i) => sum + i.totalRevenue, 0);
};

export const calcTotalOrders = (items: { totalOrders: number }[]) => {
  return items.reduce((sum, i) => sum + i.totalOrders, 0);
};

export const calcTopDish = (
  dishes: { name: string; sold: number }[]
) => {
  return dishes.sort((a, b) => b.sold - a.sold)[0];
};
