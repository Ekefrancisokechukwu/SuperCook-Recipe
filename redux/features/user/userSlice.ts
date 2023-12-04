import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  username: string;
  email: string;
  password: string;
};

interface UserState {
  user: null | User;
  isLoginForm: boolean;
  isRegister: boolean;
}

const initialState: UserState = {
  user: null,
  isLoginForm: true,
  isRegister: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    openRegiter: (state) => {
      state.isRegister = true;
    },
    CloseRegiter: (state) => {
      state.isRegister = false;
    },
    toggleForms: (state) => {
      state.isLoginForm = !state.isLoginForm;
    },
    loginUser: (state, action: PayloadAction<User>) => {
      console.log(action.payload);
    },
    logoutUser: (state) => {
      state.user = null
    },
  },
});

export const { toggleForms, logoutUser, openRegiter, CloseRegiter, loginUser } =
  userSlice.actions;
export default userSlice.reducer;
