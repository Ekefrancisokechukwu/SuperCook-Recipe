"use client";

import Header from "./components/Header";
import RecipeInfo from "./components/recipeInformation/RecipeInfo";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAppContext } from "@/context/context";
import InfiniteScroll from "./components/recipe/InfiniteScroll";
import Search from "./components/search/Search";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import { useSearchedRecipes } from "./lib/hook";

export default function Home() {
  const { searchParams } = useAppContext();
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearch = () => {
    if (searchParams === "") return;
    updateSearchHistory(searchParams);
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
      <InfiniteScroll query={""} />
      <ScrollToTopBtn />
    </main>
  );
}
