"use client";

import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AppProviderType = {
  isRecipeOpen: boolean;

  recipeId: number | null;
  openRecipeInfo: (id: number) => void;
  closeRecipeInfo: () => void;
};

const AppContext = createContext<AppProviderType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isRecipeOpen, setisRecipeOpen] = useState<boolean>(false);
  const [recipeId, setRecipeId] = useState<number | null>(null);

  const openRecipeInfo = (id: number) => {
    setisRecipeOpen(true);
    setRecipeId(id);
  };

  const closeRecipeInfo = () => {
    setisRecipeOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isRecipeOpen,
        recipeId,
        openRecipeInfo,

        closeRecipeInfo,
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
