"use client";

import { useAppContext } from "@/context/context";
import { RxCross2 } from "react-icons/rx";
import RecipeContainer from "./RecipeContainer";
import { useDetectClickOutside } from "react-detect-click-outside";

const RecipeInfo = () => {
  const { isRecipeOpen, closeRecipeInfo } = useAppContext();
  const ref = useDetectClickOutside({ onTriggered: closeRecipeInfo });

  return (
    <aside
      className={`h-screen sm:w-[30rem] shadow-2xl overflow-y-scroll  transition-transform ease-soft-spring  bg-white fixed top-0 right-0 z-10 ${
        isRecipeOpen ? "translate-x-0" : "translate-x-full"
      }`}
      ref={ref}
    >
      <button
        onClick={closeRecipeInfo}
        className=" w-[2.5rem] h-[2.5rem] grid place-items-center bg-gray-300 rounded-full  absolute  left-4 top-5 z-10"
      >
        <RxCross2 className="text-gray-700 text-3xl" />
      </button>

      <RecipeContainer />
    </aside>
  );
};
export default RecipeInfo;
