import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import coinReducer from "./reducers/walletReducer";

export default configureStore({
  reducer: {
    auth: authReducer,
    coin: coinReducer,
  },
});
