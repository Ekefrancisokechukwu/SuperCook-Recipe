"use client";

import { authFetch } from "./auth";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useSearchedRecipes = (query: string) => {
  const fetchRecipes = async (page: number) => {
    const perPage = 20;
    const offset = page * perPage;
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${perPage}&offset=${offset}&maxFat=20&sort=vitamin-b5&sortDirection=asc`;
    const response = await authFetch(apiUrl);
    return response;
  };

  const { data, fetchNextPage, error, status, isFetching, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["recipe", query],
      queryFn: ({ pageParam = 0 }) => fetchRecipes(pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (lastPage.results.length === 20) {
          return lastPage.offset / 20 + 1;
        }
      },
    });

  return { data, isFetching, status, error, fetchNextPage, hasNextPage };
};
