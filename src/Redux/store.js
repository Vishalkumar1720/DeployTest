import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import dataReducer from "./settingSlice";

export const store = configureStore({
  reducer: {
    authData: userReducer,
    settingData: dataReducer,
  },
});
