"use server";
import axios from "axios";

export const authFetch = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.RECIPE_API_KEY as string,
    },
  });
  return response.json();
};

const productionUrl =
  " https://strapi-store-server.onrender.com/api/auth/local/register";

export const customUser = axios.create({
  baseURL: productionUrl,
});
