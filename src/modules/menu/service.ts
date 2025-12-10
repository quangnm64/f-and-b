// modules/menu/service.ts

import dishes from "@/data/dishes";
import { Dish, DishDetail } from "./types";
import categories from "@/data/categories";

export const MenuService = {
  getAllCategories: () => {
    return categories;
  },

  getAllDishes: (): Dish[] => {
    return dishes;
  },

  getDishBySlug: (slug: string): DishDetail | null => {
    const target = dishes.find((d) => d.slug === slug);
    return target || null;
  },

  getDishesByCategory: (categoryId: string): Dish[] => {
    return dishes.filter((d) => d.categoryId === categoryId);
  },

  searchDish: (keyword: string): Dish[] => {
    const q = keyword.toLowerCase();
    return dishes.filter((d) => d.name.toLowerCase().includes(q));
  },
};
