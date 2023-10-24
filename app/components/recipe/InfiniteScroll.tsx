/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { LegacyRef, useEffect } from "react";
import { BiSolidMessageAltError } from "react-icons/bi";
import SpinnerLoader from "../ui/SpinnerLoader";
import SingleRecipe from "./SingleRecipe";
import { useSearchedRecipes } from "@/app/lib/hook";
import { useAppContext } from "@/context/context";
import { useInView } from "react-intersection-observer";

type Props = {
  query: string;
};

const InfiniteScroll = ({ query = "banane" }: Props) => {
  const { data, fetchNextPage, isFetching, status, hasNextPage } =
    useSearchedRecipes(query);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  if (status === "error") {
    return (
      <>
        <div className="grid place-items-center h-[70vh]">
          <div className="text-center">
            <h2 className="animate-bounce text-rose-700 text-3xl">
              <BiSolidMessageAltError />
            </h2>
            <h5 className="text-base text-gray-700">
              Oops: Something went wrong
            </h5>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl -mt-2 z-10 px-7 py-4 ">
        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="grid grid-cols-2 gap-4">
            {page.results.map((recipe: Recipes, i: number) => (
              <SingleRecipe key={i} recipe={recipe} innerRef={ref} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center py-2">
        {isFetching ? (
          <SpinnerLoader />
        ) : hasNextPage ? null : (
          <p>No more recipes</p>
        )}
      </div>
    </>
  );
};

export default InfiniteScroll;
