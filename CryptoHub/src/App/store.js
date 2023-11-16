import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/cryptoApi";
import { cryptoReducer, cryptoMiddleware } from "../Services/cryptoApi";
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoMiddleware),
});
