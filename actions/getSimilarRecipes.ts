"use server";

import { authFetch } from "@/app/lib/auth";

export async function getSimilarRecipe(id: number | null) {
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar`;

  try {
    const response = await authFetch(apiUrl);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
