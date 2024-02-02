import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "../app/layout/layoutSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});
