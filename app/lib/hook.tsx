"use client";

import { authFetch } from "./auth";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { useAppContext } from "@/context/context";

export const useSearchedRecipes = (query: string) => {
  const fetchRecipes = async (page: number) => {
    const perPage = 20;
    const offset = page * perPage;
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=20&number=${perPage}&offset=${offset}`;
    const response = await authFetch(apiUrl);
    return response.json();
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
