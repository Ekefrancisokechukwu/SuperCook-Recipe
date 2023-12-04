"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type FilterType = {};

const FilterContext = createContext<FilterType | null>(null);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  return <FilterContext.Provider value={{}}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (context === null) {
    throw new Error("you can use ");
  }

  return context;
};
export default FilterProvider;
