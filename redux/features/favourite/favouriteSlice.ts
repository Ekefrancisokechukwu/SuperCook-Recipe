import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TFavourite = {
  favourites: Recipes[];
  isFavourite: boolean;
  isPopup: boolean;
};

const initialState: TFavourite = {
  favourites: [],
  isFavourite: false,
  isPopup: false,
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<Recipes>) => {
      const product = action.payload;
      const item = state.favourites.find((item) => item.id === product.id);

      if (item) {
        state.favourites = state.favourites.filter(
          (prod) => prod.id !== item.id
        );
      } else {
        state.favourites.unshift(product);
      }
    },
    openPopup: (state) => {
      state.isPopup = true;
    },
    closePopup: (state) => {
      state.isPopup = false;
    },
  },
});

export const { toggleFavourite, closePopup, openPopup } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
