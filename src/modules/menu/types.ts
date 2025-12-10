// modules/menu/types.ts

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface Dish {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  isAvailable: boolean;
  tags?: string[];
}

export interface DishDetail extends Dish {
  gallery?: string[];
  ingredients?: string[];
  calories?: number;
}
