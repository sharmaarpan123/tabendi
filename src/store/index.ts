import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/Auth/authSlice";
import socketSlice from "./slices/socket/socketSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    socket: socketSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NEXT_PUBLIC_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;
