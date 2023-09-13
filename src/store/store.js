import { configureStore } from "@reduxjs/toolkit";
import NameSlice from "./slices/NameSlice";

export const store = configureStore({
  reducer: {
    name: NameSlice,
  },
});
