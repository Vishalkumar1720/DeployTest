import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    logo: null,
    companyName: null,
    contactInfo: null,
    address: null,
    email: null,
  },
  reducers: {
    setSettings: (state, action) => {
      state.companyName = action.payload.websiteName;
      // state.contactInfo = action.payload.mobileNumber;
      state.address = action.payload.address;
      state.email = action.payload.email;
    },
  },
});

export const { setSettings } = settingsSlice.actions;
export const selectSettings = (state) => state.settings;
export default settingsSlice.reducer;
