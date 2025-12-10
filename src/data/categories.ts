// src/data/categories.ts
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

const categories: Category[] = [
  {
    id: "coffee",
    name: "Cà phê",
    slug: "coffee",
    description: "Các loại cà phê truyền thống và hiện đại",
    image: "/images/categories/coffee.jpg",
  },
  {
    id: "tea",
    name: "Trà",
    slug: "tea",
    description: "Các loại trà trái cây và trà nóng",
    image: "/images/categories/tea.jpg",
  },
  {
    id: "dessert",
    name: "Tráng miệng",
    slug: "dessert",
    description: "Bánh ngọt, mousse, tiramisu và nhiều món khác",
    image: "/images/categories/dessert.jpg",
  },
  {
    id: "juice",
    name: "Nước ép",
    slug: "juice",
    description: "Nước ép trái cây tươi tốt cho sức khoẻ",
    image: "/images/categories/juice.jpg",
  },
  {
    id: "snack",
    name: "Ăn nhẹ",
    slug: "snack",
    description: "Khoai chiên, gà viên, snacks cho bữa xế",
    image: "/images/categories/snack.jpg",
  },
];

export default categories;
