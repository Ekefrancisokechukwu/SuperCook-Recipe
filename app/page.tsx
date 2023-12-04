"use client";

import Header from "./components/Header";
import RecipeInfo from "./components/recipeInformation/RecipeInfo";
import { useEffect, useState } from "react";
import InfiniteScroll from "./components/recipe/InfiniteScroll";
import Search from "./components/search/Search";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import { useRouter, useSearchParams } from "next/navigation";
import Filters from "./components/filter/Filters";
import { useSearchedRecipes } from "./lib/hook";
import Register from "./components/register/Register";
import { useAppSelector } from "@/redux/store";
import Favourites from "./components/favourite/Favourites";

export default function Home() {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const { data } = useSearchedRecipes(query);
  const isRegister = useAppSelector((state) => state.userState.isRegister);
  const isPopup = useAppSelector((state) => state.favouriteState.isPopup);

  const handleSearch = (query: string) => {
    if (query === "") return;
    router.push(`?query=${query}`);
    updateSearchHistory(query);
  };

  const updateSearchHistory = (query: string) => {
    const updatedHistory = [query, ...searchHistory.slice(0, 5)];
    setSearchHistory(updatedHistory);
    localStorage.setItem("RecipeSearchHistory", JSON.stringify(updatedHistory));
  };

  useEffect(() => {
    const savedHistory = localStorage.getItem("RecipeSearchHistory")?.trim();
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  return (
    <main className="relative scroll-smooth">
      <div className="bg-main-pattern px-7 py-4 pb-6">
        <Header />
        <div className="mt-3">
          <Search
            onSearch={handleSearch}
            updateSearchHistory={updateSearchHistory}
            searchHistory={searchHistory}
          />
        </div>
      </div>

      <RecipeInfo />
      <InfiniteScroll query={query} />
      <ScrollToTopBtn />
      {isRegister && <Register />}
      {isPopup && <Favourites />}
    </main>
  );
}
