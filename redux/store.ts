import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import favouriteReducer from "./features/favourite/favouriteSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    favouriteState: favouriteReducer,
  },
});

// TypeScript redux setup;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
