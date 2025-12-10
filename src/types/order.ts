export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface OrderState {
  items: CartItem[];
}

export interface AddToCartInput {
  id: string;
  name: string;
  price: number;
  image: string;
}
