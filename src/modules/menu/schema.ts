// modules/menu/schema.ts
import { z } from "zod";

export const createDishSchema = z.object({
  name: z.string().min(2),
  slug: z.string(),
  description: z.string().optional(),
  price: z.number().min(0),
  image: z.string().url(),
  categoryId: z.string(),
  isAvailable: z.boolean().default(true),
});

export type CreateDishInput = z.infer<typeof createDishSchema>;
