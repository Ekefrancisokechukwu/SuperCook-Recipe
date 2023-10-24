"use client";

import {
  ReactNode,
  ChangeEvent,
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

type AppProviderType = {
  isRecipeOpen: boolean;
  recipeId: number | null;
  searchParams: string;
  openRecipeInfo: (id: number) => void;
  closeRecipeInfo: () => void;
  HandleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  setSearchParams: Dispatch<SetStateAction<string>>;
};

const AppContext = createContext<AppProviderType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isRecipeOpen, setisRecipeOpen] = useState<boolean>(false);
  const [recipeId, setRecipeId] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useState("cake");

  const openRecipeInfo = (id: number) => {
    setisRecipeOpen(true);
    setRecipeId(id);
  };

  const HandleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(e.target.value);
  };

  const closeRecipeInfo = () => {
    setisRecipeOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isRecipeOpen,
        searchParams,
        recipeId,
        HandleSearch,
        openRecipeInfo,
        closeRecipeInfo,
        setSearchParams,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("you can use ");
  }

  return context;
};
export default AppProvider;
