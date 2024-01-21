// utils/reduxUtils.js
import { useSelector } from "react-redux";

export const getSettingData = () => {
  return useSelector((state) => state.settingData);
};
export const getAuthData = () => {
  return useSelector((state) => state.authData);
};
