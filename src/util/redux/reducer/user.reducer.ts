import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./root";

interface User {
  isLoggedIn: boolean;
  username: string;
  profile: string;
}

const initialize: User = {
  isLoggedIn: false,
  username: "",
  profile: "",
};

export const UserSlice = createSlice({
  name: "modal",
  initialState: initialize,
  reducers: {
    setLogin: (_state, action: PayloadAction<boolean>) => {
      _state.isLoggedIn = action.payload;
    },
    setUsername: (_state, action: PayloadAction<string>) => {
      _state.username = action.payload;
    },
    setProfile: (_state, action: PayloadAction<string>) => {
      _state.profile = action.payload;
    },
    setUser: (_state, action: PayloadAction<User>) => {
      _state = action.payload;
    },
  },
});

export const { setLogin, setUser, setUsername, setProfile } = UserSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default UserSlice.reducer;
