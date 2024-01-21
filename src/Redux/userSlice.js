import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setTokens: (state, action) => {
      state.accessToken = action?.payload?.access?.token;
      state.refreshToken = action?.payload?.refresh?.token;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setTokens, logoutUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
