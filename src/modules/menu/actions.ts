// modules/menu/actions.ts

"use server";

import { revalidatePath } from "next/cache";
import { MenuService } from "./service";
import { createDishSchema } from "./schema";

export async function searchDishAction(keyword: string) {
  return MenuService.searchDish(keyword);
}

export async function getDishDetailAction(slug: string) {
  return MenuService.getDishBySlug(slug);
}

// Create dish (demo)
export async function createDishAction(input: any) {
  const parsed = createDishSchema.safeParse(input);

  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten() };
  }

  // TODO: save to db
  console.log("Creating dish:", parsed.data);

  // Revalidate
  revalidatePath("/menu");

  return { success: true };
}
