"use server";

import { authFetch } from "@/app/lib/auth";

export async function getRecipeInfo(id: number | null) {
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/information`;

  try {
    const data = await authFetch(apiUrl);

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
