"use server";

export const authFetch = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.RECIPE_API_KEY as string,
    },
  });
  return response.json();
};
