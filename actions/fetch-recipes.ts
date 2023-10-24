"use server";

import { authFetch } from "@/app/lib/auth";

export async function fetchSearchRecipes(
  perpage: number,
  offSet = 0,
  params: string
) {
  try {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${params}&maxFat=20&number=${perpage}&offset=${offSet}`;
    const response = await authFetch(apiUrl);
    const data = await response.json();
    console.log(apiUrl, "yes milk");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
